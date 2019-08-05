import ZarmForm from  './ZarmForm'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'
import Input from './Input'
import Select from './Select'
import Error from './Error'
import { getFieldError } from './util'

Checkbox.group = CheckboxGroup

export default ZarmForm

export {
    Checkbox,
    Input,
    Error,
    Select,
    getFieldError
}