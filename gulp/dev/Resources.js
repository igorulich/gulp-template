"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");

function Resources(cb) {
  return src(config.resources.src).pipe(dest(config.resources.dest)), cb();
}
module.exports = { Resources };
