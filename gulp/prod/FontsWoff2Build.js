"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
var ttf2woff2 = require("gulp-ttf2woff2");

const FontsWoff2Build = (cb) => {
  return src(config.fonts.src, { encoding: false })
    .pipe(ttf2woff2())
    .pipe(dest(config.fonts.dist)),
    cb();
}
module.exports = { FontsWoff2Build };
