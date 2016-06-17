var gulp = require('gulp'),
	umd = require('gulp-umd'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('umd', function() {
	return gulp.src('src/interval.js')
		.pipe(umd())
		.pipe(gulp.dest('./build'));
});

gulp.task('build', ['umd'], function() {
	return gulp.src('build/interval.js')
		.pipe(uglify())
		.pipe(rename({
			suffix: "-min"
		}))
		.pipe(gulp.dest('./build'));
});

gulp.task('default', ['build']);