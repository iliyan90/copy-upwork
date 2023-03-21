import React, { useState } from "react";
import "./ScndNavItems.css";
import TrustedBy from "./TrustedBy";
import { AiFillStar, AiOutlineArrowDown } from "react-icons/ai";
import { useMobile } from "../hooks/useMobile";

const ScndNavItems = ({ data }) => {
  const mobile = useMobile();
  const [seeMore, setSeeMore] = useState(false);
  const [seeMoreTwo, setSeeMoreTwo] = useState(false);
  const [seeMoreThird, setSeeMoreThird] = useState(false);

  const [show, setShow] = useState({
    isActive: null,
    menu: [0, 1, 2, 3, 4, 5],
  });
  const [select, setSelect] = useState({
    isActive: 0,
    menu: [0, 1, 2, 3, 4, 5],
  });

  const [showFree, setShowFree] = useState({
    isActive: null,
    menu: [0, 1, 2],
  });

  const activeShow = (index) => {
    if (show.isActive === index) {
      setShow({ ...show, isActive: null });
    } else {
      setShow({ ...show, isActive: show.menu[index] });
    }
  };

  const activeShowClass = (index) => {
    if (show.isActive === show.menu[index]) {
      return "question-prgr quest-active";
    } else {
      return "question-prgr quest-unactive";
    }
  };

  const active = (index) => {
    setSelect({ ...select, isActive: select.menu[index] });
  };

  const activeClass = (index) => {
    if (select.isActive === select.menu[index]) {
      return "select-list select-active";
    } else {
      return "select-list select-unactive";
    }
  };

  const handleChangeSelect = (e) => {
    active(e.target.value);
    activeClass(e.target.value);
  };

  const browseButton = <button className="btn-hire">Browse Projects</button>;

  const bussinesImage = (
    <div className="business-image">
      <img src={data.bgImage} alt="" />
    </div>
  );

  const discoverImage = (
    <div className="discover-image">
      <img src={data.discImage} alt="" />
    </div>
  );

  const selectList = (
    <div className="select-section-list">
      {data.listUl.map((item, index) => (
        <p
          onClick={() => active(index)}
          className={activeClass(index)}
          key={index}
        >
          {item}
        </p>
      ))}
      {!mobile && browseButton}
    </div>
  );

  const selectListMobile = (
    <select className="select-section-list-mb" onChange={handleChangeSelect}>
      {data.listUl.map((item, index) => (
        <option key={index} value={index}>
          {item}
        </option>
      ))}
    </select>
  );

  function showList(list) {}

  return (
    <section className={"section-ScnNav"}>
      <div className={data.classN}>
        <div className="hero-cont">
          <h3>{data.heroTitle}</h3>
          <p>{data.heroPrgh}</p>
          <button>Get Started</button>
        </div>
        <div className="hero-image">
          <img src={data.heroImage} alt="" />
        </div>
      </div>
      <div className="trusted-by">
        <TrustedBy />
      </div>

      {/* After Hero Section */}

      <div className="after-hero-section">
        <h3>{data.afterTitle}</h3>
        <div className="after-cards">
          {data.staticCards.map((item, index) => (
            <div key={index} className="static-card">
              <h3>
                {item.stStar}
                {item.stTitle}
              </h3>
              <p>{item.stPrgh}</p>
            </div>
          ))}
        </div>
        <div className="user-cards">
          {data.userCards.map((item, index) => (
            <div key={index} className="user-card">
              <h4>{item.title}</h4>
              <div>
                <p>
                  {item.star}
                  {item.rate} average rating
                </p>
              </div>
              <div className="user-images">
                <div className="user-image">
                  <img src={item.frsImage} alt="" />
                </div>
                <div className="user-image">
                  <img src={item.scnImage} alt="" />
                </div>
                <div className="user-image">
                  <img src={item.trdImage} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="after-hero-link">
          Looking for something else?{" "}
          <a>
            <AiOutlineArrowDown />
            See more skills
          </a>
        </p>
      </div>

      {/* Select section */}

      <div className="after-select-section">
        <h3>{data.afterHeadTitle}</h3>
        <h4>{data.listText[select.isActive]}</h4>
        <div className="select-section-content">
          {!mobile && selectList}
          {mobile && selectListMobile}
          <div className="select-image">
            <img src={data.listImages[select.isActive]} alt="" />
          </div>
          {mobile && browseButton}
        </div>
      </div>

      {/* For Enterprice Card */}

      <div className={data.enterpriceClass}>
        <div className="enterprice-desc">
          <p>For Enterprice</p>
          <h3>{data.enterTitle}</h3>
          <p>{data.enterPrgr}</p>
          <button>Find Out how</button>
        </div>
        <div className="enterprice-image">
          <img src={data.enterImage} alt="" />
        </div>
      </div>

      {/* For business card */}

      <div className="business-card">
        <div className="business-cont">
          <h3>{data.businessTitle}</h3>
          {mobile && bussinesImage}
          <h4>{data.businessSubTitle}</h4>
          <div className="business-budget">
            <div className="business-star">
              <AiFillStar color="#14a800" />
              <AiFillStar color="#14a800" />
              <AiFillStar color="#14a800" />
              <AiFillStar color="#14a800" />
              <AiFillStar color="#14a800" />
              <span>5/5</span>
            </div>
            <div>
              <span>Budget: {data.budget}</span>
            </div>
          </div>
          <p className="bsn-prgr">{data.businessPrgr}</p>
          <div className="business-skills">
            <p>skills:</p>
            {data.skills.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        {!mobile && (
          <div className="business-image">
            <img src={data.bgImage} alt="" />
          </div>
        )}
      </div>

      {/* Discovers */}

      <div className={data.discClass}>
        {!mobile && discoverImage}
        <dir className="discover-content">
          <h3>{data.discTitle}</h3>
          {mobile && discoverImage}
          <p>{data.discPrgr}</p>
          <div className="discover-button">
            <p>{data.turnaround}</p>
            <button className="btn-hire">Read Case Study</button>
          </div>
        </dir>
      </div>

      {/* Talent Opinion */}

      <div className={data.talentClassN}>
        <h3>{data.talentHeadTitle}</h3>
        <div className="talents-cards-opinion">
          {data.talentCard.map((item, index) => (
            <div
              className="card-opinion"
              style={{ backgroundColor: `${item.bgcolor}` }}
            >
              <div className="opinion-image">
                <img src={item.userImg} alt="" />
              </div>
              <h4>{item.userName}</h4>
              <div className="rate-image">
                <img
                  src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6336958ba574a1e229785e3b_Tier%20Top%20Rated%20Plus%201.svg"
                  alt=""
                />
                <p>TOP RATED PLUS</p>
              </div>
              <h5>{item.userTalent}</h5>
              <p>{item.userOpinion}</p>
            </div>
          ))}
        </div>
        <div className="extention-card">
          <div className="ext-cont">
            <h3>{data.extCardTitle}</h3>
            <a>Read Article</a>
          </div>
          <div className="ext-img">
            <img src={data.extCardImg} alt="" />
          </div>
        </div>
      </div>

      {/* Question */}

      <div className="question-nav">
        <div className="title-question">
          <h3>Frequently asked question</h3>
        </div>
        <div className="content-question">
          {data.question.map((item, index) => (
            <div className="card-quest" key={index}>
              <h4>{item.title}</h4>
              <div className={activeShowClass(index)}>
                <p>{item.titleList1}</p>
                <ul>
                  {item.list1.map((itm, ind) => (
                    <li key={ind}>{itm}</li>
                  ))}
                </ul>
                <p>{item.titleList2}</p>
                <ul>
                  {item.list2.map((itm, ind) => (
                    <li key={ind}>{itm}</li>
                  ))}
                </ul>
              </div>
              <a className="btn-view" onClick={() => activeShow(index)}>
                {show.isActive === index ? "View less" : "Read More"}
              </a>
            </div>
          ))}
          <p>
            Still have question? <a>Visit our Help Center</a>
          </p>
        </div>
      </div>

      {/* Find freelancer */}

      <div className="free-lancer">
        {mobile ? null : () => setSeeMoreTwo(true)}

        <h3>{data.freeTitle}</h3>
        <div>
          <h4>{data.fstSubTitle}</h4>
          <ul>
            {data.frsList.map((item, index) => (
              <div key={index}>
                {seeMore ? <li>{item}</li> : index < 3 ? <li>{item}</li> : null}
              </div>
            ))}
          </ul>
          <a onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? "Veiw less" : "See more"}
          </a>
        </div>
        <div>
          <h4>{data.scnSubTitle}</h4>
          <ul>
            {data.scnList.map((item, index) => (
              <div key={index}>
                {seeMoreTwo ? (
                  <li>{item}</li>
                ) : index < 3 ? (
                  <li>{item} </li>
                ) : null}
              </div>
            ))}
          </ul>
          <a onClick={() => setSeeMoreTwo(!seeMoreTwo)}>
            {seeMoreTwo ? "Veiw less" : "See more"}
          </a>
        </div>
        <div>
          <h4>{data.trdSubTitle}</h4>
          <ul>
            {data.trdList.map((item, index) => (
              <div key={index}>
                {seeMoreThird ? (
                  <li>{item}</li>
                ) : index < 3 ? (
                  <li>{item}</li>
                ) : null}
              </div>
            ))}
            <li>See all project</li>
          </ul>
          <a onClick={() => setSeeMoreThird(!seeMoreThird)}>
            {seeMoreThird ? "Veiw less" : "See more"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScndNavItems;
