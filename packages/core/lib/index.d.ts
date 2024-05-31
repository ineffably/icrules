export type Subject = string;
export type Term = any;
export type Rule = [Subject, Operator, Term];
export type Quantifiers = 'all' | 'any';
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nit';
export type Rules = (Rule | RuleGroup)[];
export type RuleGroup = {
    all?: Rules;
    any?: Rules;
};
export type Facts = Record<string, any> | Record<string, any>[];
export type Plugin = (args: PluginArgs) => ProcessResult;
export type PluginArgs = {
    pass: boolean;
    rule: Rule | RuleGroup;
    facts?: Facts;
    group?: any;
};
export interface ProcessArgs extends PluginArgs {
    plugins: Plugin[];
}
export interface ProcessResult extends Record<string, any> {
    pass: boolean;
}
export interface RuleEvaluation {
    isValid: boolean;
    message?: string;
}
export type ValueType = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array';
export declare const operators: Operator[];
export declare function isGroup(testRule?: Rule | RuleGroup): boolean;
export declare const verbosePlugin: ({ pass, rule, group }: PluginArgs) => {
    pass: boolean;
    rule: Rule | RuleGroup;
    group: any;
};
export declare const processResult: ({ pass, facts, rule, group, plugins }: ProcessArgs) => ProcessResult;
export declare function processRuleOrGroup(facts: Facts, rule: Rule | RuleGroup, plugins?: Plugin[]): ProcessResult;
export declare function flattenKeys(obj: any, prefix?: string, delimiter?: string): any;
export declare function processGroup(facts?: Facts, ruleGroup?: RuleGroup, plugins?: Plugin[]): ProcessResult;
export declare const processVerbose: (facts: Facts, ruleGroup: RuleGroup, plugins?: Plugin[]) => ProcessResult;
export declare const processRules: typeof processGroup;
export declare function validateRule(ruleGroup?: RuleGroup): RuleEvaluation;
