import React from 'react'
import './Work.css'
import WorkYouWay from './sub/WorkYouWay'
import Explore from './sub/Explore/Explore'
import OurAwards from './sub/OurAwards'
import LikeMinded from './sub/LikeMinded'
import WorkYouWant from './sub/WorkYouWant'
import WorkWaiting from './sub/WorkWaiting'
import OurSupport from './sub/OurSupport'
import ReadyStart from './sub/ReadyStart'
const Work = () => {
  return (
    <section className='work-container'>
      <WorkYouWay/>
      <Explore/>
      <OurAwards/>
      <LikeMinded/>
      <WorkYouWant/>
      <WorkWaiting/>
      <OurSupport/>
      <ReadyStart/>
    </section>
  )
}

export default Work