import React from 'react'
import { headerCards } from '../../../data/dataHeader'
import {AiFillStar} from 'react-icons/ai'

const Container1 = () => {
  return (
    <div className='container-1'>
            <h1>Browse talent by category</h1>
            <p>Looking for work? <a href="">Browse Job?</a></p>
            <div className='card-style'>
                {
                    Object.values(headerCards).map((card, index) =>(
                        <div key={index} className='card'>
                            <h3 className='title-card'>{card.title}</h3>
                            <div className='raiting'>
                                <div className='raiting-skills'>
                                    <AiFillStar color='green' size={20}/> 
                                    <p>{card.raiting}/5</p>
                                </div>
                                
                                <p>{card.skills} skills</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Container1