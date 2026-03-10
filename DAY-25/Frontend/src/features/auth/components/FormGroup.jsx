import React from 'react'

const FormGroup = ({label, placeholder, value, onChange}) => {
  return (
    <div className="form-group">
    <label htmlFor={label}>{label}</label>
    <input type='text' value={value} onChange={onChange} id={label} placeholder={placeholder} required />
    </div>
  )
}

export default FormGroup