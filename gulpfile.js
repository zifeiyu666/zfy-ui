var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

gulp.task('minijs', function() {
	gulp.src('src/js/**/*.js')
		.pipe($.uglify())
		.pipe(gulp.dest('dist/js'))
})
gulp.task('watch1', function() {
    gulp.watch('src/less/*.less', function() {
        gulp.src('src/less/*.less')
            .pipe($.less())
            .pipe(gulp.dest('dist/css'))
    })
})

gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe($.less())
        .pipe(gulp.dest('dist/css'))
})
gulp.task('build', ['minijs', ])
gulp.task('dev', ['watch1'])
