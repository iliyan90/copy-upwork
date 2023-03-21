import React from 'react'
import { cardsHead } from '../../../data/dataHeader'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Container3 = () => {
  return (
    <div className='container-3'>
            <img src="https://www.prattlibrary.org/assets/images/books-and-more/man-with-laptop-at-home-serious-research.jpg" alt="" />
            <div className='clients'>
                <h5>For clients</h5>
                <div style={{ marginTop:'100px'}}>
                    <h2>Find Talent your way</h2>
                </div>
                <p>
                    Work with the largest network of independent
                    professionals and get things done - from quick
                    turnrounds to big transformations.
                </p>
            </div>
            <div className='looking'>
                {Object.values(cardsHead).map((card, index) =>(
                    <div key={index} className='card-head'>
                        <h3>{card.title}</h3>
                        <p>{card.nav}&#8482; <AiOutlineArrowRight/></p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Container3