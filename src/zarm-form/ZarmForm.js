import React, { Component, cloneElement } from 'react'
import schema from 'async-validator'

export default class ZarmForm extends Component {
  onChange = (key, value) => {
    const { onChange, values } = this.props
    values[key] = value
    onChange(values)
  }
  render() {
    const { children } = this.props
    const inputItems = React.Children.map(children, (element, index) => {
      if (element.type.name === 'Select') {
        return cloneElement(element, {
          key: index,
          onOk: (value) => this.onChange(element.props.name, value), 
        })
      } else {
        return cloneElement(element, {
          key: index,
          onChange: (value) => this.onChange(element.props.name, value)
        })
      }
    })
    return (<div className="zarm__form">{inputItems}</div>)
  }
  validate() {
    const { values, rules } = this.props
    this.validator = new schema(rules)
    return new Promise((resolve, reject) => {
      this.validator.validate(values).then(() => {
        resolve(values)
      }).catch(({ errors, fields }) => {
        reject({
          errors, 
          fields
        })
      })
    })
  }
}
