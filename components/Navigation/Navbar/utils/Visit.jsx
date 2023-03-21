import React from 'react'
import {HiOutlineArrowSmRight} from 'react-icons/hi'

const Visit = ({props}) => {
    const {title, desc, link} = props
  return (
    <div className='group-items'>
        <div className='inner-hl'></div>
        <h4>{title}</h4>
        <p>{desc}</p>
        <div>
          <a href="">{link}</a>
          <HiOutlineArrowSmRight/>
        </div>
      </div>
  )
}

export default Visit