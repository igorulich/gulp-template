"use strict";
const rimraf = require("rimraf");

async function Clean(cb) {
  rimraf.sync(["assets"]), cb();
}
module.exports = { Clean }
  // , "./src/scss/_sprite.scss"
