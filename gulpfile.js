var gulp = require('gulp');
 
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});
 
// Watch Files For Changes
gulp.task('watch', ['browserSync'], function (){
    gulp.watch('app/**/*.css', browserSync.reload);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
 
 
// Default Task
gulp.task('default', ['watch']);
