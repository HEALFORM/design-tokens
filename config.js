module.exports = {
  platforms: {
    css: {
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables--root.css',
          format: 'css/variables',
          options: {
            selector: ':root'
          }
        },
        {
          destination: 'variables--host.css',
          format: 'css/variables',
          options: {
            selector: ':host'
          }
        }
      ],
      transformGroup: 'css',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css'
      ]
    },
    js: {
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'theme.es6.js',
          format: 'javascript/es6'
        },
        {
          destination: 'theme.commonjs.js',
          format: 'custom/format/javascript/module'
        },
        {
          destination: 'theme.js',
          format: 'javascript/module'
        },
        {
          destination: 'theme.d.ts',
          format: 'typescript/accurate-module-declarations'
        },
        {
          destination: 'tokens.json',
          format: 'json/flat'
        }
      ],
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'color/css'
      ]
    },
    jsonFlat: {
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat'
        }
      ],
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/css'
      ]
    },
    jsonRaw: {
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens-raw.json',
          format: 'json/extended'
        }
      ],
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/css'
      ]
    },
    less: {
      buildPath: 'dist/less/',
      files: [
        {
          destination: 'variables.less',
          format: 'less/variables'
        }
      ],
      transformGroup: 'less',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css'
      ]
    },
    scss: {
      buildPath: 'dist/scss/',
      files: [
        {
          destination: 'variables.scss',
          format: 'custom/format/scss'
        },
        {
          destination: 'variables_css--placeholder.scss',
          format: 'css/variables',
          options: {
            selector: '%healform-design-tokens-css-variables'
          }
        }
      ],
      transformGroup: 'scss',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'color/css'
      ]
    }
  },
  source: ['src']
};
