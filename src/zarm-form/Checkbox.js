import React from 'react'
import { Checkbox as ZarmCheckbox, Cell } from 'zarm'

export default class Checkbox extends React.PureComponent {
  render() {
    const { label, ...others } = this.props
    return (<Cell title={label}>
      <ZarmCheckbox {...others} />
      {this.props.message ? this.props.message : ''}
    </Cell>)
  }
}