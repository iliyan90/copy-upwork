import React from 'react'

const Development = ({category, alphabet, dev, isNumber}) => {
  return (
    <>
      {
            category.isActive === 'Development' ? 
            <div className='any-cat-alpha'>
              {alphabet.slice(1).map((alpha,index) =>(
              <div key={index}>
                <p>{alpha}</p>
                <ul className='find-work-category-items'>
                {
                  dev.map((item, ind) =>(
                  <>
                     {( (isNumber(item.charAt(0)) ) || (alpha === item.charAt(0) && ind != 0)) 
                     ?
                     <div>
                         <li key={ind}>
                           <p>{item}</p>
                         </li>
                     </div> : null}
                  </>
                   )) 
                  }
            </ul>
              </div>
            
          ))}
          </div> : null
          }  
    </>
  )
}

export default Development