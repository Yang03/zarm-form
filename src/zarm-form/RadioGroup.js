import React from 'react'
import { Radio as ZarmRadio, Cell } from 'zarm'
import { createErrorElement } from './Error'

class RadioGroup extends React.PureComponent {
  render() {
    const { error, label, children, ...others } = this.props
    const items = React.Children.map(children, (element) => {
      return <ZarmRadio {...element.props}></ZarmRadio>
    })
    return (<Cell title={label} help={createErrorElement(error)}><ZarmRadio.Group {...others}>{items}</ZarmRadio.Group></Cell>)
  }
}

RadioGroup.displayName = 'RadioGroup'
export default RadioGroup