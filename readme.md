# ICRules

Intuitive Compact Rules

An extensible JavaScript rules engine with serialized compact JSON container and optional React based rules editor.

### Quick Start

```shell
# Install
npm i icrules
```

Rules include a quantifier and a list of rules that are evaluated individually against the facts.
```JavaScript
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
  ^       ^        ^     ^
  |       |        |     term => term that is evaluated against subject
  |       |        operator ===> evaluates condition
  |       subject           ===> reference facts field
  quantifier                ===> evaluates rule list as "all" ([].every) or "any" ([].some)
```

More complex rules can be constructed with nested rule groups.

```TypeScript
// In the below rule the user 
// must have selected language as "en" and 
// either must be signed-in or have a guestid 
{ 
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
> Note how compact the rule is and how easy it is to read.

You now have the tools to construct more complex rules. 
It's as simple as providing a list of rules for each quantifier to evaluate against the facts. Each quantifier references an array of rules or rule groups.

Rule and RuleGroup types for a better understanding of the schema.
```TypeScript
export type Subject = string;
export type Term = any;
export type Rule = [Subject, Operator, Term];
export type Quantifiers = 'all' | 'any';
export type Operator = 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte' | 'has' | 'nhas' | 'in' | 'nin';
export type Rules = (Rule | RuleGroup)[];
export type RuleGroup = { all?: Rules, any?: Rules };
```

### ICRules API

## processRule()
```
import { processRule } from '@icrules/core';
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
has  | contains      | fact includes
nhas | not contains  | fact !includes
in   | in term       | term includes
nin  | not in term   | term !includes

**Examples**

### Plugin support

