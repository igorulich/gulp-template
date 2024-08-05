"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
const gulpAvif = require("gulp-avif");

const AvifImages = (cb) => {
  return src(config.images.src, { encoding: false })
    .pipe(gulpAvif())
    .pipe(dest(config.images.dest)),
    cb();
}
module.exports = { AvifImages };
