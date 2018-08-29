function runTests (tests) {
  var testGroups = [
    'general',
    'hyphens',
    'punctuation',
    'quotes',
    'subtitles',
    'technical',
    'versus',
    'miscellaneous'
  ]

  testGroups.forEach(function (groupName) {
    tests[groupName].forEach(function (test) {
      QUnit.test(groupName, function (assert) {
        assert.equal(test.input.toTitleCase(), test.expect)
      })
    })
  })
}

/* Distinguish between browser and node */
if (typeof window === 'undefined') {
  require('../to-title-case.js')
  var QUnit = require('qunit')
  var tests = require('./tests.json')
  runTests(tests)
} else {
  /* globals jQuery */
  jQuery.getJSON('tests.json').done(runTests)
}
