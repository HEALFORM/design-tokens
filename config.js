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
          format: 'javascript/module',
          destination: 'tokens.js'
        },
        {
          format: 'typescript/module-declarations',
          destination: 'tokens.d.ts'
        },
      ],
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'color/css'
      ]
    },
    json: {
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'tokens-flat.json',
          format: 'json/flat'
        },
        {
          destination: 'tokens-nested.json',
          format: 'json/nested'
        },
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
          format: 'scss/variables'
        },
        {
          destination: 'variables-map.scss',
          format: 'scss/map-deep'
        },
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
