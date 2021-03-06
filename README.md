<div align="center">

# @healform/design-tokens

Automatically generate visual primitives such as typography, color, and spacing that are shared across platforms.

[![CI](https://github.com/HEALFORM/design-tokens/actions/workflows/ci.yml/badge.svg)](https://github.com/HEALFORM/design-tokens/actions/workflows/ci.yml)
[![NPM](https://img.shields.io/npm/v/@healform/design-tokens.svg)](https://www.npmjs.com/package/@healform/liquid)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

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
design-tokens/
├── src
└── dist/
    ├── css/
    │   ├── variables-host.css
    │   └── variables-root.css
    ├── js/
    │   ├── tokens.d.ts
    │   └── tokens.js
    ├── json/
    │   ├── tokens-flat.json
    │   ├── tokens-nested.json
    │   └── tokens-raw.json
    ├── less/
    │   └── variables.less
    └── scss/
        ├── variables.scss
        └── variables-map.scss
```

## Usage

The package currently exports a single theme that is meant to be used with HEALFORM's React component library, [Liquid UI](https://github.com/healform/liquid).

### JavaScript

```jsx
import tokens from "@healform/design-tokens/dist/js/tokens";

const Colored = styled.strong`
  color: ${tokens.colors.primary.value};
`;

const App = () => (
  <Colored>This styled component has access to the theme.</Colored>
);
```

### CSS

```css
import "@healform/design-tokens/dist/css/variables--root.css"

#example {
  background: var(--colors-white);
  color: var(--colors-black);
}

#example a {
  color: var(--colors-primary);
  padding: var(--spacings-md);
}
```

### Import via UNPKG CDN

All design tokens are also automatically accessible via the UNPKG CDN after each release.

```html
<link rel="stylesheet" href="https://unpkg.com/@healform/design-tokens@latest/dist/css/variables--root.css">
```

## Development

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to make sure we can automatically determine the next release version if necessary.

## Deployment

TravisCI is building as soon as a branch gets merged into the master branch. After successful linting, the HEALFORM Design Tokens package will be published to npm. You can find the package on npm [here](https://www.npmjs.com/package/@healform/design-tokens/access).
