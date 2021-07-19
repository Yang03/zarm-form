import React from 'react'
import classnames from 'classnames'
import { Cell, Message, Icon } from 'zarm'

function FormItem(props) {
  const { children, label, changelistener, blurlistener, className, error, hasArrow, showError} = props
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

  let help = ''
  if (error) {
    if (React.isValidElement(error)) {
      help = error
    } else if (typeof error === 'string') {
      help = <Message theme="danger">
      <Icon type="wrong-round" size="sm"/>
      <div>{error}</div>
    </Message>
    } 
  }

  return <Cell title={label} className={cls} hasArrow={hasArrow} help={showError ?  help : ''}>
    {child}
  </Cell>
}

export default FormItem