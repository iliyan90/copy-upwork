import React from 'react'
import { useContext } from 'react';
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Navbar';
const cardUpwork = {
  obj1:{
    title: 'Success Stories',
    desc: 'Discover how teams work strategically and grow together.'
  },
  obj2:{
    title: 'Reviews',
    desc: 'See what it’s like to collaborate on Upwork.'
  },
  obj3:{
    title: 'How to hire',
    desc: 'Learn about the different ways to get work done.'
  },
  obj4:{
    title: 'How to find work',
    desc: 'Learn about how to grow your independent career.'
  },
};

const upworkLinks = ['/success','/reviews','/howHire','howFind'];

const cardUpworkOne = {
  obj1:{
    title:'Guides',
    desc: 'Getting Started as a Freelancer'
  },
  obj2:{
    title:'Guides',
    desc: 'Growing Your Freelance Career'
  },
  obj3:{
    title:'Guides',
    desc: 'Hiring & Working with Independent Talent'
  },
}

const WhyUpwork = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext)
  return (
    <div className='nav-list-a'>
      <div className='whyupwork'>
        <div className='card-upwork'>
          {Object.values(cardUpwork).map((item, index) =>(
            <div key={index} className='box-upwork' onClick={() => {navigate(upworkLinks[index]); user.setShowHide(false)}}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className='card-upwork-1'>
            <p>Where work gets done</p>
            {
              Object.values(cardUpworkOne).map((item, index)=>(
                <div key={index} className='box-upwork-one'>
                  <div>{item.title}</div>
                  <div>{item.desc}</div>
                </div>
              ))  
            }
            <a href="">See resources <HiOutlineArrowSmRight/></a>
        </div>
      </div>
    </div>
  )
}

export default WhyUpwork