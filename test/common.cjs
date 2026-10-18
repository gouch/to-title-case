const toTitleCaseCjs = require('../to-title-case.cjs')

QUnit.test('commonjs', (assert) => {
  assert.equal(toTitleCaseCjs('a and b'), 'A and B')
  assert.equal(toTitleCaseCjs('a and b', { lowercase: ['custom'] }), 'A And B')

  assert.equal('a and b'.toTitleCase(), 'A and B')
  assert.equal('a and b'.toTitleCase({ lowercase: ['custom'] }), 'A And B')
})
