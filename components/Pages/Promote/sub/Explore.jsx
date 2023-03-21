import React from 'react'

const cards = {
    obj1:{
        image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/62b1bb0b21d7215443572f17_availbility-badge-1%201.svg',
        title:'Availability badge',
        desc:'Let clients know you’re ready to work and available now with a bold, blue badge on your profile, and in search results. Help clients find you faster.',
    },
    obj2:{
        image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/62b1bb09c83132411a7b8071_Frame%20(4).svg',
        title:'Boost your proposals',
        desc:'Increase your chances of getting the jobs you’re really interested in by bidding to boost your proposal. If your bid wins, you’ll land in the client’s top three slots with an eye-catching blue lightning bolt.',
    }
}

const Explore = () => {
  return (
    <section className='explore-container'>
        <h3 className='title'>Explore ways to take more control and win more work</h3>
        <div className='explore-box-cards'>
            {
                Object.values(cards).map((item, index)=>(
                    <div key={index} className='explore-card'>
                        <div className='explore-image'><img src={item.image} alt="" /></div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <button>Learn More</button>
                    </div>

                ))
            }
        </div>
    </section>
  )
}

export default Explore