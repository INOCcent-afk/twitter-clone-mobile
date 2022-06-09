module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      rules: {
        "@typescript-eslint/no-shadow": ["off"],
        "@typescript-eslint/no-unused-vars": "error",
        "no-shadow": "off",
        "no-undef": "off",
        "react/self-closing-comp": "off",
        quotes: [2, "double", {avoidEscape: true, allowTemplateLiterals: true}],
        semi: [2, "always"],
        "react-native/no-inline-styles": 0,
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
            singleQuote: false,
          },
        ],
      },
    },
  ],
};
