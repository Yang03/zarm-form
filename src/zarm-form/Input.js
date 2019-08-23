import React from 'react'
import { Input as ZarmInput, Cell } from 'zarm'
import { createErrorElement } from './Error'

class Input extends React.PureComponent {
  render() {
    const { error, hasArrow, label, ...others } = this.props
    return (<Cell title={label} help={createErrorElement(error)} hasArrow={hasArrow}><ZarmInput {...others} /></Cell>)
  }
}

Input.displayName = 'Input'
export default Input
