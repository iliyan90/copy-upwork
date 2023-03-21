import React from 'react'
import {HiOutlineArrowSmRight} from 'react-icons/hi'
import {btns,linkBtns} from '../../../../../data/navbarData'
import Visit from '../../utils/Visit'
import {useNavigate} from 'react-router-dom'
const talent = {
  title:'Talent Marketplace',
  desc:'Learn about working with talent or explore your specific hiring needs.',
  link:'Hire on Talent Marketplace'
}
const Marketplace = () => {
  const navigate = useNavigate();
  return (
    <div className='talent-group'>
      <Visit props={talent}/>
      <div className='count-items'>
          {btns.map((item, index) =>(
            <p key={index} onClick={() => navigate(linkBtns[index])}>{item}</p>
          ))}
        </div>
    </div>
  )
}

export default Marketplace