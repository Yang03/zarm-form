import React from 'react'
import { Checkbox as ZarmCheckbox, Cell } from 'zarm'

export default class Checkbox extends React.PureComponent {
  render() {
    return (<Cell title={this.props.label}>
      <ZarmCheckbox {...this.props} />
      {this.props.message ? this.props.message : ''}
    </Cell>)
  }
}