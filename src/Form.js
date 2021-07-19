import React, { useImperativeHandle, useState, useRef } from 'react'
import classnames from 'classnames'
import schema from 'async-validator'

const Form = React.forwardRef((props, ref) => {
  const [values, setValues] = useState({})
  const formRules= useRef({})
  useImperativeHandle(ref, () => ({
    validator: new schema(formRules.current),
    values,
  }))
  
  const { children, className, errors } = props
  const items = React.Children.map(children, (element, index) => {
    const elemetTypeName = element.type.displayName
    if (elemetTypeName !== 'zarm-form-item') {
      return React.cloneElement(element)
    }
    const {name, label, rules = [] } = element.props
    let { error } = element.props
    error = error || errors?.[name]
    const blurRule = rules?.items?.filter(item => item.trigger === 'blur')
    const changeRule = rules.items?.filter(item => item.trigger === 'change')

    if (formRules.current?.[name]) {
      formRules.current[name] = formRules[name]?.current?.concat(rules?.items)
    } else {
      formRules.current[name] = rules?.items
    }
    
    return React.cloneElement(element, {
      error,
      name,
      label,
      error,
      changelistener: (value) => {
        setValues({
          ...values,
          [name]: value
        })
        if (changeRule.length > 0) {
          rules.callback(changeRule, name, value)
        }
      },
      blurlistener: (value) => {
        if (blurRule.length > 0) {
          rules.callback(blurRule, name, value)
        }
      }
    })
  })
  const cls = classnames('zarm-form', className)
  return (<div className={cls}>{items}</div>)

})
export default Form
