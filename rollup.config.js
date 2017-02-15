import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import sourcemaps from 'rollup-plugin-sourcemaps'

export default {
  entry: 'src/helpers.js',
  format: 'cjs',
  moduleName: 'Helpers',
  sourceMap: true,
  plugins: [
    sourcemaps(),
    json(),
    babel({
      babelrc: false,
      'presets': [
        [
          'env',
          {
            'modules': false
          }
        ]
      ],
      'plugins': ['external-helpers']
    })
  ],
  dest: 'bin/helpers.js'
}
