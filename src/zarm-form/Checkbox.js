import React from 'react'
import { Checkbox as ZarmCheckbox, Cell } from 'zarm'

class Checkbox extends React.PureComponent {
  render() {
    const { label, ...others } = this.props
    return (<Cell title={label}>
      <ZarmCheckbox {...others} />
      {this.props.message ? this.props.message : ''}
    </Cell>)
  }
}

Checkbox.displayName = 'Checkbox'
export default Checkbox