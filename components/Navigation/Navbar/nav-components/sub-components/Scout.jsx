import React from 'react'
import Visit from '../../utils/Visit'

const scout = {
  title:'Talent Scout',
  desc:'Learn how our recruiters find you expert developers, designers, and marketers.',
  link:'Talk to Talent Scout'
}
const Scout = () => {
  return (
    <div className='talent-group-2'>
      <Visit props={scout}/>
      <div className='scout-items'>
          <p>Development & IT</p>
          <p>Design & Creative</p>
          <p>Marketing</p>
      </div>
    </div>
  )
}

export default Scout