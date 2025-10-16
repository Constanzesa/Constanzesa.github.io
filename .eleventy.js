module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Collection for posts (sorted by date desc)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort(function(a,b){
      return b.date - a.date;
    });
  });

  // Simple date formatter filter for templates
  function formatDate(dateObj, format) {
    if (!dateObj) return "";
    const d = (dateObj instanceof Date) ? dateObj : new Date(dateObj);
    if (isNaN(d)) return "";
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    if (!format) return d.toISOString();
    // support common tokens used in templates: YYYY, yyyy, MM, dd
    return String(format)
      .replace(/YYYY/g, year)
      .replace(/yyyy/g, year)
      .replace(/MM/g, month)
      .replace(/dd/g, day)
      .replace(/DD/g, day);
  }

  // Register filter for Nunjucks, Liquid and JS templates
  eleventyConfig.addNunjucksFilter("date", function(dateObj, format) {
    return formatDate(dateObj, format);
  });
  eleventyConfig.addFilter("date", function(dateObj, format) {
    return formatDate(dateObj, format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
    passthroughFileCopy: true
  };
};
