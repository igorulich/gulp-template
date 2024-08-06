"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
const cwebp = require("gulp-cwebp");

const WebpImagesBuild = (cb) => {
  return src(config.images.src, { encoding: false })
    .pipe(cwebp())
    .pipe(dest(config.images.dist)),
    cb();
}
module.exports = { WebpImagesBuild };
