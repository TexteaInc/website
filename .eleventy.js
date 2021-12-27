// Import data files
const site = require("./src/_data/site.js");

module.exports = function (config) {
  // Passthrough
  config.addPassthroughCopy({ "src/static": "/" });

  // Watch for changes to my source files
  if (config.addWatchTarget) {
    config.addWatchTarget("/src/scss");
    config.addWatchTarget("/src/js");
  } else {
    console.log("No additional watch targets");
  }

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};