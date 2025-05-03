export { FactsEditorAntd } from './RuleEditorAntd';
export { ICRulesEditorAntd } from './RuleEditorAntd';
import { Rule, RuleGroup } from '@icrules/core';
import { ICRulesEditor } from './RuleEditor';
import React from 'react';
export default ICRulesEditor;
export { ICRulesEditor, };
export declare const flattenKeys: typeof import("@icrules/core").flattenKeys;
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
    onChange?: (rules: RuleGroup, index: number, parentIndex?: number) => void;
    depth?: number;
    index?: number;
    showFactsEditor?: boolean;
    extra?: any;
    FactsEditor?: React.ComponentType<FactsEditorProps>;
}
export interface RulesEditorOptions {
    showFactsEditor?: boolean;
    factsEditor?: React.ComponentType<FactsEditorProps>;
}
export interface FactsEditorProps {
    object: any;
    onChange?: (stringValue: string, parsedValue: any) => void;
}
export interface ICRulesEditorProps {
    rules: RuleGroup;
    facts: any;
    onChange?: (rules: RuleGroup) => void;
    options?: RulesEditorOptions;
}
