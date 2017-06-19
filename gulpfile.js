var rollup
var gulp
var babel
var sourcemaps
var changed
var rename
var uglifyes
var composer
var filter
var minify
var watch
var lazypipe
var gulpif
var cache
var minimist
var eslint
var eslintConfig
var plato

rollup = require('./rollup-stream')
gulp = require('gulp')
watch = require('gulp-watch')
babel = require('gulp-babel')
sourcemaps = require('gulp-sourcemaps')
changed = require('gulp-changed')
rename = require('gulp-rename')
uglifyes = require('uglify-es')
composer = require('gulp-uglify/composer')
filter = require('gulp-filter')
lazypipe = require('lazypipe')
gulpif = require('gulp-if')
cache = require('gulp-cached')
minimist = require('minimist')
eslint = require('gulp-eslint')
eslintConfig = require('./.eslintrc.js')
plato = require('es6-plato')

minify = composer(uglifyes, console)

let source = {}
let destination = {}
let configuration = {}

configuration.babel = {}
configuration.rollup = {}
configuration.plato = {}
configuration.targets = {}
configuration.minimist = {}

source.header = 'src/*.js'
source.library = 'src/*.js'
source.plato = 'src/*.js'

destination.header = 'lib'
destination.library = 'dist'
destination.plato = 'report'
destination.sourcemap = 'map'

destination.min = {
  header: 'lib/min',
  library: 'dist/min',
  sourcemap: '../map'
}

configuration.targets.development = { node: 'current' }

configuration.targets.production = { browsers: [ 'last 2 versions' ] }

configuration.rollup.development = { format: 'cjs' }

configuration.rollup.production = { format: 'iife' }

configuration.babel.development = {
  // comments: false,
  babelrc: false,
  presets: [ [ 'env', { targets: configuration.targets.development } ] ]
}

configuration.babel.production = {
  babelrc: false,
  comments: false,
  presets: [ [ 'env', { targets: configuration.targets.production } ] ]
}

configuration.plato.eslint = eslintConfig
configuration.plato.complexity = {}

configuration.minimist.alias = {
  minimize: [ 'min', 'm' ],
  watch: [ 'w' ],
  force: [ 'f' ],
  environment: [ 'env', 'e' ]
}

configuration.minimist.boolean = [
  'watch',
  'minimize',
  'force'
]

configuration.minimist.string = [
  'environment'
]

configuration.minimist.default = {
  environment: getEnvironment(process.env.NODE_ENV)
}

let setup = minimist(process.argv.slice(2), configuration.minimist)

let minimizing = setup.minimize
let watching = setup.watch
let force = setup.force

function environment (options) {
  return options[setup.environment] || options
}

function getEnvironment (string) {
  let similar = it => it.indexOf(string) === 0

  let common = [
    'production',
    'development'
  ]

  return common.find(similar) || 'development'
}

function minimize (it) {
  return lazypipe()
    .pipe(() => filter('**/*.js'))
    .pipe(() => rename({ suffix: '.min' }))
    .pipe(() => minify({}))
    .pipe(() => sourcemaps.write(destination.min.sourcemap))
    .pipe(() => gulp.dest(it))
}

function from (it) {
  return watching ? watch(it) : gulp.src(it)
}

gulp.task(
  'dist',
  () =>
    from(source.library)
      .pipe(sourcemaps.init())
      .pipe(rollup(environment(configuration.rollup)))
      .pipe(gulpif(!force, cache('library')))
      .pipe(babel(environment(configuration.babel)))
      .pipe(eslint({ fix: true }))
      .pipe(sourcemaps.write(destination.sourcemap))
      .pipe(gulp.dest(destination.library))
      .pipe(gulpif(minimizing, minimize(destination.min.library)()))
)

gulp.task(
  'lib',
  () =>
    from(source.header)
      .pipe(gulpif(!force, changed(destination.header)))
      .pipe(sourcemaps.init())
      .pipe(babel(environment(configuration.babel)))
      .pipe(eslint({ fix: true }))
      .pipe(sourcemaps.write(destination.sourcemap))
      .pipe(gulp.dest(destination.header))
      .pipe(gulpif(minimizing, minimize(destination.min.header)()))
)

function analysis () {
  return plato
    .inspect(source.plato, destination.plato, configuration.plato)
    .then(() => {})
    .catch(() => {})
}

gulp.task('analysis', analysis)
gulp.task('default', [ 'lib', 'dist' ])
