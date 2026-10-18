#!/usr/bin/env bash
cd "$(dirname "$0")" || exit
set -eu

cp to-title-case.js to-title-case.cjs
sed -i '' 's/export //' to-title-case.cjs

echo "
String.prototype.toTitleCase = function (options) {
  return toTitleCase(this, options)
}

if (typeof module !== 'undefined') {
  module.exports = toTitleCase
}" >> to-title-case.cjs
