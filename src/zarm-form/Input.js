import React from 'react'
import { Input as ZarmInput, Cell } from 'zarm'
import { createErrorElement } from './Error'

export default class Input extends React.PureComponent {
  render() {
    const { error } = this.props
    return (<Cell title={this.props.label} help={createErrorElement(error)} hasArrow={this.props.hasArrow}><ZarmInput {...this.props} /></Cell>)
  }
}
