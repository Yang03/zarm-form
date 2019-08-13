import React from 'react'
import ReactDOM from 'react-dom'
import { Panel, Button, Icon } from 'zarm'
import ZarmForm, { Input, Checkbox, Select, FilePicker, Error, getFieldError } from '../src/'

import 'zarm/dist/zarm.min.css'
import './example.scss'

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
          message: 'please input name'
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
      file: [{
        type: 'array',
        required: true
      }],
      address: [{
        type: 'array',
        required: true
      }],
      agreement: {
        validator: (rule, value, callback) => { if (value !== true){callback('请阅读协议')}else {callback()}  }
      }
    }
    const { visible,  dataSource } = this.state
    const address = this.state.values.address.map(item => item.value)
    return (<div>
      <Panel title="form validate">
        <ZarmForm ref={this.formRef} rules={rules} values={this.state.values} onChange={this.onChange}>
          <Input name="name"
            placeholder="please input name" 
            value={this.state.values.name} 
            clearable={false} 
            label="name" 
            error={getFieldError(this.state.errors, 'name') ? <Error theme="danger" type="warning-round" size="sm">{getFieldError(this.state.errors, 'name')}</Error> : ''}
          />
          <Input name="email" placeholder="please input email" value={this.state.values.email} clearable={false} label="email" error={getFieldError(this.state.errors, 'email')}/>
          <Checkbox.group type="button" name="multiple" label="multiple" error={getFieldError(this.state.errors, 'multiple')}>
            <Checkbox value="0">one</Checkbox>
            <Checkbox value="1">two</Checkbox>
            <Checkbox value="2">three</Checkbox>
          </Checkbox.group>
          <Select
            visible={visible}
            value={address}
            itemRender={data => data.label}
            placeholder="please select adress"
            dataSource={dataSource}
            displayRender={selected => selected.map(item => item.label).join('')}
            name="address"
            label="address"
            error={getFieldError(this.state.errors, 'address')}
          />
          <FilePicker name="file" error={getFieldError(this.state.errors, 'file')} label="files" multiple><Icon type="add" size="lg" /></FilePicker>
          <Checkbox 
            value={this.state.values.agreement}
            name="agreement"
            id="agreement"
            message={<label htmlFor="agreement">read and agree<a href="/#" onClick={(e) => { e.preventDefault(); alert('agree it'); }}>《XXX》</a>document</label>}
          >
          </Checkbox>
         
          
        </ZarmForm>
      </Panel> 
       <Button theme="primary" onClick={this.click} ghost className="submit-button">validate</Button>
    </div>
    )
  }
}

ReactDOM.render(<Demo/> , document.getElementById('root'))