// .prettierrc.js
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  tailwindStylesheet: "./styles/global.css",
  printWidth: 100,
  tailwindPreserveDuplicates: false,
  tabWidth: 2,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
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
  tailwindFunctions: ["clsx", "cn"],
};
