'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');


var sassFiles = ['sass/*.scss', 'sass/**/*.scss'];
gulp.task('sass', function () {
  gulp.src(sassFiles)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('web/css'));
});

var jsFiles = ['src/*.jsx', 'src/**/*.jsx'];
gulp.task('react', function() {
  gulp.src(jsFiles)
    .pipe(plumber())
    .pipe(react())
    .pipe(gulp.dest('js/'));
});

gulp.task('dialog', function() {
  gulp.src('js/dialog.js')
    .pipe(plumber())
    .pipe(browserify({
      insertGlobals : false,
      debug : false
    }))
    .pipe(gulp.dest('web/js/'));
});

gulp.task('default', function() {
  // gulp.watch(sassFiles, ['sass']);
  gulp.watch([jsFiles, sassFiles, 'js/dialog.js'], ['sass', 'react', 'dialog']);
});



// gulp.task('sass:watch', function () {
//   gulp.watch('./tutorial/sass/**/*.scss', ['sass']);
// });