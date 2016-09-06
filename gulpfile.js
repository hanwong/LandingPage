'use strict';

 var gulp        = require('gulp'),
     sourcemaps  = require('gulp-sourcemaps'),
     sass        = require('gulp-sass');

 gulp.task('sass', function () {
    return gulp.src('public/src/sass/**/*.{sass,scss}')
   .pipe(sourcemaps.init())
   .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
   .pipe(sourcemaps.write('../css/maps'))
   .pipe(gulp.dest('public/src/css'));
 });
  
 gulp.task('watch', function () {
   gulp.watch('public/src/sass/**/*.{sass,scss}', ['sass']);
 });

gulp.task("default", ["watch"]);
 