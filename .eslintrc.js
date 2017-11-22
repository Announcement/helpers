module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },

  extends: ['standard'],

  plugins: ['standard', 'promise', 'jsdoc'],

  rules: {
    'import/no-duplicates': [0],
    'max-len': [2, { code: 80, ignoreComments: true }],
    'max-nested-callbacks': [2, { max: 3 }],
    'consistent-return': 2,
    'global-require': 2,

    'vars-on-top': 1,
    'complexity': [1, { max: 2 }],
    'max-depth': [1, { max: 3 }],
    'max-params': [1, { max: 3 }],

    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': 1,
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-example': 0,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 0, // this option is broken on splats
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1
  },

  settings: {
    jsdoc: {
      tagNamePreference: {}
    }
  }
}
