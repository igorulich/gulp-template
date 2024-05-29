"use strict";
import { watch, series, parallel, src, dest } from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import { Clean } from "./gulp/tasks/Clean.js";
import { Resources } from "./gulp/tasks/Resources.js";
import { Sprite } from "./gulp/tasks/Sprite.js";
import { Styles } from "./gulp/tasks/Styles.js";
import { Scripts } from "./gulp/tasks/Scripts.js";
import { Html } from "./gulp/tasks/Html.js";
import { Browsersync } from "./gulp/tasks/Browsersync.js";
import config from "./paths.js";
import { WebpImages } from "./gulp/tasks/WebpImages.js";
import { AvifImages } from "./gulp/tasks/AvifImages.js";
import { FontsWoff2 } from "./gulp/tasks/FontsWoff2.js";
import { FontsWoff } from "./gulp/tasks/FontsWoff.js";
export const sass = gulpSass(dartSass);
export const uglify = require("gulp-uglify-es").default;
export var browserSync = require("browser-sync").create();
export var reload = browserSync.reload;
const fs = require('fs');
exports.FontsWoff = FontsWoff;
exports.AvifImages = AvifImages;
exports.FontsWoff2 = FontsWoff2;
exports.WebpImages = WebpImages;
exports.Clean = Clean;
exports.Sprite = Sprite;
exports.Resources = Resources;
exports.Styles = Styles;
exports.Scripts = Scripts;
exports.Html = Html;
exports.watch = watch;
exports.Browsersync = Browsersync;
const build = series(
  Clean,
  parallel(FontsWoff),
  parallel(FontsWoff2),
  parallel(AvifImages),
  parallel(WebpImages),
  parallel(Sprite),
  parallel(Resources),
  parallel(Styles),
  parallel(Scripts),
  parallel(Html),
  parallel(Browsersync)
);

export default build;
