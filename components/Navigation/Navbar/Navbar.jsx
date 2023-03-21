import React, { useState, createContext } from 'react'
import FindTalent from './nav-components/FindTalent'
import "./Navbar.css"
import ScndNavbar from './utils/ScndNavbar'
import Search from './utils/Search'
import FindWork from './nav-components/FindWork'
import WhyUpwork from './nav-components/WhyUpwork'
import ToggleButton from './utils/ToggleButton'
import NavbarMB from './nav-components/mobile-navbar/NavbarMB'
import {useNavigate} from 'react-router-dom'
import SearchMobile from './utils/SearchMobile'
import { useEffect } from 'react'
import { usePrevent } from '../../../hooks/usePrevent'

export const UserContext = createContext();

const Navbar = () => {
    const [showHide, setShowHide] = useState(false)
    const navigate = useNavigate();
    usePrevent(showHide);
  return (
    <div className='container-navbar'>
        <div className='navbar'>
            <div className='main-navbar'>
                <div className='logo' >
                    <div 
                        onClick={() => {
                            setShowHide(!showHide);
                        }}>
                        <ToggleButton toggle={showHide}/>
                    </div>
                    <h2 onClick={()=>{ navigate('/'); setShowHide(false)}} className='title'>Upwork</h2>
                </div>
                
                {showHide ? null :<ul className='menu '>
                    <li className='menu-list'>
                        <button className='btn'>Find Talent</button>
                        <FindTalent/>
                    </li>
                    <li className='menu-list'>
                        <button className='btn'>Find Work</button>
                        <FindWork/>
                    </li>
                    <li className='menu-list'>
                        <button className='btn'>Why Upwork</button>
                        <WhyUpwork/>
                    </li>
                    <li className='menu-list'>Enterprice</li>
                </ul>}
                
            </div>
            <Search/>
            <SearchMobile/>
        </div>
        <div className='h-line'></div>
        <ScndNavbar/>
        <UserContext.Provider value={{showHide, setShowHide}}>
            {showHide ? <NavbarMB/> : null}
        </UserContext.Provider>
        
    </div>
  )
}

export default Navbar