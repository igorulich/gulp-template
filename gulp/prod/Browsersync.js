"use strict";
const { watch } = require("gulp");
const config = require("../../paths.js");
const  {Styles } = require("./Styles.js");
const { Scripts } = require("./Scripts.js");
const { Html } = require("./Html.js");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
function Browsersync(cb) {
  reload(),
    browserSync.init({
      notify: false,
      open: true,
      watch: true,
      server: {
        baseDir: config.server,
      },
    }),
    watch(config.scripts.watch, Scripts, reload),
    watch(config.styles.watch, Styles, reload),
    watch(config.html.watch, Html).on("change", browserSync.reload),
    cb();
}
module.exports = { Browsersync };
