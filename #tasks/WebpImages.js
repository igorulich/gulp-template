"use strict";
const { src, dest, lastRun } = require("gulp");
const config = require("../paths.js");
const cwebp = require("gulp-cwebp");
var newer = require("gulp-newer");
const WebpImages = (cb) => {
  return src(config.images.src, { encoding: false }, { since: lastRun(WebpImages) })
    .pipe(cwebp())
    .pipe(newer(config.images.dest))
    .pipe(dest(config.images.dest)),
    cb();
}
module.exports = { WebpImages };
