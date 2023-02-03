const { logToConsole } = require("dwkns-eleventy-plugins");
// const { logToConsole, inlineSVG, htmlMinifer, readableDate, prependAnOrA } = require('../dwkns-eleventy-plugins') // local version


console.log("eleventyConfig", eleventyConfig);

module.exports = (eleventyConfig) => {
  console.log("eleventyConfig", eleventyConfig);
  eleventyConfig.addPlugin(pluginWebc);

  eleventyConfig.addPlugin(logToConsole, {
    logToHtml: false,
    logToConsole: false,
    colorizeConsole: true,
  });

  // watch our script folder for changes.
  eleventyConfig.addWatchTarget("./src/scripts/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");

  eleventyConfig.addPassthroughCopy({
    "src/fonts": "./fonts",
    "src/images": "./images",
    "src/styles/compiled.css": "./styles/compiled.css",
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setServerOptions({
    domdiff: false, // reload instead of domdiff
    port: 8080,
    showAllHosts: false,
    showVersion: false,
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_partials/",
      layouts: "_partials/_layouts",
      data: "_data",
    },
  };
};
