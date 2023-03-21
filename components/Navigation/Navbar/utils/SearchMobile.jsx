import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { usePrevent } from "../../../../hooks/usePrevent";
const SearchMobile = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState({
    isActive: 0,
    menu: [0, 1, 2],
  });

  const activeMod = (index) => {
    setActive({ ...active, isActive: active.menu[index] });
  };
  const activeClass = (index) => {
    if (active.isActive === active.menu[index]) {
      return "border-bottom active-border";
    } else {
      return "border-bottom unactive";
    }
  };
  const buttons = ["Talent", "Projects", "Jobs"];

  usePrevent(show);

  return (
    <div className={show ? "search-mobile-extend" : "search-mobile"}>
      {show ? null : <FiSearch size={30} onClick={() => {setShow(true)}} />}
      {show ? (
        <div className="search-menu">
          <div className="search-input">
            <div className="icon-arrow">
                <BsArrowLeft size={30} onClick={() => setShow(false)} />
            </div>
            <input type="text" placeholder={"Search"} />
            <div className="search-input-icon">
              <FiSearch size={20} />
            </div>
          </div>
          <div className="search-buttons">
            {buttons.map((item, index) => (
              <p
                onClick={() => activeMod(index)}
                className={activeClass(index)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SearchMobile;
