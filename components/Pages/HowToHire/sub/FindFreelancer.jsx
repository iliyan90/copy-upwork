import React from 'react'

const FindFreelancer = () => {
  return (
    <div className='find-freelancer'>
        <div className='find-freelancer-box'>
            <div className='find-freelancer-content'>
                <h2>Choose your way to get work done</h2>
                <p>Find freelancers and run projects your way at the world’s work marketplace.</p>
                <button className='btn-hire'>Find Talent</button>
            </div>
            <div className='find-freelancer-link'>
                <p>Looking to get hired? </p>
                <a href="">Sign up here</a>
            </div>
        </div>
        <div className='find-freelancer-image'>
            <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/609641c1ace4838592849719_1_hero%402x-p-500.jpeg" alt="" />
        </div>
    </div>
  )
}

export default FindFreelancer