import React from 'react'
import { useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {MdArrowBackIosNew} from 'react-icons/md'
import { useContext } from 'react'
import { UserContext } from '../../Navbar'
import {AiOutlineClose} from 'react-icons/ai'

const ScoutMB = () => {
    const [toggle, setToggle] = useState(false);
    const user = useContext(UserContext);
  return (
    <div className='nav-list-item' >
            {!toggle ? 
                <div className='box-list' onClick={() => setToggle(true)}>
                    <div className='nav-list-cont' >
                        <h4>Let us find you right talent</h4>
                        <p>Talent Scout</p>
                    </div>
                    <div className='arrow'>
                        <IoIosArrowForward/>
                    </div>
                </div> : null
            }
            {toggle ? 
                <div className='marketplace-scout-mb'>
                    <div className='arrow-title'>
                        <div className='arrow-title-group'>
                            <MdArrowBackIosNew size={30} onClick={() => setToggle(false)}/> 
                            <p>Talent Scout</p>
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
                        <p>Learn how our recruiters find you expert developers, designers and marketers.</p>
                        <a href="">Talk to talent Scout</a>
                    </div>
                    <div className='count-items'>
                        <p>Development & IT</p>
                        <p>Design & Creative</p>
                        <p>Marketing</p>
                    </div>
                </div>
            : null}
        </div>
  )
}

export default ScoutMB