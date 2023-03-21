import React from 'react'

const recruiters = {
    obj1:{
        title:'Navigate hiring with an expert on your side',
        desc:'Our specialized recruiters are all about partnership. They know our talent community and can help match your business needs to the right professionals.'
    },
    obj2:{
        title:'Eliminate guesswork',
        desc:'To find the right skill mix to fill a role for a month or longer, Talent Scout recruiters get to know each person individually, assessing whether their hard and soft skills will be the right fit for your team.'
    },
    obj3:{
        title:'Select from a shortlist of qualified talent',
        desc:'Your Talent Scout recruiter will provide a pre-vetted shortlist of the best matches from our global talent community. Contact and interview your top choices using Upwork`s suite of tools, and hire your selection.'
    },
}

const ScoutRecruiters = () => {
  return (
    <div className='scout-recruiters'>
        <div className='scout-recruiter-image'>
            <img src="https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/614a35d8762efc19bc4733f1_608137bde179d401d266666e_Rectangle%20195%20(1)%20(1).jpeg" alt="" />
        </div>        
        <div className='scout-recruiters-desc'>
            <h3>Talent Scout recruiters help you and your team</h3>
            {
                Object.values(recruiters).map((item, index)=>(
                    <div className='scout-recruiters-cont' key={index}>
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ScoutRecruiters