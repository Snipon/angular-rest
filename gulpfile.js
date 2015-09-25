'use strict';
var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish')
;

gulp.task('jshint', function() {
  return gulp.src(['gulfile.js', 'index.js', './js/*.js', 'index.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('jshint:watch', function () {
  gulp.watch(['gulfile.js', 'index.js', './js/*.js', 'index.js'], ['jshint']);
});

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass({
      includePaths: require('node-neat').includePaths
    }).on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['jshint', 'sass', 'jshint:watch', 'sass:watch']);
