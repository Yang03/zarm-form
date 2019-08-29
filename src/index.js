import ZarmForm from  './zarm-form/ZarmForm'
import Checkbox from './zarm-form/Checkbox'
import CheckboxGroup from './zarm-form/CheckboxGroup'
import Radio from './zarm-form/Radio'
import RadioGroup from './zarm-form/RadioGroup'
import Input from './zarm-form/Input'
import Select from './zarm-form/Select'
import FilePicker from './zarm-form/FilePicker'
import DateSelect from './zarm-form/DateSelect'
import Error from './zarm-form/Error'
import { getFieldError } from './zarm-form/util'

Checkbox.group = CheckboxGroup
Radio.group = RadioGroup

export default ZarmForm

export {
    Radio,
    Checkbox,
    Input,
    Error,
    Select,
    FilePicker,
    DateSelect,
    getFieldError
}