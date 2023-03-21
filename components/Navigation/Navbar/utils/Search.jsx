import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {IoIosArrowDown} from 'react-icons/io'
const Search = () => {
    const [label, setLabel] = useState('Talent');
    const [show, setShow] = useState(false);
  return (
    <div className='search-bar'>
        <div className='search'>
            <i><FiSearch/></i>
            <input type="text" name="" id="" placeholder='Search' className='search-input' />
        </div>
        <div className='btn-ul'>
            <button onClick={()=> setShow(!show)}>{label} <IoIosArrowDown/></button> 
                {show && ( 
                    <ul className='btn-ul-talent'>
                        <li  className='li-talent'
                            onClick={() =>{return setLabel('Talent'), setShow(false)}}
                        >
                            <p className='title'>Talent</p>
                            <p className='desc'>Hire profecional and agencies</p>
                        </li>
                        <li className='li-talent'
                        onClick={() =>{return setLabel('Project'), setShow(false)}}
                        >
                            <p className='title'>Project</p>
                            <p className='desc'>Buy ready-to-start services</p>
                        </li>
                        <li className='li-talent'
                        onClick={() =>{return setLabel('Jobs'), setShow(false)}}
                        >
                            <p className='title'>Jobs</p>
                            <p className='desc'>Apply to jobs posted by clients</p>
                        </li>
                    </ul>
                )}
        </div>
        <div className='btn-group'>
            <button className='btn'>Log In</button>
            <button className='btn'>Sign Up</button>
            <button className='btn-earn'>Earn as a pro</button>
        </div>
    </div>
  )
}

export default Search