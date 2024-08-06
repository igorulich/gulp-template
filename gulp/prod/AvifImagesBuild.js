"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
const gulpAvif = require("gulp-avif");

const AvifImagesBuild = (cb) => {
  return src(config.images.src, { encoding: false })
    .pipe(gulpAvif())
    .pipe(dest(config.images.dist)),
    cb();
}
module.exports = { AvifImagesBuild };
