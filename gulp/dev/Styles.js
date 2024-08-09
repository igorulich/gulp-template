"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
const autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var plumber = require("gulp-plumber");
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
function Styles(cb) {
  return (
    src(config.styles.src)
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(
        postcss([
          autoprefixer(
            "last 20 version",
            "safari 5",
            "ie 11",
            "ios 6",
            "android 4"
          ),
        ])
      )
      .pipe(rename({ basename: "styles", suffix: ".min", extname: ".css" }))
      .pipe(sourcemaps.write("../../maps"))
      .pipe(dest(config.styles.dest))
      .pipe(browserSync.reload({ stream: true })),
    cb()
  );
}
module.exports = { Styles };
