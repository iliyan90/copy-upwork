import React from 'react'
import PromoteYourself from './sub/PromoteYourself'
import './Promote.css'
import UseConnect from './sub/UseConnect'
import Explore from './sub/Explore'
import WhereExel from './sub/WhereExel'
const Promote = () => {
  return (
    <section className='promote-container'>
      <PromoteYourself/>
      <UseConnect/>
      <Explore/>
      <WhereExel/>
    </section>
  )
}

export default Promote