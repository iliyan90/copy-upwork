import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const cards = {
    obj1:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/605b52d49e87ef74b48dc343_IT%20%26%20Engineering.png',
        title:'Development & IT',
        desc:'20K+ jobs posted weekly'
    },
    obj2:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/605b52c4a883a9dc2a8de180_Sales%20%26%20Marketing.png',
        title:'Sales & Marketing',
        desc:'10K+ jobs posted weekly'
    },
    obj3:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/604a3ec80a3bfbf10fe540be_Upwork_Category_03_Writing_Martin_Nicholausson.png',
        title:'Writing & Translation',
        desc:'10K+ jobs posted weekly'
    },
    obj4:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/605b52e056f6d4adb43e2c93_Design%20%26%20Creative.png',
        title:'Design & Creative',
        desc:'15K+ jobs posted weekly'
    },
    obj5:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/605b5209c4c036c197a454c0_Customer%20Service.png',
        title:'Admin & Customer Support',
        desc:'5K+ jobs posted weekly'
    },
    obj6:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/605b51fc9393dc45f60146fd_Payment%20Simplified.png',
        title:'Finance & Accounting',
        desc:'2K+ jobs posted weekly'
    },
}

const WorkWaiting = () => {
  return (
    <div className='work-waiting'>
        <h3>Work that’s waiting for you</h3>
        <div className='work-waiting-grid'>
            {
                Object.values(cards).map((item, index)=>(
                    <div key={index} className='card'>
                        <div className='card-image'><img src={item.image} alt="" /></div>
                        <div className='card-content'>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <a href="">Browse more <BsArrowRight/></a>
        <button>Create Your Profile</button>
    </div>
  )
}

export default WorkWaiting