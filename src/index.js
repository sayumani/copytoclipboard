import React, { Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import 'react-toastify/dist/ReactToastify.css'

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
      toast.success('Copied!')
    } catch (err) {
      toast.error('Failed to copy!')
    }
  }

  render() {
    const defaultText = 'please provide text'
    let { height, width, text } = this.props
    height = height ? text : '40px'
    width = width ? width : 'fit-content'
    return (
      <>
        <div
          className={styles.copy_container}
          style={{ height: height, width: width }}
          onClick={this.onClick}
        >
          {text ? text : defaultText}
          <span className={styles.copy_icon}>
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </div>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          draggable
        />
      </>
    )
  }
}

export default CopyToCLipBoard
