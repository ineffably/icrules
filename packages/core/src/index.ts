export type Subject = string;
export type Rule = [Subject, Operator, any];
export type Quantifiers = 'all' | 'any';
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nin';
export type RuleGroup = { [q: string]: (Rule | RuleGroup)[] };
export type Facts = Record<string, any>;
export type Plugin = (PluginArgs) => ProcessResult;
export type PluginArgs = {
  hit: boolean;
  facts?: Facts;
  rule: Rule | RuleGroup;
  group?: any;
};
export interface ProcessArgs extends PluginArgs {
  plugins: Plugin[];
}
export interface ProcessResult extends Facts {
  hit: boolean;
}

export const operators = [
  'eq', 'neq', 'gt', 'lt', 'gte', 'lte', 'has', 'nhas', 'in', 'nin'
] as Operator[];

export function isGroup(testRule: Rule | RuleGroup): boolean {
  const { all, any } = testRule as RuleGroup;
  if (all || any) return true;
  return false;
}

export const verbosePlugin = ({ hit, rule, group }: PluginArgs) => ({ hit, rule, group });

export const processResult = ({ hit, facts, rule, group, plugins = [] as Plugin[] }: ProcessArgs): ProcessResult => (
  plugins.reduce((pluginResult, plugin) => ({ ...pluginResult, ...(plugin({ hit, facts, rule, group }) || {}) }), { hit })
)

export function processRule(facts = {} as Facts, rule: Rule | RuleGroup, plugins = [] as Plugin[]): ProcessResult {
  if (isGroup(rule)) return processGroup(facts, rule as RuleGroup, plugins);
  const [field, op, ruleValue] = rule as Rule;
  const factValue = facts[field];
  const ruleResult = { hit: false } as PluginArgs;

  if (op === 'has' || op === 'nhas') {
    if (['number', 'bigint', 'symbol', 'undefined'].includes(typeof factValue)) return { hit: false };
    const hit = factValue.includes(ruleValue);
    ruleResult.hit = (op === 'nhas') ? !hit : hit;
  }

  if (op === 'in' || op === 'nin') {
    const isArray = ruleValue && Array.isArray(ruleValue);
    const valueType = typeof ruleValue;
    if (isArray || ['string', 'object'].includes(valueType)) {
      ruleResult.hit = ruleValue.includes(factValue);
    }
  }

  if (op === 'eq') {
    ruleResult.hit = factValue === ruleValue;
  }
  if (op === 'neq') {
    ruleResult.hit = factValue !== ruleValue;
  }
  if (op === 'gt') {
    ruleResult.hit = factValue > ruleValue;
  }
  if (op === 'gte') {
    ruleResult.hit = factValue >= ruleValue;
  }
  if (op === 'lt') {
    ruleResult.hit = factValue < ruleValue;
  }
  if (op === 'lte') {
    ruleResult.hit = factValue <= ruleValue;
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
    const hit = groupResult.every(r => r.hit);
    return processResult({ hit, rule: ruleGroup, facts, plugins, group: { all: groupResult, hit } });
  }
  if (any) {
    const groupResult = any.map(action);
    const hit = groupResult.some(r => r.hit);
    return processResult({ hit, rule: ruleGroup, facts, plugins, group: { any: groupResult, hit } });
  }
  console.error('Invalid RuleGroup interpreting', JSON.stringify(ruleGroup, null, 2));
  return { hit: false };
}

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

  exec = (ruleGroup: RuleGroup, facts = null as Facts, plugins = [] as Plugin[]) => processGroup(facts || this.facts, ruleGroup, plugins)

  static process = (ruleGroup: RuleGroup, facts = null as Facts, plugins = [] as Plugin[]) => processGroup(facts, ruleGroup, plugins);

  static processVerbose = (ruleGroup: RuleGroup, facts = null as Facts, plugins = [] as Plugin[]) => processGroup(facts, ruleGroup, [verbosePlugin, ...plugins]);

}

export default ICRules;
