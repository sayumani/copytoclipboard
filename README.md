# copytoclipboard

> library for copying text to clip board

[![NPM](https://img.shields.io/npm/v/copy-to-clipboard-react.svg)](https://www.npmjs.com/package/copy-to-clipboard-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/sayumani/copytoclipboard.svg?branch=master)](https://travis-ci.com/sayumani/copytoclipboard)

## Install

```bash
npm install --save copy-to-clipboard-react
```

## Usage

```jsx
import React, { Component } from 'react'

import CopyToCLipBoard from 'copy-to-clipboard-react'
import 'copy-to-clipboard-react/dist/index.css'

class Example extends Component {
  render() {
    return (
      <CopyToCLipBoard
        text={'npm install copy-to-clipboard-react'}
        height={'50%'}
        width={'50%'}
      />
    )
  }
}
```

# Demo

https://sayumani.github.io/copytoclipboard/

## License

MIT © [sayumani](https://github.com/sayumani)
