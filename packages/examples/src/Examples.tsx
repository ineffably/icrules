import { useState } from 'react';
import RuleEditor from '@icrules/editor';
import { RuleGroup } from '@icrules/core';

export const Examples = () => {
  const rules = {
    all: [
      ['color', 'eq', 'blue'],
      ['size', 'gte', 10],
      ['size', 'lte', 300],
      { any: [['count', 'gt', 3]] }
    ]
  } as RuleGroup;

  const [liveRules, setLiveRules] = useState(rules);

  const facts = {
    color: 'blue',
    size: 200,
    count: 1
  }

  const onChange = (rules: RuleGroup) => {
    setLiveRules(rules);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <RuleEditor {...{ facts, rules: liveRules, onChange }} />
      <div><pre>{JSON.stringify(liveRules, null, 2)}</pre></div>
    </div>
  )
}
