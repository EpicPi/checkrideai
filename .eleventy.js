const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  return {
    pathPrefix: "/checkrideai/",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
