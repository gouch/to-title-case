# To Title Case for JavaScript

Instructions: Include the to-title-case.js script and use the new .toTitleCase() method on the string you want converted.

The script assumes input is either sentence case (e.g. _To title case for JavaScript_) or every-word title case (e.g. _To Title Case For JavaScript_). In both cases, the script will return the corrected text _To Title Case for JavaScript_.

## The Rules
1. By default, capitalize all words
2. Always capitalize the first and last word in titles and subtitles
3. Lowercase articles: a, an, the
4. Lowercase injunctions: and, but, for, or, nor,
5. Lowercase: to, as
6. [hyphens]
7. why these?: at, by, en, if, in, on, per, v., vs., via

Some style guides have special cases for prepositions: these largely rely on grammatically understanding, which is beyond the scope of this script

## History
### 3.0 / 2017-02-??
- Rewrite to use `split` instead of `replace` — this simplifies the reasoning
- Reorganize some project files
- Document the actual headline casing rules of the script
- BREAKING CHANGE: the `http:` portion of URLs will be capitalized

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
