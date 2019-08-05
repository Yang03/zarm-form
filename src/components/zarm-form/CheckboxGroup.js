import React from 'react'
import { Checkbox as ZarmCheckbox, Cell } from 'zarm'
import { createErrorElement } from './Error'

export default class CheckboxGroup extends React.PureComponent {
  render() {
    const { children } = this.props
    const items = React.Children.map(children, (element) => {
      return <ZarmCheckbox {...element.props}></ZarmCheckbox>
    })
    const { error } = this.props
    return (<Cell title={this.props.label} help={createErrorElement(error)}><ZarmCheckbox.Group {...this.props}>{items}</ZarmCheckbox.Group></Cell>)
  }
}