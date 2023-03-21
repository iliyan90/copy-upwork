import React from 'react'
import CardHeader from '../HeadersComponents/CardHeader';
import CardHeader3 from '../HeadersComponents/CardHeader3'
import {cardOne, cardTwo} from '../../../data/dataHeader'
import Slider from 'react-slick';
const Container6 = () => {
    // settings for react slick
    const settings = {
        className: 'shop-category',
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 3,
        centerMode: false,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
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
    <div className='container-6'>
            <div className='title-card'>
                <h1>Trusted by leading brands and startups</h1>
            </div>
            <div className='slides'>
                <div className='card-cont'>
                    <Slider {...settings}>
                            <div>
                                <CardHeader {...cardOne}/>
                            </div>
                            <div>
                                <CardHeader {...cardTwo}/>
                            </div>
                            <div>
                                <CardHeader3/>
                            </div>
                    </Slider>
                   
                </div>
            </div>
        </div>
  )
}

export default Container6