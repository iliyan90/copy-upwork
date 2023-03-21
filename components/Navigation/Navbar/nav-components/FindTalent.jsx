import React, { useState } from 'react'
import Marketplace from './sub-components/Marketplace'
import {IoIosArrowForward} from 'react-icons/io'
import Catalog from './sub-components/Catalog'
import Scout from './sub-components/Scout'
import {useNavigate} from 'react-router-dom'
const FindTalent = () => {
    const navigate = useNavigate();
  return (
    <section>
         <div className='nav-list-a mb-nav-list-a'>
                <div className='nav-list-item'>
                    <div onClick={() => navigate('/marketplace')}>
                        <h4>Post a job and hire a pro</h4>
                        <p>Talent Marketplace</p>
                    </div>
                    <div className='arrow'>
                        <IoIosArrowForward/>
                    </div>
                    <Marketplace/>
                </div>
                {/* ----------------------------------- */}
                <div className='nav-list-item'>
                    <div onClick={() => navigate('/services')}>
                        <h4>Browse and buy project</h4>
                        <p>Project Catalog</p>
                    </div>
                    <div className='arrow'>
                        <IoIosArrowForward/>
                    </div>
                    <Catalog/>
                </div>
                {/* ----------------------------------- */}
                <div className='nav-list-item'>
                    <div onClick={()=> navigate('/scout')}>
                        <h4>Let us find you right talent</h4>
                        <p>Talent Scout</p>
                    </div>
                    <div className='arrow'>
                        <IoIosArrowForward/>
                    </div>
                    <Scout/>
                </div>
        </div>
    </section>
  )
}

export default FindTalent