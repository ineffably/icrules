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
      expect(flattenKeys(obj)).toEqual({ 'a.b.c': 1 })
    })

  })
})