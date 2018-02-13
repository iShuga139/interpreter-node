'use strict'

function isNumber (value) {
  return !isNaN(value)
}

function isAction (value) {
  return ['PRINT'].includes(value)
}

function isOperator (value) {
  return ['ADD', 'SUBSTR', 'MULTI'].includes(value)
}

function evaluate (value) {
  if (value.slice(-1) === '?' && value.includes('.')) {
    const expression = value.split('.')
    const countExp = expression.length

    const numbers = expression[0].slice(1, -1).split(',')
    let isValid = false
    let operator
    let action

    if (countExp === 2) {
      operator = expression[1].slice(0, -1)
      isValid = isNumber(numbers[0]) && isNumber(numbers[1]) && isOperator(operator)
    }

    if (countExp === 3) {
      operator = expression[1]
      action = expression[2].slice(0, -1)
      isValid = isNumber(numbers[0]) && isNumber(numbers[1]) && isOperator(operator) && isAction(action)
    }

    return {
      isValid,
      numberA: numbers[0],
      numberB: numbers[1],
      operator: operator,
      action: action
    }
  }

  return {
    isValid: false
  }
}

module.exports = evaluate
