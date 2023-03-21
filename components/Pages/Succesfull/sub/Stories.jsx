import React from 'react'
import Slider from 'react-slick'

const stories = {
    obj1: {
        image:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/622527befcbc0b5885035e7e_tax-season-p-1600.jpg',
        logo:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/63248a3ad4bf1b24fe2c49ed_bissellredone-2.png',
        title:'How the BISSELL Pet Foundation Saved 33,000 Animals',
        amount: '445,900+',
        amountDesc:'pets helped since 2011',
        secondAmount:'33,695',
        seconfAmountDesc:'pets rescued in 2021 through Empty the Shelters',
    },
    obj2:{
        image:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/62252a92fcbc0b42b6036d9d_strategic-branding-p-1600.jpg',
        logo:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6197dc38a1beab3ecc6e4b81_amway-logo-grayscale-p-500.png',
        title:'How Amway Produced a Global Video Series in 3 Months, Across 5 Countries, and Saved $100,000',
        amount: '20,000',
        amountDesc:'saved per video',
        secondAmount:'3 months',
        seconfAmountDesc:'to complete a global video series',
    },
    obj3:{
        image:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/622420c231b5932140686afc_what-is-remote-work-p-1600.jpg',
        logo:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/604bd40e15e556a48678f7c5_pga_4c-seal.png',
        title:'Championing Innovation at PGA of America',
        amount: '3x faster',
        amountDesc:'Project completion times',
        secondAmount:'3 days',
        seconfAmountDesc:'Avarage time to start projects',
    },
    obj4:{
        image:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6229be5f78bc3a53197ae890_Upwork_3rdSpace_Katrina_Shot06_210313_053_V1.png',
        logo:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5ef148b1ab05ac223cffcc51_flexera-logo-gray.png',
        title:'Flexera Engineers a Way to Deliver Work 2x Faster and Keeps Security at the Forefront',
        amount: '<1 week',
        amountDesc:'Time to engage',
        secondAmount:'2x',
        seconfAmountDesc:'Faster project turnaround',
    },
    obj5:{
        image:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6229be7a9a6cfb44df1208d3_Upwork_Greenpointer_Brad_Shot03_210311_030_V2.png',
        logo:'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5ffeb6c30775a579aaf63123_1280px-NASDAQ_Logo.svg-p-500.png',
        title:'Nasdaq Leans on Hybrid Teams to Transform Itself into a Digital Media Leader',
        amount: 'Emmy Winning',
        amountDesc:'Facebook Watch program',
        secondAmount:'Millions',
        seconfAmountDesc:'of impressions generated per client per IPO',
    },
}

const Stories = () => {
    const settings = {
        className:'stories-slick',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 728,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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
      };
  return (
    <div className='stories-container'>
        <div className='stories-title'>
            <h2>Success Stories</h2>
            <p>See how Upwork helps businesses like yours grow and succeed.</p>
        </div>
        <div className='featured-success-slick'>
            <h3>Featured Success Stories</h3>
            <Slider {...settings}>
                {
                    Object.values(stories).map((item, index)=>(
                        <div key={index}>
                            <div className='success-card'>
                                <div className='success-card-image'><img src={item.image} alt="" /></div>
                                <div className='success-right-side'>
                                    <div className='success-header'>
                                        <div className='success-logo'>
                                            <div><img color='white' src={item.logo} alt="" /></div>
                                        </div>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className='success-content'>
                                        <span>Results</span>
                                        <div className='h-line'></div>
                                        <h4>{item.amount}</h4>
                                        <p>{item.amountDesc}</p>
                                        <h4>{item.secondAmount}</h4>
                                        <p>{item.seconfAmountDesc}</p>
                                        <button>Read Story</button>
                                    </div>
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

export default Stories