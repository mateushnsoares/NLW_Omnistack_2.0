import React, { SelectHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import './styles.css'

interface Option {
  value: string
  label: string
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: Option[]
}

const Select: React.FC<Props> = ({ label, name, options, ...selectProps }) => {
  const selectRef = useRef(null)
  const { fieldName, registerField } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <select ref={selectRef} defaultValue='' name={name} {...selectProps}>
        <option value='' disabled hidden>
          Selecione uma opção
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
