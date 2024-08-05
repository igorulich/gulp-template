"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
var ttf2woff = require("gulp-ttf2woff");

const FontsWoff = (cb) => {
  return src(config.fonts.src, { encoding: false })
    .pipe(ttf2woff())
    .pipe(dest(config.fonts.dest)),
    cb();
}
module.exports = { FontsWoff };
