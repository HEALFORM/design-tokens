<div align="center">

# @healform/design-tokens

Automatically generate visual primitives such as typography, color, and spacing that are shared across platforms.

[![Build Status](https://travis-ci.com/HEALFORM/healform-design-tokens.svg?branch=main)](https://travis-ci.com/HEALFORM/healform-design-tokens) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/HEALFORM/healform-design-tokens?label=release)

</div>

## Installation

Depending on your preference, run one of the following in your terminal:

```sh
# With Yarn
yarn add @healform/design-tokens

# With npm
npm install @healform/design-tokens
```

## What's included
```
healform-design-tokens/
├── src/                                    # Token source files
└── dist/                                   # These files get built through the build task and get published via npm — are part of the npm package
    ├── css/
    │    ├── variables--host.css            # CSS variables with :host selector
    │    └── variables--root.css            # CSS variables with :root selector
    ├── js/
    │    ├── tokens-raw.json                # Nested .json file
    │    ├── tokens.commonjs.js             # Flat commonjs file
    │    ├── tokens.es6.js                  # Flat es6 file
    │    ├── tokens.js                      # Nested .js file
    │    └── tokens.json                    # Flat .json file
    ├── less/                            
    │   └── variables.less                  # Less variables
    └── scss/                            
        ├── variables_css--placeholder.scss # CSS variables with Sass placeholder selector (%)
        └── variables.scss                  # Sass variables
```

## Usage

The package currently exports a single theme that is meant to be used with HEALFORM's React component library, [HEALFORM UI](https://github.com/healform/healform-ui-library).

```jsx
import tokens from '@healform/design-tokens';

const Colored = styled.strong`
  color: ${tokens.colors.primary.value};
`;

const App = () => (
  <Colored>This styled component has access to the theme.</Colored>
);
```

## Development

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to make sure we can automatically determine the next release version if necessary.

## Deployment

TravisCI is building as soon as a branch gets merged into the master branch. After successful linting, the HEALFORM Design Tokens package will be published to npm. You can find the package on npm [here](https://www.npmjs.com/package/@healform/design-tokens/access).
