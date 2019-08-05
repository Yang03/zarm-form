import ZarmForm from  './zarm-form/ZarmForm'
import Checkbox from './zarm-form/Checkbox'
import CheckboxGroup from './zarm-form/CheckboxGroup'
import Input from './zarm-form/Input'
import Select from './zarm-form/Select'
import Error from './zarm-form/Error'
import { getFieldError } from './zarm-form/util'

Checkbox.group = CheckboxGroup

export default ZarmForm

export {
    Checkbox,
    Input,
    Error,
    Select,
    getFieldError
}