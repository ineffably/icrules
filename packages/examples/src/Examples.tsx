import { ICRulesEditorAntd } from '@icrules/editor';
import { useState } from 'react';
import { RuleGroup, processVerbose } from '@icrules/core';
import { syntaxHighlight } from './utils';
import { Card } from 'antd';
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
    count: 1,
    markets: ['en-US', 'en-GB', 'en-CA']
  }

  const onChange = (rules: RuleGroup) => {
    setLiveRules(rules);
  }
  const { pass, group } = processVerbose(facts, liveRules);
  const testFacts = {
    simple: {
      color: 'blue',
      size: 200,
      count: 32
    },
    siteUser: {
      user: {
        name: 'John',
        joined: '2017-01-01',
        market: 'en-US',
        id: 123456,
      },
      preferences: {
        notifications: true,
        language: 'en',
        price: 'usd'
      },
      services: {
        purchased: [
          { name: 'service1', date: '2019-01-01' },
          { name: 'service2', date: '2018-01-01' },
          { name: 'service3', date: '2020-01-01'  },
          { name: 'service4', date: '2021-01-01'  },
        ],
      },
      subscriptions: [
        { name: 'sub1', active: true, expiresInDays: 45 },
        { name: 'sub2', active: true, expiresInDays: 300 },
        { name: 'sub3', active: true, expiresInDays: 10 },
        { name: 'sub4', active: true, expiresInDays: 2 },
      ]
    }
  }

return (
  <Card title={<b>ICRules Fancy Editor Example</b>} size='small'>
    <div style={{ display: 'flex', flexDirection: 'row', width: '98vw' }}>
      <ICRulesEditorAntd {...{ facts, rules: liveRules, onChange }} />
      <Card style={{ margin: '0 4px' }} title={'JSON rules'} size='default' hoverable={true} styles={{ body: { padding: 0 } }} >
        <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify(liveRules, null, 2)) }}></pre>
      </Card>
      <Card style={{ margin: '0 4px', padding: 0 }} title='Verbose JSON rules and result' size='default' hoverable={true} styles={{ body: { padding: 0 } }}>
        <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify({ pass, group }, null, 2)) }}></pre>
      </Card>
    </div>
  </Card>
)
}
