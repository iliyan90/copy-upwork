import React from 'react'

const Container2 = () => {
  return (
    <div className='container-2'>
            <div className='enterprise'>
                <h5>For enterprise</h5>
                <h2>Scale with Enterprise Suite</h2>
                <p className='fast'>A fast and secure way to achieve long-term success for your business goals.</p>
                <div className='hr'></div>
                <div className='access'>
                    <p className='fast'>Access expert talent to fill your skill</p>
                    <p className='fast'>Control your workflow: hire, classify and pay your talent</p>
                    <p className='fast'>Partner with Upwork for end-to-end support</p>
                </div>

                <button className='btn-learn'>Learn More</button>
            </div>
            <div className='img-cont2'>
                <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/for-enterprise/enterprise-image@1x.png" alt="" />
            </div>
        </div>
  )
}

export default Container2