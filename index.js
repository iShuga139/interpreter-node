'use strict'

const evaluate = require('./lib/evaluate')
const execute = require('./lib/execute')

/**
 * @author Jonathan Josue Estrada Ayala
 * Check an expression and evaluates if could be operable
 *
 * Lenguage: (Number, Number).Operator.Action?
 *  - Action            [PRINT]
 *  - Operator          [ADD, SUSTR, MULTI]
 *  - Number            [0..9]
 * eg: (2,5).MULTI.IMPRIMIR?
 */

function interpreter (expression) {
  if (expression) {
    const response = evaluate(expression)

    if (response.isValid) {
      const result = execute(response.operator, response.numberA, response.numberB)
      if (response.action === 'PRINT') {
        console.log('Resultado:', result)
      }

      return {
        message: 'La expresion si es valida',
        result
      }
    }

    return {
      message: 'La expresion no es valida',
      result: 0
    }
  }

  return {
    message: 'Ingrese una expresion',
    result: 0
  }
}

module.exports = interpreter
