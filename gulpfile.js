const browserSync = require('browser-sync');
let gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
concat = require ('gulp-concat'),
sass = require('gulp-sass'),
cssmin = require('gulp-cssmin'),
rename = require("gulp-rename");


gulp.task('sass', function () {
    return gulp.src('/scss/style.scss')
        .pipe(sass({ outputStyle: 'compressed' }))        
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 8 versions'],
        }))
        .pipe(gulp.dest('/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
    return gulp.src('/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
    return gulp.src('/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function () {
    gulp.watch('/scss/style.scss', gulp.parallel('sass'))
    gulp.watch('/*.html', gulp.parallel('html'))
    gulp.watch('/js/*.js', gulp.parallel('js'))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "/"
        }
    });
});

gulp.task('style',function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/normalize.css/normalize.css'
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('/css'))    
});

gulp.task('script',function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('/js'))    
});

gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync','script','style'))
