'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var gutil = require("gulp-util");
var webpack = require("webpack");

gulp.task('webserver', function() {
  gulp.src('./web')
    .pipe(webserver({
      port: '1234',
      host: 'localhost',
      livereload: true
    })
  );
});

gulp.task("webpack", function(callback) {
    webpack(require('./webpack.config.js'), function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
          // output options
      }));
      callback();
    });
});

gulp.task("watch", function(){
  gulp.watch(['src/*'], ['webpack']);
});

gulp.task("default", ['webpack', 'watch', 'webserver']);