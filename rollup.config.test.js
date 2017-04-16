import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import istanbul from 'rollup-plugin-istanbul'
import json from 'rollup-plugin-json'
import sourcemaps from 'rollup-plugin-sourcemaps'
import visualizer from 'rollup-plugin-visualizer'

const entry = 'src/helpers.js'
const format = 'cjs'
const moduleName = 'Helpers'
const sourceMap = true
const dest = 'dist/helpers.js'

const visualizerConfig = {
  filename: './statistics.html'
}

const istanbulConfig = {
  exclude: [
    'test/**/*.js',
    'node_modules/**/*'
  ]
}

const babelConfig = {
  babelrc: false,
  'presets': [
    [
      'env',
      {
        'modules': false
      }
    ]
  ],
  'plugins': [
    'external-helpers',
    'istanbul'
  ]
}

const nodeResolveConfig = {
  jsnext: true
}

const plugins = [
  sourcemaps(),
  json(),
  visualizer(visualizerConfig),
  istanbul(istanbulConfig),
  babel(babelConfig),
  nodeResolve(nodeResolveConfig),
  commonjs()
]

export default {
  entry,
  format,
  moduleName,
  sourceMap,
  plugins,
  dest
}
