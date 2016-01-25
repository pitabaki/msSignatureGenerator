var gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	conCat = require('gulp-concat'),
	jsMinify = require('gulp-minify'),
	watchmen = require('gulp-watch'),
	sass = require('gulp-sass'),
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
		.pipe(jsMinify({
			ignoreFiles: ['conversion.js','funcs.js']
		}))
		.pipe(gulp.dest('../js/min'));
});

gulp.task('sass', function () {
  gulp.src('../css/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../css'));
});