var path = require("path");
var sassTrue = require("sass-true");

var sassFile = path.join(__dirname, "scss", "test.scss");

sassTrue.runSass(
  {
    file: sassFile,
    //includePaths: [testPath, scssPath, nodeModulesPath]
  },
  {
    sass: require("sass"),
    describe,
    it,
  }
);
