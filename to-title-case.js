/*! To Title Case © 2008–2026 David Gouch
 * https://github.com/gouch/to-title-case */

/**
 * @this {string | undefined}
 * @param {string} str
 * @param {string | {lower: string[]}} [options]
 * @returns {string}
 */
export function toTitleCase(str, options) {
  if (typeof this === 'string') {
    options = str
    str = this
  }

  const lower =
    typeof options === 'object'
      ? options?.lower
      : /* prettier-ignore */
        [
          'à', 'a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if',
          'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'v', 'vs', 'via'
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
  const capitalize = (word, i, arr = []) =>
    lower.includes(word.toLowerCase().match(/\p{Letter}+/gu)?.[0] || '') &&
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
