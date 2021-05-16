var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require ('gulp-concat'),
    compass = require ('gulp-compass'),
    path = require('path'),
    browserify = require ('gulp-browserify');
    
   

var coffeeScripts = ['components/coffee/tagline.coffee'];
var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js',
    'components/scripts/jquery.min.js',
];


gulp.task('coffee', function(){
  gulp.src(coffeeScripts)
	.pipe(coffee({bare: true})
	.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
	});

gulp.task('js', function(){
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))    
});

gulp.task('compass', function(){
    gulp.src('components/sass/style.scss')
    .pipe(compass({
         sass: 'components/sass',
        image: 'builds/development/images',
        style: 'expanded'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('builds/development/css'))
});

gulp.task('watch', function(){
    gulp.watch('components/coffee/tagline.coffee', ['coffee']);
    gulp.watch('components/scripts/*.js', ['js']);
    gulp.watch('components/sass/*.sass', ['compass']);
});

gulp.task('default', ['coffee', 'js', 'compass']);