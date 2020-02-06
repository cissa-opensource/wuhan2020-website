// Reference:
// PurgeCSS setup: https://github.com/tailwindcss/setup-examples/tree/master/examples/nextjs

// In the "content" variable, the regex indicates that PurgeCSS will only prune Tailwind
// styles which are only found in "components" and "pages" folder.
const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.STAGE === "production" ? [purgecss] : [])
  ]
};