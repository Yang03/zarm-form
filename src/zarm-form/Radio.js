import React from 'react'
import { Radio as ZarmRadio, Cell } from 'zarm'

class Radio extends React.PureComponent {
  render() {
    const { label, ...others } = this.props
    return (<Cell title={label}>
      <ZarmRadio {...others} />
      {this.props.message ? this.props.message : ''}
    </Cell>)
  }
}

Radio.displayName = 'Radio'
export default Radio