import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const cards = {
    obj1:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/604a3f9cdf74a703d0199c1a_How_it_Works_1_Post-A-Job_Martin_Nicholausson.png',
        title:'Create your free profile',
        desc:'Highlight your skills and experience, show your portfolio, and set your ideal pay rate.'
    },
    obj2:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/604a3ec84746da5adc3b95cc_How_it_Works_2_Bids-Come-To-You_Martin_Nicholausson.png',
        title:'Work the way you want',
        desc:'Apply for jobs, create easy-to-buy projects, or access exclusive opportunities that come to you.'
    },
    obj3:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/605b51fc9393dc45f60146fd_Payment%20Simplified.png',
        title:'Get paid securely',
        desc:'From contract to payment, we help you work safely and get paid securely.'
    },
}

const WorkYouWant = () => {
  return (
    <div className='work-you-want'>
        <h3>The work you want, all in one place</h3>
        <div className='work-you-want-cards'>
            {
                Object.values(cards).map((item, index)=>(
                    <div key={index} className='card'>
                        <div className='card-image'><img src={item.image} alt="" /></div>
                        <div>
                            <h6>{item.title}</h6>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <span>Want to know more? <a href="">Here`s how it work <BsArrowRight/></a> </span>
    </div>
  )
}

export default WorkYouWant