var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	conCat = require('gulp-concat'),
	jsMinify = require('gulp-minify'),
	watchmen = require('gulp-watch'),
	gutil = require('gulp-util');

var jsSources = [
	'../js/funcs.js',
	'../js/checkBrowser.js',
	'../js/conversion.js'
	];

gulp.task('minify-css', function() {
  return gulp.src('../css/style.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('../css/min'));
});

gulp.task('jsConcat', function(){
	gulp.src(jsSources)
		.pipe(conCat('script.js'))
		.pipe(gulp.dest('../js'))
});

gulp.task('minify-js', function(){
	gulp.src('../js/script.js')
		.pipe(gulp.dest('../js'))
});