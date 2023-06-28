import { useEffect, useState } from 'react';
import { ICRulesEditorProps, RuleEditorProps, RuleGroupEditorProps } from '.';
import { Operator, operators, Quantifiers, Rule, RuleGroup } from '@icrules/core';
import './editorStyle.css';

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
  nin: 'not in term'
};

let lastId = null;

const RuleEditor = ({
  facts = {},
  rule = ['', 'eq', ''],
  onUpdate = (rule, index) => { },
  index = 0,
  depth = 0
}: RuleEditorProps) => {
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

  return (
    <div className='rule-editor' key={key}>
      <div key={'rule-fact'} className="rule-entry rule-fact">
        <input
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
        <datalist id={listId}>
          {factKeys.map(key => (<option value={key} />))}
        </datalist>
      </div>
      <div key={'rule-op'} className="rule-entry rule-op">
        <select value={operator} onChange={ev => setEditRule([factKey, (ev.target.value as Operator), term])}>
          {operators.map(op => <option value={op}>{opMap[op]}</option>)}
        </select>
      </div>
      <div key={'rule-term'} className="rule-entry rule-term">
        <input type='text'
          id={valueId}
          value={term}
          autoFocus={lastId === valueId}
          onChange={ev => {
            lastId = ev.target.id;
            setEditRule([factKey, operator, ev.target.value])
          }
          } />
      </div>
    </div>
  )
}

const RuleGroupEditor = ({ facts = {}, rules = {}, onChange = r => { }, depth = 0, index = 0 }: RuleGroupEditorProps) => {
  const [quantfiers] = useState(['all', 'any'] as Quantifiers[]);
  const [quantifier, setQuantifier] = useState((rules.all ? 'all' : 'any') as Quantifiers);
  const [liveRules, setLiveRules] = useState(rules);
  const [ruleList, setLiveRuleList] = useState([...(liveRules.all || liveRules.any)]);
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
    onChange({ [quantifier]: [...ruleList] }, 0, index);
  }, [quantifier])

  return (
    <div className="rule-group-editor" key={`group-edit-${index}-${depth}`}>
      <div className="rule-entry quantifier">
        <select value={quantifier} onChange={ev => setQuantifier(ev.target.value as Quantifiers)}>
          {quantfiers.map(q => (<option value={q}>{q}</option>))}
        </select>
        <button className="add-group" title='add a group' onClick={() => addGroup()}>++</button>
      </div>
      <div className="rule-list">
        {ruleList.map((ruleEntry, ruleIndex) => Array.isArray(ruleEntry) ?
          (<div className="editor-wrap">
            <RuleEditor
              onUpdate={onRuleUpdate}
              key={`${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`}
              {...{ rule: ruleEntry, facts, index: ruleIndex, depth }}
            />
            <div className="addrule">
              <button title='add a rule' onClick={() => onAddRule(ruleIndex + 1)}>+</button>
              {ruleIndex > 0 && <button title='remove rule' onClick={() => onDeleteRule(ruleIndex)}>-</button>}
            </div>
          </div>) :
          (<div className="editor-wrap">
            <RuleGroupEditor
              key={`${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`}
              {...{ rules: ruleEntry as RuleGroup, facts, index: ruleIndex, depth: (depth + 1), onChange: (ruleGroup, i, parentIndex) => {
                ruleList[ruleIndex] = ruleGroup
                onChange({ [quantifier]: [...ruleList] }, i, ruleIndex)
              } }}
            />
            <div className="addgroup">
              {ruleIndex > 0 && <button title='remove group' onClick={() => onDeleteRule(ruleIndex)}>--</button>}
            </div>
          </div>)
        )}  
      </div>
    </div>
  )
}

export const ICRulesEditor = ({ rules = {}, facts = {}, onChange = r => null }: ICRulesEditorProps) => {
  const [liveRules, setLiveRules] = useState(rules);

  const onRuleChange = (latestRules: RuleGroup) => {
    onChange(latestRules);
    setLiveRules({ ...latestRules })
  }

  return (
    <RuleGroupEditor {...{ rules: liveRules, facts, onChange: onRuleChange }} />
  )
}

export default ICRulesEditor;
