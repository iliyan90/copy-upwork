import React, { useEffect, useState } from 'react'
import Top from '../SkillsComponents/Top'
import Project from '../SkillsComponents/Project'
import UsaSkills from '../SkillsComponents/UsaSkills'
import Trending from '../SkillsComponents/Trending'
import './TopSkills.css'

const TopSkills = () => {

    const [toggle, setToggle] = useState({
        isActive: null,
        skills :["Top skills", "Trending skills", "Top skills in US", "Project Catalog"]
    });
    
    const toggleActive =(index) =>{
        setToggle({...toggle, isActive: toggle.skills[index]});
    }

    const toggleColor = (index) =>{
        if(toggle.skills[index] === toggle.isActive){
            return 'title-skills active'
        }else {
            return 'title-skills inactive'
        }
    }

    return (
        <div className='container-7'>
            <div className='skills'>
                {toggle.skills.map((item, index) =>(
                    <div key={index} onClick={()=>{toggleActive(index)}} className={toggleColor(index)}>
                        <h2>{item}</h2>
                    </div>
                ))}
            </div>
            <div className='category'>
                 {toggle.isActive === 'Top skills' && <Top/> }
                 {toggle.isActive === 'Trending skills' && <Trending/> }
                 {toggle.isActive === 'Top skills in US' && <UsaSkills/> }
                 {toggle.isActive === 'Project Catalog' && <Project/> }

            </div>
        </div>
  )
}

export default TopSkills