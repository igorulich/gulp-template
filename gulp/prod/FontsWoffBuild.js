"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
var ttf2woff = require("gulp-ttf2woff");

const FontsWoffBuild = (cb) => {
  return src(config.fonts.src, { encoding: false })
    .pipe(ttf2woff())
    .pipe(dest(config.fonts.dist)),
    cb();
}
module.exports = { FontsWoffBuild };
