import React from 'react'
import './Button.css'
const Button = ({label, bgcolor, color, borderColor}) => {
  return (
    <button
    className='btn-main'
        style={{
            backgroundColor:{bgcolor},
            color:{color},
            borderColor:{borderColor}
            
        }}
    >{label}</button>
  )
}

export default Button