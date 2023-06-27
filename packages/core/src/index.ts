export type Rule = [string, Operator, any];
export type Quantifiers = 'all' | 'any';
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nin';
export type RuleGroup = { [q: string]: (Rule | RuleGroup)[] };
export type Facts = Record<string, any>;

export const operators = [
  'eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'has', 'nhas', 'in', 'nin'
] as Operator[];

export function isGroup(testRule: Rule | RuleGroup): boolean {
  const { all, any } = testRule as RuleGroup;
  if (all || any) return true;
  return false;
}

export function processRule(facts = {} as Facts, rule: Rule | RuleGroup): boolean {
  if (isGroup(rule)) return processGroup(facts, rule as RuleGroup);
  const [field, op, ruleValue] = rule as Rule;
  const value = facts[field];

  if (op === 'has' || op === 'nhas') {
    if (['number', 'bigint', 'symbol', 'undefined'].includes(typeof value)) return false;
    const result = value.includes(ruleValue);
    if (op === 'nhas') return !result;
    return result;
  }

  if (op === 'in' || op === 'nin') {
    const isArray = ruleValue && Array.isArray(ruleValue);
    const valueType = typeof ruleValue;
    if (isArray || ['string', 'object'].includes(valueType)) {
      return ruleValue.includes(value);
    }
    return false;
  }

  if (op === 'eq') {
    return value === ruleValue;
  }
  if (op === 'neq') {
    return value !== ruleValue;
  }
  if (op === 'gt') {
    return value > ruleValue;
  }
  if (op === 'gte') {
    return value >= ruleValue;
  }
  if (op === 'lt') {
    return value < ruleValue;
  }
  if (op === 'lte') {
    return value <= ruleValue;
  }

  console.warn(`operator "${op}" is not a valid operator`);
  return false;
}

export function processGroup(facts = {} as any, ruleGroup: RuleGroup): boolean {
  const { all, any } = ruleGroup;
  const action = rule => processRule(facts, rule);
  if (all) {
    return all.every(action);
  }
  if (any) {
    return any.some(action);
  }
  console.error('Invalid RuleGroup interpreting', JSON.stringify(ruleGroup, null, 2));
  return false;
}

export class ICRules {
  facts: any;

  constructor(facts = {} as any) {
    if (facts) {
      this.facts = facts;
    }
  }

  setFacts = (facts = {} as any) => {
    this.facts = facts;
  }

  exec = (ruleGroup: RuleGroup, facts = null as any) => processGroup(facts || this.facts, ruleGroup)

  static process = (ruleGroup: RuleGroup, facts = null as any) => processGroup(facts, ruleGroup);
}

export default ICRules;
