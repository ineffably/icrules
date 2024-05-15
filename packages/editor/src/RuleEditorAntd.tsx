import { type Operator, type RuleGroup, operators, processRuleOrGroup, Quantifiers, Rule, processVerbose, flattenKeys } from '@icrules/core';
import { useEffect, useState } from 'react';
import { opMap, type ICRulesEditorProps, type RuleEditorProps, type RuleGroupEditorProps, FactsEditorProps, safeParse } from '.';
import { AutoComplete, Button, Card, Input, Select, Space, Tag, Tooltip } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { CheckCircleOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import './editorStyle.css';

let lastId = null;

const FactsCard = styled(Card)`
  width: 350px;
  margin: 4px;
`;

const CardTitle = styled.span`
  color: ${props => props.color};
`;

const SubjectAndTerms = styled(AutoComplete)`
  width: 200px;
`;

const GroupEditorCard = styled(Card)`
  margin-top: 4px;
`;

const GroupContainer = styled.div`
  border: 2px dotted #ccc;
  padding: 4px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FactsEditorAntd = ({ object, onChange = () => null }: FactsEditorProps) => {
  const [activeObject, setActiveObject] = useState(JSON.stringify(object, null, 2));
  const parsedValue = safeParse(activeObject);

  return (
    <FactsCard
      hoverable={true}
      title={
        <CardTitle color={parsedValue ? 'green' : 'darkred'}>
          Facts are {parsedValue ? 'valid' : 'invalid'}.
        </CardTitle>
      }>
      <Input.TextArea
        rows={25}
        title='enter your facts here'
        onChange={ev => {
          setActiveObject(ev.target.value);
          onChange(ev.target.value, safeParse(ev.target.value))
        }}
        value={activeObject}
      />
    </FactsCard>
  )
}

export const RuleEditorAntd = ({
  facts = {},
  rule = ['', 'eq', ''],
  onUpdate = (rule, index) => { },
  index = 0,
  depth = 0
}: RuleEditorProps) => {
  // const [ruleFacts, setRuleFacts] = useState(facts);
  const [userSize, setUserSize] = useState<SizeType>('middle');
  const [factKeys, setFactKeys] = useState(Object.entries(flattenKeys(facts)));
  const [liveRule, setEditRule] = useState(rule);
  const [factKey, operator, term] = liveRule;

  useEffect(() => {
    setFactKeys(Object.entries(flattenKeys(facts)));
  }, [JSON.stringify(facts)])

  useEffect(() => {
    onUpdate([factKey, operator, term], index);
  }, [factKey, operator, term])

  const key = `${index}-${depth}`;
  const valueId = `value-${key}`
  const termId = `term-${key}`
  const result = processRuleOrGroup(facts, liveRule)

  return (
    <Space key={key} direction='horizontal'>
      <Tooltip title={`${result.pass ? 'Rule Passed' : 'Rule Failed'} with provided facts`}>
        <Tag icon={<CheckCircleOutlined />} color={result.pass ? 'green' : 'red'} />
      </Tooltip>
      <div key={'rule-fact'} >
        <SubjectAndTerms
          size={userSize}
          id={termId}
          autoFocus={lastId === termId}
          options={factKeys.map(([key]) => ({ value: key }))}
          value={factKey}
          onChange={value => {
            lastId = termId
            setEditRule([value.toString(), operator, term]);
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
        <SubjectAndTerms
          size={userSize}
          id={valueId}
          autoFocus={lastId === valueId}
          options={factKeys.map(([, value]) => ({ value: value.toString() }))}
          value={term}
          onChange={value => {
            lastId = valueId
            setEditRule([factKey, operator, value])
          }}
        />
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
  extra = () => null,
  FactsEditor = FactsEditorAntd
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
    onChange(liveRules, 0, index);
  }, [JSON.stringify(liveRules)])

  useEffect(() => {
    setLiveRules({ [quantifier]: [...ruleList] });
  }, [JSON.stringify(ruleList)])

  useEffect(() => {
    setLiveRules({ [quantifier]: [...ruleList] });
  }, [quantifier])

  const isValidRule = processRuleOrGroup(facts, liveRules);

  return (
    <FlexRow key={`group-edit-${index}-${depth}`}>
      {showFactsEditor && depth === 0 && index === 0 &&
        <FactsEditor object={liveFacts} onChange={(stringValue, parsedValue) => {
          const isValid = !!parsedValue;
          if (isValid) {
            setLiveFacts(parsedValue);
          }
        }} />
      }
      <GroupEditorCard
        hoverable={true}
        title={
          depth === 0 && index === 0 && <Space>
            <CardTitle color={isValidRule ? 'green' : 'darkred'}>Rule is {isValidRule ? 'valid' : 'invalid'}.</CardTitle>
            <CardTitle color={isValidRule?.pass ? 'green' : 'darkred'}>Rule is {isValidRule?.pass ? 'passing' : 'failing'}.</CardTitle>
          </Space>
        }
      >
        <GroupContainer>
          <div>
            <Select size={userSize} value={quantifier} options={quantfiers.map(q => ({ label: q, value: q }))} onChange={ev => setQuantifier(ev as Quantifiers)} style={{ width: '70px' }} />
            <Button size={userSize} icon={<PlusCircleOutlined />} title='add a group' onClick={() => addGroup()} />
            {extra && extra()}
          </div>
          <div>
            {ruleList.map((ruleEntry, ruleIndex) => Array.isArray(ruleEntry) ?
              (<FlexRow>
                <RuleEditorAntd
                  onUpdate={onRuleUpdate}
                  key={`${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`}
                  {...{ rule: ruleEntry, facts: liveFacts, index: ruleIndex, depth }}
                />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}}>
                  <Button size={userSize} icon={<PlusCircleOutlined />} title='add a rule' onClick={() => onAddRule(ruleIndex + 1)} />
                  {ruleIndex > 0 && <Button size={userSize} icon={<MinusCircleOutlined />} title='remove rule' onClick={() => onDeleteRule(ruleIndex)} />}
                </div>
              </FlexRow>) :
              (
                <RuleGroupEditorAntd
                  key={`${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`}
                  extra={(ruleIndex > 0 ? () => (
                    <Button 
                      size={userSize} 
                      title='remove group' 
                      onClick={() => onDeleteRule(ruleIndex)} 
                      icon={<MinusCircleOutlined />} />) : null)}
                  {...{
                    rules: ruleEntry as RuleGroup,
                    facts: liveFacts,
                    index: ruleIndex,
                    depth: (depth + 1),
                    onChange: (ruleGroup, i, parentIndex) => {
                      ruleList[ruleIndex] = ruleGroup
                      onChange({ [quantifier]: [...ruleList] }, i, parentIndex)
                    }
                  }}
                />

              )
            )}
          </div>
        </GroupContainer>
      </GroupEditorCard>
    </FlexRow>
  )
}

export const ICRulesEditorAntd = ({
  rules = {},
  facts = {},
  onChange = (r => null),
  options = {
    showFactsEditor: true,
    factsEditor: FactsEditorAntd
  }
}: ICRulesEditorProps) => {
  const [liveRules, setLiveRules] = useState(rules);
  const { showFactsEditor } = options;

  const onRuleChange = (latestRules: RuleGroup) => {
    onChange(latestRules);
    setLiveRules({ ...latestRules })
  }

  return (
    <RuleGroupEditorAntd {...{ rules: liveRules, facts, onChange: onRuleChange, showFactsEditor, FactsEditor: options.factsEditor }} />
  )
}

export default ICRulesEditorAntd;