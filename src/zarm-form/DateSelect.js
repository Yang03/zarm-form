import React from 'react'
import { DateSelect as ZarmDateSelect, Cell } from 'zarm'
import { createErrorElement } from './Error'

class DateSelect extends React.PureComponent {
  render() {
    const { error, label, hasArrow, ...ohters } = this.props
    return (<Cell title={label} help={createErrorElement(error)} hasArrow={hasArrow}>
      <ZarmDateSelect {...ohters} />
    </Cell>)
  }
}

DateSelect.displayName = 'DateSelect'
export default DateSelect