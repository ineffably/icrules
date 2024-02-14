import { type Operator, type RuleGroup, operators, processRuleOrGroup, Quantifiers, Rule, processVerbose } from '@icrules/core';
import { useEffect, useState } from 'react';
import { opMap, type ICRulesEditorProps, type RuleEditorProps, type RuleGroupEditorProps, FactsEditorProps, safeParse } from '.';
import { Alert, Button, Card, Input, Select, Space, Tag, Tooltip } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { CheckCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './editorStyle.css';
import TextArea from 'antd/es/input/TextArea';

let lastId = null;

export const FactsEditorAntd = ({ object, onChange = () => null }: FactsEditorProps) => {
  const [activeObject, setActiveObject] = useState(JSON.stringify(object, null, 2));
  const parsedValue = safeParse(activeObject);

  return (
    <Card
      style={{ width: '350px', margin: '4px' }}
      hoverable={true}
      title={
        <span style={{ color: parsedValue ? 'green' : 'darkred' }}>Facts are {parsedValue ? 'valid' : 'invalid'}. </span>
      }>
      <TextArea
        rows={25}
        title='enter your facts here'
        onChange={ev => {
          setActiveObject(ev.target.value);
          onChange(ev.target.value, parsedValue !== false)
        }}
        value={activeObject}
      />
    </Card>
  )
}

export const RuleEditorAntd = ({
  facts = {},
  rule = ['', 'eq', ''],
  onUpdate = (rule, index) => { },
  index = 0,
  depth = 0
}: RuleEditorProps) => {
  const [userSize, setUserSize] = useState<SizeType>('middle');
  const [factKeys] = useState(Object.keys(facts));
  const [liveRule, setEditRule] = useState(rule);
  const [factKey, operator, term] = liveRule;
  const key = `${index}-${depth}`;
  const listId = `${factKeys}-${key}`;

  useEffect(() => {
    onUpdate([factKey, operator, term], index);
  }, [factKey, operator, term])

  const valueId = `value-${key}`
  const termId = `term-${key}`
  const result = processRuleOrGroup(facts, liveRule)

  return (
    <Space key={key} direction='horizontal'>
      <Tooltip title={`${result.pass ? 'Rule Passed' : 'Rule Failed'} with provided facts`}>
        <Tag icon={<CheckCircleOutlined />} color={result.pass ? 'green' : 'red'} />
      </Tooltip>
      <div key={'rule-fact'} >
        <Input
          size={userSize}
          id={termId}
          autoComplete='on'
          autoFocus={lastId === termId}
          type='text'
          list={listId}
          value={factKey}
          onChange={ev => {
            lastId = ev.target.id;
            setEditRule([ev.target.value, operator, term]);
          }}
        />
      </div>
      <div key={'rule-op'}>
        <Tooltip title={`${factKey} ${opMap[operator]} ${term}`}>
          <Select
            style={{ width: '145px' }}
            size={userSize}
            value={operator}
            onChange={ev => setEditRule([factKey, (ev as Operator), term])}
            options={operators.map(op => ({ label: opMap[op], value: op }))}
          />
        </Tooltip>
      </div>
      <div key={'rule-term'}>
        <Input
          size={userSize}
          type='text'
          id={valueId}
          value={term}
          autoFocus={lastId === valueId}
          onChange={ev => {
            lastId = ev.target.id;
            setEditRule([factKey, operator, ev.target.value])
          }
          } />
      </div>
    </Space>
  )
}

const RuleGroupEditorAntd = ({
  facts = {},
  rules = {},
  onChange = r => { },
  depth = 0,
  index = 0,
  showFactsEditor = true,
  extra = () => null
}: RuleGroupEditorProps) => {
  const [userSize, setUserSize] = useState<SizeType>('middle');
  const [liveFacts, setLiveFacts] = useState(facts);
  const [quantifier, setQuantifier] = useState((rules.all ? 'all' : 'any') as Quantifiers);
  const [liveRules, setLiveRules] = useState(rules);
  const [ruleList, setLiveRuleList] = useState([...(liveRules.all || liveRules.any)]);
  const [versboseResult, setVerboseResult] = useState({} as any);
  const quantfiers = ['all', 'any'] as Quantifiers[];
  const emptyRule = ['', 'eq', ''] as Rule;
  const emptyGroup = { all: [emptyRule] } as RuleGroup;

  const onRuleUpdate = (rule: Rule, i: number) => {
    ruleList[i] = rule;
    onChange({ [quantifier]: [...ruleList] }, i, index);
  }

  const onAddRule = (i = null as number) => {
    if (i === null) {
      ruleList.push(emptyRule);
    }
    else {
      ruleList.splice(i, 0, emptyRule);
    }
    setLiveRuleList([...ruleList]);
    onChange({ [quantifier]: [...ruleList] }, i, index);
  };

  const addGroup = (i = null as number) => {
    if (i === null) {
      ruleList.push(emptyGroup);
    }
    else {
      ruleList.splice(i, 0, emptyGroup);
    }
    setLiveRuleList([...ruleList]);
    onChange({ [quantifier]: [...ruleList] }, i, index);
  };

  const onDeleteRule = (i) => {
    ruleList.splice(i, 1);
    setLiveRules({ [quantifier]: [...ruleList] });
    setLiveRuleList([...ruleList]);
    onChange({ [quantifier]: [...ruleList] }, i, index);
  };

  useEffect(() => {
    const verboseResults = processVerbose(facts, liveRules);
    console.log('==> verboseResults', verboseResults);
    onChange(liveRules, 0, index);
  }, [JSON.stringify(liveRules)])

  useEffect(() => {
    setLiveRules({ [quantifier]: [...ruleList] });
  }, [JSON.stringify(ruleList)])

  useEffect(() => {
    setLiveRules({ [quantifier]: [...ruleList] });
  }, [quantifier])

  const isValidRule = processRuleOrGroup(facts, liveRules);
  // const verboseResults = processVerbose(facts, liveRules);
  // console.log('==> verboseResults', JSON.stringify(verboseResults, null, 2));

  return (
    <div key={`group-edit-${index}-${depth}`} style={{ display: 'flex', flexDirection: 'row' }}>
      {showFactsEditor && depth === 0 && index === 0 &&
        <FactsEditorAntd object={liveFacts} onChange={(value, isValid) => {
          if (isValid) {
            setLiveFacts(value);
          }
        }} />
      }
      <Card style={{ marginTop: '4px' }}
        hoverable={true}
        title={
          depth === 0 && index === 0 && <Space>
            <span style={{ color: isValidRule ? 'green' : 'darkred' }}>Rule is {isValidRule ? 'valid' : 'invalid'}. </span>
            <span style={{ color: isValidRule?.pass ? 'green' : 'darkred' }}>Rule is {isValidRule?.pass ? 'passing' : 'failing'}. </span>
          </Space>
        }
      >
        <div style={{ border: '2px dotted #ccc', padding: '4px' }}>
          <div>
            <Select size={userSize} value={quantifier} options={quantfiers.map(q => ({ label: q, value: q }))} onChange={ev => setQuantifier(ev as Quantifiers)} style={{ width: '70px' }} />
            <Button size={userSize} icon={<PlusCircleOutlined />} title='add a group' onClick={() => addGroup()} />
            {extra && extra()}
          </div>
          <div>
            {ruleList.map((ruleEntry, ruleIndex) => Array.isArray(ruleEntry) ?
              (<div style={{ display: 'flex', flexDirection: 'row' }}>
                <RuleEditorAntd
                  onUpdate={onRuleUpdate}
                  key={`${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`}
                  {...{ rule: ruleEntry, facts: liveFacts, index: ruleIndex, depth }}
                />
                <div>
                  <Button size={userSize} icon={<PlusCircleOutlined />} title='add a rule' onClick={() => onAddRule(ruleIndex + 1)} />
                  {ruleIndex > 0 && <Button size={userSize} icon={<MinusCircleOutlined />} title='remove rule' onClick={() => onDeleteRule(ruleIndex)} />}
                </div>
              </div>) :
              (<div>
                <RuleGroupEditorAntd
                  key={`${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`}
                  extra={(ruleIndex > 0 ? () => <Button size={userSize} title='remove group' onClick={() => onDeleteRule(ruleIndex)} icon={<MinusCircleOutlined />} /> : null)}
                  {...{
                    rules: ruleEntry as RuleGroup,
                    facts,
                    index: ruleIndex,
                    depth: (depth + 1),
                    onChange: (ruleGroup, i, parentIndex) => {
                      ruleList[ruleIndex] = ruleGroup
                      onChange({ [quantifier]: [...ruleList] }, i, parentIndex)
                    }
                  }}
                />

              </div>)
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

export const ICRulesEditorAntd = ({
  rules = {},
  facts = {},
  onChange = (r => null),
  options = { showFactsEditor: true }
}: ICRulesEditorProps) => {
  const [liveRules, setLiveRules] = useState(rules);
  const { showFactsEditor } = options;

  const onRuleChange = (latestRules: RuleGroup) => {
    onChange(latestRules);
    setLiveRules({ ...latestRules })
  }

  return (
    <RuleGroupEditorAntd {...{ rules: liveRules, facts, onChange: onRuleChange, showFactsEditor }} />
  )
}

export default ICRulesEditorAntd;