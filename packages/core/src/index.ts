export type Subject = string;
export type Term = any;
export type Rule = [Subject, Operator, Term];
export type Quantifiers = 'all' | 'any';
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nit' | string;
export type Rules = (Rule | RuleGroup)[];
export type RuleGroup = { all?: Rules, any?: Rules };
export type Facts = Record<string, any> | Record<string, any>[];
export type ResultPlugin = (args: PluginArgs) => ProcessResult;
export type OperatorPlugin = Record<string, (args: OperatorFuncArgs) => boolean>;
export type OperatorFuncArgs = {
  value: any;
  term: any;
}
export type PluginArgs = {
  pass: boolean;
  rule: Rule | RuleGroup;
  facts?: Facts;
  group?: any;
};
export interface ProcessArgs extends PluginArgs { plugins: ResultPlugin[] }
export interface ProcessResult extends Record<string, any> { pass: boolean }
export interface RuleEvaluation { isValid: boolean; message?: string; }
export interface Options {
  plugins?: ResultPlugin[];
  operators?: OperatorPlugin;
}
export type ValueType = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array';
export const internalOperatorValues: Operator[] = ['eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'has', 'nhas', 'in', 'nit'];

const defaultDelimiter = '.';

export function isGroup(testRule: Rule | RuleGroup = {}): boolean {
  const { all, any } = testRule as RuleGroup;
  if (all || any) return true;
  return false;
}

export function flattenKeys(obj: any, prefix = '', delimiter = '.'): Record<string, any> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      return { ...acc, ...flattenKeys(value, `${prefix}${key}${delimiter}`) };
    }
    return { ...acc, [`${prefix}${key}`]: value };
  }, {})
}

export const processResult = ({ pass, facts, rule, group, plugins = [] as ResultPlugin[] }: ProcessArgs): ProcessResult => (
  plugins.reduce((pluginResult, plugin) => ({ ...pluginResult, ...(plugin({ pass, facts, rule, group }) || {}) }), { pass })
)

const in_nit = (operator: Operator) => ({ value, term }) => {
  if (Array.isArray(term) || ['string', 'object'].includes(typeof term)) {
    const pass = term.includes(value);
    return operator === 'in' ? pass : !pass;
  }
  return false;
}

const has_nhas = (operator: Operator) => ({ value, term }) => {
  if (['number', 'bigint', 'symbol', 'undefined'].includes(typeof value)) return false;
  const pass = value.includes(term);
  return (operator === 'has') ? pass : !pass;
}

export const internalOperators = {
  eq: ({ value, term }) => value === term,
  neq: ({ value, term }) => value !== term,
  gt: ({ value, term }) => value > term,
  gte: ({ value, term }) => value >= term,
  lt: ({ value, term }) => value < term,
  lte: ({ value, term }) => value <= term,
  in: in_nit('in'),
  nit: in_nit('nit'),
  has: has_nhas('has'),
  nhas: has_nhas('nhas')
} as OperatorPlugin;

export function processRuleOrGroup(facts: Facts = {}, rule: Rule | RuleGroup, options: Options = {}): ProcessResult {
  const { plugins = [], operators = {} } = options;
  if (isGroup(rule)) return processGroup(facts, rule as RuleGroup, { plugins });

  const [subject, op, term] = rule as Rule;
  if (subject === null || subject === undefined || !op) {
    throw new Error(`Invalid Rule\n${JSON.stringify(rule, null, 2)}`);
  }

  const ruleResult = { pass: false } as PluginArgs;
  const value = facts?.[subject];
  const valueType = typeof value as ValueType;
  const termIsObject = typeof term == 'object';
  const termIsRule = termIsObject && isGroup(term);
  const factQuery = {
    value,
    type: valueType,
    queryFields: null
  }

  // if fields contain dot refs, let's see if there's an object to query
  if (subject.indexOf(defaultDelimiter) > 0) {
    const flatFacts = flattenKeys(facts);
    const queryValue = flatFacts[subject];
    const objType = typeof queryValue;
    if (queryValue) {
      factQuery.value = queryValue;
      factQuery.type = Array.isArray(queryValue) ? 'array' : objType;
    }
  }

  if (termIsRule) {
    // TODO: implement nested rule processing against fact leaves
  }

  const isNumeric = factQuery.type === 'bigint' || factQuery.type === 'number';
  const termValue = isNumeric ? parseInt(term, 10) : term;
  const factValue = factQuery.value;

  if (internalOperators[op]) {
    ruleResult.pass = internalOperators[op]({ value: factValue, term: termValue });
  }

  // evaluate users operators; which can override internal operators 
  if (operators[op]) {
    ruleResult.pass = operators[op]({ value: factValue, term: termValue });
  }

  return processResult({
    ...ruleResult, rule, facts, plugins
  } as ProcessArgs);
}

/**
 * 
 * Here is sample of what constructing a rule manually against a small set of facts would look like in javascript
 * 
 * ```ts
 *   import { processRules } from '@icrules/core';
 * 
 *   const facts = { 
 *     market: 'en-US', 
 *     color: 'blue', 
 *     diameter: 10 
 *   };
 * 
 *   const rules = { 
 *     any: [
 *       ['market', 'eq', 'en-US'], 
 *       ['diameter', 'gt', 5]
 *     ] 
 *   };
 * 
 *   const result = processRules(facts, rules);
 *   
 *   if(results.pass){
 *     // do the thing that needs done
 *   }
 *  
 * ```
 */
export function processGroup(facts: Facts = {}, ruleGroup: RuleGroup = {}, options: Options = {}): ProcessResult {
  const { all, any } = ruleGroup;
  const { plugins = [] } = options;
  const action = rule => processRuleOrGroup(facts, rule, options);

  if (all) {
    const groupResult = all.map(action);
    const pass = groupResult.every(r => r.pass);
    return processResult({ pass, rule: ruleGroup, facts, plugins, group: { all: groupResult, pass } });
  }

  if (any) {
    const groupResult = any.map(action);
    const pass = groupResult.some(r => r.pass);
    return processResult({ pass, rule: ruleGroup, facts, plugins, group: { any: groupResult, pass } });
  }

  throw new Error(`Invalid RuleGroup\n${JSON.stringify(ruleGroup, null, 2)}`,);
}

export const verbosePlugin = ({ pass, rule, group }: PluginArgs) => ({ pass, rule, group });

export const processVerbose = (facts: Facts = {}, ruleGroup: RuleGroup, plugins: ResultPlugin[] = []) => (
  processGroup(facts, ruleGroup, { plugins: [verbosePlugin, ...plugins] })
);

export function validateRule(ruleGroup = {} as RuleGroup): RuleEvaluation {
  const isValid = false;
  if (!ruleGroup) return ({
    isValid,
    message: 'No Rule Group Found'
  });
  const { all, any } = ruleGroup;

  const validateRuleSet = (rules: Rules) => {
    if (rules.length === 0) return ({
      isValid,
      message: 'No Rule Group Found'
    });
    for (let ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
      const ruleGroup = rules[ruleIndex] as RuleGroup;
      if (ruleGroup?.all || ruleGroup?.any) {
        return validateRule(ruleGroup);
      }

      const rule = ruleGroup as Rule;
      if (!Array.isArray(rule) || rule.length < 2) return ({
        isValid,
        message: 'No Rule Group Found'
      });

      const [field, op] = rule;
      if (!field || !op) return ({
        isValid,
        message: 'Invalid Rule'
      })
      if (!internalOperatorValues.includes(op)) return ({
        isValid,
        message: 'Invalid Operator'
      });
    }
    return {
      isValid: true
    };
  }

  if (all || any) {
    return validateRuleSet(all || any);
  }

  return ({
    isValid,
    message: 'No Quantifiers (all|any) Found'
  });
}

/*
```

```
*/
export const processRules = processGroup;

export default processRules;
