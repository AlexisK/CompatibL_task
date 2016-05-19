
var gulp   = require('gulp');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var csso   = require('gulp-csso');
var less   = require('gulp-less');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');



gulp.task('build_css', function() {
    
    gulp.src('./resources/bootstrap-*/**/*.min.css')
    .pipe(concat('vendor.css'))
    .pipe(csso())
    .pipe(gulp.dest('./build'));
    
    gulp.src('./resources/css/**/*')
    .pipe(less())
    .pipe(concat('app.css'))
    .pipe(csso())
    .pipe(gulp.dest('./build'));

});


gulp.task('build_js', function() {
    
    gulp.src(['./resources/jquery-*.js','./resources/bootstrap-*/**/*.min.js','./resources/angular.js'])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
    
    gulp.src('./resources/js/**/*')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
    

});


gulp.task('build_html', function() {
    
    gulp.src('./resources/index.html').pipe(gulp.dest('./build'));

});



gulp.task('build', function() {
    
    runSequence('build_css','build_js','build_html');
    
});

gulp.task('observe', function() {
    
    gulp.watch('./resources/**/*',['build']);

});

gulp.task('runserver', function() {
    gulp.src('./build')
    .pipe(webserver({
        open: true
    }));
});

