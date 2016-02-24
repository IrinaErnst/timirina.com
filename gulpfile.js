var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');

gulp.task('useref', function(){
  return gulp.src('public/index.html')
    .pipe(useref())
//    .pipe(gulpIf('*.js', uglify()))
//    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('public/dist'))
});

gulp.task('fonts', function() {
  return gulp.src('public/css/flexslider/fonts/**/*')
  .pipe(gulp.dest('public/dist/fonts'))
});

gulp.task('clean:dist', function() {
  return del.sync('public/dist');
});
