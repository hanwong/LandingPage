'use strict';

 var gulp        = require('gulp'),
     sourcemaps  = require('gulp-sourcemaps'),
     sass        = require('gulp-sass'),
     uglify = require("gulp-uglify");

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

// gulp.task("uglify", function(){
//   return gulp.src("public/src/js/*.js").pipe(uglify()).pipe(gulp.dest("/public/dist/"));
// });

// gulp.task("watch", function(){
//   gulp.watch("public/src/js/*.js",["uglify"]);
// });


gulp.task("default", ["watch"]);
 