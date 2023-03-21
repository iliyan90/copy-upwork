import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiFillStar} from 'react-icons/ai'
const Title = () => {
  return (
    <div className='hire-title'>
        <div className='hire-title-card'>
            <h2>Hire pros with the skills you need</h2>
            <p>A quick search can put you in touch with independent pros and teams who can get your job done.</p>
            <div className='hire-input'>
                <input type="text" placeholder='Try "Web Design"' />
                <button><FiSearch/></button>
            </div>
            <p>Looking for work? <a>Apply as an independent pro</a></p>
        </div>
        <div className='hire-cards'>
            <div className='hire-card'>
                <div className='hire-card-img'><img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit,w_130,h_130,dpr_2.0/arges/hero/freelancer@1x.png" alt="" /></div>
                <h3>Fernanda P.</h3>
                <span>UX/UI Designer</span>
                <p><AiFillStar color='#14a800'/> 4.9/5 (15 jobs)</p>
            </div>
        </div>
    </div>
  )
}

export default Title