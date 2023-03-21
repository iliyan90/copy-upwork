import React from 'react'
import './HowToHire.css'
import { browse } from '../../../data/browseAndBuy'
import Approval from './sub/Approval'
import AskQuestion from './sub/AskQuestion'
import BrowseBuy from '../../../utils/BrowseBuy'
import FastLane from './sub/FastLane'
import FindFreelancer from './sub/FindFreelancer'
import FourWay from './sub/FourWay'
import PostHire from './sub/PostHire'
import SafeWithUs from './sub/SafeWithUs'

const HowToHire = () => {
  return (
    <div className='how-to-hire'>
      <FindFreelancer/>
      <PostHire/>
      <BrowseBuy item={browse}/>
      <FastLane/>
      <FourWay/>
      <Approval/>
      <SafeWithUs/>
      <AskQuestion/>
    </div>
  )
}

export default HowToHire