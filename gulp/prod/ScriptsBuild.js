"use strict";
const { src, dest } = require("gulp");
const babel = require('gulp-babel');
var concat = require('gulp-concat');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const notify = require('gulp-notify');
const config = require("../../paths");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var browserSync = require('browser-sync').create();
let uglify = require('gulp-uglify-es').default;
const ScriptsBuild =(cb)=> {
  return (
    src(config.scripts.src)
      .pipe(webpackStream({
        mode: 'development',
        output: {
          filename: 'main.js',
        },
        module: {
          rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }]
        },
      }))
      .on('error', function (err) {
        console.error('WEBPACK ERROR', err);
        this.emit('end'); // Don't stop the rest of the task
      })

      .pipe(sourcemaps.init())
      .pipe(uglify().on("error", notify.onError()))
      .pipe(rename({ basename: "scripts", suffix: ".min", extname: ".js" }))
      .pipe(sourcemaps.write("../../maps"))
      .pipe(dest(config.scripts.dist))
      .pipe(browserSync.stream()), 
    cb()
  );
}
module.exports = { ScriptsBuild };
