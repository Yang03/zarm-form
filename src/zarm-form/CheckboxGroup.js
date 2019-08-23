import React from 'react'
import { Checkbox as ZarmCheckbox, Cell } from 'zarm'
import { createErrorElement } from './Error'

class CheckboxGroup extends React.PureComponent {
  render() {
    const { error, label, children, ...others } = this.props
    const items = React.Children.map(children, (element) => {
      return <ZarmCheckbox {...element.props}></ZarmCheckbox>
    })
    return (<Cell title={label} help={createErrorElement(error)}><ZarmCheckbox.Group {...others}>{items}</ZarmCheckbox.Group></Cell>)
  }
}

CheckboxGroup.displayName = 'CheckboxGroup'
export default CheckboxGroup