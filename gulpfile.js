var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var imageisux = require('gulp-imageisux');


gulp.task('css', function() {
  gulp.src('app/css/*.css')
    .pipe(autoprefixer({
      browsers: ["last 2 version", "Android >= 4.0"],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function() {
  gulp.src(['app/img/**', '!app/img/{icon-*,icon-*/**}'])
    .pipe(imageisux('../../dist/img/', false));

  gulp.src(['app/img/icon-*.png'])
    .pipe(imageisux('../../dist/img/', false));
});

gulp.task('html', ['clean'], function() {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest('./dist/'))
});
