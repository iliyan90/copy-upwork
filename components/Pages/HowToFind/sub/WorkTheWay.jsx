import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const WorkTheWay = () => {
    const fillStar = () =>{
        return (
            <>
                <AiFillStar color='grey'/>
                <AiFillStar color='grey'/>
                <AiFillStar color='grey'/>
                <AiFillStar color='grey'/>
                <AiFillStar color='grey'/>
            </>
            )
    }
  return (
    <section className='work-the-way-container'>
        <div className='work-way-box'>
            <div className='work-way-head'>
                <h3>Work the way you want</h3>
                <p>Find the right work for you, with great clients, at the world’s work marketplace.</p>
                <button className='btn-hire'>Create Your Profile</button>
            </div>
            <div className='work-way-rating'>
                <div className='work-way-stars'>
                    <h4>Professionals rate clients</h4>
                    <div className='stars-rate'>
                        {fillStar()}
                        <p>4.9/5</p>
                    </div>
                </div>
                <span>based on 2.4M+ reviews</span>
            </div>
        </div>
        <div className='work-the-way-image'>
            <img src="https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/optim/i/edit/ne/2019/02/Ordinateur%20portable%20620__w630.jpg" alt="" />
        </div>
    </section>
  )
}

export default WorkTheWay