import React from 'react'
import { useState } from 'react'

const hiringCard = [
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/608c3ee0038a05ab41cf260e_How_it_Works_1_Post-A-Job_Martin_Nicholausson.png',
        title:'Post a job (it’s free)',
        desc:'Tell us what you need. Provide as many details as possible, but don’t worry about getting it perfect.',
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/608c3ee064fced307e31cb75_How_it_Works_1_Post-A-Job_Martin_Nicholausson%20(1).png',
        title:'Talent comes to you',
        desc:"Get qualified proposals within 24 hours, and meet the candidates you’re excited about. Hire as soon as you’re ready."
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/608c3ee0998c64da555374cf_How_it_Works_1_Post-A-Job_Martin_Nicholausson%20(2).png',
        title:'Collaborate easily',
        desc:"Use Upwork to chat or video call, share files, and track project progress right from the app."
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/608c3ee0cccba4b5657527d9_How_it_Works_1_Post-A-Job_Martin_Nicholausson%20(3).png',
        title:'Payment simplified',
        desc:"Receive invoices and make payments through Upwork. Only pay for work you authorize."
    }
];

const findingCard = [
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/608c3ee0038a05ab41cf260e_How_it_Works_1_Post-A-Job_Martin_Nicholausson.png',
        title:'Create your profile (it’s free)',
        desc:'An eye-catching title and client-focused overview help us match you to the work you want. Include your work history, your skills, and your photo. Add more, like an introduction video, to create a profile that really stands out.'
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/608c3ee064fced307e31cb75_How_it_Works_1_Post-A-Job_Martin_Nicholausson%20(1).png',
        title:'Explore ways to earn',
        desc:'Work and earn in different ways. Bid for jobs. Pitch your projects. Discuss your in-demand skills with our recruiters so they can find opportunities aligned with your passions and career goals. Do all three. Create a predictable pipeline and build your network.'
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/608c3ee0cccba4b5657527d9_How_it_Works_1_Post-A-Job_Martin_Nicholausson%20(3).png',
        title:'Get paid securely',
        desc:'Choose how you get paid. Our fixed-price protection releases client payments at project milestones. Hourly protection bills clients every week. However you work, our service fees are the same. Spend less time chasing, more earning.'
    },
]

const HowToStart = () => {
    const [category, setCategory] = useState({
        isActive: 'Hiring Talent',
        menu:['Hiring Talent','Finding Work']
    });

    const handleActive = (index) =>{
        setCategory({...category, isActive: category.menu[index]});
    }

    const handleClass = (index) =>{
        if(category.isActive === category.menu[index]){
            return 'start-menu start-active'
        }
        else{
            return 'start-menu start-unactive'
        }
    }

    const cardShow = (item, index) => (
        <div key={index} className='start-card'>
            <div className='start-card-image'><img src={item.image} alt="" /></div>
            <div className='start-card-desc'>
                <p>{item.title}</p>
                <p>{item.desc}</p>
            </div>
        </div>
    )

  return (
    <div className='how-to-start'>
        <div><h3>How to get started</h3></div>
        <div className='how-to-start-menu'>
            {category.menu.map((item, index)=>(
                <div
                    key={index}
                    onClick={()=>handleActive(index)}
                    className={handleClass(index)}
                >{item}</div>
            ))}
        </div>
        <div className='start-cards'>
            {category.isActive === 'Hiring Talent' ? 
                hiringCard.map((item, index)=>(
                    cardShow(item, index)      
                ))
                
            :null}
            {category.isActive === 'Finding Work' ? 
                findingCard.map((item, index)=>(
                    cardShow(item,index)
                ))
            :null}
        </div>
        <button className='btn-hire'>Find Talent</button>
    </div>
  )
}

export default HowToStart