import React from 'react'

const ToggleButton = ({toggle}) => {
  return (
    <div className={toggle ? 'close': 'toggle-btn'} >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
    </div>
  )
}

export default ToggleButton