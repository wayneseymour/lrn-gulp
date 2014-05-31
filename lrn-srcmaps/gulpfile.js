/*jshint node:true*/
'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var rev = require('gulp-rev');
var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
var uglifyjs = require('gulp-uglifyjs');

gulp.task('clean', function() {
  return gulp.src('dist/*', {
    read: false
  }).pipe(clean());
});

gulp.task('default', function() {
  gulp.src('src/**/*.js')

    .pipe(concat('built.js'))
    .pipe(rev())
    .pipe(uglifyjs({
      compress: {
        drop_debugger: true,
        drop_console: true
      },
      outSourceMap: true
    }))

  .pipe(gulp.dest('dist'));
});
