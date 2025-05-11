// .prettierrc.js
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("prettier-plugin-organize-imports"),
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
