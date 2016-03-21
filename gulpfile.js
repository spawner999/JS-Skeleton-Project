// npm install gulp -g
// npm install bower -g
// npm init
// bower init

// npm i -D browser-sync gulp gulp-concat gulp-uglify del gulp-sass gulp-postcss autoprefixer gulp-sourcemaps lost bower-files gulp-typescript typescript

// bower install jquery --save

var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
postcss = require('gulp-postcss'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('autoprefixer'),
lost = require('lost'),
browserSync = require('browser-sync').create(),
ts = require('gulp-typescript'),
lib = require('bower-files')();

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('css', function () {
  var processors = [ autoprefixer, lost
  ];
  browserSync.reload();
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('html', function(){
  browserSync.reload();
});

gulp.task('ts', function () {
  console.log('hello');
  browserSync.reload();
	return gulp.src('ts/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: 'app.js'
		}))
		.pipe(gulp.dest('build/js'));
});

gulp.task('serve', ['ts', 'css', 'html'], function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  });

  gulp.watch('ts/*.ts', ['ts']);
  gulp.watch('scss/*.scss', ['css']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['serve']);
