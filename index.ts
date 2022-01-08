const promptLib = require('prompt-sync')()

import { UPPER_CHARS_RANGE, LOWER_CHARS_RANGE, DIGITS_RANGE, DEFAULT_LEN } from './src/constants'
import { generateASCIIChar, generateDecimal } from './src/generators'
import { durstenfeldShuffle } from './src/durstenfeldShuffle'

console.log(`\x1b[96mDefault value: ${DEFAULT_LEN}\x1b[0m\n`)

const NUMBER_OF_UPPER_CHARS = Number(promptLib('Number of upper characters: ', DEFAULT_LEN))
const NUMBER_OF_LOWER_CHARS = Number(promptLib('Number of lower characters: ', DEFAULT_LEN))
const NUMBER_OF_DIGITS = Number(promptLib('Number of digits: ', DEFAULT_LEN))

function generatePassword() {
  let rawPassword = ''

  for (let x = 0; x < NUMBER_OF_UPPER_CHARS; x++) {
    rawPassword += generateASCIIChar(generateDecimal(UPPER_CHARS_RANGE.min, UPPER_CHARS_RANGE.max))
  }

  for (let x = 0; x < NUMBER_OF_LOWER_CHARS; x++) {
    rawPassword += generateASCIIChar(generateDecimal(LOWER_CHARS_RANGE.min, LOWER_CHARS_RANGE.max))
  }

  for (let x = 0; x < NUMBER_OF_DIGITS; x++) {
    rawPassword += generateASCIIChar(generateDecimal(DIGITS_RANGE.min, DIGITS_RANGE.max))
  }

  const passwordAsArray = durstenfeldShuffle([...rawPassword])
  const password = passwordAsArray.join().replace(/\,/g, '')

  return password
}

console.log(`\nGenerated password: '\x1b[96m${generatePassword()}\x1b[0m'`)
