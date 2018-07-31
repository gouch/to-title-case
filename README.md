# To Title Case for JavaScript

## Usage

Include `to-title-case.js` in your script or page using your preferred method. You can now use the `.toTitleCase()` method on strings you want converted to title case.

```js
'Make me a headline'.toTitleCase() // returns: Make Me a Headline
```

The script assumes input is either sentence case (e.g. _To title case for JavaScript_) or every-word “title case” (e.g. _To Title Case For JavaScript_). In both cases, the script will correct the text to _To Title Case for JavaScript_.

## What is Title Case?

Title case or headline case is a way of formatting titles.

### The Capitalization Rules

1. By default, capitalize all words
2. Always capitalize the first and last word in titles and subtitles
3. Lowercase articles: a, an, the
4. Lowercase injunctions: and, but, for, or, nor
5. Lowercase: to, as
6. [hyphens]
7. why these?: at, by, en, if, in, on, per, v., vs., via
8. Let intentional capitalization stand

Some style guides have special cases for prepositions. These largely rely on grammatical understanding, which is beyond the scope of a small script.

## FAQ: Dealing With Uppercase and ALL CAPS Input

If you’re stuck with uppercase input, you can get to title case by changing to lower case first:

```js
'CAPSLOCK FOREVER'.toLowerCase().toTitleCase() // returns: Capslock Forever
```

Think hard before doing this! As frustrating as all uppercase input can be, acronyms are very common. Turning real uppercase abbreviations into typos will look worse than all caps. As an example, this was a real headline from CNN: “PETA: Turkey, TX, change your name.” If you lower cased that first, you'd wind up with _Peta_ and _Tx_, which would make Cnn look silly.

## History/Changelog

### 2.2 / 2018-07-??

- Rewrite to use `split` instead of `replace`. This makes it easier to follow what the script is doing.
- Add additional tests
- Document the actual rules used

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
