import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import './styles.css'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const Textarea: React.FC<Props> = ({ label, name, ...TextareaProps }) => {
  const textareaRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])
  return (
    <div className='textarea-block'>
      <label htmlFor={name}>{label}</label>
      <textarea
        ref={textareaRef}
        defaultValue={defaultValue}
        name={name}
        {...TextareaProps}
      />
    </div>
  )
}

export default Textarea
