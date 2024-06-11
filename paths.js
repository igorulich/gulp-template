"use strict"

const { watch } = require("browser-sync");

const config = {
  server: `./assets`,
  styles: {
    src: `./src/scss/*.scss`,
    dest: `./assets/css`,
    watch: `./src/scss/**/*.scss`
  },
  scripts: {
    src: `./src/js/**/*.js`,
    dest: `./assets/js`,
    watch: `./src/js/**/*.js`
  },
  html: {
    src: `./src/*.html`,
    dest: `./assets`,
    watch: `./src/**/*.html`
  },
  resources: {
    src: `./src/resources/*.*`,
    dest: `./assets`
  },
  images: {
    src: `./src/images/*.{jpg,jpeg,png,webp}`,
    dest: `./assets/images`,
    watch:`./src/images/*.{jpg,jpeg,png,webp}`
  },
  sprite: {
    src: `./src/images/svg/*.svg`,
    dest: `./assets/css`
  },
  fonts: {
    src: [`./src/fonts/*.ttf`],
    dest: `./assets/fonts`,
    watch: `./src/fonts/*.ttf`
  },
  build: {
    htmlbuild: `./assets/*.html`,
    cssbuild: `./assets/css/*.css`,
    jsbuild: `./assets/js/*.js`,
    imgbuild: `./assets/images/*.{avif,webp}`,
    fontbuild: `./assets/fonts/*.{woff,woff2}`
  },
  dist: {
    htmlbuild: `./dist`,
    cssbuild: `./dist/css`,
    jsbuild: `./dist/js`,
    imgbuild: `./dist/images`,
    fontbuild: `./dist/fonts`
  }
};

module.exports = config;
