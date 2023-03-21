import React from 'react'
import './BrowseBuy.css'
const BrowseBuy = ({item}) => {
  return (
    <section className='browse-buy-container'>
        <div className='browse-buy-box'>
            <h3>{item.title}</h3>
            <h4>{item.subTitle}</h4>
            <p>{item.desc1}</p>
            <p>{item.desc2}</p>
            <button className='btn-hire'>{item.btnName}</button>
        </div>
        <div className='browse-buy-cards'>
            <div className='browse-card'>
                <div className='browse-user'>
                    <img src={item.frsUserImage} alt="" />
                    <span>{item.frsUserName}</span>
                    <div className='green-dot'></div>
                </div>
                <img src={item.frsBgImage} alt="" />
                <p>{item.cardDesc1}</p>
                <span>{item.frstPrice}</span>
            </div>
            <div className='browse-card'>
                <div className='browse-user'>
                    <img src={item.scnUserImage} alt="" />
                    <span>{item.scnUserName}</span>
                    <div className='green-dot'></div>
                </div>
                <img src={item.scnBgImage} alt="" />
                <p>{item.cardDesc2}</p>
                <span>{item.scnPrice}</span>
            </div>
        </div>
        <div className='browse-buy-box-mb'>
            <p>{item.desc1}</p>
            <p>{item.desc2}</p>
            <button className='btn-hire'>{item.btnName}</button>
        </div>
    </section>
  )
}

export default BrowseBuy