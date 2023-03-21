import React from 'react'
import './DemandTalent.css'
import Slider from 'react-slick'

const userTalent = {
    obj1:{
        name:'Maria S.',
        intro:'Senior Front-end developer with over 11 years of experience',
        image:'https://assets-global.website-files.com/5f030e7bdf54ce5980af3986/60af71756f1c7556d4d7f0ef_Maria%20S.jpeg',
        desc:'\"Upwork has taken my business to the next level. Through Upwork, I have engaged with many high quality clients that I would not have been exposed to by my own means.\"'
    },
    obj2:{
        name:'Stephan K.',
        intro:'Certified Magento, Shopify and BigCommerce Developer',
        image:'https://assets-global.website-files.com/5f030e7bdf54ce5980af3986/60af7182287eea1ed7689e8a_Stephen%20K.jpeg',
        desc:'\"I was able to triple my income because of Upwork. I love the chance I have to learn and grow my business through the platform.\"'
    },
    obj3:{
        name:'John B.',
        intro:'SQL Server DBA | SQL Developer | Data Engineer',
        image:'https://assets-global.website-files.com/5f030e7bdf54ce5980af3986/60af71996bb7293743b1f8f5_Josh%20B.jpeg',
        desc:'\"I wake up every day and get to do work I love because of Upwork.\" \"I`ve worked over 8,000 hours on Upwork and it barely feels like it because I love what I do\"'
    },
    obj4:{
        name:'Ron Z.',
        intro:'Premium WordPress Development',
        image:'https://assets-global.website-files.com/5f030e7bdf54ce5980af3986/60af71ac334fc722bd15de94_Ron%20Z.jpeg',
        desc:'\"Upwork has proven to be the best way for me to find high-quality clients and exciting work.\"'
    },
    obj5:{
        name:'Mara N.',
        intro:'Premium websites for premium clients',
        image:'https://assets-global.website-files.com/5f030e7bdf54ce5980af3986/60af71bf998dd64ebffc658e_Mara%20N.jpeg',
        desc:'\"Upwork makes finding clients and managing projects so much easier." "My goal in 2021 is to reach $1M in earnings on Upwork. That said, I am very grateful for the opportunity that Upwork has created for professionals.'
    },
    
}


const DemandTalent = () => {
    const settings = {
        className:'demand-talent-slick',
        dots: false,
        infinity: true,
        arrow: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
  return (
    <div className='demand-talent'>
        <h3>Work with in-demand global talent who are at the top of their field</h3>
        <Slider {...settings}>
            {
                
                Object.values(userTalent).map((item, index) =>(
                    <div className='demand-talent-cont' key={index}>
                    <div className='demand-cards'>
                        <div className='demand-card-image'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='demand-card-cont'>
                            <h4>{item.name}</h4>
                            <h5>{item.intro}</h5>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default DemandTalent