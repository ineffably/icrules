import { ICRules, RuleGroup } from '@icrules/core';
import React from 'react';
import { RuleEditorProps } from '.';

export const RuleEditor = ({ rules = {}, facts = {} }: RuleEditorProps) => {
  const [activeRules, setRules] = React.useState(rules);
  const [activeFacts, setFacts] = React.useState(facts);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div><pre></pre></div>
        <div><pre>{JSON.stringify(activeRules, null, 2)}</pre></div>
      </div>
    </div>
  )
}

export default RuleEditor;
