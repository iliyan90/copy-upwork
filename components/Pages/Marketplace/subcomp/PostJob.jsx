import React from 'react'

const PostJob = () => {
  return (
    <div className='post-job'>
        <div className='post-job-img'>
            <img src="https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/61f275c1af52ee3cfe723ff2_image%20(4)%20(1)-p-500.jpeg" alt="" />
        </div>
        <div className='post-job-cont'>
            <h4 className='post-job-title'>Post today, hire tomorrow</h4>
            <p>We've got you covered from idea to delivery. Post your job  and  you'll start getting proposals. Once you've found your expert, you can talk timings, availability, and prices before going ahead.
            </p>
            <div className='post-job-security'>
                <img src="https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/608aa50a60f19cbb2cd8a2fd_Group%20323.svg" alt="" />
                <div>
                    <h6>Upwork Payment Protection</h6>
                    <p>Gives you security and peace of mind</p>
                </div>
            </div>
            <button className='btn-post-job'>Post a Job</button>
        </div>
    </div>
  )
}

export default PostJob