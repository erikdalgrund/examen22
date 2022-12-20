'use strict';

const { src, dest } = require('gulp');
const compileSass = require('gulp-sass'); 

compileSass.compiler = require('node-sass');

const bundleSass = () => {
    return src('/src/components/sassStyles/**/*.scss')
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(dest('/dist/static/css'));
};