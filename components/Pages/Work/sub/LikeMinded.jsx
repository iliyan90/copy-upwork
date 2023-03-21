import React from 'react'
import Slider from 'react-slick'

const cards = {
    obj1:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/606ec89bdb4b150c41f2dcab_Webp.net-compress-image%20(1)-p-500.jpeg',
        name:'Ambika M.',
        skills:'Market Researcher, USA.  Masters Degree and expert on Market Research Online Communities.',
        hours:'60',
        rated: <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606eca31e453c4783d5e6544_Top%20Rated.svg" alt="" />,
        intro:'\"I turned to Upwork as a way to gain more control of my career. I love being able to choose everything from who I work with to how I spend my day.\"'
    
    },
    obj2:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/6077ed119423652e71202e94_Alexander-img%20(1).png',
        name:'Alexander N.',
        skills:'Expert Software Engineer, Cyprus. Over $1M earned on Upwork to date.',
        hours:'90',
        rated: <img width={200} src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606c1931de084de96bfe363c_badge-top-rated-plus.svg" alt="" />,
        intro:'\"The success I`ve achieved simply would not have been possible without Upwork.\"'
    
    },
    obj3:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/6075c27aa778d337a72e2933_3%208%20(1)-p-500.jpeg',
        name:'Wahidul M.',
        skills:'UX/UI Designer, Bangladesh. Designed over 100 websites, iOS and Android mobile apps.',
        hours:'50',
        rated: <img width={200} src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606c1931de084de96bfe363c_badge-top-rated-plus.svg" alt="" />,
        intro:'\"Upwork has enabled me to build a professional career I love and live a life I love, while constantly developing new skills.\"'
    
    },
    obj4:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/6075c282266d4c0d4ed57693_Kolya%20(1).jpg',
        name:'Kolya T.',
        skills:'Owner of Wordpress Lab Agency, USA. Certified Wordpress expert who built his own agency on Upwork.',
        hours:'70',
        rated: <img width={200} src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606c1931de084de96bfe363c_badge-top-rated-plus.svg" alt="" />,
        intro:'\"Upwork is more than a platform. It is a lifestyle. It has helped me grow my agency by three digits and generates more leads than any other channel.\"'
    
    },
    obj5:{
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/6075c21d065b4e5d7ab543cd_Sasheen%20Murray%201%201%20(1).jpg',
        name:'Sasheen M.',
        skills:'Customer Experience Consultant, USA.  Developed customer service systems for 20 years.',
        hours:'60',
        rated: <img width={200} src="https://assets-global.website-files.com/603fea6471d9d8559d077603/606c1931de084de96bfe363c_badge-top-rated-plus.svg" alt="" />,
        intro:'\"Upwork has enabled me to increase my rates. I know what I`m bringing to the table and love the feeling of being able to help a variety of clients.\"'
    
    },

}

const LikeMinded = () => {
    const settings ={
        className:'like-slick',
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
  return (
    <div className='like-minded'>
        <h3>Like-minded professionals</h3>
        <div>
            <Slider {...settings}>

                {
                    Object.values(cards).map((item, index) =>(
                        <div key={index}>
                        <div className='like-minded-slide' >
                            <div className='image'>
                                <img src={item.image} alt="" /></div>
                            <div className='introduction'>
                                <h4>{item.name}</h4>
                                <span>{item.skills}</span>
                                <div className='like-rated'>
                                    <div>${item.hours}/hr</div>
                                    <div className='rated'>{item.rated} <span>top rated</span></div>
                                </div>
                                <p>{item.intro}</p>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default LikeMinded