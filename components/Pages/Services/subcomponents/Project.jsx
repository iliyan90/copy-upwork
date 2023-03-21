import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {BiSearch} from 'react-icons/bi'
const Project = () => {
  return (
    <section className='project-srvc'>
        <div className='prj-srvc'>
            <h3>Project Catalog &trade;</h3>
            <h2>Clear scope.</h2>
            <h2>Upfront price.</h2>
            <h2>No suprises.</h2>
            <p>Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks.</p>
            <div className='search-service'>
                <input className='sch-srvc' type="text" placeholder='Try "video editing" or "data entry"' />
                <div className='srch-icon'><BiSearch size={12}/></div>
            </div>
            <div className='srvc-popular'>
                <p>Popular:</p>
                <button className='btn-srvc'><BiSearchAlt2/>Logo Design</button>
                <button className='btn-srvc'><BiSearchAlt2/>Articles & Blog Post</button>
                <button className='btn-srvc'><BiSearchAlt2/>WordPress</button>
            </div>
        </div>
    </section>
  )
}

export default Project