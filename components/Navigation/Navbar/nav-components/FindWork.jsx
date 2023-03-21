import React from 'react'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../Navbar';
const findWork = {
  obj1:{
    title: 'Ways to earn',
    desc: 'Learn why Upwork has the right opportunities for you.'
  },
  obj2:{
    title: 'Find work for your skills',
    desc: 'Explore the kind of work available in your field.'
  },
  obj3:{
    title: 'Find way to promote yourself',
    desc: 'Show clients you`re the one they want.'
  },
}

const navigateLink = ['/work','/findWork','promote'];

const FindWork = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  return (
    <div className='nav-list-a' >
      <div className='list-work'>
        {Object.values(findWork).map((item, index) => (
          <div key={index} className='card-work' onClick={()=> {navigate(navigateLink[index]); user.setShowHide(false)}} >
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FindWork