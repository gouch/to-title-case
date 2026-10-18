/*! To Title Case © 2008–2026 David Gouch
 * https://github.com/gouch/to-title-case */

/**
 * @this {string | void}
 * @param {string} str
 * @param {{lowercase: string[]}} [options]
 * @returns {string}
 */
function toTitleCase(str = '', options) {
  /* back-compat for non-explicit prototype assignment */
  str = typeof this === 'string' ? this : str

  /* prettier-ignore */
  const lowercase = options?.lowercase || [
    'à', 'a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in',
    'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'v', 'vs', 'via'
  ]
  const abbrev = /\.\P{Space_Separator}/u
  const hyphenated = /([-–])/u
  const name = /\p{Letter}\p{Uppercase_Letter}+/u
  const separator = /([\p{Space_Separator}/—])/u
  const subtitle = /(:\p{Space_Separator})/u
  const technical = /[:@]|\p{Letter}\p{Number}|\p{Number}\p{Letter}/u

  /**
   * @param {string} word @param {number} i @param {string[]} arr
   * @returns {string}
   */
  const capitalize = (word, i, arr) =>
    lowercase.includes(word.toLowerCase().match(/\p{Letter}+/gu)?.[0] || '') &&
    i !== 0 &&
    i !== arr.length - 1 &&
    !/^[“‘]|[’”]$/.test(word)
      ? word.toLowerCase()
      : word.replace(/\p{Letter}/u, (letter) => letter.toUpperCase())

  return str
    .split(subtitle)
    .map((side) => {
      if (subtitle.test(side)) {
        return side
      }
      return side
        .split(separator)
        .map((word, i, arr) => {
          if (
            separator.test(word) ||
            abbrev.test(word) ||
            name.test(word) ||
            technical.test(word)
          ) {
            return word
          }
          if (hyphenated.test(word)) {
            return word
              .split(hyphenated)
              .map((w, i, a) => (hyphenated.test(w) ? w : capitalize(w, i, a)))
              .join('')
          }
          return capitalize(word, i, arr)
        })
        .join('')
    })
    .join('')
}

String.prototype.toTitleCase = function (options) {
  return toTitleCase(this, options)
}

if (typeof module !== 'undefined') {
  module.exports = toTitleCase
}
