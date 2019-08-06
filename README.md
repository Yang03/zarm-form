
### Basic Usage
install 
```
    npm i zarm-form --save
```
import zarm-form

```
   import ZarmForm, { Input, Checkbox, Select, Error, getFieldError } from 'zarm-form'
   // import style
   import 'zarm/dist/zarm.min.css'
   class Example extends React.Component {
       formRef = React.createRef()
       constructor() {
            super()
            this.state = {
                values: {
                    name: '',
                },
                errors: [],
             }    
        }
        onChange = (values) => {
            this.setState({
                values
            })
        }
        submit = () => {
            this.formRef.current.validate().then((values) => {
                console.log(values)
            }).catch(({errors, fields}) => {
                this.setState({
                    errors: errors
                })
            })    
        }
        render() {
           const rules = [
               {
                   name: {
                       type: 'string',
                       required: true
                   }
               }
           ]
           return (
               <ZarmForm onChange={this.onChange} values={values} rules={rules} ref={this.formRef}>
                    <Input 
                        placeholder="please input name" 
                        value={this.state.values.name} 
                        clearable={false} 
                        label="name"
                        error={getFiledError('name')}
                    />
                    <Button onClick={this.submit}>sumbmit</Button>
               </ZarmForm>
           )
       }
   }
```

## API

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |

| values | object | default values |
| rules | array | `async-validator` |
| onChange | function | form item onChange callback |


