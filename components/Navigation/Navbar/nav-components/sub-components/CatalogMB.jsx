import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
import { cards } from "../../../../../data/navbarData";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../Navbar";

const CatalogMB = () => {
  const [toggle, setToggle] = useState(false);
  const user = useContext(UserContext);
  return (
    <div className="nav-list-item">
      {!toggle ? (
        <div className="box-list" onClick={() => setToggle(true)}>
          <div className="nav-list-cont">
            <h4>Browse and buy projects</h4>
            <p>Project Catalog</p>
          </div>
          <div className="arrow">
            <IoIosArrowForward />
          </div>
        </div>
      ) : null}
      {toggle ? (
        <div className="marketplace-catalog-mb">
          <div className="arrow-title">
            <div className="arrow-title-group">
              <MdArrowBackIosNew size={30} onClick={() => setToggle(false)} />
              <p>Project Catalog</p>
            </div>
            <AiOutlineClose
              size={30}
              className="close-button"
              onClick={() => {
                user.setShowHide(false);
              }}
            />
          </div>
          <div className="browse-title">
            <p>Browse and buy projects that have a clear scope and price.</p>
            <a href="">Browse Project Catalog</a>
          </div>
          <div className="catalog-items">
            {Object.values(cards).map((item, index) => (
              <div key={index} className="card">
                <img src={item.img} alt="" />
                <div className="title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CatalogMB;
