const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  return {
    pathPrefix: "/checkrideai-web/",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
