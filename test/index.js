function runTests(tests) {
  const testGroups = Object.keys(tests)

  testGroups.forEach((groupName) => {
    tests[groupName].forEach((test) => {
      QUnit.test(groupName, (assert) => {
        assert.equal(test.input.toTitleCase(), test.expect)
      })
    })
  })
}

/* Distinguish between browser and node */
if (typeof window === 'undefined') {
  require('../to-title-case.js')
  var QUnit = require('qunit')
  const tests = require('./tests.json')
  runTests(tests)
} else {
  /* globals jQuery */
  jQuery.getJSON('tests.json').done(runTests)
}
