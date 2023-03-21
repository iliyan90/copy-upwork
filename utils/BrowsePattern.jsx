import React from 'react'
import { useState } from 'react'


const BrowsePattern = ({items}) => {
  const [veiw, setView] = useState(19);
  const [show, setShow] = useState(false);
  return (
    <div className='design-list'>
      <ul className='design-list-items'>
        {
          items.map((item, index)=>(
            index < veiw ?
              <li key={index}>{item}</li> 
              : null
          ))
        }
        {/* toggle button --view more-- */}
        {show ? null :
          <li onClick={()=> {setView(100); setShow(true)}}>
         {items.length < 20 ? null : <a className='design-link-view'>View More {items.length - 19}</a>
         } 
          </li>}
      </ul>
    </div>
  )
}

export default BrowsePattern