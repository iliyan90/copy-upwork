import React from 'react'
import { useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {MdArrowBackIosNew} from 'react-icons/md'
import {btns, linkBtns} from '../../../../../data/navbarData'
import { useNavigate } from 'react-router-dom' 
import { useContext } from 'react'
import { UserContext } from '../../Navbar'
import {AiOutlineClose} from 'react-icons/ai'

const MarketplaceMB = ({props}) => {
    const [toggle, setToggle] = useState(false);
    const user = useContext(UserContext);
    const navigate = useNavigate();
  return (
    <div className='nav-list-item' >
            {!toggle ? 
                <div className='box-list' onClick={() => setToggle(true)}>
                    <div className='nav-list-cont' >
                        <h4>Post a job and hire a pro</h4>
                        <p>Talent Marketplace</p>
                    </div>
                    <div className='arrow'>
                        <IoIosArrowForward/>
                    </div>
                </div> : null
            }
            {toggle ? 
                <div className='marketplace-mb'>
                    <div className='arrow-title'>
                        <div className='arrow-title-group'>
                            <MdArrowBackIosNew size={30} onClick={() => setToggle(false)}/> 
                            <p>Talent Marketplace</p>
                        </div>
                            <AiOutlineClose 
                                size={30} 
                                className='close-button'
                                onClick={() => {
                                    user.setShowHide(false);
                                }}
                            />
                    </div>
                    <div>
                        <p>Learn about working with talent or explore your specific hiring needs.</p>
                        <a href="">Hire on Talent Marketplace</a>
                    </div>
                    <div className='count-items'>
                        {
                           btns.map((item, index) =>(
                            <div onClick={() => {user.setShowHide(false); navigate(linkBtns[index])}} key={index}><p>{item}</p></div>
                           ))                
                        }
                    </div>
                </div>
            : null}
        </div>
  )
}

export default MarketplaceMB