import React from 'react'
import './ImageParag.css'
const ImageParag = ({item}) => {
  return (
    <div className='image-paragraph'>
        <div className='image-paragr-cont'>
            <div className='image'>
                <img src={item.image} alt="" />
            </div>
            <div className='paragr-desc'>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        </div>
        <button className='btn-hire'>{item.btnName}</button>
    </div>
  )
}

export default ImageParag