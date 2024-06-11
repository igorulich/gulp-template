"use strict";
const { src, dest } = require("gulp");
const config = require("../paths.js");
const cache = require("gulp-cache");
var newer = require("gulp-newer");
var ttf2woff = require("gulp-ttf2woff");

const FontsWoff = (cb) => {
  return src(config.fonts.src, { encoding: false })
    .pipe(cache(ttf2woff()))
    .pipe(newer(config.fonts.dest))
    .pipe(dest(config.fonts.dest)),
    cb();
}
module.exports = { FontsWoff };
