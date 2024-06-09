"use strict";
const { src, dest } = require("gulp");
const babel = require('gulp-babel');
var concat = require('gulp-concat');
const config = require("../paths");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var browserSync = require('browser-sync').create();
let uglify = require('gulp-uglify-es').default;
 function Scripts(cb) {
  return (
    src(config.scripts.src)
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(babel())
      .pipe(uglify())
      .pipe(concat("scripts.js"))
      .pipe(rename({ suffix: ".min"}))
      .pipe(sourcemaps.write("../../maps"))
      .pipe(dest(config.scripts.dest))
      .pipe(browserSync.reload({ stream: true })),
    cb()
  );
}
module.exports = { Scripts };
