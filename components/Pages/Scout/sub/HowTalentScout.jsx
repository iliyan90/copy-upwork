import React from 'react'


const talentScout = {
    obj1:{
        title:'Meet with your recruiters',
        desc:'Give us a few details about your project and set up a time to talk with your recruiter.'
    },
    obj2:{
        title:'Receive a shortlist',
        desc:'After you meet, your recruiter will provide a shortlist of top matches based on your needs.'
    },
    obj3:{
        title:'Interview candidates',
        desc:'Talk to your top choices.'
    },
    obj4:{
        title:'Select and hire',
        desc:'Choose the best fit for your team.'
    },
}
const HowTalentScout = () => {
  return (
    <section className='how-talent-work'>
        <h3>Here`s how Talent Scout works </h3>
        <p>Your project must be at least one month in duration to be eligible.</p>
        <ul className='talent-work-list'>
            {
                Object.values(talentScout).map((item, index) =>(
                    <li key={index}>
                        <h5>{index + 1}</h5>
                        <div className='talent-scout-title'>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
        <button className='btn-scout-talent'> Talk to requiter</button>
    </section>
  )
}

export default HowTalentScout