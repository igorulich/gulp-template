"use strict";
const { watch } = require("gulp");
const config = require("../../paths.js");
const  {Styles } = require("./StylesBuild.js");
const { Scripts } = require("./ScriptsBuild.js");
const { Html } = require("./HtmlBuild.js");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
function BrowsersyncBuild(cb) {
  reload(),
    browserSync.init({
      notify: false,
      open: true,
      watch: true,
      server: {
        baseDir: config.serverBuild,
      },
    }),
    watch(config.scripts.watch, Scripts, reload),
    watch(config.styles.watch, Styles, reload),
    watch(config.html.watch, Html).on("change", browserSync.reload);
    cb();
}
module.exports = { BrowsersyncBuild };
