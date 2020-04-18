import React from 'react'
import classnames from 'classnames'
import { Cell } from 'zarm'
import { createErrorElement } from './error'

class FormItem extends React.Component {
  render() {
    const { children, label, changelistener, blurlistener, className, error, hasArrow } = this.props
    const { onChange, onBlur, onOk, ...others } = children.props
    const change = typeof onOk === 'function' ? 'onOk' : 'onChange' 

    const events = {
      [change]: (value) => {
        if (typeof onChange === 'function') {
          onChange(value)
        }
        if (typeof onOk === 'function') {
          onOk(value)
        }
        changelistener(value)
      },
    }
    if (change === 'onChange') {
      events.onBlur = (value) => {
        if (typeof onChange === 'function') {
          onBlur(value)
        }
        blurlistener(value)
      }
    }
    const child = React.cloneElement(children, {
      ...others,
      ...events
    })
    const cls = classnames('zarm-form__item', className)
    return <Cell title={label} className={cls} help={createErrorElement(error)} hasArrow={hasArrow} >
      {child}
    </Cell>
  }
}

FormItem.displayName = 'zarm-form-item'
export default FormItem