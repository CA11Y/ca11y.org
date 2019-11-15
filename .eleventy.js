const dayjs = require("dayjs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // filter
  eleventyConfig.addNunjucksFilter("dateFormat", v => {
    return dayjs(v).format("YYYY/MM/DD HH:mm");
  });

  return {
    dir: { input: "src" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
