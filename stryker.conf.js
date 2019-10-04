
      module.exports = function(config){
        config.set(
          {
  "mutate": ["src/math.js","src/interval.js","src/book.repository.js","!src/db.js","!src/test-script.js","!sum.js"],
  mutator: { name: 'javascript', excludedMutations: ['BooleanSubstitution', 'StringLiteral','BinaryExpression'] },
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