import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

class CopyToCLipBoard extends React.Component {
  constructor() {
    super()
  }

  copyToClipBoard = async (copyMe) => {}

  onClick = async (event) => {
    const { innerText } = event.target
    console.log(event.target.innerText)
    try {
      await navigator.clipboard.writeText(innerText)
      alert('Copied!')
    } catch (err) {
      alert('Failed to copy!')
    }
  }

  render() {
    const defaultText = 'please provide text'
    let { height, width, text } = this.props
    height = height ? text : '40px'
    width = width ? width : 'fit-content'
    return (
      <div
        className={styles.test}
        style={{ height: height, width: width }}
        onClick={this.onClick}
      >
        {text ? text : defaultText}
        <span className={styles.copy_icon}>
          <FontAwesomeIcon icon={faCopy} />
        </span>
      </div>
    )
  }
}

export default CopyToCLipBoard
