import React from 'react'
import { Select as ZarmSelect, Cell } from 'zarm'
import { createErrorElement } from './Error'

class Select extends React.PureComponent {
  render() {
    const { error, label, hasArrow, ...ohters } = this.props
    return (<Cell title={label} help={createErrorElement(error)} hasArrow={hasArrow}>
      <ZarmSelect {...ohters} />
    </Cell>)
  }
}

Select.displayName = 'Select'
export default Select