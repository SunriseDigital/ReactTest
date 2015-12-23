'use strict';

var gulp = require('gulp');
var browserify = require('browserify');

var fs = require("fs");

gulp.task('dialog', function() {
  browserify('src/dialog.jsx', { debug: true })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(fs.createWriteStream("web/js/dialog.js"))
});

gulp.task('default', function() {
  gulp.watch(['src/*.jsx', 'src/**/*.jsx'], ['dialog']);
});
