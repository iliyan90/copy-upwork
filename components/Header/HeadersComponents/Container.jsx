import React from 'react'

const Container = () => {
  return (
    <div className='container'>
            <div className='box'>
                <h1 className='title'>How work should work</h1>
                <h2>Forget the old rules. You can have best people. Right now. Right here.</h2>
                <div className='btn-header'>
                    <button className='btn-a'>Get Started</button>
                    <button className='btn-b'>How to hire</button>
                </div>
                <div className='trust'>
                    <p className='trusted'>Trusted by</p>
                    <div className='img-group'>
                        <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg" alt="" />
                        <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/airbnb.svg" alt="" />
                        <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/bissell.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='box-image'>
                <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_480,q_auto,dpr_2.0/brontes/hero/globe@1x.webp" alt="" />
            </div>
        </div>
  )
}

export default Container