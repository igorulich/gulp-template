"use strict";
import { watch, series, parallel, src, dest } from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import { Clean } from "./gulp/dev/Clean.js";
import { Resources } from "./gulp/dev/Resources.js";
import { Sprite } from "./gulp/dev/Sprite.js";
import { Styles } from "./gulp/dev/Styles.js";
import { Scripts } from "./gulp/dev/Scripts.js";
import { Html } from "./gulp/dev/Html.js";
import { Browsersync } from "./gulp/dev/Browsersync.js";
import config from "./paths.js";
import { WebpImages } from "./gulp/dev/WebpImages.js";
import { AvifImages } from "./gulp/dev/AvifImages.js";
import { FontsWoff2 } from "./gulp/dev/FontsWoff2.js";
import { FontsWoff } from "./gulp/dev/FontsWoff.js";
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
exports.production = production;

function production() {
  const production = series(
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
    parallel(Browsersync),
  );
  production();
}
const development = series(
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
  parallel(Browsersync),
);

export default development;
