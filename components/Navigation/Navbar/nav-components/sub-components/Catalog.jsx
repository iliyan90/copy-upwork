import React from 'react'
import { cards } from '../../../../../data/navbarData'
import Visit from '../../utils/Visit'

const catalog = {
  title:'Project Catalog',
  desc:'Browse and buy project that have a clear scope and price.',
  link:'Browse Projcet Catalog'
}

const Catalog = () => {
  return (
    <div className='talent-group-1'>
      <Visit props={catalog}/>
      <div className='catalog-items'>
          {Object.values(cards).map((item, index) =>(
            <div key={index} className='card'>
              <img src={item.img} alt="" />
              <div className='title'>{item.title}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Catalog