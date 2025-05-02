export { ICRulesEditorAntd } from './RuleEditorAntd';
import { Rule, RuleGroup } from '@icrules/core';
import { ICRulesEditor } from './RuleEditor';
import { FC } from 'react';

export default ICRulesEditor;
export { 
  ICRulesEditor
}

export const flattenKeys = (obj: any, prefix = ''): any => {
  let result = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      result = { ...result, ...flattenKeys(obj[key], `${prefix}${key}.`) };
    } else {
      result[`${prefix}${key}`] = obj[key];
    }
  }
  return result;
}

export const safeParse = (textJson: string, showError = false): any | boolean => {
  try {
    return JSON.parse(textJson);
  }
  catch (e) {
    if (showError) {
      console.error(e);
    }
    return false;
  }
}

export const opMap = {
  eq: 'equals',
  neq: 'not equals',
  gt: '> greater than',
  lt: '< less than',
  lte: '<= less or equal',
  gte: '>= greater or equal',
  has: 'contains',
  nhas: 'not contains',
  in: 'in term',
  nit: 'not in term'
};

export interface RuleEditorProps {
  facts?: any;
  rule?: Rule;
  onUpdate?: (r: Rule, i: number) => void;
  onDeleteRule?: (number) => void;
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
  extra?: () => JSX.Element | null;
  FactsEditor?: FC<FactsEditorProps>;
}

export interface RulesEditorOptions {
  showFactsEditor?: boolean;
  factsEditor?: FC<FactsEditorProps>;
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