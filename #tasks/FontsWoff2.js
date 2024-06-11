"use strict";
const { src, dest } = require("gulp");
const config = require("../paths.js");
const cache = require("gulp-cache");
var newer = require("gulp-newer");
var ttf2woff2 = require("gulp-ttf2woff2");

const FontsWoff2 = (cb) => {
  return src(config.fonts.src, { encoding: false })
    .pipe(cache(ttf2woff2()))
    .pipe(newer(config.fonts.dest))
    .pipe(dest(config.fonts.dest)),
    cb();
}
module.exports = { FontsWoff2 };
