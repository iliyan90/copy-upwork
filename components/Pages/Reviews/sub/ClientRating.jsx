import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const ClientRating = () => {
  return (
    <section className='client-rating'>
        <h3>Clients and talent leave each other 20k new reviews per week</h3>
        <div className='client-rating-cont'>
            <div className='client-rating-card'>
                <div className='client-rating-star'>
                    <span>Clients rate talent</span>
                    <AiFillStar color='#14a800' size={20}/>
                    <AiFillStar color='#14a800' size={20}/>
                    <AiFillStar color='#14a800' size={20}/>
                    <AiFillStar color='#14a800' size={20}/>
                    <AiFillStar color='#14a800' size={20}/>
                    <span>4.9/5</span>
                </div>
                <div>
                    <p>Based on <span>2.9 million</span> reviews</p>
                </div>
            </div>
            <div className='client-rating-card'>
                <div className='client-rating-star'>
                    <span>Talent rate client</span>
                    <AiFillStar color='#14a800' size={20}/>
                    <AiFillStar color='#14a800' size={20}/>
                    <AiFillStar color='#14a800' size={20}/>
                    <AiFillStar color='#14a800' size={20}/>
                    <AiFillStar color='#14a800' size={20}/>
                    <span>4.9/5</span>
                </div>
                <div>
                    <p>Based on <span>2.4 million</span> reviews</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ClientRating