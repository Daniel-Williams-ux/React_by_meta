# Aphrodite 

_Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation._

Support for colocating your styles with your JavaScript component.

- Works great with and without React
- Supports media queries without window.matchMedia
- Supports pseudo-selectors like `:hover`, `:active`, etc. without needing to
  store hover or active state in components. `:visited` works just fine too.
- Supports automatic global `@font-face` detection and insertion.
- Respects precedence order when specifying multiple styles
- Requires no AST transform
- Injects only the exact styles needed for the render into the DOM.
- Can be used for server rendering
- Few dependencies, small (20k, 6k gzipped)
- No external CSS file generated for inclusion
- Autoprefixes styles

# Installation

Aphrodite is distributed via [npm](https://www.npmjs.com/):

```
npm install --save aphrodite
```

# API

If you'd rather watch introductory videos, you can find them [here](https://www.youtube.com/playlist?list=PLo4Zh55ZzNSBP78pCD0dZJi9zf8CA72_M).

```jsx
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
    render() {
        return <div>
            <span className={css(styles.red)}>
                This is red.
            </span>
            <span className={css(styles.hover)}>
                This turns red on hover.
            </span>
            <span className={css(styles.small)}>
                This turns red when the browser is less than 600px width.
            </span>
            <span className={css(styles.red, styles.blue)}>
                This is blue.
            </span>
            <span className={css(styles.blue, styles.small)}>
                This is blue and turns red when the browser is less than
                600px width.
            </span>
        </div>;
    }
}

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});
```

## Conditionally Applying Styles

Note: If you want to conditionally use styles, that is simply accomplished via:

```jsx
const className = css(
  shouldBeRed() ? styles.red : styles.blue,
  shouldBeResponsive() && styles.small,
  shouldBeHoverable() && styles.hover
)

<div className={className}>Hi</div>
```

This is possible because any falsey arguments will be ignored.

## Combining Styles

To combine styles, pass multiple styles or arrays of styles into `css()`. This is common when combining styles from an owner component:

```jsx
class App extends Component {
    render() {
        return <Marker styles={[styles.large, styles.red]} />;
    }
}

class Marker extends Component {
    render() {
        // css() accepts styles, arrays of styles (including nested arrays),
        // and falsy values including undefined.
        return <div className={css(styles.marker, this.props.styles)} />;
    }
}

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    large: {
        height: 20,
        width: 20
    },

    marker: {
        backgroundColor: 'blue'
    }
});
```