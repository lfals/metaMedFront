import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { TextField } from '@mui/material'


const Input = ({ name, ...rest }) => {

  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        console.log("ref",ref.current.value);
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return <TextField ref={inputRef} defaultValue={defaultValue} {...rest} />
}

export default Input