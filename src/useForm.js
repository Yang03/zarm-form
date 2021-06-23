import React, { useState, useRef } from 'react'
import schema from 'async-validator'
import omit from 'lodash.omit'

const formatErr = (data) => {
  const obj = {}
  data?.forEach((item) => {
    obj[item.field] = item.message
  })
  return obj
}

const useForm = (ref) => {
  const [errors, setError] = useState()
  let submitFlag = false
  return {
    handleSubmit: (callback) => { 
      return () => {
        submitFlag = true
        ref?.current?.validator?.validate(ref?.current?.values).then(() => {
          setError(undefined)
          callback(ref?.current?.values)
        }).catch(({
          errors,
          fields
        }) => {
          setError(formatErr(errors))
          callback(ref.current.values)
        })
      }
    },
    register: (data) => {
      return {
        items: data,
        callback: (relus, name, value) => {
          if (submitFlag) {
            return false
          }
          const validator = new schema({
            [name]: relus
          })
          validator.validate({
            [name]: value
          }).then(() => { 
            const temp = omit(errors, [name])
            setError(temp)
          }).catch(({
            errors: err,
            fields
          }) => {
            setError({
              ...errors,
              [err?.[0]?.field]: err?.[0]?.message
            })
          })
        }
      }
    },
    errors,
  }
}

export default useForm
