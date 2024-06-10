"use strict";
const { src, dest, lastRun } = require("gulp");
const config = require("../paths.js");
const gulpAvif = require("gulp-avif");
const cache = require("gulp-cache");
var newer = require("gulp-newer");
const AvifImages = (cb) => {
  return src(config.images.src, { encoding: false }, { since: lastRun(AvifImages) })
    .pipe(cache(gulpAvif()))
    .pipe(newer(config.images.dest))
    .pipe(dest(config.images.dest)),
    cb();
}
module.exports = { AvifImages };
