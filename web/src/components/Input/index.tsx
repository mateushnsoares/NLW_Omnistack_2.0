import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<Props> = ({ label, name, ...inputProps }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <div className='input-block'>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        ref={inputRef}
        defaultValue={defaultValue}
        name={name}
        {...inputProps}
      />
    </div>
  )
}

export default Input
