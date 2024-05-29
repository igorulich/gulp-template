"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
const cwebp = require("gulp-cwebp");

const WebpImages = (cb) => {
  return src(config.images.src, { encoding: false })
    .pipe(cwebp())
    .pipe(dest(config.images.dest)),
    cb();
}
module.exports = { WebpImages };
