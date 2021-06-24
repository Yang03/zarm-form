
zarm-form is a react form component with validate effects, dependent on [zarm](https://github.com/ZhongAnTech/zarm) and [async-validator](https://github.com/yiminghe/async-validator) 

### Basic Usage
install 
```
  npm i zarm-form --save
```

### Example 
```
import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import {
  Input,
  Button
} from 'zarm'

import Form, { useForm } from '../src/index'


function Demo() {
  const fromRef = useRef();
  const { handleSubmit, errors, register } = useForm(fromRef);
  const submit = (values) => {
    console.log(values, 'ffff')
  }
  return <Form ref={fromRef} errors={errors}>
    <Form.Item
      label="name"
      name="name"
      className="customer-classname"
      showError={true}
      rules = {
        register([{
          required: true,
          message: 'Please input your name!',
          trigger: 'blur'
        }])
      }>
      <Input name="name" placeholder="please input name" />
    </Form.Item>
    <Form.Item
      label="age"
      name="age"
      className="customer-classname"
      rules = {
        register([{
          required: true,
          message: 'Please input your age!',
          trigger: 'blur'
        }])
      }>
      <Input name="age" placeholder="please input age" />
    </Form.Item>
    <Button onClick={handleSubmit(submit)} theme="primary" ghost>submit</Button>
  </Form>
}

ReactDOM.render(<Demo/> , document.getElementById('root'))
```

### [Demo on codesandbox](https://codesandbox.io/s/keen-oskar-ns95u?file=/src/App.js) 

## API

Form

| Properties | type | description |
| :--- | :--- | :--- |
| errors | object | validate result |

Form.Item

| Properties | type | description |
| :--- | :--- | :--- |
| label | string |  |
| name | string |  |
| hasArrow | boolean |  |
| error | string | validate result |
| showError | boolean | show error message |
| rules | array | register(rules) [async-validator](https://github.com/yiminghe/async-validator) |


