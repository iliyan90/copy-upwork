import React from 'react'

const PostHire = () => {
  return (
    <section className='post-hire-container'>
        <div className='post-hire-title'>
            <h3>Let’s get to work</h3>
            <p>Build relationships and create your own Virtual Talent Bench™ for quick project turnarounds or big transformations</p>
        </div>
        <div className='post-hire-box'>
            <div className='post-hire-cont-mb'>
                <h3>Post a job and hire a pro</h3>
                <h4>Connect with talent that gets you with Talent Marketplace</h4>
            </div>
            <div className='post-hire-image'>
                <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/609641d79f570c8ec2e1fb44_2_postajob%402x.jpg" alt="" />
            </div>
            <div className='post-hire-cont'>
                <h3>Post a job and hire a pro</h3>
                <h4>Connect with talent that gets you with Talent Marketplace</h4>
                <p>Post your job on the world’s work marketplace and wait for the proposals to flood in from talented people around the world.</p>
                <p>Our advanced algorithms help you shortlist candidates who are the best fit. And you can check profiles, portfolios, and reviews before you give someone the green light.</p>
                <button className='btn-hire'>Find Talent</button>
            </div>
        </div>
    </section>
  )
}

export default PostHire