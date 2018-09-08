# To Title Case for JavaScript

Intelligently format your headlines into title case.

## Installation

- Browser: Add the script to your page with something like `<script src="to-title-case.js"></script>`
- Node: `npm install @gouch/to-title-case` and then add `require('@gouch/to-title-case')` to your script

## Usage

Use the `.toTitleCase()` method on strings you want converted to title case:

```js
'Make me a headline'.toTitleCase() // returns: Make Me a Headline
```

The script assumes input is either sentence case (e.g. _To title case for JavaScript_) or every-word “title case” (e.g. _To Title Case For JavaScript_). In both cases, the script will convert the text to _To Title Case for JavaScript_.

## What is Title Case?

Title case (or headline case) is a convention for formatting the titles of things. It’s often used for the title of articles, but also matters if you mention the title of something in paragraph.

### The Capitalization Rules

1. By default, capitalize all words
2. Always capitalize the first and last word in titles and subtitles
3. Capitalize both parts of hyphenated words
4. Lowercase articles: a, an, the
5. Lowercase conjunctions: and, but, or, nor
6. Lowercase short prepositions: as, at, by, for, in, of, on, per, to, via
7. Lowercase versus: vs., vs, v., v
8. Lowercase NYT words\*: en, if
9. Let intentional capitalization stand

These rules are based on style guides from APA, Chicago, and modern conventions. The result will match general expectations for what a title should look like. Some style guides might state special rules depending on contextual use, but these decisions rely on grammatical understanding, which is beyond the scope of a small script. Your titles will at least be consistent.

<p><small>
* Treating these as small words was inherited from Gruber's implementation. They're likely based on New York Times style. Opinions are welcome on whether these should be removed in a future version.
</small></p>

## FAQ: Dealing With Uppercase and ALL CAPS Input

If you’re stuck with uppercase input, you can get to title case by changing to lowercase first:

```js
'CAPSLOCK FOREVER'.toLowerCase().toTitleCase() // returns: Capslock Forever

// Don’t actually do this until you read the notes below!
```

Think hard before doing this! As frustrating as all uppercase input can be, acronyms are very common. Turning genuine abbreviations into blatant typos is a worse look than all caps. As an example, this was a real headline from CNN:

> PETA: Turkey, TX, change your name

If you brute forced that into title case, you'd wind up with _Peta_ and _Tx_, which would make Cnn look pretty amateur.

## History/Changelog

### 2.2.1 / 2018-09-07

- Publish to npm

### 2.2 / 2018-08-28

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

## Inspiration

I built this after reading [John Gruber’s explanation of title case](https://daringfireball.net/2008/05/title_case).
