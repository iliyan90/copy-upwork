import React from 'react'

const cards = {
    obj1:{
        title:'Client reviews',
        desc:'Read client details and feedback from professionals like you.'
    },
    obj2:{
        title:'Trusted jobs',
        desc:'We use various tools to detect and reduce fraud with a dedicated team 24/7. '
    },
    obj3:{
        title:'Protected payments',
        desc:'Get paid the way you want, secure and fully protected.'
    },
    obj4:{
        title:'Help with disputes',
        desc:'We’ll step in and help you resolve a tricky situation.'
    },
    obj5:{
        title:'Answers to questions',
        desc:'Everything you need in our help center, resources, and community.'
    },
}

const OurSupport = () => {
  return (
    <div className='our-support'>
        <div><h3>Our Support</h3></div>
        <div className='our-support-cards'>
            {
                Object.values(cards).map((item, index)=>(
                    <div key={index} className='card'>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurSupport