/// <binding BeforeBuild='ts, tstemplate' AfterBuild='tstheme-assets' ProjectOpened='angular2-lib' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './wwwroot/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean(), { read: false });
});

var tsProject = ts.createProject('scripts/tsconfig.json');
gulp.task('ts', function () {
    var tsResult = gulp.src([
            "scripts/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
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

gulp.task("angular2-lib", function () {
    gulp.src(['systemjs.config.js']).pipe(gulp.dest("./wwwroot/"));
    gulp.src(["node_modules/@angular/**/*"]).pipe(gulp.dest("wwwroot/libs/@angular/"));
    gulp.src(["node_modules/rxjs/**/*"]).pipe(gulp.dest("wwwroot/libs/rxjs/"));
    gulp.src(["node_modules/rxjs/operator/**/*"]).pipe(gulp.dest("wwwroot/libs/rxjs/operators"));
    gulp.src(["node_modules/core-js/client/shim.min.js"]).pipe(gulp.dest("wwwroot/libs"));
    gulp.src(["node_modules/zone.js/dist/zone.js"]).pipe(gulp.dest("wwwroot/libs"));
    gulp.src(["node_modules/reflect-metadata/Reflect.js"]).pipe(gulp.dest("wwwroot/libs"));
    gulp.src(["node_modules/systemjs/dist/system.src.js"]).pipe(gulp.dest("wwwroot/libs"));
});

