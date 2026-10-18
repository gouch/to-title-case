# To Title Case for JavaScript
Intelligently format titles and headings into consistent title case.

## Installation
### Browser
Each year brings new ways to add JS to HTML. One modern option is:

```html
<script type="module">
  import { toTitleCase } from './to-title-case.js'

  toTitleCase('make me a title') //→ Make Me a Title
</script>
```

Or for a classic, global vibe, you can try:

```html
<script src="to-title-case.cjs"><script>
<script>
  toTitleCase('make me a title') //→ Make Me a Title
</script>
```

### Node
Install with `npm install @gouch/to-title-case` then import:

```js
import { toTitleCase } from '@gouch/to-title-case'

toTitleCase('make me a title') //→ Make Me a Title
```

## Usage
The script defines the function `toTitleCase()`, which applies title case rules to an input string. For best results, input is assumed to be sentence case or naive title case.

```js
toTitleCase(‘make me a title’) //→ Make Me a Title
```

### Options
The lowercase word list can be replaced with your own:

```js
toTitleCase('make me a title', { lowercase: ['me'] }) //→ Make me A Title
```

## What Is Title Case?
Title case, or headline case, is a convention for formatting the article titles and headings. It basically just means capitalizing each word, but there a few exceptions that look odd if you miss them.

Most well-known style guides follow *dynamic* rules that switch depending on how a word is being used in context. Evaluating grammar is outside the scope of a small script, so this script follows static, consistent rules. Those rules are a close match to the New York Times style guide.

### The Capitalization Rules
1. Capitalize the first and last word. Do the same for subtitles.
2. Capitalize both ends of hyphenated phrases.
3. Preserve the formatting of proper nouns and technical terms where possible.
4. Lowercase these words:
	- Articles: a, an, the
	- Conjunctions: and, but, if, nor, or
	- Short prepositions: as, at, by, en, for, in, of, on, per, to, via
	- Versus: vs., vs, v., v
	- Borrowed: à
5. Capitalize everything else.

## Inspiration and Resources
I built this in response to [John Gruber’s post in 2008](https://daringfireball.net/2008/05/title_case).

Matt Belz maintains [an excellent site](https://titlecaseconverter.com/rules/) documenting the differing rules of well-known style guides.

## FAQ
### Dealing With ALL CAPS Input
If you’re stuck with uppercase input, it *is* technically possible to brute force it by applying a lowercase transform:

```js
toTitleCase('CNN REPORTS ON NASA CENTER IN HOUSTON, TX'.toLowerCase())
//→ Cnn Reports on Nasa Center in Houston, Tx
```

But consider carefully before doing this. As frustrating as data stuck in uppercase might be, turning acronyms into distracting typos might be worse.

### Defining a String Method
Version 2 assigned itself as a method on the built-in String object. If you want to restore that behavior, you can use this code:

```js
String.prototype.toTitleCase = function (options) {
  return toTitleCase(this, options)
}

'make me a title'.toTitleCase() //→ Make Me a Title
```

Note: arrow functions won’t work here since they change how `this` is handled.