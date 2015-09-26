'use strict';
//Plugins
var gulp = require('gulp'),
    ngTemplates = require('gulp-ng-templates'),
    karmaServer = require('karma').Server,
    webpack = require('webpack'),
    gutil = require("gulp-util"),
    sass = require('gulp-ruby-sass'),
    htmlmin = require('gulp-htmlmin'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del')
;

//Directories/filenames
var APP_DIR = './app',
    DIST_DIR = './dist',
    VENDOR_DIR = './bower_components',
    VENDOR_SCSS_FILES = VENDOR_DIR + '/**/*.scss',
    APP_SCSS_FILES = [APP_DIR + '/components/**/*.scss', APP_DIR + '/modules/**/*.scss'],
    APP_TEMPLATE_FILES = [APP_DIR + '/components/**/*.html', APP_DIR + '/modules/**/*.html'],
    APP_JS_FILES = [APP_DIR + '/components/**/*.js', APP_DIR + '/modules/**/*.js'],
    WEBPACK_CONF = require('./webpack.conf.js'),
    ENTRY = './app/app.js',
    OUTPUT_FILE = 'scripts.js'
;

gulp.task('js', function () {
    console.log("Building JS");
    var wpconfig = WEBPACK_CONF;
    wpconfig.entry = ENTRY;
    wpconfig.output = {
        path: DIST_DIR,
        filename: OUTPUT_FILE
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

gulp.task('templates', function () {
    console.log('Building $templateCache');
    return gulp.src(APP_TEMPLATE_FILES)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(ngTemplates({
            filename: 'templates.js',
            module: 'him.templates',
            path: function (path, base) {
                return path.replace(base, '').replace('/templates', '');
            }
        }))
        .pipe(gulp.dest(APP_DIR));
});

gulp.task('sass', function (done) {
    console.log('Compiling CSS');
    return sass(APP_SCSS_FILES, {
            sync: true,
            outputStyle: 'compressed'
        })
    .pipe(gulp.dest(DIST_DIR + '/css'));
});

gulp.task('tdd', function (done) {
    console.log('Start Jasmine Tests');
    new karmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('default', ['templates', 'js', 'sass', 'tdd']);