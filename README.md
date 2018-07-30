# To Title Case for JavaScript

## What is Title Case?

## Usage
Include `to-title-case.js` in your script or page using your preferred method. You can now use the `.toTitleCase()` method on strings you want converted to title case.

```js
'Make me a headline'.toTitleCase() // returns 'Make Me a Headline'
```

The script assumes input is either sentence case (e.g. *To title case for JavaScript*) or every-word “title case” (e.g. *To Title Case For JavaScript*). In both cases, the script will correct the text to *To Title Case for JavaScript*.

## The Capitalization Rules
1. By default, capitalize all words
2. Always capitalize the first and last word in titles and subtitles
3. Lowercase articles: a, an, the
4. Lowercase injunctions: and, but, for, or, nor
5. Lowercase: to, as
6. [hyphens]
7. why these?: at, by, en, if, in, on, per, v., vs., via
8. Let intentional capitalization stand

Some style guides have special cases for prepositions. These largely rely on grammatical understanding, which is beyond the scope of a small script.

## History/Changelog
### 2.2 / 2018-07-??
- Rewrite to use `split` instead of `replace`. This simplifies the reasoning
- Reorganize some project files
- Document the actual headline casing rules used

### 2.1 / 2013-11-03
- Acknowledge characters outside of US-ASCII
- Fix bug related to hyphenated small words
- Replace baby's first testing script with the QUnit framework

### 2.0.1 / 2012-01-06
- Fixed IE 7 breakage introduced in 2.0. Don't treat strings like character arrays.

### 2.0 / 2012-01-06
- 15% less code and 35% easier to understand.
- Small words list moved to variable for easy modification.
- Test titles rewritten to focus on a single issue per title.
- More braces to make style guides and JSLint happier.
