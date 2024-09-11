'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildstyles() {
    return gulp.src('./styles/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css/'));
};

exports.buildstyles = buildstyles;
exports.default = function () {
    gulp.watch('./styles/scss/*.scss', gulp.series('buildstyles'));
};