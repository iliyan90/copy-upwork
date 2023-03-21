import React from 'react'
import {businesses, cardsHead, cardOne, cardTwo} from '../../../data/dataHeader'
import {AiFillStar} from 'react-icons/ai'

const Container4 = () => {
  return (
    <div className='container-4'>
    <div className='businesses'>
        <div className='businesses-left'>
            <h1>Why businesses turn to Upwork</h1>
            <ul>
                {Object.values(businesses).map((bsn, index) =>(
                    <li key={index}>
                        <div className='bsn-list'>
                            {bsn.icons}
                            <h3>{bsn.title}</h3>
                        </div>
                        <div className='bsn-desc'>
                            {bsn.desc}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <div className='bsn-image'>
            <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_357,h_694,q_auto,dpr_2.0/brontes/why-upwork/reaching-person@1x.png" alt="" />

        </div>
    </div>
    <div className='award'>
        <h3>We`re the words work marketplace</h3>
        <div className='award-style'>
            <div className='award-card'>
                <AiFillStar size={34} color='white'/>
                <p className='rate'>4.9/5</p>
            </div>
                <p className='rate-desc'>Clients rate professionals on Upwork</p>
        </div>
        <div className='award-style'>
            <div className='award-card'>
                <img loading="lazy" src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_30,h_31,q_auto/brontes/why-upwork/group.svg" width="30" height="31" alt="G2 icon" data-qa="icon" ></img>
                <p className='rate'>Award winner</p>
            </div>
                <p className='rate-desc'>G2`s Best Software Awards</p>
        </div>
    </div>
</div>
  )
}

export default Container4