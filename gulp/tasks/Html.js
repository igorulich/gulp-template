"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
const fileinclude = require("gulp-file-include");
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");
var gulpHtmlBemValidator = require("gulp-html-bem-validator");
function Html(cb) {
  return (
    src(config.html.src)
      .pipe(
        fileinclude({
          prefix: "@@",
          basepath: "@file",
        })
    )
      .pipe(
        rename({
          basename: "index",
        }),
      )
      .pipe(dest(config.html.dest))
      .pipe(browserSync.reload({ stream: true }))
     .pipe(gulpHtmlBemValidator()),
    cb()
  );
}
module.exports = { Html };
