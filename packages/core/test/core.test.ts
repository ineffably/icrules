import ICRulesDefault, { ICRules } from '../src';

describe('icrules verification', () => {
  const { process } = ICRules;
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
      expect(process({ all: [['sky', 'eq', 'blue']] }, facts)).toBe(true);
      expect(process({ all: [['sky', 'eq', 'green']] }, facts)).toBe(false);
      expect(process({ any: [['sky', 'eq', 'blue']] }, facts)).toBe(true);
      expect(process({ any: [['sky', 'eq', 'green']] }, facts)).toBe(false);
    });

    it('should fail if the rule group is invalid', () => {
      expect(process([['sky', 'eq', 'blue']] as any, facts)).toBe(false);
      expect(process({ some: [['sky', 'eq', 'blue']] as any }, facts)).toBe(false);
    });

    it('should process all and any quantifiers against multiple rules in a single RuleGroup', () => {
      expect(process({ all: [['sky', 'eq', 'blue'], ['count', 'eq', 32]] }, facts)).toBe(true);
      expect(process({ any: [['sky', 'eq', 'blue'], ['count', 'eq', 0]] }, facts)).toBe(true);
      expect(process({ any: [['sky', 'eq', 'blue'], ['count', 'eq', 32]] }, facts)).toBe(true);

      expect(process({ all: [['sky', 'eq', 'blue'], ['count', 'eq', 0]] }, facts)).toBe(false);
      expect(process({ any: [['sky', 'eq', 'green'], ['count', 'eq', 0]] }, facts)).toBe(false);
    })

    it('should also process as expected as an instance', () => {
      const withInstance = (icRuleInstance: ICRules) => {
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'blue']] })).toBe(true);
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'green']] })).toBe(false);
        expect(icRuleInstance.exec({ all: [['sky', 'neq', 'green']] })).toBe(true);

        // use other facts
        expect(icRuleInstance.exec({ all: [['ocean', 'eq', 'green']] }, { ocean: 'green' })).toBe(true);

        // should allow the user to update facts
        icRuleInstance.setFacts({ sky: 'black' })
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'black']] })).toBe(true);
        expect(icRuleInstance.exec({ all: [['sky', 'eq', 'blue']] })).toBe(false);
      }
      withInstance(new ICRules(facts));
      withInstance(new ICRulesDefault(facts));
    })

    it('should process nested RuleGroups', () => {
      expect(process({
        all: [['sky', 'neq', 'green'], {
          all: [['sky', 'eq', 'blue'], ['count', 'eq', 32]]
        }]
      }, facts)).toBe(true);
    })
  })

  describe('should utilize eq and neq operators', () => {
    it('should process eq and neq rules against facts with expected results', () => {
      expect(process({ all: [['sky', 'eq', 'blue']] }, facts)).toBe(true);
      expect(process({ all: [['sky', 'neq', 'blue']] }, facts)).toBe(false);
      expect(process({ all: [['sky', 'eq', 'green']] }, facts)).toBe(false);

      expect(process({ all: [['sky', 'eq', 0]] }, facts)).toBe(false);
      expect(process({ all: [['count', 'neq', 0]] }, facts)).toBe(true);

      // with eq types are compared
      expect(process({ all: [['count', 'neq', '0']] }, facts)).toBe(true);
      expect(process({ all: [['count', 'eq', '32']] }, facts)).toBe(false);

      // let's try with hydrating serialized facts...
      expect(process({ all: [['count', 'neq', 0]] }, hydratedFacts)).toBe(true);
      expect(process({ all: [['count', 'neq', '0']] }, hydratedFacts)).toBe(true);
      expect(process({ all: [['count', 'eq', '32']] }, hydratedFacts)).toBe(false);
    })
  });

  describe('should utilize gt,lt,lte and gte operators', () => {
    it('should process gt/lt gte/lte against strings', () => {
      expect(process({ all: [['sky', 'gt', 'green']] }, facts)).toBe(false);
      expect(process({ all: [['sky', 'lt', 'green']] }, facts)).toBe(true);
      expect(process({ all: [['sky', 'lt', 'blue']] }, facts)).toBe(false);
      expect(process({ all: [['sky', 'gt', 'blue']] }, facts)).toBe(false);

      expect(process({ all: [['sky', 'gte', 'blue']] }, facts)).toBe(true);
      expect(process({ all: [['sky', 'lte', 'blue']] }, facts)).toBe(true);
    })

    it('should process gt, lt, gte and lte against numeric values', () => {
      expect(process({ all: [['count', 'gt', 32]] }, facts)).toBe(false);
      expect(process({ all: [['count', 'lt', 32]] }, facts)).toBe(false);
      expect(process({ all: [['count', 'gt', 3]] }, facts)).toBe(true);
      expect(process({ all: [['count', 'lt', 322]] }, facts)).toBe(true);
      expect(process({ all: [['count', 'lte', 32]] }, facts)).toBe(true);
      expect(process({ all: [['count', 'gte', 32]] }, facts)).toBe(true);

      // gt and ls are soft equivalents, numbers are compared against strings
      expect(process({ all: [['count', 'gt', '32']] }, facts)).toBe(false);
      expect(process({ all: [['count', 'lt', '32']] }, facts)).toBe(false);
      expect(process({ all: [['count', 'lte', '32']] }, facts)).toBe(true);
      expect(process({ all: [['count', 'gte', '32']] }, facts)).toBe(true);
    })
  })

  describe('should process has, nhas, in and nin with expected results', () => {
    it('should process has/nhas against strings and collections', () => {
      // has allthethings
      expect(process({ all: [['sky', 'has', 'lu']] }, facts)).toBe(true);
      expect(process({ all: [['months', 'has', 12]] }, facts)).toBe(false);
      expect(process({ all: [['months', 'has', 5]] }, facts)).toBe(true);

      expect(process({ all: [['markets', 'has', 'en-CA']] }, facts)).toBe(true);
      expect(process({ all: [['markets', 'has', 'fr-CA']] }, facts)).toBe(false);

      // nhas allthethings
      expect(process({ all: [['sky', 'nhas', 'lu']] }, facts)).toBe(false);
      expect(process({ all: [['months', 'nhas', 12]] }, facts)).toBe(true);
      expect(process({ all: [['months', 'nhas', 5]] }, facts)).toBe(false);
      expect(process({ all: [['markets', 'nhas', 'en-CA']] }, facts)).toBe(false);
      expect(process({ all: [['markets', 'nhas', 'fr-CA']] }, facts)).toBe(true);

      // mixed types always fail
      expect(process({ all: [['count', 'has', 'lu']] }, facts)).toBe(false);
      expect(process({ all: [['count', 'nhas', 'lu']] }, facts)).toBe(false);
    })

    it('should process fact value against rule value', () => {
      expect(process({ all: [['sky', 'in', ['blue', 'black']]] }, facts)).toBe(true);
      expect(process({ all: [['sky', 'in', ['cyan', 'black']]] }, facts)).toBe(false);

      expect(process({ all: [['sky', 'in', 'bluegreenred']] }, facts)).toBe(true);
      expect(process({ all: [['sky', 'in', 'green']] }, facts)).toBe(false);
    })
  })

});
