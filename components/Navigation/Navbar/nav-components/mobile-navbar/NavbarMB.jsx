import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import FindTalent from '../FindTalent'
import FindTalentMB from './FindTalentMB'
import FindWork from '../FindWork'
import WhyUpwork from '../WhyUpwork'
import { UserContext } from '../../Navbar'
import { useContext } from 'react'
import { useEffect } from 'react'

const NavbarMB = () => {
    const [show, setShow] = useState(false);
    const [showWork, setShowWork] = useState(false);
    const [showUpwork, setShowUpwork] = useState(false);
    const user = useContext(UserContext);
    
  return (
    <div className='mb-navbar'>
        <div>
            <ul className='mb-menu-list'>
                <li onClick={() => {setShow(!show); setShowUpwork(false); setShowWork(false)}}>
                    Find Talent <div className={show ? "rotate-arrow" : null}><IoIosArrowDown/></div>
                </li>
                    {show ? <FindTalentMB/>: null}
                <li onClick={() => {setShowWork(!showWork); setShow(false); setShowUpwork(false)}}>
                    Find Work <div className={showWork ? "rotate-arrow" : null}><IoIosArrowDown/></div>
                </li>
                    {showWork ? <FindWork/> : null}
                <li onClick={() => {setShowUpwork(!showUpwork); setShow(false); setShowWork(false)}}>
                    Why Upwork <div className={showUpwork ? "rotate-arrow" : null}><IoIosArrowDown/></div>
                </li>
                    {showUpwork ? <WhyUpwork/> : null}
                <li>Log In</li>
                <li>Enterprice</li>
                <li>Earn as a pro</li>
            </ul>
        </div>
        <div className='mb-btn-sign'>
            <button >Sign Up</button>
        </div>
    </div>
  )
}

export default NavbarMB