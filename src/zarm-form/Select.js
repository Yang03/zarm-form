import React from 'react'
import { Select as ZarmSelect, Cell } from 'zarm'
import { createErrorElement } from './Error'

export default class Select extends React.PureComponent {
  render() {
    const { error } = this.props
    return (<Cell title={this.props.label} help={createErrorElement(error)} hasArrow={this.props.hasArrow}>
      <ZarmSelect {...this.props} />
    </Cell>)
  }
}