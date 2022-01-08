import { LOWER_CHARS_RANGE, UPPER_CHARS_RANGE, DIGITS_RANGE } from "./constants";
import { generateASCIIChar, generateDecimal } from "./generators";

describe('Genarate ASCII', () => {
  it('should generate an letter in lower case', () => {
    const LOWER_CASE_LETTER = generateDecimal(LOWER_CHARS_RANGE.min, LOWER_CHARS_RANGE.max)

    const CHARACTER = generateASCIIChar(LOWER_CASE_LETTER)

    expect(CHARACTER.charCodeAt(0)).toBeGreaterThanOrEqual(97)
    expect(CHARACTER.charCodeAt(0)).toBeLessThanOrEqual(122)
  })

  it('should generate an letter in upper case', () => {
    const UPPER_CASE_LETTER = generateDecimal(UPPER_CHARS_RANGE.min, UPPER_CHARS_RANGE.max)

    const CHARACTER = generateASCIIChar(UPPER_CASE_LETTER)

    expect(CHARACTER.charCodeAt(0)).toBeGreaterThanOrEqual(65)
    expect(CHARACTER.charCodeAt(0)).toBeLessThanOrEqual(90)
  })

  it('should generate a single digit', () => {
    const DIGIT = generateDecimal(DIGITS_RANGE.min, DIGITS_RANGE.max)

    const CHARACTER = generateASCIIChar(DIGIT)

    expect(CHARACTER.charCodeAt(0)).toBeGreaterThanOrEqual(48)
    expect(CHARACTER.charCodeAt(0)).toBeLessThanOrEqual(57)
  })
})

describe('Genarate Decimal', () => {
  it('should generate a number between 10 and 15', () => {
    const RANDOM_BETWEEN_10_AND_15 = generateDecimal(10, 15)

    expect(RANDOM_BETWEEN_10_AND_15).toBeGreaterThanOrEqual(10)
    expect(RANDOM_BETWEEN_10_AND_15).toBeLessThanOrEqual(15)
  })

  it('should generate the number 10', () => {
    const NUMBER_10 = generateDecimal(10, 10)

    expect(NUMBER_10).toBe(10)
  })
})
