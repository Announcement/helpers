import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import sourcemaps from 'rollup-plugin-sourcemaps'

const entry = 'src/helpers.js'
const format = 'cjs'
const moduleName = 'Helpers'
const sourceMap = true
const dest = 'dist/helpers.js'

const babelConfig = {
  babelrc: false,
  presets: [
    [
      'env',
      {
        modules: false
      }
    ]
  ],
  plugins: ['external-helpers']
}

const plugins = [
  sourcemaps(),
  json(),
  babel(babelConfig)
]

export default {
  entry,
  format,
  moduleName,
  sourceMap,
  plugins,
  dest
}
