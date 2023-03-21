import React from 'react'
import './HireProps.css'
import Category from './sub/Category'
import Recruiters from './sub/Recruiters'
import Safe from './sub/Safe'
import Title from './sub/Title'
const HireProps = () => {
  return (
    <div className='hire-props'>
        <Title/>
        <Safe/>
        <Category/>
        <Recruiters/>
    </div>
  )
}

export default HireProps