import React from 'react'

const listWork = {
   obj1: {
        title: 'Browse',
        desc: 'Find the type of work you need, clearly defined and ready to start.'
    },
    obj2:{
        title: 'Buy',
        desc:'Work begins as soon as you purchase and provide requirements.'
    },
    obj3:{
        title: 'Approve',
        desc:'Receive and review your project. The professional will be paid once you’ve approved it.'
    }
}

const CatalogWork = () => {
  return (
    <section className='catalogWork'>
        <h4 className='catalog-title'>How it work</h4>
        <div className='catalog-box'>
            <ul className='catalog-list'>
                {Object.values(listWork).map((item,index) =>(
                    <li key={index} className='ctl-items'>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    </li>
                ))} 
            </ul>
            <div className='ctl-image'>
                <img src="https://www.upwork.com/static/assets/CatalogApp/img/video-thumbnail@1x.4076f93.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default CatalogWork