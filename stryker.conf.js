
      module.exports = function(config){
        config.set(
          {
  "mutate": ["src/math.js","src/interval.js","src/book.repository.js","!src/db.js","!src/test-script.js"],
  "mutator": "javascript",
  "excludeMutations": ["string","logical","ArrayLiteral", "BinaryExpression"] ,
  "packageManager": "npm",
  "reporters": [
    "html",
    "clear-text",
    "progress",
    "dashboard"
  ],
  "testRunner": "jest",
  "transpilers": [],
  "coverageAnalysis": "off"
}
        );
      }