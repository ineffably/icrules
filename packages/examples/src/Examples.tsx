import RuleEditor from '@icrules/editor';
import { useState } from 'react';
import { RuleGroup, processVerbose } from '@icrules/core';
import { syntaxHighlight } from './utils';
import './examples.css';

export const Examples = () => {
  const rules = {
    all: [
      ['color', 'eq', 'blue'],
      ['size', 'gte', 10],
      ['size', 'lte', 300],
      { any: [['count', 'lt', 3]] }
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
  const { pass, group } = processVerbose(facts, liveRules);
  return (
    <div>
      <div><b>ICRules Editor Example</b></div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '98vw' }}>
        <RuleEditor {...{ facts, rules: liveRules, onChange }} />
        <div style={{ width: '300px' }}>
          <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify(liveRules, null, 2)) }}></pre>
        </div>
        <div style={{ width: '300px' }}>
          <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify({ pass, group }, null, 2)) }}></pre>
        </div>
      </div>
    </div>
  )
}
