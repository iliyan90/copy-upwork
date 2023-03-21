import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
const listColl = ['Development & IT','Finance & Accounting','Writing & Translation','Admin & Customer Support','Design & Creative','Sales & Marketing']
const Colleagues = () => {
  return (
    <div className='colleagues'>
        <div className='best-coll'>
            <h3 className='coll-title'>The best colleagues you`ve never met</h3>
            <p className='coll-desc'>Logo designers. App developers. Customer support gurus. Marketing agencies. Make the right connection and it’ll last a lifetime.</p>
            { listColl.map((item, index) =>(
                <div className='list-coll' key={index}>
                    <div className='list-coll-item'>
                        <p>{item}</p>
                        <HiArrowNarrowRight/>
                    </div>

                </div>
            ))
                
            }
        </div>
        <div className='coll-raiting'>
            <div className='coll-rating-fr'>
                <div className='coll-icon'>
                    <AiFillStar/>
                    <h6>4.9/5</h6>
                </div>
                <p>Avarage rating of talent from 2M+ reviews</p>
            </div>
            <div className='coll-skills'>
                <div className='coll-skills-item'>
                    <h6>8K+</h6>
                </div>
                <p>Skill represented by talent on Upwork</p>
            </div>
        </div>
    </div>
  )
}

export default Colleagues