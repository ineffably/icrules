import { useEffect, useState } from 'react';
import { FactsEditorProps, ICRulesEditorProps, RuleEditorProps, RuleGroupEditorProps, opMap, safeParse } from '.';
import { Operator, operators, processRuleOrGroup, processVerbose, Quantifiers, Rule, RuleGroup } from '@icrules/core';
import './editorStyle.css';

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

  const result = processRuleOrGroup(facts, liveRule)

  return (
    <div key={key} className='rule-editor'>
      <div className="rule-result">{result.pass ? <span className="pass">&#10003;</span> : <span  className="fail">&#x2715;</span>}</div>
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
        <input
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
    </div>
  )
}

const RuleGroupEditor = ({
  facts = {},
  rules = {},
  onChange = r => { },
  depth = 0,
  index = 0,
  showFactsEditor = true
}: RuleGroupEditorProps) => {
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
    <div className="rule-group-editor" key={`group-edit-${index}-${depth}`}>
      {showFactsEditor && depth === 0 && index === 0 && <div>
        <FactsEditor object={liveFacts} onChange={(value, isValid) => {
          if (isValid) {
            setLiveFacts(value);
          }
        }} />
      </div>}
      <div>
        {depth === 0 && index === 0 && <div className='facts-status'>
          <span style={{ color: isValidRule ? 'green' : 'darkred' }}>Rule is {isValidRule ? 'valid' : 'invalid'}. </span>
          <span style={{ color: isValidRule?.pass ? 'green' : 'darkred' }}>Rule is {isValidRule?.pass ? 'passing' : 'failing'}. </span>
        </div>}
        <div className="rules">
          <div className="rule-entry quantifier">
            <div className="check-mark">
            {isValidRule?.pass ? <span className='pass'>&#x2611;</span> : <span className='fail'>&#9746;</span>} 
            </div>
            <select value={quantifier} onChange={ev => setQuantifier(ev.target.value as Quantifiers)}>
              {quantfiers.map(q => (<option value={q}>{q}</option>))}
            </select>
            <div>
              <button className="add-group" title='add a group' onClick={() => addGroup()}>&#x2795;</button>
            </div>
          </div>
          <div className="rule-list">
            {ruleList.map((ruleEntry, ruleIndex) => Array.isArray(ruleEntry) ?
              (<div className="editor-wrap">
                <RuleEditor
                  onUpdate={onRuleUpdate}
                  key={`${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`}
                  {...{ rule: ruleEntry, facts: liveFacts, index: ruleIndex, depth }}
                />
                <div className="addrule">
                  <button title='add a rule' onClick={() => onAddRule(ruleIndex + 1)}>+</button>
                  {ruleIndex > 0 && <button title='remove rule' onClick={() => onDeleteRule(ruleIndex)}>-</button>}
                </div>
              </div>) :
              (<div className="editor-wrap">
                <RuleGroupEditor
                  key={`${JSON.stringify(ruleEntry)}-${ruleIndex}-${depth}`}
                  {...{
                    rules: ruleEntry as RuleGroup, facts, index: ruleIndex, depth: (depth + 1), onChange: (ruleGroup, i, parentIndex) => {
                      ruleList[ruleIndex] = ruleGroup
                      onChange({ [quantifier]: [...ruleList] }, i, parentIndex)
                    }
                  }}
                />
                <div className="remove-group-cell">
                  {ruleIndex > 0 && <button className='remove-group' title='remove group' onClick={() => onDeleteRule(ruleIndex)}>&#x2796;</button>}
                </div>
              </div>)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export const ICRulesEditor = ({
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
    <RuleGroupEditor {...{ rules: liveRules, facts, onChange: onRuleChange, showFactsEditor }} />
  )
}

export const FactsEditor = ({ object, onChange = () => null }: FactsEditorProps) => {
  const [activeObject, setActiveObject] = useState(JSON.stringify(object, null, 2));
  const parsedValue = safeParse(activeObject);

  return (
    <div>
      <div className='facts-status' style={{ color: parsedValue ? 'green' : 'darkred' }}>
        Facts are {parsedValue ? 'valid' : 'invalid'}
      </div>
      <textarea
        title='enter your facts here'
        onChange={ev => {
          setActiveObject(ev.target.value);
          onChange(ev.target.value, parsedValue !== false)
        }}
        style={{ width: '300px', height: '300px' }}
        value={activeObject}>
      </textarea>
    </div>
  )
}

export default ICRulesEditor;
