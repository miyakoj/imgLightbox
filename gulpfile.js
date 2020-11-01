'use strict';

var gulp = require('gulp'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  uglify = require('gulp-terser');

gulp.task('min:css', async function () {
  return gulp.src('imglightbox.css')
    .pipe(cssmin())
    .pipe(rename('imglightbox.min.css'))
    .pipe(gulp.dest('./dist', {overwrite: true}));
});

gulp.task('min:js', async function () {
  return gulp.src('imglightbox.js')
    .pipe(uglify())
    .pipe(rename('imglightbox.min.js'))
    .pipe(gulp.dest('./dist', {overwrite: true}));
});

gulp.task('min', gulp.series(['min:js', 'min:css']));

gulp.task('default', gulp.series('min'));