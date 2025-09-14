const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('serve', function() {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });
});

gulp.task('default', gulp.series('serve'));