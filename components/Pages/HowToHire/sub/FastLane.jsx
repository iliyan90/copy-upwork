import React from 'react'
import { AiFillStar } from 'react-icons/ai'


const FastLane = () => {
  return (
    <section className='fast-lane'>
        <div className='fast-lane-cont-mb'>
          <h3>Take the fastlane to the right talent</h3>
          <h4>Let us pinpoint the talent to reach your goals with Talent Scout</h4>
        </div>
        <div className='fast-lane-cards'>
          <div className='fast-card'>
            <div className='fast-card-visit'>
              <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/61487f3bb8ad0d0068e3a130_605cbfa1040aecc0c0982b3a_ron%20(1).jpeg" alt="" />
              <h3>Ron Z.</h3>
              <span>Front-end developer</span>
            </div>
            <div className='fast-raiting'>
              <AiFillStar color='#14a800'/>
              <p>5.0/5</p>
              <p>(124 jobs)</p>
            </div>
          </div>
          <div className='fast-card'>
            <div className='fast-card-visit'>
              <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/61487f39b8ad0d8c59e3a12d_Fernanda%20(1).jpeg" alt="" />
              <h3>Fernanda P.</h3>
              <span>UX/UI Designer</span>
            </div>
            <div className='fast-raiting'>
              <AiFillStar color='#14a800'/>
              <p>5.0/5</p>
              <p>(96 jobs)</p>
            </div>
          </div>
        </div>
        <div className='fast-lane-cont'>
          <h3>Take the fastlane to the right talent</h3>
          <h4>Let us pinpoint the talent to reach your goals with Talent Scout</h4>
          <p>Talk us through your budget and goals and we’ll do the recruitment for you. You’ll get a shortlist of our very best talent, all perfectly suited to the task.</p>
          <button className='btn-hire'>Find Out More</button>
        </div>
    </section>
  )
}

export default FastLane