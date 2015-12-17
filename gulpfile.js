'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var react = require('gulp-react');
var browserify = require('gulp-browserify');


var sassFiles = ['tutorial/sass/*.scss', 'tutorial/sass/**/*.scss'];
gulp.task('sass', function () {
  gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('tutorial/public/css'));
});

var jsFiles = ['tutorial/src/*.jsx', 'tutorial/src/**/*.jsx'];
gulp.task('react', function() {
  gulp.src(jsFiles)
    .pipe(react())
    .pipe(browserify({
      insertGlobals : true,
      debug : true
    }))
    .pipe(gulp.dest('tutorial/public/scripts'));
});

gulp.task('default', function() {
  gulp.watch(jsFiles, ['react'])
});



// gulp.task('sass:watch', function () {
//   gulp.watch('./tutorial/sass/**/*.scss', ['sass']);
// });