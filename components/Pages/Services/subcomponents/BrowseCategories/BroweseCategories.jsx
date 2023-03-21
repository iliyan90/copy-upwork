import React from 'react'
import { useState } from 'react'
import './BrowseStyle.css'
import BrowsePattern from '../../../../../utils/BrowsePattern'

import {designList, videoList,developmentList, marketingList, writingList, moreList} from '../../../../../data/dataCatalog'

const BroweseCategories = () => {
    const [toggle, setToggle] = useState({
        isActive: 'Design',
        category:['Design','Video & Audio','Development & IT','Marketing','Writing & Translation','More']
    });

    const toggleActive = (index) =>{
        setToggle({...toggle, isActive: toggle.category[index]})
    }
    const toggleColor = (index) =>{
        if(toggle.category[index] === toggle.isActive){
            return 'category-style  active-ls'
        }
        return 'category-style unactive-ls'
    }
  return (
    <section>
        <div className='browse-category'>
            <h4>Browse All categories</h4>
        </div>
        <ul className='list-browse'>
            {toggle.category.map((item, index) =>(
                <li key={index} className={toggleColor(index)}
                    onClick={() => toggleActive(index)}>
                        <p>{item}</p> 
                </li>
            ))}
        </ul>
        <div>
            {toggle.isActive === 'Design' && <BrowsePattern items={designList}/>}
            {toggle.isActive === 'Video & Audio' && <BrowsePattern items={videoList}/>}
            {toggle.isActive === 'Development & IT' && <BrowsePattern items={developmentList}/>}
            {toggle.isActive === 'Marketing' && <BrowsePattern items={marketingList}/>}
            {toggle.isActive === 'Writing & Translation' && <BrowsePattern items={writingList}/>}
            {toggle.isActive === 'More' && <BrowsePattern items={moreList}/>}

        </div>
    </section>
  )
}

export default BroweseCategories