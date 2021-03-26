import React from 'react'
import ReactDOM from 'react-dom'
import {
  Input,
  Button,
  Checkbox,
  Select,
  DateSelect,
} from 'zarm'

import Form from '../src/index'


export default class Demo extends React.Component {
  formRef = React.createRef()
  state = {
    visible: false,
    dataSource: [{
      value: '1',
      label: '北京市',
      children: [{
          value: '11',
          label: '海淀区'
        },
        {
          value: '12',
          label: '西城区'
        },
      ],
    }, {
      value: '2',
      label: '上海市',
      children: [{
          value: '21',
          label: '杨浦区'
        },
        {
          value: '22',
          label: '静安区'
        },
      ],
    }],
  }
  onError = (error) => {
    console.log(error, '--------------->')
    this.setState({
      errors: error
    })
  }

  submit = () => {
    this.formRef.current.validate().then((values) => {
      console.log(values)
    }).catch(({
      errors,
      fields
    }) => {
      this.setState({
        errors: errors
      })
    })
  }

  render() {
    const {
      visible,
      dataSource,
      address = []
    } = this.state
    const addressValue = address.map(Item => Item.value)
    return (
      <Form onError={this.onError} ref={this.formRef} errors={this.state.errors}>
        <Form.Item
          label="name"
          name="name"
          className="customer-classname"
          hasArrow={true}
          rules = {
            [{
              required: true,
              message: 'Please input your name!',
              trigger: 'blur'
            }]
          }
        >
          <Input name="name" maxLength="15" type="text" />
        </Form.Item>
        <Form.Item
          label="age"
          name="age"
          rules = {
            [{
              required: true,
              message: 'Please input your age!',
              trigger: 'blur'
            }]
          }
        >
          <Input type="number" name="age" />
        </Form.Item>
        <Form.Item label="multiple" name="multiple" rules={[{
            validator: (rule, value, callback) => {
              if (Array.isArray(value) && value.length >= 2) {
               callback()
               return
              }
              callback('Please multiple')
            },
            trigger: 'change'
          }]}>
          <Checkbox.Group type="button" name="multiple">
            <Checkbox value="0">one</Checkbox>
            <Checkbox value="1">two</Checkbox>
            <Checkbox value="2">three</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="address" name="address" rules={
          [{
            required: true,
            message: 'Please input your adress!',
            trigger: 'change',
            type: 'array',
          }]
        }>
          <Select
            value={this.state.address}
            ItemRender={data => data.label}
            placeholder="please select adress"
            dataSource={dataSource}
            onOk = {
              (selected) => {
                console.log('Select onOk: ', selected);
                this.setState({
                  address: selected.map(Item => Item.value),
                });
              }
            }
          />
        </Form.Item>
        <Form.Item label="birthday" name="birthday" rules={
          [{
            required: true,
            message: 'Please input your birthday!',
            trigger: 'change',
            type: 'date'
          }]
        }>
          <DateSelect
            title="birthday"
            placeholder="birthday"
            mode="date"
            min="1974-05-16"
            max="2027-05-15"
            value={this.state.birthday}
            onOk={(value) => {
              console.log('DateSelect onOk: ', value);
              this.setState({
                birthday: value,
              });
            }}
          />
        </Form.Item>
        <Button onClick={this.submit} theme="primary" ghost>submit</Button>
      </Form>
    )
  }
}

ReactDOM.render(<Demo/> , document.getElementById('root'))