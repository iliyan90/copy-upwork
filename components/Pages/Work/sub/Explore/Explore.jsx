import React from 'react'
import { useState } from 'react'
import './Explore.css'
import ExploreList from './ExploreList';
import { marketplace, projects, scout } from '../../../../../data/dataExplore'; 

const Explore = () => {

    const [select, setSelect] = useState({
        isActive: 'Talent Marketplace',
        menu: ['Talent Marketplace','Project Catalog','Talent Scout']
    });

    const selectState = (index) =>{
        setSelect({...select, isActive: select.menu[index]})
    }

    const selectActive = (index) =>{
        if(select.menu[index] === select.isActive){
            return 'explore-select explore-active'
        }
        else{
            return 'explore-select explore-unactive'
        }
    }

    const handleChange = (e) =>{
        setSelect({...select, isActive: e.target.value})
    }

  return (
    <section className='explore-xl'>
        <h3>Explore the different ways to earn</h3>
        <div className='explore-menu-xl'>
            {select.menu.map((item, index) =>(
                <div
                    key={index}
                    onClick={()=> {selectState(index)}}
                    className={selectActive(index)}>
                <h4>{item}&#8482;</h4>
                </div>
                
            ))}
        </div>
        <div className='explore-menu-mb'>
            <select name="" id="" value={select.isActive} onChange={handleChange}>
            {select.menu.map((item, index) =>(
                <option
                    value={item}
                    key={index}
                    className={selectActive(index)}>
                <h4>{item}&#8482;</h4>
                </option>
                
            ))}    
            </select> 
        </div>
        <div className='explore-items-xl'>
            {select.isActive === 'Talent Marketplace' ? <ExploreList items={marketplace} select={select}/> : null}
            {select.isActive === 'Project Catalog'? <ExploreList items={projects} select={select}/> : null}
            {select.isActive === 'Talent Scout'? <ExploreList items={scout} select={select}/> : null}
        </div>
    </section>
  )
}

export default Explore