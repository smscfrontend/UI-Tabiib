// Initialize modules
const { src, dest, watch, series, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-uglify');
const uglify = require('gulp-uglify');

// File path variables
const files = {
	scssPath: 'sass/**/*.scss'
};

// Sass Task
function scssTask() {
	return (
		src(files.scssPath)
			// .pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(postcss([ autoprefixer(), cssnano() ]))
			// .pipe(sourcemaps.write('.'))
			.pipe(dest('dist'))
	);
}

//Watch Files

function watchTask() {
	watch([ files.scssPath ], parallel(scssTask));
}

exports.default = series(parallel(scssTask), watchTask);
