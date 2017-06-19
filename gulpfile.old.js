// var Vinyl
var gulp
// var pump
var rollup
var babel
var sourcemaps
var changed
var rename
var uglifyes
var composer
var filter
// var source
// var buffer
// var through
// var globby

// var myPlugin

rollup = require('./rollup-stream')

// Vinyl = require('Vinyl')
//
gulp = require('gulp')
// pump = require('pump')
//
// source = require('vinyl-source-stream')
// buffer = require('vinyl-buffer')
// rollup = require('rollup')
babel = require('gulp-babel')
sourcemaps = require('gulp-sourcemaps')
changed = require('gulp-changed')
rename = require('gulp-rename')
uglifyes = require('uglify-es')
composer = require('gulp-uglify/composer')
filter = require('gulp-filter')
// through = require('through2')
// globby = require('globby')

let minify = composer(uglifyes, console)

let source = {
  babel: 'src/*.js',
  rollup: 'src/*.js'
}

let destination = {
  babel: 'lib',
  rollup: 'dist'
}
//
// var cache
//
// cache = {}

// gulp.task('plugin', () =>
//   gulp.src(source.babel)
//     .pipe(myPlugin())
//     .pipe(gulp.dest('dist'))
//   )
//

// gulp.task('pump', function (callback) {
//   let f = filter('**/*.js', {restore: true})
//   pump([
//     gulp.src(locations.babel.source),
//     changed(locations.babel.destination),
//     sourcemaps.init(),
//     babel(),
//     sourcemaps.write('.'),
//     f,
//     rename({suffix: '.min'}),
//     minify({}),
//     f.restore,
//     sourcemaps.write('.'),
//     gulp.dest(locations.babel.destination)
//   ], callback)
// })
//

gulp.task('rollup', () =>
  gulp
    .src(source.rollup)
    .pipe(changed(destination.rollup))
    .pipe(sourcemaps.init())
    .pipe(rollup())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination.rollup))
    .pipe(filter('**/*.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minify({}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination.rollup))
)

gulp.task('babel', () =>
  gulp
    .src(source.babel)
    .pipe(changed(destination.babel))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination.babel))
    .pipe(filter('**/*.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minify({}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination.babel))
)

gulp.task('default', ['babel', 'rollup'], () =>
  gulp.watch('src/**/*.js', ['babel', 'rollup'])
)
// gulp.task('build', function () {
//   return rollup
//     .rollup({
//       entry: './src/main.ts',
//       plugins: [rollupTypescript()]
//     })
//     .then(function (bundle) {
//       bundle.write({
//         format: 'umd',
//         moduleName: 'library',
//         dest: './dist/library.js',
//         sourceMap: true
//       })
//     })
// })
