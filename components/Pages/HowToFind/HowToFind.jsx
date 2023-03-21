import React from 'react'
import FrequentlyAsk from '../../../utils/FrequentlyAsk'
import './HowToFind.css'
import ExploreWays from './sub/ExploreWays'
import HowItWork from './sub/HowItWork'
import HowPaymentWork from './sub/HowPaymentWork'
import WorkTheWay from './sub/WorkTheWay'
import { question2 } from '../../../data/questionData'
import Learn from './sub/Learn'

const HowToFind = () => {
  return (
    <div className='how-to-find-main'>
        <WorkTheWay/>
        <HowItWork/>
        <ExploreWays/>
        <HowPaymentWork/>
        <FrequentlyAsk question={question2} />
        <Learn/>
    </div>
  )
}

export default HowToFind