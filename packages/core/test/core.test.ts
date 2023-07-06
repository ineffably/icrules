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
      expect(process({ all: [['sky', 'eq', 'blue']] }, facts).hit).toBe(true);
      expect(process({ all: [['sky', 'eq', 'green']] }, facts).hit).toBe(false);
      expect(process({ any: [['sky', 'eq', 'blue']] }, facts).hit).toBe(true);
      expect(process({ any: [['sky', 'eq', 'green']] }, facts).hit).toBe(false);
    });

    it('should fail if the rule group is invalid', () => {
      expect(process([['sky', 'eq', 'blue']] as any, facts).hit).toBe(false);
      expect(process({ some: [['sky', 'eq', 'blue']] as any }, facts).hit).toBe(false);
    });

    it('should process all and any quantifiers against multiple rules in a single RuleGroup', () => {
      expect(process({ all: [['sky', 'eq', 'blue'], ['count', 'eq', 32]] }, facts).hit).toBe(true);
      expect(process({ any: [['sky', 'eq', 'blue'], ['count', 'eq', 0]] }, facts).hit).toBe(true);
      expect(process({ any: [['sky', 'eq', 'blue'], ['count', 'eq', 32]] }, facts).hit).toBe(true);

      expect(process({ all: [['sky', 'eq', 'blue'], ['count', 'eq', 0]] }, facts).hit).toBe(false);
      expect(process({ any: [['sky', 'eq', 'green'], ['count', 'eq', 0]] }, facts).hit).toBe(false);
      expect(process({ any: [['sky', 'neq', 'green'], ['count', 'eq', 0]] }, facts).hit).toBe(true);
    })

    it('should also process as expected as an instance', () => {
      const withInstance = (icRuleInstance: ICRules) => {
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'blue']] }).hit).toBe(true);
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'green']] }).hit).toBe(false);
        expect(icRuleInstance.exec({ all: [['sky', 'neq', 'green']] }).hit).toBe(true);

        // use other facts
        expect(icRuleInstance.exec({ all: [['ocean', 'eq', 'green']] }, { ocean: 'green' }).hit).toBe(true);

        // should allow the user to update facts
        icRuleInstance.setFacts({ sky: 'black' })
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'black']] }).hit).toBe(true);
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'blue']] }).hit).toBe(false);
      }
      withInstance(new ICRules(facts));
      withInstance(new ICRulesDefault(facts));
    })

    it('should process nested RuleGroups', () => {
      expect(process({
        all: [['sky', 'neq', 'green'], {
          all: [['sky', 'eq', 'blue'], ['count', 'eq', 32]]
        }]
      }, facts).hit).toBe(true);
    })
  })

  describe('should utilize eq and neq operators', () => {
    it('should process eq and neq rules against facts with expected results', () => {
      expect(process({ all: [['sky', 'eq', 'blue']] }, facts).hit).toBe(true);
      expect(process({ all: [['sky', 'neq', 'blue']] }, facts).hit).toBe(false);
      expect(process({ all: [['sky', 'eq', 'green']] }, facts).hit).toBe(false);

      expect(process({ all: [['sky', 'eq', 0]] }, facts).hit).toBe(false);
      expect(process({ all: [['count', 'neq', 0]] }, facts).hit).toBe(true);

      // with eq types are compared
      expect(process({ all: [['count', 'neq', '0']] }, facts).hit).toBe(true);
      expect(process({ all: [['count', 'eq', '32']] }, facts).hit).toBe(false);

      // let's try with hydrating serialized facts...
      expect(process({ all: [['count', 'neq', 0]] }, hydratedFacts).hit).toBe(true);
      expect(process({ all: [['count', 'neq', '0']] }, hydratedFacts).hit).toBe(true);
      expect(process({ all: [['count', 'eq', '32']] }, hydratedFacts).hit).toBe(false);
    })
  });

  describe('should utilize gt,lt,lte and gte operators', () => {
    it('should process gt/lt gte/lte against strings', () => {
      expect(process({ all: [['sky', 'gt', 'green']] }, facts).hit).toBe(false);
      expect(process({ all: [['sky', 'lt', 'green']] }, facts).hit).toBe(true);
      expect(process({ all: [['sky', 'lt', 'blue']] }, facts).hit).toBe(false);
      expect(process({ all: [['sky', 'gt', 'blue']] }, facts).hit).toBe(false);

      expect(process({ all: [['sky', 'gte', 'blue']] }, facts).hit).toBe(true);
      expect(process({ all: [['sky', 'lte', 'blue']] }, facts).hit).toBe(true);
    })

    it('should process gt, lt, gte and lte against numeric values', () => {
      expect(process({ all: [['count', 'gt', 32]] }, facts).hit).toBe(false);
      expect(process({ all: [['count', 'lt', 32]] }, facts).hit).toBe(false);
      expect(process({ all: [['count', 'gt', 3]] }, facts).hit).toBe(true);
      expect(process({ all: [['count', 'lt', 322]] }, facts).hit).toBe(true);
      expect(process({ all: [['count', 'lte', 32]] }, facts).hit).toBe(true);
      expect(process({ all: [['count', 'gte', 32]] }, facts).hit).toBe(true);

      // gt and ls are soft equivalents, numbers are compared against strings
      expect(process({ all: [['count', 'gt', '32']] }, facts).hit).toBe(false);
      expect(process({ all: [['count', 'lt', '32']] }, facts).hit).toBe(false);
      expect(process({ all: [['count', 'lte', '32']] }, facts).hit).toBe(true);
      expect(process({ all: [['count', 'gte', '32']] }, facts).hit).toBe(true);
    })
  })

  describe('should process has, nhas, in and nin with expected results', () => {
    it('should process has/nhas against strings and collections', () => {
      // has allthethings
      expect(process({ all: [['sky', 'has', 'lu']] }, facts).hit).toBe(true);
      expect(process({ all: [['months', 'has', 12]] }, facts).hit).toBe(false);
      expect(process({ all: [['months', 'has', 5]] }, facts).hit).toBe(true);

      expect(process({ all: [['markets', 'has', 'en-CA']] }, facts).hit).toBe(true);
      expect(process({ all: [['markets', 'has', 'fr-CA']] }, facts).hit).toBe(false);

      // nhas allthethings
      expect(process({ all: [['sky', 'nhas', 'lu']] }, facts).hit).toBe(false);
      expect(process({ all: [['months', 'nhas', 12]] }, facts).hit).toBe(true);
      expect(process({ all: [['months', 'nhas', 5]] }, facts).hit).toBe(false);
      expect(process({ all: [['markets', 'nhas', 'en-CA']] }, facts).hit).toBe(false);
      expect(process({ all: [['markets', 'nhas', 'fr-CA']] }, facts).hit).toBe(true);

      // mixed types always fail
      expect(process({ all: [['count', 'has', 'lu']] }, facts).hit).toBe(false);
      expect(process({ all: [['count', 'nhas', 'lu']] }, facts).hit).toBe(false);
    })

    it('should process fact value against rule value', () => {
      expect(process({ all: [['sky', 'in', ['blue', 'black']]] }, facts).hit).toBe(true);
      expect(process({ all: [['sky', 'in', ['cyan', 'black']]] }, facts).hit).toBe(false);

      expect(process({ all: [['sky', 'in', 'bluegreenred']] }, facts).hit).toBe(true);
      expect(process({ all: [['sky', 'in', 'green']] }, facts).hit).toBe(false);
    })
  })

  describe('verbose plugin and other plugins', () => {

    it('should allow verbose processing using the intrinsic verbose plugin through processVerbose', () => {
      const processResult = processVerbose({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts);
      expect(processResult.hit).toBe(false);
      expect(processResult.group.hit).toBe(false);
      expect(processResult.group.all[0].hit).toBe(true);
      expect(processResult.group.all[1].hit).toBe(false);
    });

    it('should see verbose results using the internal verbosePlugin through process', () => {
      const processResult = process({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts, [verbosePlugin]);
      expect(processResult.hit).toBe(false);
      expect(processResult.group.hit).toBe(false);
      expect(processResult.group.all[0].hit).toBe(true);
      expect(processResult.group.all[1].hit).toBe(false);
    });

    it('should process a custom plugin', () => {
      const ruleCounts = {
        count: 0,
        groupCount: 0,
        plugin: ({ hit, group }) => {
          ruleCounts.count++;
          if (group) {
            ruleCounts.groupCount++;
          }
          return ({ hit, count: ruleCounts.count, groupCount: ruleCounts.groupCount })
        }
      }
      const processResult = process({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts, [ruleCounts.plugin]);
      expect(processResult.hit).toBe(false);
      expect(processResult.count).toBe(3);
      expect(processResult.groupCount).toBe(1);
    });

    it('should allow the plugin to change the outcome', () => {
      const alwaysTrue = () => ({ hit: true })
      const trueResults = process({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts, [alwaysTrue]);
      expect(trueResults.hit).toBe(true);
      expect(Object.keys(trueResults).length).toBe(1);
      expect(Object.keys(trueResults)[0]).toBe('hit');
    })

    it('should allow a plugin that just changest the group outcome', () => {
      const alwaysTrue = ({ group, hit }) => ({ hit: group ? true : hit });
      const trueResults = process({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts, [alwaysTrue]);
      expect(trueResults.hit).toBe(true);
      expect(Object.keys(trueResults).length).toBe(1);
      expect(Object.keys(trueResults)[0]).toBe('hit');
    })

    it('should still process a plugin that returns null, undefined, empty object', () => {
      const justNull = () => null as any;
      const justUndefined = () => undefined as any;
      const justEmptyObject = () => ({} as any)
      const justNumber = () => (1 as any)

      const nullPlugin = process({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts, [justNull]);
      expect(nullPlugin.hit).toBe(false);
      expect(Object.keys(nullPlugin).length).toBe(1);
      expect(Object.keys(nullPlugin)[0]).toBe('hit');

      const undefinedPlugin = process({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts, [justUndefined]);
      expect(undefinedPlugin.hit).toBe(false);
      expect(Object.keys(undefinedPlugin).length).toBe(1);
      expect(Object.keys(undefinedPlugin)[0]).toBe('hit');

      const emptyObjectPlugin = process({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts, [justEmptyObject]);
      expect(emptyObjectPlugin.hit).toBe(false);
      expect(Object.keys(emptyObjectPlugin).length).toBe(1);
      expect(Object.keys(emptyObjectPlugin)[0]).toBe('hit');

      const numberPlugin = process({ all: [['sky', 'has', 'lu'], ['count', 'gt', 32]] }, facts, [justNumber]);
      expect(numberPlugin.hit).toBe(false);
      expect(Object.keys(numberPlugin).length).toBe(1);
      expect(Object.keys(numberPlugin)[0]).toBe('hit');
    });

  })
});
