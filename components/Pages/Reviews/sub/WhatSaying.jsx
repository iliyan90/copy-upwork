import React from 'react'
import { useState } from 'react'
import {allCategories, development, design, sales, writing, admin, finance, engineering, legal } from '../../../../data/whatSayingData';
const WhatSaying = () => {
    const [show, setShow] = useState(3);
    let hideBtn;
    const [category, setCategory] = useState({
        isActive: 'All Specializations',
        menu:[
            'All Specializations',
            'Development & IT',
            'Design & Creative',
            'Sales & Marketing',
            'Writing & Translation',
            'Admin & Customer Support',
            'Finance & Accounting',
            'Engineering & Architecture',
            'Legal'
        ]
    });
    const data = [allCategories, development, design, sales, writing, admin, finance, engineering, legal]
    const handleActive = (index) =>{
        setCategory({...category, isActive: category.menu[index]})
    }
    const handleClass = (index) =>{
        if(category.isActive === category.menu[index]){
            return 'what-saying-item what-active'
        }
        else{
            return 'what-saying-item what-unactive'
        }
    }

    const cardToShow = (item, index) => (
        <div key={index} className='what-saying-card'>
            <h3>{item.title}</h3>
            <span>Client</span>
            <p className='what-saying-mind'>{item.clientMind}</p>
            <div className='name-country'>
                <p>{item.clientName}</p>
                <span>{item.clientCountry}</span>
            </div>
            <span>Talent</span>
            <p className='what-saying-mind'>{item.talentMind}</p>
            <div className='name-country'>
                <p>{item.talentName}</p>
                <span>{item.talentCountry}</span>
            </div>
            <span className='what-saying-category'>{item.category}</span>
        </div>
    )

    return (
        <section className='what-saying'>
            <div className='what-saying-list'>
                <h3>What they`re saying</h3>
                <div className='what-saying-list-item' >
                {category.menu.map((item, index) =>(
                        <p 
                            key={index}
                            className={ handleClass(index)}
                            onClick={() => {
                                handleActive(index); 
                                setShow(3); 
                                window.scrollTo(0, 450)}}
                            >{item}
                        </p>
                ))}
                </div>
            </div>
            <div className='what-saying-cards'>
                {category.menu.map((item, index) =>(
                    category.isActive === item ? data[index].map((itm, ind) =>(
                        // count list length
                        hideBtn = ind ,
                       ind < show ? cardToShow(itm, ind) : null
                    )) : null
                ))}
                {/* hide button after list end */}
                { hideBtn > show ?
                <button className='btn-hire' onClick={() => setShow(show + 3)}>Show More</button>
                : null
            }
            </div>
        </section>
  )
}

export default WhatSaying