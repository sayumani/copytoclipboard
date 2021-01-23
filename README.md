# copytoclipboard

> library for copying text to clip board

[![NPM](https://img.shields.io/npm/v/copytoclipboard.svg)](https://www.npmjs.com/package/copy-to-clipboard-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save copy-to-clipboard-react
```

## Usage

```jsx
import React, { Component } from 'react'

import CopyToCLipBoard from 'copytoclipboard'
import 'copytoclipboard/dist/index.css'

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

## License

MIT © [sayumani](https://github.com/sayumani)
