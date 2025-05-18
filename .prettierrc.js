// .prettierrc.js
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^react(.*)$",
    "^next(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$",
    "^@/lib/(.*)$",
    "^@/utils/(.*)$",
    "^[./]", // relative imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ["clsx", "cn"],
};
