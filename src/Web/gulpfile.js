/// <binding BeforeBuild='default' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './wwwroot/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean(), { read: false });
});

gulp.task("scriptsNStyles", function () {
    gulp.src(['core-js/client/**',
        'systemjs/dist/system.src.js',
        'reflect-metadata/**',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**',
        'jquery/dist/jquery.*js',
        'bootstrap/dist/js/bootstrap.*js'
    ], {
        cwd: "node_modules/**"
    }).pipe(gulp.dest("./wwwroot/libs"));
});

gulp.task("systemjs", function () {
    gulp.src(['systemjs.config.js']).pipe(gulp.dest("./wwwroot/"));
});

var tsProject = ts.createProject('scripts/tsconfig.json');
gulp.task('ts', function (done) {
    var tsResult = gulp.src([
            "scripts/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('scripts/*.ts', ['ts']);
});

gulp.task("tstemplate", function () {
    gulp.src(["templates/*.html"]).pipe(gulp.dest("./wwwroot/templates/"));
});

gulp.task("tstheme-assets", function () {
    gulp.src(["assets/**/*"]).pipe(gulp.dest("wwwroot/assets"));
});

gulp.task("npm-lib", function () {
    gulp.src(["node_modules/**/*"]).pipe(gulp.dest("wwwroot/libs"));
    gulp.src(["node_modules/rxjs/operator/**/*"]).pipe(gulp.dest("wwwroot/libs/rxjs/operators"));
});

gulp.task('default', ['ts', 'tstemplate']);
gulp.task('devTasks', ['systemjs', 'npm-lib', 'tstheme-assets', 'default']);

gulp.task('dev-rel', ['systemjs', 'scriptsNStyles']);