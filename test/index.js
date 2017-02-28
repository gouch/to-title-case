require('../to-title-case.js')
var qunit = require('qunit')
var tests = require('./tests.json')
var testGroups = ['general', 'hyphens', 'punctuation', 'quotes', 'subtitles',
  'technical', 'versus', 'miscellaneous']

testGroups.forEach(function (groupName) {
  tests[groupName].forEach(function (test) {
    qunit.test(groupName, function (assert) {
      assert.equal(test.input.toTitleCase(), test.expect)
    })
  })
})
