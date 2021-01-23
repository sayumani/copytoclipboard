import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import CopyToCLipBoard from '.'

configure({ adapter: new Adapter() })
Object.assign(navigator, {
  clipboard: {
    writeText: () => {}
  }
})

describe('CopyToCLipBoard', () => {
  it('is truthy', () => {
    expect(CopyToCLipBoard).toBeTruthy()
  })

  it('should copy text', async (done) => {
    jest.spyOn(navigator.clipboard, 'writeText')
    const wrapper = mount(<CopyToCLipBoard text='copytoclipboard' />)
    const copyElement = wrapper.find('div.copy_container')
    console.log(copyElement)
    copyElement.simulate('click')
    done()
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'copytoclipboard'
    )
  })
})
