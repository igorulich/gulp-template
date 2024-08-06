"use strict";
const rimraf = require("rimraf");

async function CleanBuild(cb) {
  rimraf.sync(["dist"]), cb();
}
module.exports = { CleanBuild }
