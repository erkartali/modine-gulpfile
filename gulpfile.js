var gulp = require("gulp");
var sass = require("gulp-sass");
const fileinclude = require('gulp-file-include');

gulp.task("sass", function() {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"));
});

gulp.task("watch", function() {
  gulp.watch("app/scss/**/*.scss", gulp.series(["sass"]));
  // Other watchers
});
 
gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});