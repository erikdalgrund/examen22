'use strict';

const {src, dest, watch} = require('gulp');
const compileSass = require('gulp-sass')(require('sass')); 
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

compileSass.compiler = require('node-sass');

const bundleSass = () => {
    return src('./src/sass/*.scss')
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(minifyCss())
        .pipe(sourceMaps.write())
        .pipe(concat('bundle.css'))
        .pipe(dest('./dist/css/'));
};

const devWatch = () => {
    watch('./src/sass/*.scss', bundleSass); 
}
exports.devWatch = devWatch;
exports.bundleSass = bundleSass;