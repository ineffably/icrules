import { RuleGroup } from '@icrules/core';
import { RuleEditor } from './RuleEditor';

export { RuleEditor };
export default RuleEditor;

export interface RuleEditorProps {
  rules: RuleGroup;
  facts: any;
}
