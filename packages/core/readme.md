# ICRules

Intuitive Compact Rules

An extensible JavaScript rules engine with serialized compact JSON container with a React based rules editor to generate rules.

### Quick Start

```shell
# Install
npm i @icrules/core
```

Rules include a quantifier and a list of rules that are evaluated individually against the facts. 

Here is sample of what constructing a rule manually against a small set of facts would look like...
```TypeScript
import { processRule } from '@icrules/core';

const facts = { 
  market: 'en-US', 
  color: 'blue', 
  diameter: 10 
};

const rules = { 
  any: [
    ['market', 'eq', 'en-US'], 
    ['diameter', 'gt', 5]
  ] 
};

const result = processRule(facts, rules);

// result.pass is true if market is en-US and diameter is greater than 5
console.log(result.pass) 
```

### Rule Schema

The rules schema utilizes a compact human readable JSON compatible JavaScript model.

A Rule Group has a index key quatifier of `all` or `any` and referenecs a Rule or RuleGroup

A simple rule looks like this given facts are `{ grass: 'green' }`
```TypeScript
{ all: [['grass', 'eq', 'green']] }
  ^    ^  ^        ^     ^
  |    |  |        |     term => term that is evaluated against subject
  |    |  |        operator ===> evaluates condition
  |    |  subject           ===> reference facts field
  |    group                ===> allows us to combine multiple rules using the quantifier           
  quantifier                ===> evaluates rule list as "all" ([].every) or "any" ([].some)
```

More complex rules can be constructed with nested rule groups.

```TypeScript
// In the below rule the user must have selected language as "en" and 
// either must be signed-in or have a guestid 
const rule = { 
  all: [
    ['language', 'eq', 'en'],
    { 
      any: [
        ['signedin', 'eq', true], 
        ['guestid', 'eq', true]
      ]
    }
  ] 
}
```
> Note the JSON construct tends to be compact and easy to read using this schema. 

Using this scheme allows us to construct more complex rules. It's as simple as providing a list of rules for each quantifier to evaluate against the facts. Each quantifier references an array of rules or rule groups.

## ICRules API

### processRule()
```TypeScript
import { processRule, Facts, Rules, Plugin } from '@icrules/core';

const facts: Facts = {
  market: 'en-US', 
  signedIn: false
}

const rules: Rules = {
  all: [
    ['market', 'eq', 'en-US'],
    ['signedIn', 'eq', true],
  ]
}

const plugins = [] as Plugin[];
const results: ProcessResult = processRule(facts, rules, plugins);

if(results.pass){
  // do the thing that needs done
}
```

### processVerbose()

### ICRules() instance

## Extensibility

There is a plugin model that allows us to extend the results of the rules being processed. That plugin model is used internally to create a `verbosePlugin` result. 

```TypeScript
import { processRule } from '@icrules/core';

// sample facts
const facts = {
  language: 'en',
  signedin: false,
  guestid: true
}

// sample rule
const rule = { 
  all: [
    ['language', 'eq', 'en'],
    { 
      any: [
        ['signedin', 'eq', true], 
        ['guestid', 'eq', true]
      ]
    }
  ] 
};

// the verbose plugin is fairly basic in that it simply returns the 
// values sent in on each level with zero logic, filters and processing
const verbosePlugin = ({ pass, rule, group }) => ({ pass, rule, group });
const processResult = processRule(facts, rule, [verbosePlugin]);

```
The plugin or plugins are processed for each rule and group evaluated.

With no plugin, `processResult` value would simply be `{ pass: true }`.

With the verbose plugin it will return each rule evaluated `{ rule }` and if it passed or failed `{ pass }` along with each group evaluated `{ group }`. We can use this information to evaluate which rules are passing/failing to debug the facts/rules used. This is what the editor uses to inform the user what rules and groups are passing in real time against facts while creating rules.

The results from the verbose plugin look like this...
```JavaScript
{
  "pass": true,
  "rule": {
    "all": [
      ["language", "eq","en"],
      {
        "any": [
          ["signedin", "eq", true ],
          ["guestid",  "eq", true ]
        ]
      }
    ]
  },
  "group": { // group gives us insights into all rules evaluated
    "all": [
      {
        "pass": true,
        "rule": ["language", "eq", "en"]
      },
      {
        "pass": true, 
        "rule": {
          "any": [
            ["signedin", "eq", true],
            ["guestid",  "eq", true]
          ]
        },
        "group": {
          "any": [
            {
              "pass": false, // <-- this is the only evalutation that failed
              "rule": ["signedin", "eq", true]
            },
            {
              "pass": true,
              "rule": ["guestid", "eq", true]
            }
          ],
          "pass": true // <-- this group passed 
        }
      }
    ],
    "pass": true // <-- this parent or root group passed 
  }
}
```

Here are the Rule and RuleGroup types might help one understand the schema construct a bit better.
```TypeScript
export type Subject = string;
export type Term = any;
export type Rule = [Subject, Operator, Term];
export type Quantifiers = 'all' | 'any';
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nit';
export type Rules = (Rule | RuleGroup)[];
export type RuleGroup = { all?: Rules, any?: Rules };
```

### Using the Operators
The editor uses these labels to each operator which better explain the general usage of operators

|operator|label|JS|
|---|---|---|
eq   | equals        | ===
neq  | not equals    | !==
lt   | less than     | <
lte  | less or equal | <=
gt   | greater than  | >
gte  | greater or equal | >=
has  | contains      | fact.includes
nhas | not contains  | !fact.includes
in   | in term       | term.includes
nit  | not in term   | !term.includes

**Examples**

### Plugin support

