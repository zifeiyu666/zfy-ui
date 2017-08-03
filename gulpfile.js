var gulp = require('gulp')
gulp.task('two', ['one'], function() {
	console.log(2)
})
gulp.task('one', function() {
	console.log(1)
})

gulp.watch('glob.js', function(event) {
	console.log(event.path + event.type)
})

gulp.task('default', ['one', 'two'])

