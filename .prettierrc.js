{
  ("singleQuote");
  true, "trailingComma";
  ("es5");
}

module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
};
