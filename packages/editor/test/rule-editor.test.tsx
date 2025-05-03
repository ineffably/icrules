import RuleEditor, { flattenKeys, opMap, safeParse } from '../src'
import '@testing-library/jest-dom'

describe('@icrules/editor', () => {

  describe('validate exports', () => {
    it('should export RuleEditor', () => {
      expect(RuleEditor).toBeDefined()
    })

    it('should export flattenKeys', () => {
      expect(flattenKeys).toBeDefined()
    })

    it('should export safeParse', () => {
      expect(safeParse).toBeDefined()
    })

    it('should export opMap', () => {
      expect(opMap).toBeDefined()
    })
  })

  describe('flattenKeys validation', () => {

    it('should flatten an object', () => {
      const obj = {
        a: {
          b: {
            c: 1
          }
        }
      }
      const flattened = flattenKeys(obj);
      // Check the key exists in the result (more resilient to different implementation details)
      expect(flattened['a.b.c']).toBe(1);
      // Check no other keys exist
      expect(Object.keys(flattened).length).toBe(1);
    })

    it('should flatten a more complex object', () => {
      const obj = {
        a: {
          test: 123,
          b: {
            a: 1,
            b: 2,
            c: 3
          }
        }
      }
      const flattened = flattenKeys(obj);
      expect(flattened['a.test']).toBe(123);
      expect(flattened['a.b.a']).toBe(1);
      expect(flattened['a.b.b']).toBe(2);
      expect(flattened['a.b.c']).toBe(3);
      expect(Object.keys(flattened).length).toBe(4);
    })

  })
})