import React from 'react'
import Colleagues from './subcomp/Colleagues'
import Companies from './subcomp/Companies'
import './Marketplace.css'
import Post from './subcomp/Post'
import PostJob from './subcomp/PostJob'
import TalentStrategy from './subcomp/TalentStrategy'
import WhatUGet from './subcomp/WhatUGet'
const MarketPlace = () => {
  return (
    <div className='mp-container'>
        <Post/>
        <Colleagues/>
        <PostJob/>
        <Companies/>
        <WhatUGet/>
        <TalentStrategy/>
    </div>
  )
}

export default MarketPlace