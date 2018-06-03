module.exports = {
  "plugins": ["mocha"],
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "mocha": true,
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js"]}],
  }
};
