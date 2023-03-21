import React from 'react'
import Button from '../../../../utils/Button'
const Post = () => {
  return (
    <div className='post-container'>
        <div className='post-box'>
            <h3 className='post-title'>Post a job today, hire tomorrow</h3>
            <p className='post-desc'>Connect with talent that gets you, and hire them to take your business to the next level.</p>
            <div className='btn-post-group'>
                <button className='btn-talent'>Find Talent</button>
                <button className='btn-work'>Find Work</button>
            </div>
        </div>
        <div className='post-image'>
            <img src="https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/609649879adf1654312789f8_1_hero_695x500%402x%20(1)-p-1080.jpeg" alt="" />
        </div>
        
    </div>
  )
}

export default Post