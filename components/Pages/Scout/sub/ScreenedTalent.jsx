import React from 'react'

const screened = {
    obj1:{
        title:'Development',
        image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/614a359af255a3ef4a7196de_6080a964f61882757651ddab_IT%20%26%20Engineering%20(1).png'
    },
    obj2:{
        title:'Design & Creative',
        image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/614a359c8a15f1ad06389752_6080a976a07f3d7c05f8dbc0_Design%20%26%20Creative%20(1).png'
    },
    obj3:{
        title:'Sales & Marketing',
        image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/614a359d8a15f10994389759_6080a98053cc2ba5aa314661_Sales%20%26%20Marketing%20(1).png'
    }
}
const ScreenedTalent = () => {
  return (
    <div className='screened-talent'>
        <h3>Pre-screened talent available to start in these fields</h3>
        <div className='screened-component'>
            {
                Object.values(screened).map((item, index)=>(
                    <div className='screened-card' key={index}>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ScreenedTalent