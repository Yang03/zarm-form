import React, {useRef} from 'react'
import ReactDOM from 'react-dom'
import {
  Input,
  Button,
  Checkbox,
  Select,
  DateSelect,
} from 'zarm'

import Form, { useForm } from '../src/index'


function Demo() {
 
  const fromRef = useRef();
  const { handleSubmit, errors, register } = useForm(fromRef);

  console.log(errors, '--------------------->')

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