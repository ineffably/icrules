/// <reference types="react" />
export { ICRulesEditorAntd } from './RuleEditorAntd';
import { Rule, RuleGroup } from '@icrules/core';
import { ICRulesEditor } from './RuleEditor';
export default ICRulesEditor;
export { ICRulesEditor };
export declare const flattenKeys: (obj: any, prefix?: string) => any;
export declare const safeParse: (textJson: string, showError?: boolean) => any | boolean;
export declare const opMap: {
    eq: string;
    neq: string;
    gt: string;
    lt: string;
    lte: string;
    gte: string;
    has: string;
    nhas: string;
    in: string;
    nit: string;
};
export interface RuleEditorProps {
    facts?: any;
    rule?: Rule;
    onUpdate?: (r: Rule, i: number) => void;
    onDeleteRule?: (number: any) => void;
    index?: number;
    depth?: number;
}
export interface RuleGroupEditorProps {
    facts?: any;
    rules?: RuleGroup;
    onChange?: (RuleGroup: any, index: any, parentIndex?: any) => void;
    depth?: number;
    index?: number;
    showFactsEditor?: boolean;
    extra?: any;
    FactsEditor?: React.FC<FactsEditorProps>;
}
export interface RulesEditorOptions {
    showFactsEditor?: boolean;
    factsEditor?: React.FC<FactsEditorProps>;
}
export interface FactsEditorProps {
    object: any;
    onChange?: (string: any, any: any) => void;
}
export interface ICRulesEditorProps {
    rules: RuleGroup;
    facts: any;
    onChange?: (RuleGroup: any) => void;
    options?: RulesEditorOptions;
}
