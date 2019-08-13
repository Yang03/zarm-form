import React from 'react'
import { FilePicker as ZarmFicker, Cell } from 'zarm'
import { createErrorElement } from './Error'

export default class FilePicker extends React.PureComponent {
  render() {
    const { error, children, label, ...ohters } = this.props
    return (<Cell title={label} help={createErrorElement(error)}>
      <ZarmFicker {...ohters}>
       {children}
      </ZarmFicker>
    </Cell>)
  }
}