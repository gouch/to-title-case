import { toTitleCase } from '../to-title-case.js'
import tests from './tests.json' with { type: 'json' }

const testGroups = Object.keys(tests)

QUnit.test('arguments', (assert) => {
  /* Empty argument */
  assert.equal(toTitleCase(), '')

  /* Using options */
  assert.equal(
    toTitleCase('Nothing but capitals', {
      lowercase: ['custom']
    }),
    'Nothing But Capitals'
  )
})

QUnit.test('prototype', (assert) => {
  String.prototype.ttcShorthand = toTitleCase
  String.prototype.ttcExplicit = function (options) {
    return toTitleCase(this, options)
  }

  assert.equal(''.ttcShorthand(), '')
  assert.equal('a and b'.ttcShorthand(), 'A and B')

  /* options parameter in shorthand assignment is unsupported */
  assert.equal('a and b'.ttcShorthand({ lowercase: ['wontfix'] }), 'A and B')

  assert.equal(''.ttcExplicit(), '')
  assert.equal('a and b'.ttcExplicit(), 'A and B')
  assert.equal('a and b'.ttcExplicit({ lowercase: ['custom'] }), 'A And B')
})

testGroups.forEach((groupName) => {
  QUnit.test(groupName, (assert) => {
    tests[groupName].forEach((test) => {
      assert.equal(toTitleCase(test.input), test.expect)
    })
  })
})
