import { ICRulesEditorAntd } from '@icrules/editor';
import { useState } from 'react';
import { RuleGroup, processVerbose } from '@icrules/core';
import { syntaxHighlight } from './utils';
import './examples.css';
import { Card } from 'antd';

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
    <Card title={<b>ICRules Antd Editor Example</b>} size='small'>
      <div style={{ display: 'flex', flexDirection: 'row', width: '98vw' }}>
        <ICRulesEditorAntd {...{ facts, rules: liveRules, onChange }} />
        <Card style={{ margin: '0 4px' }} title={'JSON rules'}  size='default' hoverable={true} styles={{body: {padding: 0}}} >
          <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify(liveRules, null, 2)) }}></pre>
        </Card>
        <Card style={{ margin: '0 4px', padding: 0 }} title='Verbose JSON rules and result'  size='default' hoverable={true} styles={{body: {padding: 0}}}>
          <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify({ pass, group }, null, 2)) }}></pre>
        </Card>
      </div>
    </Card>
  )
}
