import React from 'react'
import TrustedBy from '../../../../utils/TrustedBy'

const Business = () => {
  return (
    <div className='business-container'>
        <h3>See how businesses get work done on Upwork</h3>
        <div className='business-video'>
            <div className='business-video-iframe'>
                <iframe src="https://player.vimeo.com/video/158072822" frameborder="0"></iframe>
            </div>
            <div className='business-desc'>
                <div className='business-desc-item'>
                    <h3>Nasdaq Leans on Hybrid Teams to Transform Itself into a Digital Media Leader</h3>
                    <a href="#">Read Article</a>
                </div>
                <div className='business-desc-item'>
                    <h3>How GoDaddy Launched a Program 3x Faster with Independent Web Designers</h3>
                    <a href="#">Read Article</a>
                </div>
            </div>
        </div>
        <button className='btn-hire'>Read More Success Stories</button>
        <TrustedBy/>
    </div>
  )
}

export default Business