import React from 'react'
import './Reviews.css'
import Build from './sub/Build'
import Business from './sub/Business'
import ClientRating from './sub/ClientRating'
import Explore from './sub/Explore'
import FrequentlyAsk from '../../../utils/FrequentlyAsk'
import HowToStart from './sub/HowToStart'
import ReviewUpwork from './sub/ReviewUpwork'
import WhatSaying from './sub/WhatSaying'
import {question1} from '../../../data/questionData'

const Reviews = () => {
  return (
    <div className='reviews-section'>
        <ReviewUpwork/>
        <ClientRating/>
        <WhatSaying/>
        <Business/>
        <Explore/>
        <HowToStart/>
        <FrequentlyAsk question={question1}/>
        <Build/>
    </div>
  )
}

export default Reviews