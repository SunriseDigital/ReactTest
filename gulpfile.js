'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var webserver = require('gulp-webserver');

var fs = require("fs");

gulp.task('dialog', function() {
  browserify('src/Dialog/app.jsx', {
      debug: true,
      extensions: ['.jsx']
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .on("error", function (err) {
      console.log('');
      console.log(err.message);
      console.log('' + err.codeFrame)
    })
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
  gulp.watch(['src/Dialog/*', 'src/Dialog/**/*'], ['dialog']);
});


gulp.task('build-immutable', function() {
  browserify('src/immutable.js', {
      debug: true
    })
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .on("error", function (err) {
      console.log('');
      console.log(err.message);
      console.log('' + err.codeFrame)
    })
    .pipe(fs.createWriteStream("js/immutable.js"))
});

gulp.task('watch-immutable', function() {
  gulp.watch(['src/immutable.js'], ['build-immutable']);
});

gulp.task('default', ['dialog', 'watch', 'webserver']);
