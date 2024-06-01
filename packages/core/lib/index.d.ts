export type Subject = string;
export type Term = any;
export type Rule = [Subject, Operator, Term];
export type Quantifiers = 'all' | 'any';
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nit' | string;
export type Rules = (Rule | RuleGroup)[];
export type RuleGroup = {
    all?: Rules;
    any?: Rules;
};
export type Facts = Record<string, any> | Record<string, any>[];
export type ResultPlugin = (args: PluginArgs) => ProcessResult;
export type OperatorPlugin = Record<string, (args: OperatorFuncArgs) => boolean>;
export type OperatorFuncArgs = {
    value: any;
    term: any;
};
export type PluginArgs = {
    pass: boolean;
    rule: Rule | RuleGroup;
    facts?: Facts;
    group?: any;
};
export interface ProcessArgs extends PluginArgs {
    plugins: ResultPlugin[];
}
export interface ProcessResult extends Record<string, any> {
    pass: boolean;
}
export interface RuleEvaluation {
    isValid: boolean;
    message?: string;
}
export interface Options {
    plugins?: ResultPlugin[];
    operators?: OperatorPlugin;
}
export type ValueType = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array';
export declare const internalOperatorValues: Operator[];
export declare function isGroup(testRule?: Rule | RuleGroup): boolean;
export declare function flattenKeys(obj: any, prefix?: string, delimiter?: string): Record<string, any>;
export declare const processResult: ({ pass, facts, rule, group, plugins }: ProcessArgs) => ProcessResult;
export declare const internalOperators: OperatorPlugin;
export declare function processRuleOrGroup(facts: Facts, rule: Rule | RuleGroup, options?: Options): ProcessResult;
export declare function processGroup(facts?: Facts, ruleGroup?: RuleGroup, options?: Options): ProcessResult;
export declare const verbosePlugin: ({ pass, rule, group }: PluginArgs) => {
    pass: boolean;
    rule: Rule | RuleGroup;
    group: any;
};
export declare const processVerbose: (facts: Facts, ruleGroup: RuleGroup, plugins?: ResultPlugin[]) => ProcessResult;
export declare function validateRule(ruleGroup?: RuleGroup): RuleEvaluation;
export declare const processRules: typeof processGroup;
export default processRules;
