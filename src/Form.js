import React from 'react'
import classnames from 'classnames'
import schema from 'async-validator'
import { getError } from  './util'

export default class Form extends React.Component {
  formRules = {}
  values = []
  error = {
    errors: [],
    fields: {},
  }
  addError = (err, key) => {
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
  onError = (error = {}) => {
    const {
      onError
    } = this.props
    if (typeof onError === 'function') {
      onError(error.errors)
    }
  }
  validate() {
    const validator = new schema(this.formRules)
    return new Promise((resolve, reject) => {
      validator.validate(this.values).then(() => {
        return resolve(this.values)
      }, (err) => {
        this.error = err
        return reject(err)
      })
    })
  }
  render() {
    const { children, className, errors } = this.props
    const items = React.Children.map(children, (element, index) => {
      const elemetTypeName = element.type.displayName
      if (elemetTypeName !== 'zarm-form-item') {
        return React.cloneElement(element)
      }
      const {name, label, rules = [] } = element.props
      let { error } = element.props
      error = error || getError(errors, name)
      const blurRule = rules.filter(item => item.trigger === 'blur')
      const changeRule = rules.filter(item => item.trigger === 'change')
      if (this.formRules[name]) {
        this.formRules[name] = this.formRules[name].concat(rules)
      } else {
        this.formRules[name] = rules
      }
     
      return React.cloneElement(element, {
        error,
        name,
        label,
        error,
        changelistener: (value) => {
          this.values[name] = value
          if (changeRule.length > 0) {
            const validator = new schema({
              [name]: changeRule
            })
            validator.validate({
              [name]: value
            }).then(() => {
              this.removeError(name)
            }, (err) => {
              this.addError(err, name)
            })
          }
        },
        blurlistener: (value) => {
          if (blurRule.length > 0) {
            const validator = new schema({
              [name]: blurRule
            })
            validator.validate({
              [name]: value
            }).then(() => {
              this.removeError(name)
            }, (err) => {
              this.addError(err, name)
            })
          }
        }
      })
    })
    const cls = classnames('zarm-form', className)
    return (<div className={cls}>{items}</div>)
  }
}