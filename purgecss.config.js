module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // Classes added only by Bootstrap's JavaScript at runtime (e.g. opening the
  // phone menu); PurgeCSS cannot see them in the HTML, so keep them explicitly.
  safelist: ["show", "collapsing", "collapsed"],
};
