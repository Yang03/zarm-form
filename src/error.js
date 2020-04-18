import React from 'react'
import { Message, Icon } from 'zarm'

export default class Error extends React.PureComponent {
  static defaultProps = {
    theme: 'danger',
    type: 'wrong-round'
  }
  render() {
    return (<Message theme={this.props.theme}>
      <Icon type={this.props.type} size="sm"/>
      {this.props.children}
    </Message>)
  }
}

export const createErrorElement = (error) => {
  let help = ''
  if (React.isValidElement(error)) {
    help = error
  } else if (typeof error === 'string' && error !== '') {
    help = <Error>{error}</Error>
  }
  return help
}
