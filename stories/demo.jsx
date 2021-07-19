import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { Input, Button } from 'zarm'
import Form, { useForm } from '../src/index'

const stories = storiesOf('form validate', module);


function Demo() {
  const fromRef = useRef();
  const { handleSubmit, errors, register } = useForm(fromRef);
  const submit = (values) => {
    console.log(values)
  }
  return(
    <Form ref={fromRef} errors={errors}>
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
      showError={true}
      rules = {
        register([{
          required: true,
          message: 'Please input your age!',
          trigger: 'blur'
        }])
      }>
      <Input name="age" placeholder="please input age" />
    </Form.Item>
    <Button onClick={handleSubmit(submit)} theme="primary" ghost block>submit</Button>
  </Form>
  )
}
stories.add('validate', () => {
 
    return (
      <div className='story_wrapper'>
      <h2>how to use?</h2>
      <h2>example</h2>
      <div>
        <Demo/>
      </div>
      </div >
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import React, { useRef } from 'react'
        import { Input, Button } from 'zarm'
        import Form, { useForm } from 'zarm-form'

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
              showError={true}
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
        ~~~
        `,
        TableComponent: () => (<div></div>),
    }
})