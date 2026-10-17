import { toTitleCase } from '../to-title-case.js'
import tests from './tests.json' with { type: 'json' }

const testGroups = Object.keys(tests)

String.prototype.toTitleCase = function (options) {
  return toTitleCase(this, options)
}

QUnit.test('features', (assert) => {
  /* Prototype assignment */
  assert.equal(
    'Nothing but capitals'.toTitleCase(),
    toTitleCase('Nothing but Capitals')
  )

  /* Using options */
  assert.equal(
    toTitleCase('Nothing but capitals', {
      lowercase: ['custom']
    }),
    'Nothing But Capitals'
  )

  /* Prototype and options together */
  assert.equal(
    'Nothing but capitals'.toTitleCase({
      lowercase: ['custom']
    }),
    'Nothing But Capitals'
  )
})

testGroups.forEach((groupName) => {
  QUnit.test(groupName, (assert) => {
    tests[groupName].forEach((test) => {
      assert.equal(toTitleCase(test.input), test.expect)
    })
  })
})
