import React from 'react'
import {TbClock} from 'react-icons/tb'
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import Slider from 'react-slick'


const CardProject = ({cardProject}) => {
  const settings = {
    className:'inspired-project',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='card-project'>
          <div className='card-project-box'>
            <div className='card-project-slide'>
              <Slider {...settings}
              >
                {cardProject.images.map((image, ind)=>(
                  <div>
                  <div className='card-project-img'>
                    <div className='icon-heart'>
                      <AiOutlineHeart size={15}/>
                    </div>
                    <img src={image} key={ind} alt="" />
                  </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className='card-project-content'>
                <div className='card-project-title'>{cardProject.title}</div>
                <div className='card-project-desc'>
                  <div><p>From {cardProject.price}</p></div>
                  <div><p><TbClock/>{cardProject.delivery} day delivery</p></div>
                </div>
                <div className='card-project-h-line'></div>
                <div className='card-project-auth-info'>
                  <div className='card-project-author'>
                    <img src={cardProject.authImage} alt="" />
                    <p>{cardProject.author}</p>
                  </div>
                  <div className='card-project-rating'>
                    <AiFillStar color='lime' size={10}/>
                    <p>{cardProject.raiting} </p>
                    <p>({cardProject.allRates})</p>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default CardProject