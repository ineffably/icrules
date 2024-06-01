/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type Facts, type RuleGroup, type PluginArgs,
  verbosePlugin, processRules, processVerbose, validateRule,
  processRuleOrGroup
} from '../src';

describe('icrules verification', () => {
  const facts = {
    sky: 'blue',
    count: 32,
    id: '123456',
    colors: ['red', 'green', 'blue'],
    months: [4, 5, 6],
    market: 'en-US',
    markets: ['en-CA', 'en-US'],
    'name.last': 'Smith',
    selectedProfile: {
      profileId: '1234',
      name: 'Jack',
      products: 20,
      background: {
        color: 'blue'
      }
    }
  };

  const serializedFacts = JSON.stringify(facts);
  const hydratedFacts = JSON.parse(serializedFacts);

  describe('validateRule function', () => {
    it('should validate rules correctly', () => {
      expect(validateRule().isValid).toBe(false);
      expect(validateRule({ all: [['sky', 'eq', 'blue']] }).isValid).toBe(true);
      expect(validateRule({ all: [['sky', 'eq', null]] }).isValid).toBe(true);
      expect(validateRule({ all: [['sky', 'eq', '']] }).isValid).toBe(true);
      expect(validateRule({}).isValid).toBe(false);
      expect(validateRule(null as any).isValid).toBe(false);
      expect(validateRule({ all: [] }).isValid).toBe(false);
      expect(validateRule({ any: [['field']] as any[] }).isValid).toBe(false);
      expect(validateRule({ any: [[null, null]] as any[] }).isValid).toBe(false);
      expect(validateRule({ any: ['xyz', 'asdf', '123'] as any[] }).isValid).toBe(false);
      expect(validateRule({ any: [['xyz', 'asdf', '123']] as any[] }).isValid).toBe(false);
      expect(validateRule({
        all: [
          ['sky', 'eq', 'blue'],
          ['count', 'eq', 32],
          { any: [['grass', 'eq', 'green']] }
        ]
      }).isValid).toBe(true);
      expect(validateRule({
        all: [
          ['sky', 'eq', 'blue'],
          ['count', 'eq', 32],
          { any: ['grass', 'eq', 'green'] as any[] }
        ]
      }).isValid).toBe(false);
    })
  })

  describe('basic operation and instance validation', () => {
    it('should process a single rule group using basic eq tests', () => {
      expect(processRules(facts, { all: [['sky', 'eq', 'blue']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['sky', 'eq', 'green']] }).pass).toBe(false);
      expect(processRules(facts, { any: [['sky', 'eq', 'blue']] }).pass).toBe(true);
      expect(processRules(facts, { any: [['sky', 'eq', 'green']] }).pass).toBe(false);
    });

    it('should allow calls directly to processRuleOrGroup', () => {
      expect(() => processRuleOrGroup({}, {})).toThrow();
      expect(processRuleOrGroup(facts, { all: [['sky', 'eq', 'blue']] }).pass).toBe(true);
    })

    it('should fail if the rule group is invalid', () => {
      expect(() => processRules()).toThrow();
      expect(() => processRules(facts, { some: [['sky', 'eq', 'blue']] } as any)).toThrow();
      expect(() => processRules(facts, [['sky', 'eq', 'blue']] as any)).toThrow();
      expect(() => processRules(facts, { all: [['sky']] } as any)).toThrow();
      expect(() => processRules(facts, { all: [['sky', 'eq']] } as any)).toBeDefined(); // term is undefined if excluded
    });

    it('should fail if the facts are invalid', () => {
      expect(processRules(undefined, { all: [['sky', 'eq', 'blue']] } as any).pass).toBe(false);
      // forcing null as a Facts type
      expect(processRules(null as unknown as Facts, { all: [['sky', 'eq', 'blue']] } as any).pass).toBe(false);
    });

    it('should process all and any quantifiers against multiple rules in a single RuleGroup', () => {
      expect(processRules(facts, { all: [['sky', 'eq', 'blue'], ['count', 'eq', 32]] }).pass).toBe(true);
      expect(processRules(facts, { any: [['sky', 'eq', 'blue'], ['count', 'eq', 0]] }).pass).toBe(true);
      expect(processRules(facts, { any: [['sky', 'eq', 'blue'], ['count', 'eq', 32]] }).pass).toBe(true);

      expect(processRules(facts, { all: [['sky', 'eq', 'blue'], ['count', 'eq', 0]] }).pass).toBe(false);
      expect(processRules(facts, { any: [['sky', 'eq', 'green'], ['count', 'eq', 0]] }).pass).toBe(false);
      expect(processRules(facts, { any: [['sky', 'neq', 'green'], ['count', 'eq', 0]] }).pass).toBe(true);
    })

    it('should process nested RuleGroups', () => {
      expect(processRules(facts, {
        all: [['sky', 'neq', 'green'], {
          all: [['sky', 'eq', 'blue'], ['count', 'eq', 32]]
        }]
      }).pass).toBe(true);
    })
  })

  describe('should utilize eq and neq operators', () => {
    it('should infer the term type based on the fact type', () => {
      expect(processRules(facts, { all: [['count', 'eq', '32']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['count', 'eq', 32]] }).pass).toBe(true);
      expect(processRules(facts, { all: [['id', 'eq', 123456]] }).pass).toBe(false);
      expect(processRules(facts, { all: [['id', 'eq', '123456']] }).pass).toBe(true);
    })
  })

  describe('should utilize eq and neq operators', () => {
    it('should process eq and neq rules against facts with expected results', () => {
      expect(processRules(facts, { all: [['sky', 'eq', 'blue']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['sky', 'neq', 'blue']] }).pass).toBe(false);
      expect(processRules(facts, { all: [['sky', 'eq', 'green']] }).pass).toBe(false);

      expect(processRules(facts, { all: [['sky', 'eq', 0]] }).pass).toBe(false);
      expect(processRules(facts, { all: [['count', 'neq', 0]] }).pass).toBe(true);

      // with eq types are compared with inferred values
      expect(processRules(facts, { all: [['count', 'neq', '0']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['count', 'eq', '32']] }).pass).toBe(true);

      // let's try with hydrating serialized facts...
      expect(processRules(hydratedFacts, { all: [['count', 'neq', 0]] }).pass).toBe(true);
      expect(processRules(hydratedFacts, { all: [['count', 'neq', '0']] }).pass).toBe(true);
      expect(processRules(hydratedFacts, { all: [['count', 'eq', '32']] }).pass).toBe(true);
    })
  });

  describe('should utilize gt,lt,lte and gte operators', () => {
    it('should process gt/lt gte/lte against strings', () => {
      expect(processRules(facts, { all: [['sky', 'gt', 'green']] }).pass).toBe(false);
      expect(processRules(facts, { all: [['sky', 'lt', 'green']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['sky', 'lt', 'blue']] }).pass).toBe(false);
      expect(processRules(facts, { all: [['sky', 'gt', 'blue']] }).pass).toBe(false);

      expect(processRules(facts, { all: [['sky', 'gte', 'blue']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['sky', 'lte', 'blue']] }).pass).toBe(true);
    })

    it('should process gt, lt, gte and lte against numeric values', () => {
      expect(processRules(facts, { all: [['count', 'gt', 32]] }).pass).toBe(false);
      expect(processRules(facts, { all: [['count', 'lt', 32]] }).pass).toBe(false);
      expect(processRules(facts, { all: [['count', 'gt', 3]] }).pass).toBe(true);
      expect(processRules(facts, { all: [['count', 'lt', 322]] }).pass).toBe(true);
      expect(processRules(facts, { all: [['count', 'lte', 32]] }).pass).toBe(true);
      expect(processRules(facts, { all: [['count', 'gte', 32]] }).pass).toBe(true);

      // gt and ls are soft equivalents, numbers are compared against strings
      expect(processRules(facts, { all: [['count', 'gt', '32']] }).pass).toBe(false);
      expect(processRules(facts, { all: [['count', 'lt', '32']] }).pass).toBe(false);
      expect(processRules(facts, { all: [['count', 'lte', '32']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['count', 'gte', '32']] }).pass).toBe(true);
    })
  })

  describe('should process has, nhas, in and nit with expected results', () => {
    it('should process has/nhas against strings and collections', () => {
      // has allthethings
      expect(processRules(facts, { all: [['sky', 'has', 'lu']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['months', 'has', 12]] }).pass).toBe(false);
      expect(processRules(facts, { all: [['months', 'has', 5]] }).pass).toBe(true);

      expect(processRules(facts, { all: [['markets', 'has', 'en-CA']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['markets', 'has', 'fr-CA']] }).pass).toBe(false);

      // nhas allthethings
      expect(processRules(facts, { all: [['sky', 'nhas', 'lu']] }).pass).toBe(false);
      expect(processRules(facts, { all: [['months', 'nhas', 12]] }).pass).toBe(true);
      expect(processRules(facts, { all: [['months', 'nhas', 5]] }).pass).toBe(false);
      expect(processRules(facts, { all: [['markets', 'nhas', 'en-CA']] }).pass).toBe(false);
      expect(processRules(facts, { all: [['markets', 'nhas', 'fr-CA']] }).pass).toBe(true);

      // mixed types always fail
      expect(processRules(facts, { all: [['count', 'has', 'lu']] }).pass).toBe(false);
      expect(processRules(facts, { all: [['count', 'nhas', 'lu']] }).pass).toBe(false);
    })

    it('should process fact value against rule value', () => {
      expect(processRules(facts, { all: [['sky', 'in', ['blue', 'black']]] }).pass).toBe(true);
      expect(processRules(facts, { all: [['sky', 'in', ['cyan', 'black']]] }).pass).toBe(false);

      expect(processRules(facts, { all: [['sky', 'in', 'bluegreenred']] }).pass).toBe(true);
      expect(processRules(facts, { all: [['sky', 'in', 'green']] }).pass).toBe(false);
    })
  })

  describe('verbose plugin and other plugins', () => {

    it('should throw for processVerbose for the same issues as processRules', () => {
      expect(() => processVerbose(facts, {})).toThrow();
      expect(() => processVerbose({} as Facts, {} as RuleGroup)).toThrow();
    });

    it('should allow verbose processing using the intrinsic verbose plugin through processVerbose', () => {
      const processResult = processVerbose(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] });
      expect(processResult.pass).toBe(false);
      expect(processResult.group.pass).toBe(false);
      expect(processResult.group.all[0].pass).toBe(true);
      expect(processResult.group.all[1].pass).toBe(false);
    });

    it('should see verbose results using the internal verbosePlugin through process', () => {
      const processResult = processRules(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, { plugins: [verbosePlugin] });
      expect(processResult.pass).toBe(false);
      expect(processResult.group.pass).toBe(false);
      expect(processResult.group.all[0].pass).toBe(true);
      expect(processResult.group.all[1].pass).toBe(false);
    });

    it('should be able to use the verbose plugin manually', () => {
      const facts1 = {
        language: 'en',
        signedin: false,
        guestid: true
      }

      const rule1 = {
        all: [
          ['language', 'eq', 'en'],
          {
            any: [
              ['signedin', 'eq', true],
              ['guestid', 'eq', true]
            ]
          }
        ]
      } as RuleGroup

      const results = processRules(facts1, rule1, { plugins: [verbosePlugin] });
      expect(results.pass).toBe(true);
    });


    it('should process a custom plugin', () => {
      const ruleCounts = {
        count: 0,
        groupCount: 0,
        plugin: ({ pass, group }: PluginArgs) => {
          ruleCounts.count++;
          if (group) {
            ruleCounts.groupCount++;
          }
          return ({ pass, count: ruleCounts.count, groupCount: ruleCounts.groupCount })
        }
      }
      const processResult = processRules(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, { plugins: [ruleCounts.plugin] });
      expect(processResult.pass).toBe(false);
      expect(processResult.count).toBe(3);
      expect(processResult.groupCount).toBe(1);
    });

    it('should allow the plugin to change the outcome', () => {
      const alwaysTrue = () => ({ pass: true })
      const trueResults = processRules(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, { plugins: [alwaysTrue] });
      expect(trueResults.pass).toBe(true);
      expect(Object.keys(trueResults).length).toBe(1);
      expect(Object.keys(trueResults)[0]).toBe('pass');
    })

    it('should allow a plugin that just changest the group outcome', () => {
      const alwaysTrue = ({ group, pass }: PluginArgs) => ({ pass: group ? true : pass });
      const trueResults = processRules(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, { plugins: [alwaysTrue] });
      expect(trueResults.pass).toBe(true);
      expect(Object.keys(trueResults).length).toBe(1);
      expect(Object.keys(trueResults)[0]).toBe('pass');
    })

    it('should still process a plugin that returns null, undefined, empty object', () => {
      const justNull = () => null as any;
      const justUndefined = () => undefined as any;
      const justEmptyObject = () => ({} as any)
      const justNumber = () => (1 as any)

      const nullPlugin = processRules(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, { plugins: [justNull] });
      expect(nullPlugin.pass).toBe(false);
      expect(Object.keys(nullPlugin).length).toBe(1);
      expect(Object.keys(nullPlugin)[0]).toBe('pass');

      const undefinedPlugin = processRules(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, { plugins: [justUndefined] });
      expect(undefinedPlugin.pass).toBe(false);
      expect(Object.keys(undefinedPlugin).length).toBe(1);
      expect(Object.keys(undefinedPlugin)[0]).toBe('pass');

      const emptyObjectPlugin = processRules(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, { plugins: [justEmptyObject] });
      expect(emptyObjectPlugin.pass).toBe(false);
      expect(Object.keys(emptyObjectPlugin).length).toBe(1);
      expect(Object.keys(emptyObjectPlugin)[0]).toBe('pass');

      const numberPlugin = processRules(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, { plugins: [justNumber] });
      expect(numberPlugin.pass).toBe(false);
      expect(Object.keys(numberPlugin).length).toBe(1);
      expect(Object.keys(numberPlugin)[0]).toBe('pass');
    });

  })

  describe('rules should query facts with objects', () => {

    it('should allow you to query arrays', () => {
      const facts = {
        user: {
          name: 'Jack',
          roles: ['admin', 'user'],
          permissions: ['read', 'write'],
          expirations: [
            { name: 'sub2', expiresInDays: 20 },
            { name: 'sub3', expiresInDays: 10 },
            { name: 'sub1', expiresInDays: 120 },
          ]
        }
      }

      const testRule = {
        all: [
          ['user.roles', 'has', 'admin'],
          ['user.permissions', 'has', 'read'],
          ['user.expirations', 'has', { any: ['expiresInDays', 'lte', 30] }]
        ]
      } as RuleGroup

      processRules(facts, testRule);
      // expect(processRules(facts, testRule).pass).toBe(true);
    })


    it('should be able to query a fact with an object value and have a distinction between object and fields with dots', () => {
      expect(processRules(facts, { any: [['selectedProfile.background.color', 'eq', 'blue']] }).pass).toBe(true);
      expect(processRules(facts, { any: [['selectedProfile.products', 'lt', 25]] }).pass).toBe(true);
      expect(processRules(facts, { any: [['selectedProfile.products', 'lt', '25']] }).pass).toBe(true);
      expect(processRules(facts, { any: [['selectedProfile.products', 'gt', '15']] }).pass).toBe(true);
      expect(processRules(facts, { any: [['selectedProfile.products', 'gt', 15]] }).pass).toBe(true);
      expect(processRules(facts, { any: [['selectedProfile.products', 'lt', 15]] }).pass).toBe(false);
      expect(processRules(facts, { any: [['selectedProfile.products', 'neq', 15]] }).pass).toBe(true);
      expect(processRules(facts, { any: [['selectedProfile.language', 'eq', 'en']] }).pass).toBe(false);

      // non-existent should still not pass
      expect(processRules(facts, { any: [['blahblah.nothinghere', 'lt', 25]] }).pass).toBe(false);

      // should distinguish between fields with dots and objects
      expect(processRules(facts, { any: [['name.last', 'eq', 'Smith']] }).pass).toBe(true);
      expect(processRules(facts, { any: [['name.last', 'eq', 'Wilson']] }).pass).toBe(false);
    })
  })

  describe('should handle special plugin operators', () => {

    it('should use a custom operator from a plugin', () => {
      const operators = {
        startsWith: ({ value, term }) => value.startsWith(term),
        endsWith: ({ value, term }) => value.endsWith(term)
      }

      expect(processRules(facts, { all: [['sky', 'startsWith', 'bl']] }, { operators }).pass).toBe(true);
      expect(processRules(facts, { all: [['sky', 'endsWith', 'ue']] }, { operators }).pass).toBe(true);
    });

  })
});
