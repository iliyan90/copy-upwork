import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const TalentStrategy = () => {
  return (
    <div className='talent-strategy'>
        <div className='strategy-card'>
            <div className='str-user'>
                <div className='active-dot'></div>
                <img src="https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/608abe3754924c8ab05592bd_c1lPVUqNyuzBkpgjTvUdiWHnrfjtynNVnotgfstc8iwJdVnMflqmtukQnAkMzjb_ob%20(1).png" alt="" />
                <p>Alexander B.</p>
            </div>
            <img src="https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/608abe3754924c478f5592bf_Rectangle.png" alt="" />
            <div className='str-items'>
                <p>From $175</p>
                <div className='str-items-star'>
                    <AiFillStar color='lime'/>
                    <p>4.9</p>
                </div>
            </div>
        </div>
        <div className='str-browse-items'>
            <h1>Take the first step toward a smarter talent strategy</h1>
            <div className='h-line'></div>
            <div className='str-browse'>
                <p>Browse and buy projects from talent.</p>
                <button>Browse Project</button>
            </div>
        </div>
    </div>
  )
}

export default TalentStrategy