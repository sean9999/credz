var gulp = require("gulp");
var browserify = require("browserify");
var watchify = require("watchify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var gutil = require("gulp-util");
var watch = require('gulp-watch');
var paths = {
    pages: ['src/**/*.html'],
    js: ['src/**/*.js']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task('copy-js', function() {
    return gulp.src(paths.js).pipe(gulp.dest('dist'));
});

gulp.task("transpile-typescript", function () {
    return b
    .plugin(tsify)
    .bundle()
    .pipe(source('js/bundle.js'))
    .pipe(gulp.dest("dist"));
});

var b = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
});

var watchedBrowserify = watchify(browserify(b).plugin(tsify));

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('js/bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task('stream', function () {
    // Endless stream mode
    return watch(['src/**','!src/**/*.ts'], { ignoreInitial: false }).pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series('copy-html','copy-js','transpile-typescript'));

gulp.task("default", gulp.series('build', bundle, 'stream'));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
