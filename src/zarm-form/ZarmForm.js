import React, { Component, cloneElement } from 'react'
import schema from 'async-validator'

const FORM_ITEM = ['Input', 'Checkbox', 'FilePicker', 'Select', 'DateSelect', 'CheckboxGroup']
const NOOP = () => {}
export default class ZarmForm extends Component {
  constructor(props) {
    super(props)
    this.error = {
      errors: [],
      fields: {},
    }
  }
  changeValdiate = (key, value) => {
    console.log(key, value)
    const {values, rules = [] } = this.props
    values[key] = value
    const rule = rules[key] || []
    const changeRule = rule.filter(item => item.trigger === 'change')
    if (changeRule.length > 0) {
      const validator = new schema({
        [key]: changeRule
      })
      validator.validate({[key]: value}).then(() => {
        this.removeError(key)
      }, (err) => {
        this.addError(err, key)
      })
    }
  }
  onCancel = (key, value) => {
    this.changeValdiate(key, value)
  }
  onChange = (key, value) => {
    console.log(value)
    this.changeValdiate(key, value)
    if (typeof onChange === 'function') {
      onChange(values)
    }
  }
  addError = (err, key) => {
    console.log(err, key)
    const errors = this.error.errors.concat(err.errors.filter(item => item.field === key))
    this.error = {
      ...this.error,
      fields: {
        ...this.error.fields,
        [key]: err.fields[key]
      },
      errors: errors
    }
    this.onError(this.error)
  }
  removeError = (key) => {
    const fields = this.error.fields
    delete fields[key]
    this.error = {
      ...this.error,
      fields,
      errors: this.error.errors.filter((item) => item.field !== key)
    }
    this.onError(this.error)
  }
  onError = (error) => {
    const { onError } = this.props
    if (typeof onError === 'function') {
      onError(error)
    }  
  }
  render() {
    const { children, rules = [] } = this.props
    const inputItems = React.Children.map(children, (element, index) => {
      const elemetTypeName = element.type.displayName
      if (!FORM_ITEM.includes(elemetTypeName)) {
        return cloneElement(element, {
          key: index
        })
      }
      
      if (elemetTypeName === 'Input') {
        const name = element.props.name
        const rule = rules[name] || []
        const blurRule = rule.filter(item => item.trigger === 'blur')
        return cloneElement(element, {
          key: index,
          onChange: (value) => this.onChange(name, value),
          onBlur: (value) => {
            if (blurRule.length > 0) {
              const validator = new schema({
                [name]: blurRule
              })
              validator.validate({[name]: value}).then(() => {
                this.removeError(name)
              }, (err) => {
                this.addError(err, name)
              })
            }  
          }
        })
      }
      if (elemetTypeName === 'Select' || elemetTypeName === 'DateSelect') {
        return cloneElement(element, {
          key: index,
          onOk: (value) => this.onChange(element.props.name, value),
          onCancel: (value) => this.onCancel(element.props.name, value),
        })
      }
      return cloneElement(element, {
        key: index,
        onChange: (value) => this.onChange(element.props.name, value)
      })  
    })
    return (<div className="zarm__form">{inputItems}</div>)
  }
  validate() {
    const { values, rules } = this.props
    const validator = new schema(rules)
    return new Promise((resolve, reject) => {
      validator.validate(values).then(() => {
        return resolve(values)
      }, (err) => {
        this.error = err
        return reject(err)
      })
    })
  }
}
