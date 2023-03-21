import React from 'react'
import {AiFillStar, AiFillDollarCircle} from 'react-icons/ai'
import {GoRocket} from 'react-icons/go'
const Safe = () => {
  return (
    <div className='safe-comp'>
        <h2>Safe and secure hiring, for any size of work</h2>
        <div className='safe-comp-items'>
            <div className='safe-item'>
                <AiFillStar color='green' size={40}/>
                <div>
                    <p>Over 1M reviews</p>
                    <span>Develop relationships with highly rated professionals</span>
                </div>
            </div>
            <div className='safe-item'>
                <GoRocket color='green' size={40}/>
                <div>
                    <p>Protected payments</p>
                    <span>Hassle-free billing so you can focus on work that matters</span>
                </div>
            </div>
            <div className='safe-item'>
                <AiFillDollarCircle color='green' size={40}/>
                <div>
                    <p>Hire who you need</p>
                    <span>Find pros who can start right away and handle any job</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Safe