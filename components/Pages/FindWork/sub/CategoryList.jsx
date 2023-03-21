import React from 'react'

const CategoryList = ({list}) => {
  return (
    <div>
        <h3>{list.length} results found</h3>    
        <ul className='find-work-category-items'>
            {
                list.map((item, ind) =>(
                    <>
                    <div>
                        <li key={ind}>
                        <p>{item}</p>
                        </li>
                    </div> 
                </>
                )) 
            }
        </ul>
    </div>
  )
}

export default CategoryList