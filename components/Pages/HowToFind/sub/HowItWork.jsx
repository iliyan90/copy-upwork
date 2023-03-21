import React from 'react'
import TrustedBy from '../../../../utils/TrustedBy'
const cards = [
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/61377e7a2e37a2bb4b719716_Airplane%20300%20(1).png',
        title:'Create your profile (it’s free)',
        desc:'An eye-catching title and client-focused overview help us match you to the work you want. Include your work history, your skills, and your photo. Add more, like an introduction video, to create a profile that really stands out.'
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/61377e4fcb63d0b7a8f0010b_Hands%20300%20(1).jpeg',
        title:'Explore ways to earn',
        desc:'Work and earn in different ways. Bid for jobs. Pitch your projects. Discuss your in-demand skills with our recruiters so they can find opportunities aligned with your passions and career goals. Do all three. Create a predictable pipeline and build your network.',
        address:'See ways to earn'
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/61377e26620e18598fd0fb5d_Funnel%20300%20(1).jpeg',
        title:'Get paid securely',
        desc:'Choose how you get paid. Our fixed-price protection releases client payments at project milestones. Hourly protection bills clients every week. However you work, our service fees are the same. Spend less time chasing, more earning.'
    }
]

const HowItWork = () => {
  return (
    <div className='how-it-work'>
        <div className='how-it-work-title'>
            <h3>How it works</h3>
        </div>
        <div className='how-cards'>
            {cards.map((item, index)=>(
                <div key={index} className='how-card'>
                    <div className='how-card-image'>
                        <img src={item.image} alt="" />
                        <div className='how-card-desc-mb'><h3>{item.title}</h3></div>
                    </div>
                    <div className='how-card-desc'>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <a>{item.address}</a>
                    </div>
                </div>
            ))}
        </div>
        <button className='btn-hire'>Create Your Profile</button>
        <TrustedBy/>
    </div>
  )
}

export default HowItWork