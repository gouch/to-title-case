# Changelog

## 2.2.1 / 2018-09-07
- Publish to npm

## 2.2 / 2018-08-28
- Rewrite to use `split` instead of `replace`. This makes it easier to follow what the script is doing.
- Add additional tests
- Document the actual rules used

## 2.1 / 2013-11-03
- Acknowledge characters outside of US-ASCII
- Fix bug related to hyphenated small words
- Replace baby's first testing script with the QUnit framework

## 2.0.1 / 2012-01-06
- Fixed IE 7 breakage introduced in 2.0. Don't treat strings like character arrays.

## 2.0 / 2012-01-06
- 15% less code and 35% easier to understand.
- Small words list moved to variable for easy modification.
- Test titles rewritten to focus on a single issue per title.
- More braces to make style guides and JSLint happier.
