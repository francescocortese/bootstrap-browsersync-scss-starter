var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    fileinclude = require('gulp-file-include');


// Gulp Task SASS, postcss/autoprefixer, Browsersync
gulp.task('sass', function() {
    return gulp.src('./sass/main.scss')
        .pipe(sass())
        .pipe(postcss([ autoprefixer({ browsers: [
          'Chrome >= 35',
          'Firefox >= 38',
          'Edge >= 12',
          'Explorer >= 10',
          'iOS >= 8',
          'Safari >= 8',
          'Android 2.3',
          'Android >= 4',
          'Opera >= 12']})]))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

// File Include
gulp.task('fileinclude', function() {
  return gulp.src(['*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('build/'))
    .pipe(browserSync.stream());
});

// Build- watch file fileinclude
gulp.task('fileinclude-watch', ['fileinclude']);


// Compile SASS
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    // warch file-include for root and inc
    gulp.watch(['./inc/*.html', '*.html'], ['fileinclude-watch']);
    gulp.watch("./sass/main.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Creating a server at the root
gulp.task('default', ['serve', 'fileinclude']);
