'use strict'

const interpreter = require('../index')
const expression = '(2,5).MULTI?'

const result = interpreter(expression)

console.log(result)
