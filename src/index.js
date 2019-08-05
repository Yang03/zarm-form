import React from 'react'
import ReactDOM from 'react-dom'
import { Panel, Button } from 'zarm'
import ZarmForm, { Input, Checkbox, Select, Error, getFieldError } from './components/zarm-form'

import 'zarm/dist/zarm.min.css'

class Demo extends React.Component {
  constructor() {
    super()
    this.formRef = React.createRef()
    this.state = {
      values: {
        name: '',
        email: '',
        agreement: false,
        address: [],
      },
      errors: [],
      visible: false,
      dataSource: [
        {
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
        },
      ]
    }
  }
  click = () => {
    console.log(this.formRef)
    this.formRef.current.validate().then((values) => {
      console.log(values)
    }).catch(({errors, fields}) => {
      this.setState({
        errors: errors
      })
    })
  }
  onChange = (values) => {
    console.log(values)
    this.setState({
      value: values
    })
  }
  render() {
    const rules = {
      name: [
        {
          type: 'string',
          required: true, 
          message: '请填写姓名'
        }
      ],
      email: [
        {
          type: 'email',
          required: true
        }
      ],
      multiple: [
        {
          type: 'array',
          required: true
        }
      ],
      address: [{
        type: 'array',
        required: true
      }],
      agreement: {
        validator: (rule, value, callback) => { if (value !== true){callback('请阅读协议')}else {callback()}  }
      }
    }
    const { visible,  dataSource } = this.state
    return (<div>
      <Panel title="表单验证">
        <ZarmForm ref={this.formRef} rules={rules} values={this.state.values} onChange={this.onChange}>
          <Input name="name"
            placeholder="请输入姓名" 
            value={this.state.values.name} 
            clearable={false} 
            label="姓名" 
            error={getFieldError(this.state.errors, 'name') ? <Error theme="danger" type="warning-round" size="sm">{getFieldError(this.state.errors, 'name')}</Error> : ''}
          />
          <Input name="email" placeholder="请输入邮箱" value={this.state.values.email} clearable={false} label="邮箱" error={getFieldError(this.state.errors, 'email')}/>
          <Checkbox.group type="button" name="multiple" label="多选" error={getFieldError(this.state.errors, 'multiple')}>
            <Checkbox value="0">选项一</Checkbox>
            <Checkbox value="1">选项二</Checkbox>
            <Checkbox value="2">选项三</Checkbox>
          </Checkbox.group>
          <Select
            visible={visible}
            value={this.state.address}
            dataSource={dataSource}
            name="address"
            label="地址"
            error={getFieldError(this.state.errors, 'address')}
            onOk={(selected) => {
              console.log('Select onOk: ', selected);
              this.setState({
                value: selected.map(item => item.value),
              });
            }}
            onMaskClick={() => {
              this.setState({
                visible: false,
              });
            }}
          />
          <Checkbox 
            value={this.state.values.agreement}
            name="agreement"
            id="agreement"
            message={<label htmlFor="agreement">阅读并同意<a href="/#" onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《XXX条款》</a>中的相关规定</label>}
          >
          </Checkbox>
          
        </ZarmForm>
      </Panel> 
       <Button theme="primary" onClick={this.click} ghost>验证</Button>
    </div>
    )
  }
}

ReactDOM.render(<Demo/> , document.getElementById('root'))