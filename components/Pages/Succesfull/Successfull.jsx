import React from 'react'
import AllStory from './sub/AllStory'
import Join from './sub/Join'
import Stories from './sub/Stories'
import './Successfull.css'
const Successfull = () => {
  return (
    <div className='successfull-container'>
        <Stories/>
        <AllStory/>
        <Join/>
    </div>
  )
}

export default Successfull