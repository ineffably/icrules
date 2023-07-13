import ICRulesDefault, { ICRules, verbosePlugin } from '../src';

describe('icrules verification', () => {
  const { process, processVerbose } = ICRules;
  const facts = {
    sky: 'blue',
    count: 32,
    colors: ['red', 'green', 'blue'],
    months: [4, 5, 6],
    market: 'en-US',
    markets: ['en-CA', 'en-US']
  };

  const serializedFacts = JSON.stringify(facts);
  const hydratedFacts = JSON.parse(serializedFacts);

  describe('basic operation and instance validation', () => {
    it('should process a single rule group using basic eq tests', () => {
      expect(process(facts, { all: [['sky', 'eq', 'blue']] }).pass).toBe(true);
      expect(process(facts, { all: [['sky', 'eq', 'green']] }).pass).toBe(false);
      expect(process(facts, { any: [['sky', 'eq', 'blue']] }).pass).toBe(true);
      expect(process(facts, { any: [['sky', 'eq', 'green']] }).pass).toBe(false);
    });

    it('should fail if the rule group is invalid', () => {
      expect(process(facts, [['sky', 'eq', 'blue']] as any).pass).toBe(false);
      expect(process(facts, { some: [['sky', 'eq', 'blue']] } as any).pass).toBe(false);
    });

    it('should process all and any quantifiers against multiple rules in a single RuleGroup', () => {
      expect(process(facts, { all: [['sky', 'eq', 'blue'], ['count', 'eq', 32]] }).pass).toBe(true);
      expect(process(facts, { any: [['sky', 'eq', 'blue'], ['count', 'eq', 0]] }).pass).toBe(true);
      expect(process(facts, { any: [['sky', 'eq', 'blue'], ['count', 'eq', 32]] }).pass).toBe(true);

      expect(process(facts, { all: [['sky', 'eq', 'blue'], ['count', 'eq', 0]] }).pass).toBe(false);
      expect(process(facts, { any: [['sky', 'eq', 'green'], ['count', 'eq', 0]] }).pass).toBe(false);
      expect(process(facts, { any: [['sky', 'neq', 'green'], ['count', 'eq', 0]] }).pass).toBe(true);
    })

    it('should also process as expected as an instance', () => {
      const withInstance = (icRuleInstance: ICRules) => {
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'blue']] }).pass).toBe(true);
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'green']] }).pass).toBe(false);
        expect(icRuleInstance.exec({ all: [['sky', 'neq', 'green']] }).pass).toBe(true);

        // use other facts
        icRuleInstance.setFacts({ ocean: 'green' })
        expect(icRuleInstance.exec({ all: [['ocean', 'eq', 'green']] }).pass).toBe(true);

        // should allow the user to update facts
        icRuleInstance.setFacts({ sky: 'black' })
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'black']] }).pass).toBe(true);
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'blue']] }).pass).toBe(false);
      }
      withInstance(new ICRules(facts));
      withInstance(new ICRulesDefault(facts));
    })

    it('should process nested RuleGroups', () => {
      expect(process(facts, {
        all: [['sky', 'neq', 'green'], {
          all: [['sky', 'eq', 'blue'], ['count', 'eq', 32]]
        }]
      }).pass).toBe(true);
    })
  })

  describe('should utilize eq and neq operators', () => {
    it('should process eq and neq rules against facts with expected results', () => {
      expect(process(facts, { all: [['sky', 'eq', 'blue']] }).pass).toBe(true);
      expect(process(facts, { all: [['sky', 'neq', 'blue']] }).pass).toBe(false);
      expect(process(facts, { all: [['sky', 'eq', 'green']] }).pass).toBe(false);

      expect(process(facts, { all: [['sky', 'eq', 0]] }).pass).toBe(false);
      expect(process(facts, { all: [['count', 'neq', 0]] }).pass).toBe(true);

      // with eq types are compared
      expect(process(facts, { all: [['count', 'neq', '0']] }).pass).toBe(true);
      expect(process(facts, { all: [['count', 'eq', '32']] }).pass).toBe(false);

      // let's try with hydrating serialized facts...
      expect(process(hydratedFacts, { all: [['count', 'neq', 0]] }).pass).toBe(true);
      expect(process(hydratedFacts, { all: [['count', 'neq', '0']] }).pass).toBe(true);
      expect(process(hydratedFacts, { all: [['count', 'eq', '32']] }).pass).toBe(false);
    })
  });

  describe('should utilize gt,lt,lte and gte operators', () => {
    it('should process gt/lt gte/lte against strings', () => {
      expect(process(facts, { all: [['sky', 'gt', 'green']] }).pass).toBe(false);
      expect(process(facts, { all: [['sky', 'lt', 'green']] }).pass).toBe(true);
      expect(process(facts, { all: [['sky', 'lt', 'blue']] }).pass).toBe(false);
      expect(process(facts, { all: [['sky', 'gt', 'blue']] }).pass).toBe(false);

      expect(process(facts, { all: [['sky', 'gte', 'blue']] }).pass).toBe(true);
      expect(process(facts, { all: [['sky', 'lte', 'blue']] }).pass).toBe(true);
    })

    it('should process gt, lt, gte and lte against numeric values', () => {
      expect(process(facts, { all: [['count', 'gt', 32]] }).pass).toBe(false);
      expect(process(facts, { all: [['count', 'lt', 32]] }).pass).toBe(false);
      expect(process(facts, { all: [['count', 'gt', 3]] }).pass).toBe(true);
      expect(process(facts, { all: [['count', 'lt', 322]] }).pass).toBe(true);
      expect(process(facts, { all: [['count', 'lte', 32]] }).pass).toBe(true);
      expect(process(facts, { all: [['count', 'gte', 32]] }).pass).toBe(true);

      // gt and ls are soft equivalents, numbers are compared against strings
      expect(process(facts, { all: [['count', 'gt', '32']] }).pass).toBe(false);
      expect(process(facts, { all: [['count', 'lt', '32']] }).pass).toBe(false);
      expect(process(facts, { all: [['count', 'lte', '32']] }).pass).toBe(true);
      expect(process(facts, { all: [['count', 'gte', '32']] }).pass).toBe(true);
    })
  })

  describe('should process has, nhas, in and nin with expected results', () => {
    it('should process has/nhas against strings and collections', () => {
      // has allthethings
      expect(process(facts, { all: [['sky', 'has', 'lu']] }).pass).toBe(true);
      expect(process(facts, { all: [['months', 'has', 12]] }).pass).toBe(false);
      expect(process(facts, { all: [['months', 'has', 5]] }).pass).toBe(true);

      expect(process(facts, { all: [['markets', 'has', 'en-CA']] }).pass).toBe(true);
      expect(process(facts, { all: [['markets', 'has', 'fr-CA']] }).pass).toBe(false);

      // nhas allthethings
      expect(process(facts, { all: [['sky', 'nhas', 'lu']] }).pass).toBe(false);
      expect(process(facts, { all: [['months', 'nhas', 12]] }).pass).toBe(true);
      expect(process(facts, { all: [['months', 'nhas', 5]] }).pass).toBe(false);
      expect(process(facts, { all: [['markets', 'nhas', 'en-CA']] }).pass).toBe(false);
      expect(process(facts, { all: [['markets', 'nhas', 'fr-CA']] }).pass).toBe(true);

      // mixed types always fail
      expect(process(facts, { all: [['count', 'has', 'lu']] }).pass).toBe(false);
      expect(process(facts, { all: [['count', 'nhas', 'lu']] }).pass).toBe(false);
    })

    it('should process fact value against rule value', () => {
      expect(process(facts, { all: [['sky', 'in', ['blue', 'black']]] }).pass).toBe(true);
      expect(process(facts, { all: [['sky', 'in', ['cyan', 'black']]] }).pass).toBe(false);

      expect(process(facts, { all: [['sky', 'in', 'bluegreenred']] }).pass).toBe(true);
      expect(process(facts, { all: [['sky', 'in', 'green']] }).pass).toBe(false);
    })
  })

  describe('verbose plugin and other plugins', () => {

    it('should allow verbose processing using the intrinsic verbose plugin through processVerbose', () => {
      const processResult = processVerbose(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] });
      expect(processResult.pass).toBe(false);
      expect(processResult.group.pass).toBe(false);
      expect(processResult.group.all[0].pass).toBe(true);
      expect(processResult.group.all[1].pass).toBe(false);
    });

    it('should see verbose results using the internal verbosePlugin through process', () => {
      const processResult = process(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, [verbosePlugin]);
      expect(processResult.pass).toBe(false);
      expect(processResult.group.pass).toBe(false);
      expect(processResult.group.all[0].pass).toBe(true);
      expect(processResult.group.all[1].pass).toBe(false);
    });

    it('should process a custom plugin', () => {
      const ruleCounts = {
        count: 0,
        groupCount: 0,
        plugin: ({ pass, group }) => {
          ruleCounts.count++;
          if (group) {
            ruleCounts.groupCount++;
          }
          return ({ pass, count: ruleCounts.count, groupCount: ruleCounts.groupCount })
        }
      }
      const processResult = process(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, [ruleCounts.plugin]);
      expect(processResult.pass).toBe(false);
      expect(processResult.count).toBe(3);
      expect(processResult.groupCount).toBe(1);
    });

    it('should allow the plugin to change the outcome', () => {
      const alwaysTrue = () => ({ pass: true })
      const trueResults = process(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, [alwaysTrue]);
      expect(trueResults.pass).toBe(true);
      expect(Object.keys(trueResults).length).toBe(1);
      expect(Object.keys(trueResults)[0]).toBe('pass');
    })

    it('should allow a plugin that just changest the group outcome', () => {
      const alwaysTrue = ({ group, pass }) => ({ pass: group ? true : pass });
      const trueResults = process(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, [alwaysTrue]);
      expect(trueResults.pass).toBe(true);
      expect(Object.keys(trueResults).length).toBe(1);
      expect(Object.keys(trueResults)[0]).toBe('pass');
    })

    it('should still process a plugin that returns null, undefined, empty object', () => {
      const justNull = () => null as any;
      const justUndefined = () => undefined as any;
      const justEmptyObject = () => ({} as any)
      const justNumber = () => (1 as any)

      const nullPlugin = process(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, [justNull]);
      expect(nullPlugin.pass).toBe(false);
      expect(Object.keys(nullPlugin).length).toBe(1);
      expect(Object.keys(nullPlugin)[0]).toBe('pass');

      const undefinedPlugin = process(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, [justUndefined]);
      expect(undefinedPlugin.pass).toBe(false);
      expect(Object.keys(undefinedPlugin).length).toBe(1);
      expect(Object.keys(undefinedPlugin)[0]).toBe('pass');

      const emptyObjectPlugin = process(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, [justEmptyObject]);
      expect(emptyObjectPlugin.pass).toBe(false);
      expect(Object.keys(emptyObjectPlugin).length).toBe(1);
      expect(Object.keys(emptyObjectPlugin)[0]).toBe('pass');

      const numberPlugin = process(facts, { all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, [justNumber]);
      expect(numberPlugin.pass).toBe(false);
      expect(Object.keys(numberPlugin).length).toBe(1);
      expect(Object.keys(numberPlugin)[0]).toBe('pass');
    });

  })
});
