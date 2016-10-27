var gulp = require("gulp");
var browserify = require("browserify");
var watchify = require("watchify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var gutil = require("gulp-util");
var watch = require('gulp-watch');
var del = require('del');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var gp_concat = require('gulp-concat'), gp_rename = require('gulp-rename'), gp_uglify = require('gulp-uglify'), gp_sourcemaps = require('gulp-sourcemaps');
var htmlreplace = require('gulp-html-replace');
var electron = require('electron-connect').server.create();
var paths = {
    pages: ['src/*.html','!src/index.html'],
    index: ['src/index.html'],
    rootJs: ['src/*.js'],
    nonRootJs: ['src/js/*.js'],
    meta: ['manifest.json','entrypoint.js','package.json'],
    css: ['src/**/*.css'],
    ts: ['src/**/*.ts']
};

gulp.task('clean',function(){
    return del(['dist/**']);
});

gulp.task("copy-html", function () {
    return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

gulp.task('copy-root-js', function() {
    return gulp.src(paths.rootJs).pipe(gulp.dest('dist'));
});

gulp.task('copy-nonroot-js',function(){

   return gulp.src(paths.nonRootJs)
    .pipe(gp_sourcemaps.init())
    .pipe(gp_concat('js.max.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(gp_sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'));

    /*  when uglify supports ES6
   return gulp.src(paths.nonRootJs)
    .pipe(gp_sourcemaps.init())
    .pipe(gp_concat('js.max.js'))
    .pipe(gulp.dest('dist'))
    .pipe(gp_rename('js.min.js'))
    .pipe(gp_uglify())
    .pipe(gp_sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'));
    */
});

gulp.task('copy-js', gulp.parallel(['copy-root-js','copy-nonroot-js']));

gulp.task('copy-meta', function() {
    return gulp.src(paths.meta).pipe(gulp.dest('dist'));
});

gulp.task('combine-css',function(){
    return gulp.src(paths.css)
        .pipe(concatCss('css/css.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'));
});

var b = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/js/main.ts'],
    cache: {},
    packageCache: {}
});

gulp.task("transpile-typescript", function () {
    return b
    .plugin(tsify)
    .bundle()
    .pipe(source('js/ts.js'))
    .pipe(gulp.dest("dist"));
});

/*
var watchedBrowserify = watchify(browserify(b).plugin(tsify));
function recompileTypeScript() {
    return watchedBrowserify
        .bundle()
        .pipe(source('js/ts.js'))
        .pipe(gulp.dest("dist"));
}
watchedBrowserify.on("update", recompileTypeScript);
watchedBrowserify.on("log", gutil.log);
*/

gulp.task('fix-index-html', function() {
  return gulp.src('src/index.html')
    .pipe(htmlreplace({
        'css': 'css/css.css',
        'js': 'js/js.max.js',
        'ts': {
            src: null,
            tpl: '    <script src="js/ts.js" async="async" defer="defer"></script>\n'
        }
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch',function(){
    //  watchers
    var watchers = [];
    var watch_html = gulp.watch(paths.pages, gulp.series(['copy-html']));
    var watch_index = gulp.watch(paths.index, gulp.series(['fix-index-html']));
    var watch_rootJs = gulp.watch(paths.rootJs, gulp.series(['copy-root-js']));
    var watch_nonRootJs = gulp.watch(paths.nonRootJs, gulp.series(['copy-nonroot-js']));
    var watch_meta = gulp.watch(paths.meta, gulp.series(['copy-meta']));
    var watch_css = gulp.watch(paths.css, gulp.series(['combine-css']));
    var watch_ts = gulp.watch(paths.ts, gulp.series(['transpile-typescript']));
    watchers.push(
        watch_html,
        watch_index,
        watch_rootJs,
        watch_nonRootJs,
        watch_meta,
        watch_css,
        watch_ts
    );
    watchers.forEach(function(w){
        w.on('change',function(event){
            gutil.log('gulp watch activated');
        });
    });
});

gulp.task('launch-electron-with-livereload', function () {
  electron.start();
  gulp.watch('entrypoint.js', electron.restart);
  gulp.watch(['dist/**/*.html','dist/**/*.css','dist/**/*.js'], electron.reload);
});

gulp.task('build', gulp.series('copy-html','copy-js','copy-meta','combine-css','transpile-typescript','fix-index-html'));

gulp.task('serv', gulp.series('build','launch-electron-with-livereload'));

gulp.task("default", gulp.series('build'));

