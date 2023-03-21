import React from 'react'

const AnyCategories = ({category, alphabet, any, isNumber}) => {
  return (
    <>
      {category.isActive === 'Any' ? 
        <div className='any-cat-alpha'>
            {alphabet.map((alpha,index) =>(
            <div key={index}>
            <p>{alpha}</p>
            <ul className='find-work-category-items'>
            {
                any.map((item, ind) =>(
                <>
                    {isNumber(item.charAt(0)) && index === 0 || alpha === item.charAt(0) 
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

export default AnyCategories