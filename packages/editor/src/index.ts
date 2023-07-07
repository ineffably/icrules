import { Rule, RuleGroup } from '@icrules/core';
import { ICRulesEditor } from './RuleEditor';

export { ICRulesEditor };
export default ICRulesEditor;

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
  onChange?: (RuleGroup, index, parentIndex?) => void;
  depth?: number;
  index?: number;
  showFactsEditor?: boolean;
}

export interface RulesEditorOptions {
  showFactsEditor?: boolean;
}

export interface FactsEditorProps {
  object: any;
  onChange?: (string, boolean)=>void;
}

export interface ICRulesEditorProps {
  rules: RuleGroup;
  facts: any;
  onChange?: (RuleGroup) => void;
  options?: RulesEditorOptions;
}