const packageJson = require('./package.json');
const packages = packageJson.files;

import gulp from 'gulp';
import clean from 'gulp-clean';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import del from 'del';

const buildDir = './tmp';

gulp.task('clean', () => {
  return gulp.src(packages, { read: false })
    .pipe(clean());
});

gulp.task('build', ['dist'], () => del([buildDir]));

gulp.task('dist', ['clean', 'styles', 'js'], () => {
  return gulp.src('./' + buildDir + '/**/*.*')
    .pipe(gulp.dest('./'));
});

gulp.task('styles', () => {
  return gulp.src('./lib/components/**/*.css')
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-cssnext')()
    ]))
    .pipe(cleanCSS())
    .pipe(gulp.dest(buildDir));
});

gulp.task('js', () => {
  return gulp.src(['./lib/components/**/*.js', '!./lib/components/**/*.spec.js'])
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(buildDir));
});

gulp.task('watch', () => {
  gulp.watch(['./lib/**/*.*', '!./lib/components/**/*.spec.js'], ['build']);
});