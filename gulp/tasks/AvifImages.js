"use strict";
const { src, dest, lastRun } = require("gulp");
const config = require("../../paths.js");
const gulpAvif = require("gulp-avif");

const AvifImages = (cb) => {
  return src(config.images.src, { encoding: false }, { since: lastRun(AvifImages) })
    .pipe(gulpAvif())
    .pipe(dest(config.images.dest)),
    cb();
}
module.exports = { AvifImages };
