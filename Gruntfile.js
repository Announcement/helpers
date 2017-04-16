var json = require('rollup-plugin-json')
var babel = require('rollup-plugin-babel')
var sourcemaps = require('rollup-plugin-sourcemaps')

module.exports = function (grunt) {
  // require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        compress: true,
        sourceMap: true
      },
      dist: {
        options: {
          sourceMapIn: 'bin/helpers.js.map'
        },
        files: {
          'bin/helpers.min.js': 'bin/helpers.js'
        }
      }
    },
    babel: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: '**/*.js',
            dest: 'lib/',
            extDot: 'last'
          }
        ],
      },
      options: {
        'presets': ['env']
      }
    },
    rollup: {
      options: {
        // entry: 'src/helpers.js',
        format: 'cjs',
        moduleName: 'Helpers',
        sourceMap: true,
        // dest: 'bin/helpers.js',
        plugins: function () {
          return [
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
          ]
        }
      },
      dist: {
        src: 'src/helpers.js',
        dest: 'bin/helpers.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-rollup')

  grunt.registerTask('default', ['babel', 'rollup', 'uglify'])
  // grunt.registerTask('babel', ['babel']);
  // grunt.registerTask('rollup', ['rollup']);
  // grunt.registerTask('uglify', ['uglify']);
}
