var gulp = require('gulp')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')

gulp.task('minijs', function() {
	gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
})

