export type Subject = string;
export type Term = any;
export type Rule = [Subject, Operator, Term];
export type Quantifiers = 'all' | 'any';
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nin';
export type Rules = (Rule | RuleGroup)[];
export type RuleGroup = { all?: Rules, any?: Rules };
export type Facts = Record<string, any>;
export type Plugin = (PluginArgs) => ProcessResult;
export type PluginArgs = {
  pass: boolean;
  facts?: Facts;
  rule: Rule | RuleGroup;
  group?: any;
};
export interface ProcessArgs extends PluginArgs {
  plugins: Plugin[];
}
export interface ProcessResult extends Facts {
  pass: boolean;
}

export const operators = [
  'eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'has', 'nhas', 'in', 'nin'
] as Operator[];

export function isGroup(testRule: Rule | RuleGroup): boolean {
  const { all, any } = testRule as RuleGroup;
  if (all || any) return true;
  return false;
}

export const verbosePlugin = ({ pass, rule, group }: PluginArgs) => ({ pass, rule, group });

export const processResult = ({ pass, facts, rule, group, plugins = [] as Plugin[] }: ProcessArgs): ProcessResult => (
  plugins.reduce((pluginResult, plugin) => ({ ...pluginResult, ...(plugin({ pass, facts, rule, group }) || {}) }), { pass })
)

export function processRule(facts = {} as Facts, rule: Rule | RuleGroup, plugins = [] as Plugin[]): ProcessResult {
  if (isGroup(rule)) return processGroup(facts, rule as RuleGroup, plugins);
  const [field, op, term] = rule as Rule;
  const factValue = facts[field];
  const ruleResult = { pass: false } as PluginArgs;

  if (op === 'has' || op === 'nhas') {
    if (['number', 'bigint', 'symbol', 'undefined'].includes(typeof factValue)) return { pass: false };
    const pass = factValue.includes(term);
    ruleResult.pass = (op === 'nhas') ? !pass : pass;
  }

  if (op === 'in' || op === 'nin') {
    const isArray = term && Array.isArray(term);
    const valueType = typeof term;
    if (isArray || ['string', 'object'].includes(valueType)) {
      ruleResult.pass = term.includes(factValue);
    }
  }

  if (op === 'eq') {
    ruleResult.pass = factValue === term;
  }
  if (op === 'neq') {
    ruleResult.pass = factValue !== term;
  }
  if (op === 'gt') {
    ruleResult.pass = factValue > term;
  }
  if (op === 'gte') {
    ruleResult.pass = factValue >= term;
  }
  if (op === 'lt') {
    ruleResult.pass = factValue < term;
  }
  if (op === 'lte') {
    ruleResult.pass = factValue <= term;
  }

  return processResult({
    ...ruleResult, rule, facts, plugins
  } as ProcessArgs);
}

export function processGroup(facts = {} as Facts, ruleGroup: RuleGroup, plugins = [] as Plugin[]): ProcessResult {
  const { all, any } = ruleGroup;
  const action = rule => processRule(facts, rule, plugins);
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
  console.error('Invalid RuleGroup interpreting', JSON.stringify(ruleGroup, null, 2));
  return { pass: false };
}

export const processVerbose = (facts = null as Facts, ruleGroup: RuleGroup, plugins = [] as Plugin[]) => (
  processGroup(facts, ruleGroup, [verbosePlugin, ...plugins])
);

export class ICRules {
  facts: Facts;

  constructor(facts = {} as Facts) {
    if (facts) {
      this.facts = facts;
    }
  }

  setFacts = (facts = {} as Facts) => {
    this.facts = facts;
  }

  exec = (ruleGroup: RuleGroup, plugins = [] as Plugin[]) => processGroup(this.facts, ruleGroup, plugins);

  static process = processGroup;

  static processVerbose = processVerbose;

}

export default ICRules;
