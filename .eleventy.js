module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: { input: "src" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
