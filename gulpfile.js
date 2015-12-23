'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var webserver = require('gulp-webserver');

var fs = require("fs");

gulp.task('dialog', function() {
  browserify('src/dialog.jsx', {
      debug: true,
      extensions: ['.jsx']
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(fs.createWriteStream("web/js/dialog.js"))
});

gulp.task('webserver', function() {
  gulp.src('./web')
    .pipe(webserver({
      port: '4444',
      host: '127.0.0.1',
      livereload: true
    })
  );
});

gulp.task('watch', function() {
  gulp.watch(['src/*.jsx', 'src/**/*.jsx'], ['dialog']);
});

gulp.task('default', ['watch', 'webserver']);
