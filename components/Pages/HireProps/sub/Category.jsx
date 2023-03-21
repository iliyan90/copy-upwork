import React from "react";
import { useState } from "react";
import { listItems } from "../../../../data/categoryData";
import {IoIosArrowUp} from 'react-icons/io'
import TrustedBy from '../../../../utils/TrustedBy'

const Category = () => {
  const [category, setCategory] = useState({
    isActive: 0,
    menu: [0, 1],
  });
  const active = (index) => {
    setCategory({ ...category, isActive: category.menu[index] });
  };
  const activeClass = (index) => {
    if (category.isActive === category.menu[index]) {
      return "btn-category category-active";
    } else {
      return "btn-category category-unactive";
    }
  };
  const btn = ["Solo professionals", "Teams"];
//   ---------------------------------------
  const [show, setShow] = useState({
    isActive: null,
    menu:[0,1,2,3,4,5,6,7,8]
  })
  const activeShow = (index) =>{
    setShow({...show, isActive: show.menu[index]})
  }
  const activeShowClass = (index) =>{
    if(show.isActive === show.menu[index]){
        return 'category-content content-active'
    }else{
        return 'category-content content-unactive'
    }
  }
  return (
    <div className="category-container">
      <h2>Choose a category to see popular skills for hire</h2>
      <div className="category-buttons">
        {btn.map((item, index) => (
          <button className={activeClass(index)} onClick={() => active(index)}>
            {item}
          </button>
        ))}
        <p>Hiring a professional is great for growing your team or working on a project.</p>
      </div>
      <div>
        {listItems.map((item, index) => (
          <div key={index} className='category-items'>
            {
                (category.isActive ===1 && index === 6) ? null :
                <div className="category-item-title">
                    <IoIosArrowUp className={ show.isActive === index ? null : 'ioArrowDown'}/>
                    <h3 onClick={() => activeShow(index)}>{ item.title}</h3>
                </div>
            }
            <div className={activeShowClass(index)}>
              <span>Popular skills:</span>
              <div className="category-list">
                {item.list.map((itm, ind) => (
                  <p key={ind}>{itm}</p>
                ))}
              </div>
              {
                category.isActive === 1 ? null :
                <div>
                    <p>{item.parg}</p>
                    <button className="btn-category-parg">Explore {item.title}</button>
                </div>
              }
            </div>
          </div>
        ))}
      </div>
      <TrustedBy/>
    </div>
  );
};

export default Category;
