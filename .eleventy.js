module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  return {
    pathPrefix: "/checkrideai/",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
