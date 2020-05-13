module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    // "no-unexpected-multiline": "error",
    // "no-extra-semi": "error",
    // "max-len": "off",
    // "linebreak-style": 0,
    // "eol-last": 0,
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};