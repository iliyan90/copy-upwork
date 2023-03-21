import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const ScaleSolution = ({cardsItems, title}) => {
  return (
    <section className='scale-slt'>
        <div className='scale-title'>
            <h4>{title}</h4>
            <a href="">Show all <HiArrowNarrowRight/></a>
        </div>
        <div className='scale-box'>
            {
                Object.values(cardsItems).map((item, index) =>(
                    <div key={index} className='scale-cards'>
                        <div><img src={item.image} alt="" /></div>
                        <div className='scale-link'><a href="">{item.title}</a></div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default ScaleSolution