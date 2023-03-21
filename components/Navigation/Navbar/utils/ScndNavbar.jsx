import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const ScndNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar-scnd'>
            <ul>
                <li onClick={() => navigate('/dev')}>Development & IT</li>
                <li onClick={() => navigate('/des')}>Design & Creative</li>
                <li onClick={() => navigate('/sales')}>Sales & Marketing</li>
                <li onClick={() => navigate('/writing')}>Writing & Translation</li>
                <li onClick={() => navigate('/admin')}>Admin & Customer Support</li>
                <li onClick={() => navigate('/finance')}>Finance & Accounting</li>
                <li>
                  <p>More <MdKeyboardArrowDown/></p>
                  <div className='more'>
                      <p onClick={() => navigate('/engin')}>Engineering & Architecture</p>
                      <p onClick={() => navigate('/hr-training')}>HR & Training</p>
                      <p onClick={()=> navigate('/legal')}>Legal</p>
                  </div> 
                </li>
            </ul>
        </div>    
  )
}

export default ScndNavbar