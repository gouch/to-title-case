# Changelog

## 3.0.0 / 2026-10-17
The 18th-anniversary update.

### Improves a Bunch
- Resolves bugs with no-break spaces, certain punctuation combos and multi-hyphen-ates. Thanks @revelt, @jbrianj and @jaquet9 for reports. 
- Rewrote logic to follow a pattern checking tree that removes the need for brittle checks for sibling characters. Uses the [unicode regex patterns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape), which are nicely self-documenting.
- There’s now over 150 tests. Some don’t even overlap.

### Adds News Features
- New [option](https://github.com/gouch/to-title-case/#usage) to customize the list of lowercase words.
- Added JSDoc type annotations for TypeScript users.
- Added ESM module syntax to support `import`.

### V3 Breaks the API (but You Can Restore It)
No longer assigns itself as a String method by default. (Linters frown on that.) Now it’s now just a regular function:

- Old syntax: ~~`'example'.toTitleCase()`~~
- New syntax: `toTitleCase('example')`

To keep existing code working with the old syntax, switch to including the alternate file ending in `.cjs`, which continues the old String method behavior:

```html
<script src="to-title-case.cjs"></script>
```

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
