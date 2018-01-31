'use strict'

const operations = {
  ADD: (numberA, numberB) => Number(numberA) + Number(numberB),
  SUBSTR: (numberA, numberB) => Number(numberA) - Number(numberB),
  MULTI: (numberA, numberB) => Number(numberA) * Number(numberB)
}

function execute (operator, numberA, numberB) {
  return operations[operator](numberA, numberB)
}

module.exports = execute
