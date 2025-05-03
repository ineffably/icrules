/**
 * @module @icrules/core
 * 
 * ICRules Core - A small and extensible rules engine with a compact JSON footprint.
 * 
 * This module provides the foundation for creating, validating, and processing rules
 * against a set of facts. It supports boolean logic with 'all' (AND) and 'any' (OR)
 * conditions, custom operators, and extensibility through plugins.
 * 
 * Basic usage:
 * ```typescript
 * import processRules from '@icrules/core';
 * 
 * const facts = { age: 25, role: 'admin' };
 * const rules = {
 *   all: [
 *     ['age', 'gte', 18],
 *     ['role', 'eq', 'admin']
 *   ]
 * };
 * 
 * const result = processRules(facts, rules);
 * console.log(result.pass); // true
 * ```
 */

import { memoize } from './library/memoize';

/** The subject/key to evaluate in the facts object */
export type Subject = string;

/** The value to compare against */
export type Term = any;

/** A single rule consisting of [subject, operator, term] */
export type Rule = [Subject, Operator, Term];

/** The available quantifiers for rule groups */
export type Quantifiers = 'all' | 'any';

/** 
 * The operators used to compare values
 * - 'eq': Equal (===)
 * - 'neq': Not equal (!==)
 * - 'gt': Greater than (>)
 * - 'lt': Less than (<)
 * - 'gte': Greater than or equal (>=)
 * - 'lte': Less than or equal (<=)
 * - 'has': Contains value (includes)
 * - 'nhas': Does not contain value (!includes)
 * - 'in': Value is in array/string/object (is included)
 * - 'nit': Value is not in array/string/object (is not included)
 */
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nit' | string;

/** An array of rules and/or rule groups */
export type Rules = (Rule | RuleGroup)[];

/**
 * A group of rules with a logical operator (all/any)
 * - all: All rules must pass (AND)
 * - any: At least one rule must pass (OR)
 */
export type RuleGroup = { all?: Rules, any?: Rules };

/** The data to evaluate rules against */
export type Facts = Record<string, any> | Record<string, any>[];

/** 
 * A function that processes rule results, used for creating plugins
 * @param args Arguments containing rule processing information
 * @returns A ProcessResult object
 */
export type ResultPlugin = (args: PluginArgs) => ProcessResult;

/** 
 * A map of custom operators and their implementation functions
 */
export type OperatorPlugin = Record<string, (args: OperatorFuncArgs) => boolean>;

/**
 * Arguments passed to operator functions
 */
export type OperatorFuncArgs = {
  /** The value from the facts object */
  value: any;
  /** The term to compare against */
  term: any;
}

/**
 * Arguments passed to result plugins
 */
export type PluginArgs = {
  /** Whether the rule passed */
  pass: boolean;
  /** The rule or rule group being processed */
  rule: Rule | RuleGroup;
  /** The facts being evaluated */
  facts?: Facts;
  /** The result of group processing */
  group?: any;
};

/**
 * Arguments for the process function
 */
export interface ProcessArgs extends PluginArgs { 
  /** The plugins to use for processing */
  plugins: ResultPlugin[] 
}

/**
 * The result of processing a rule or rule group
 */
export interface ProcessResult extends Record<string, any> { 
  /** Whether the rule or rule group passed */
  pass: boolean 
}

/**
 * The result of validating a rule or rule group
 */
export interface RuleEvaluation { 
  /** Whether the rule is valid */
  isValid: boolean; 
  /** Error message if the rule is invalid */
  message?: string; 
}

/**
 * Options for rule processing
 */
export interface Options {
  /** Plugins to use during processing */
  plugins?: ResultPlugin[];
  /** Custom operators to use during processing */
  operators?: OperatorPlugin;
}

/** JavaScript value types */
export type ValueType = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array';

/** Built-in operators */
export const internalOperatorValues: Operator[] = ['eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'has', 'nhas', 'in', 'nit'];

const defaultDelimiter = '.';

// Create a map for faster operator lookups
const operatorMap = new Set(internalOperatorValues);

/**
 * Determines if a rule is a rule group (has 'all' or 'any' property)
 * 
 * @param testRule The rule to test
 * @returns True if the rule is a rule group, false otherwise
 */
export function isGroup(testRule: Rule | RuleGroup = {}): boolean {
  if (!testRule || typeof testRule !== 'object') return false;
  const { all, any } = testRule as RuleGroup;
  return Boolean(all || any);
}

/**
 * Flattens a nested object into a single-level object with dot notation keys
 * 
 * @param obj The object to flatten
 * @param prefix Prefix for the flattened keys
 * @param delimiter Delimiter for nested keys (default: '.')
 * @returns A flattened object with dot notation keys
 * 
 * @example
 * ```typescript
 * flattenKeys({ user: { name: 'John', age: 30 } })
 * // Returns: { 'user.name': 'John', 'user.age': 30 }
 * ```
 */
export function flattenKeys(obj: any, prefix = '', delimiter = '.'): Record<string, any> {
  if (!obj || typeof obj !== 'object') return {};
  
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      return { ...acc, ...flattenKeys(value, `${prefix}${key}${delimiter}`) };
    }
    return { ...acc, [`${prefix}${key}`]: value };
  }, {});
}

// Memoize the flattenKeys function for better performance
export const memoizedFlattenKeys = memoize(flattenKeys);

/**
 * Processes the result of a rule evaluation through plugins
 * 
 * @param args Arguments for result processing
 * @returns The processed result
 */
export const processResult = ({ pass, facts, rule, group, plugins = [] as ResultPlugin[] }: ProcessArgs): ProcessResult => {
  if (plugins.length === 0) return { pass };
  
  return plugins.reduce(
    (pluginResult, plugin) => ({ ...pluginResult, ...(plugin({ pass, facts, rule, group }) || {}) }), 
    { pass }
  );
}

/**
 * Implementation for 'in' and 'nit' operators
 * 
 * @param operator The operator to use ('in' or 'nit')
 * @returns An operator function
 */
const in_nit = (operator: Operator) => ({ value, term }) => {
  if (!term) return false;
  
  if (Array.isArray(term) || ['string', 'object'].includes(typeof term)) {
    const pass = term.includes(value);
    return operator === 'in' ? pass : !pass;
  }
  return false;
}

/**
 * Implementation for 'has' and 'nhas' operators
 * 
 * @param operator The operator to use ('has' or 'nhas')
 * @returns An operator function
 */
const has_nhas = (operator: Operator) => ({ value, term }) => {
  if (!value || ['number', 'bigint', 'symbol', 'undefined'].includes(typeof value)) return false;
  
  const pass = value.includes(term);
  return (operator === 'has') ? pass : !pass;
}

/**
 * Built-in operators for rule processing
 */
export const internalOperators = {
  /** Equal (===) */
  eq: ({ value, term }) => value === term,
  /** Not equal (!==) */
  neq: ({ value, term }) => value !== term,
  /** Greater than (>) */
  gt: ({ value, term }) => value > term,
  /** Greater than or equal (>=) */
  gte: ({ value, term }) => value >= term,
  /** Less than (<) */
  lt: ({ value, term }) => value < term,
  /** Less than or equal (<=) */
  lte: ({ value, term }) => value <= term,
  /** Value is in array/string/object */
  in: in_nit('in'),
  /** Value is not in array/string/object */
  nit: in_nit('nit'),
  /** Contains value */
  has: has_nhas('has'),
  /** Does not contain value */
  nhas: has_nhas('nhas')
} as OperatorPlugin;

// Cache for dot notation lookups
const factQueryCache = new Map();

/**
 * Extract a value from facts using dot notation
 * 
 * @param facts The facts object
 * @param subject The subject with dot notation
 * @returns The extracted value and its type
 */
function extractDotNotationValue(facts: Facts, subject: string) {
  const cacheKey = `${JSON.stringify(facts)}-${subject}`;
  
  if (factQueryCache.has(cacheKey)) {
    return factQueryCache.get(cacheKey);
  }
  
  const flatFacts = memoizedFlattenKeys(facts);
  const queryValue = flatFacts[subject];
  const type = Array.isArray(queryValue) ? 'array' : typeof queryValue;
  
  const result = {
    value: queryValue,
    type
  };
  
  factQueryCache.set(cacheKey, result);
  return result;
}

/**
 * Processes a single rule or rule group against a set of facts
 * 
 * @param facts The facts to evaluate against
 * @param rule The rule or rule group to process
 * @param options Processing options (plugins, custom operators)
 * @returns The processed result
 * 
 * @throws Error if the rule is invalid
 */
export function processRuleOrGroup(facts: Facts = {}, rule: Rule | RuleGroup, options: Options = {}): ProcessResult {
  const { plugins = [], operators = {} } = options;
  
  // Fast path for rule groups
  if (isGroup(rule)) {
    return processGroup(facts, rule as RuleGroup, { plugins });
  }

  // Handle rule
  const [subject, op, term] = rule as Rule;
  
  // Validate rule
  if (subject === null || subject === undefined || !op) {
    throw new Error(`Invalid Rule\n${JSON.stringify(rule, null, 2)}`);
  }

  // Initialize result
  const ruleResult = { pass: false } as PluginArgs;
  
  // Get the value and its type
  let factValue, valueType;
  
  // Handle dot notation
  if (subject.indexOf(defaultDelimiter) > 0) {
    const result = extractDotNotationValue(facts, subject);
    factValue = result.value;
    valueType = result.type;
  } else {
    factValue = facts?.[subject];
    valueType = Array.isArray(factValue) ? 'array' : typeof factValue;
  }
  
  // Handle term processing
  const termIsObject = term !== null && typeof term === 'object';
  
  // Parse numeric values correctly
  const isNumeric = valueType === 'bigint' || valueType === 'number';
  const termValue = isNumeric && typeof term === 'string' ? Number(term) : term;
  
  // Apply operator
  if (internalOperators[op]) {
    ruleResult.pass = internalOperators[op]({ value: factValue, term: termValue });
  }

  // Apply custom operators (which can override internal operators)
  if (operators[op]) {
    ruleResult.pass = operators[op]({ value: factValue, term: termValue });
  }

  // Process results
  return processResult({
    ...ruleResult,
    rule,
    facts,
    plugins
  } as ProcessArgs);
}

/**
 * Processes a rule group against a set of facts
 * 
 * @param facts The facts to evaluate against
 * @param ruleGroup The rule group to process
 * @param options Processing options (plugins, custom operators)
 * @returns The processed result
 * 
 * @throws Error if the rule group is invalid
 */
export function processGroup(facts: Facts = {}, ruleGroup: RuleGroup = {}, options: Options = {}): ProcessResult {
  const { all, any } = ruleGroup;
  const { plugins = [] } = options;
  const action = (rule: Rule | RuleGroup) => processRuleOrGroup(facts, rule, options);

  if (all) {
    // Optimization: short-circuit on first failure for 'all' groups
    const groupResult = [];
    let allPass = true;
    
    for (const rule of all) {
      const result = action(rule);
      groupResult.push(result);
      
      if (!result.pass) {
        allPass = false;
        if (plugins.length === 0) break; // Only short-circuit if not using plugins
      }
    }
    
    return processResult({ 
      pass: allPass, 
      rule: ruleGroup, 
      facts, 
      plugins, 
      group: { all: groupResult, pass: allPass } 
    });
  }

  if (any) {
    // Optimization: short-circuit on first success for 'any' groups
    const groupResult = [];
    let anyPass = false;
    
    for (const rule of any) {
      const result = action(rule);
      groupResult.push(result);
      
      if (result.pass) {
        anyPass = true;
        if (plugins.length === 0) break; // Only short-circuit if not using plugins
      }
    }
    
    return processResult({ 
      pass: anyPass, 
      rule: ruleGroup, 
      facts, 
      plugins, 
      group: { any: groupResult, pass: anyPass } 
    });
  }

  throw new Error(`Invalid RuleGroup\n${JSON.stringify(ruleGroup, null, 2)}`);
}

/**
 * A plugin that adds verbose information to the result
 * 
 * @param args Plugin arguments
 * @returns The processed result with additional information
 */
export const verbosePlugin = ({ pass, rule, group }: PluginArgs) => ({ pass, rule, group });

/**
 * Processes a rule group with verbose output
 * 
 * @param facts The facts to evaluate against
 * @param ruleGroup The rule group to process
 * @param plugins Additional plugins to use
 * @returns The processed result with verbose information
 */
export const processVerbose = (facts: Facts = {}, ruleGroup: RuleGroup, plugins: ResultPlugin[] = []) => (
  processGroup(facts, ruleGroup, { plugins: [verbosePlugin, ...plugins] })
);

/**
 * Validates a rule group structure without processing it
 * 
 * @param ruleGroup The rule group to validate
 * @returns An evaluation result with isValid flag and optional error message
 */
export function validateRule(ruleGroup = {} as RuleGroup): RuleEvaluation {
  if (!ruleGroup) {
    return {
      isValid: false,
      message: 'No Rule Group Found'
    };
  }
  
  const { all, any } = ruleGroup;

  const validateRuleSet = (rules: Rules) => {
    if (!rules || !Array.isArray(rules) || rules.length === 0) {
      return {
        isValid: false,
        message: 'No Rule Group Found'
      };
    }
    
    for (let ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
      const rule = rules[ruleIndex];
      
      // Check for nested rule groups
      if (typeof rule === 'object' && !Array.isArray(rule)) {
        const ruleGroup = rule as RuleGroup;
        if (ruleGroup?.all || ruleGroup?.any) {
          const result = validateRule(ruleGroup);
          if (!result.isValid) return result;
          continue;
        }
      }

      // Must be an array with at least 2 elements
      if (!Array.isArray(rule) || rule.length < 2) {
        return {
          isValid: false,
          message: 'Invalid Rule Format'
        };
      }

      const [field, op] = rule;
      if (!field || !op) {
        return {
          isValid: false,
          message: 'Invalid Rule: Missing field or operator'
        };
      }
      
      // Fast check for valid operators using Set
      if (!operatorMap.has(op)) {
        return {
          isValid: false,
          message: `Invalid Operator: ${op}`
        };
      }
    }
    
    return {
      isValid: true
    };
  };

  if (all || any) {
    return validateRuleSet(all || any);
  }

  return {
    isValid: false,
    message: 'No Quantifiers (all|any) Found'
  };
}

/**
 * Alias for processGroup
 * @see {@link processGroup}
 */
export const processRules = processGroup;

/**
 * The default export is the processRules function
 * @see {@link processGroup}
 */
export default processRules;
