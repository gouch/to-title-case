/* 
 * To Title Case 1.2 – http://individed.com/code/to-title-case/
 * Copyright © 2008–2011 David Gouch. Licensed under the MIT License. 
 */

String.prototype.toTitleCase = function() {
    var littleWords = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via) /i;

    return this.replace(/([^\s\-]+ *)/g, function(match, p1, index, title) {
        if (match.search(littleWords) > -1 && index > 1 && title.charAt(index - 2) !== ":") {
            console.log('[1] match: %s; p1: %s; index: %s; title: %s', match, p1, index, title);
            return match.toLowerCase();
        }
        if (title.substring(index - 1, index + 1).search(/[^\w- ]|_/) > -1) {
            console.log('[2] match: %s;index: %s; title: %s', match, index, title);
            return match.charAt(0) + match.charAt(1).toUpperCase() + match.substr(2);
        }
        if (match.substr(1).search(/[A-Z]|\w+\.+\w/) > -1) {
            console.log('[3] match: %s;index: %s; title: %s', match, index, title);
            return match;
        }

        console.log('[4] match: %s;index: %s; title: %s', match, index, title);
        return match.charAt(0).toUpperCase() + match.substr(1);
    });
};
