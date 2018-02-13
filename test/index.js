'use strict'

const interpreter = require('../index')
const assert = require('assert')

describe('Interpreter', () => {
  describe('accept the expression', () => {
    const expectedResponse = { message: 'La expresion si es valida', result: 4 }

    it('should return result 4 without action', () => {
      const result = interpreter('(2,2).MULTI?')
      assert.deepEqual(result, expectedResponse)
    })

    it('should return result 4 with action', () => {
      const result = interpreter('(2,2).MULTI.PRINT?')
      assert.deepEqual(result, expectedResponse)
    })

    it('should return result 4 with ADD operator', () => {
      const result = interpreter('(2,2).ADD.PRINT?')
      assert.deepEqual(result, expectedResponse)
    })

    it('should return result 4 with SUBSTR operator', () => {
      expectedResponse.result = 0
      const result = interpreter('(2,2).SUBSTR?')
      assert.deepEqual(result, expectedResponse)
    })
  })

  describe('reject the expression', () => {
    const expectedResponse = { message: 'La expresion no es valida', result: 0 }

    it('should return result 0 when does not send operator', () => {
      const result = interpreter('(2,2).PRINT?')
      assert.deepEqual(result, expectedResponse)
    })

    it('should return result 0 when does not send ´?´', () => {
      const result = interpreter('(2,2).MULTI')
      assert.deepEqual(result, expectedResponse)
    })

    it('should return result 0 when does not send an expression', () => {
      expectedResponse.message = 'Ingrese una expresion'
      const result = interpreter()
      assert.deepEqual(result, expectedResponse)
    })
  })
})
