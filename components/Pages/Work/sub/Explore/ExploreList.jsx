import React from 'react'

const ExploreList = ({items, select}) => {
  return (
    <div className='explore-list-container-xl'>
        <div className='explore-list-box-xl'>
        {
            Object.values(items).map((item, index)=>(
                <div key={index} className='explore-list-xl'>
                    <div className='explore-list-image-xl'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='explore-list-content-xl'>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </div>
                    
                </div>
            ))
        }
        </div>
            {/* Arrow Positions Absolute */}
            <div className='explore-arrow-up'>
                <img  src="https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70fc109a224a2985c9db_Vector%201.svg" alt="" />
            </div>
            <div className='explore-arrow-down-second'>
                <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70fd7f6c7f01294de62b_Vector%203.svg" alt="" />
            </div>
            {select.isActive === 'Talent Marketplace'? <>
                <div className='explore-arrow-down'>
                    <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70fd7f6c7f01294de62b_Vector%203.svg" alt="" />
                </div>
                
                <div className='explore-arrow-up-second'>
                    <img  src="https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70fc109a224a2985c9db_Vector%201.svg" alt="" />
                </div>
            </> : null}
            {
                select.isActive != 'Talent Marketplace' ? 
                <div className='explore-arrow-up-third'>
                    <img  src="https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70fc109a224a2985c9db_Vector%201.svg" alt="" />
                </div>
                :null
            }
    </div>
  )
}

export default ExploreList