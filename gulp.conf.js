'use strict';
//Plugins
var gulp = require('gulp'),
    argv = require("yargs").argv,
    ngTemplates = require('gulp-ng-templates'),
    karmaServer = require('karma').Server,
    webpack = require('webpack'),
    gutil = require("gulp-util"),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    vendorConfig = require('./vendor.conf.js');
;

//Directories/filenames
var APP_DIR = './app',
    DIST_DIR = './dist',
    SCSS_MAIN_FILE = [APP_DIR + '/styles.scss'],
    SCSS_WATCH_FILES = [SCSS_MAIN_FILE, APP_DIR + '/components/**/*.scss', APP_DIR + '/modules/**/*.scss'],
    TEMPLATE_WATCH_FILES = [APP_DIR + '/components/**/*.html', APP_DIR + '/modules/**/*.html'],
    WEBPACK_CONF = require('./webpack.conf.js'),
    JS_MAIN_FILE = './app/app.js',
    JS_OUTPUT_FILE = 'scripts.min.js',
    VENDOR_BUNDLER_FILES = vendorConfig().getVendorFileList(APP_DIR + '/', buildTarget),
    VENDOR_OUTPUT_FILE = 'vendor.min.js'
;

var buildTarget = argv.buildTarget || "local";
var production = function () {
    return buildTarget ==='production';
};

gulp.task('js', function () {
    console.log("Building JS");
    var wpconfig = WEBPACK_CONF;
    wpconfig.entry = JS_MAIN_FILE;
    wpconfig.output = {
        path: DIST_DIR,
        filename: JS_OUTPUT_FILE
    };
    webpack(wpconfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('Error in Webpack bundle', err);
        }
        gutil.log('[webpack]', stats.toString({
            colors: true,
            chunks: false
        }));
    });
});

gulp.task('vendor', function () {
    console.log("Building vendor js");
    gulp.src(VENDOR_BUNDLER_FILES)
        .pipe(concat(VENDOR_OUTPUT_FILE))
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('templates', function () {
    console.log('Building $templateCache');
    return gulp.src(TEMPLATE_WATCH_FILES)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(ngTemplates({
            filename: 'templates.js',
            module: 'him.templates',
            path: function (path, base) {
                return path.replace(base, '').replace('/templates', '');
            }
        }))
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('watch-templates', function () {
    console.log("Watching Templates");
    gulp.watch(TEMPLATE_WATCH_FILES, ['templates']);
});

gulp.task('sass', function (done) {
    console.log('Compiling CSS');
    return sass(SCSS_MAIN_FILE)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: (production() ? 'compressed' : 'nested')
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_DIR + '/styles'));
});

gulp.task('watch-scss', function () {
    console.log("Watching Scss");
    gulp.watch(SCSS_WATCH_FILES, ['sass']);
});

gulp.task('tdd', function (done) {
    console.log('Start Jasmine Tests');
    new karmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('default', ['templates', 'vendor', 'js', 'sass']);
