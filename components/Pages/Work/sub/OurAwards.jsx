import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const cards = {
    cards1:{
        icon:  <AiFillStar color='#14a800'/> ,
        title: '4.9/5',
        desc: 'rating of clients by professionals'
    },
    cards2:{
        icon:  <img src='https://assets-global.website-files.com/603fea6471d9d8559d077603/606c15a4913d9dfa36db0ab1_G2%20logo.svg'/> ,
        title:  '2021',
        desc:'#1 freelance platform'
    },
    cards3:{
        title:'49K+',
        desc:'signed contracts every week'
    },
    cards4:{
        title:'$2.3B',
        desc:'freelancers earned on Upwork in 2020'
    }
}
const list =[
    'Take control. Find work that hits your financial goals faster with ambitious startups and well-known brands.',
    'Create lasting relationships. Build a predictable pipeline of projects, big and small, through strong connections.',
    'Work and earn your way. Search for jobs or have clients come to you. The opportunities are endless.',
    'Connect & engage. Learn, share information, and build your community with like-minded professionals.'
]

const OurAwards = () => {
  return (
    <div className='our-awards-xl'>
        <div className='our-awards-list'>
            <h3>Our award-winning platform</h3>
            <ul>
                {list.map((item, index) =>(
                    <li key={index}><p>{item}</p></li>
                ))}
            </ul>
        </div>
        <div className='our-awards-items'>
            {Object.values(cards).map((item, index)=>(
                <div className='our-award-card' key={index}>
                    <span>{item.icon}{item.title}</span>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurAwards