import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const FooterList = ({ title, items }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="titleContent">
          {/* responsive button */}
          <div className="mobile-titleList" onClick={() => setActive(!active)}>
            <h5 className="mobile-title">
              {title}
            </h5>
          </div>

          <h5 className="titleList">
            {title}
          </h5>
          <div className={active ? "arrowRotate" : "arrow"}>
            {<IoIosArrowDown />}
        </div>
      </div>
      <ul className={active ? "listActive" : "listUnactive"}>
        {items.map((item, index) => (
          <li key={index}>
            <NavLinkBar>{item}</NavLinkBar>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;

const NavLinkBar = styled(NavLink)`
  color: white !important;
  text-decoration: none;
`;
