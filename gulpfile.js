let gulp = require('gulp');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let header = require('gulp-header');
let pkg = require('./package.json');


var jsBanner = [
    '/*!',
    ' * Recipage | v<%= pkg.version %>',
    ' * Author: <%= pkg.author %>',
    ' * Link: <%= pkg.homepage %>',
    ' * License: <%= pkg.license %>',
    ' */'
].join('\n');

var cssBanner = [
    '/*!',
    ' * Recipage - Default Theme | v<%= pkg.version %>',
    ' * Author: <%= pkg.author %>',
    ' * Link: <%= pkg.homepage %>',
    ' * License: <%= pkg.license %>',
    ' */'
].join('\n');


var configs = {
    browsers: [
        'last 2 versions',
        '> 1%',
        'Chrome >= 30',
        'Firefox >= 30',
        'ie >= 9',
        'Safari >= 8',
    ],
    cleanCSS: {
        compatibility: 'ie9'
    },
};

gulp.task('minify-js', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            "presets": [
                ["@babel/env", {
                    "targets": configs.browsers
                }]
            ]
        }))
        .pipe(uglify({
            keep_fnames: false
        }))
        .pipe(header(jsBanner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
    return gulp.src('src/**/*.css')
        .pipe(autoprefixer(configs.browsers))
        .pipe(cleanCSS(configs.cleanCSS))
        .pipe(header(cssBanner, { pkg: pkg }))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return del([
        'dist/**/*',
    ]);
})

gulp.task('build', gulp.parallel('minify-js', 'minify-css'));

gulp.task('default', gulp.parallel('build'));