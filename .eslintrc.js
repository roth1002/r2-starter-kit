const path = require('path');

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "rules": {
    "indent": ["error", 2],
    "key-spacing": ["error", {
      align: "value"
    }],
    "no-console": "off",
    "sort-class-members/sort-class-members": [2, {
      "order": [
        "[static-properties]",
        "[static-methods]",
        "[properties]",
        "[conventional-private-properties]",
        "constructor",
        "[methods]",
        "[conventional-private-methods]"
      ],
      "accessorPairPositioning": "getThenSet",
    }],
    "react-hooks/rules-of-hooks": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules")
        ]
      }
    }
  },
  "parser": "babel-eslint",
  "plugins": ["react", "jest", "sort-class-members", "react-hooks"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  }
};
