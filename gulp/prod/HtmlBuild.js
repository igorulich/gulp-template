"use strict";
const { src, dest } = require("gulp");
const config = require("../../paths.js");
const fileinclude = require("gulp-file-include");
const htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");

function HtmlBuild(cb) {
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
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest(config.html.dist))
      .pipe(browserSync.reload({ stream: true })),
    cb()
  );
}
module.exports = { HtmlBuild };
