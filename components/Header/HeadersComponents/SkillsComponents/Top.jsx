import React from 'react'

const top = [
    "Data Entry Specialist","Video Editor","Data Analyst","Shopify Developer","Ruby on Rails Developer","Android Developer","Bookkeeper","Content Writer","Copywriter","Database Administrator","Data Scientist","Front-End Developer","Game Developer","Graphic Designer","iOS Developer","Java Developer","JavaScript Developer","Logo Designer","Mobile App Developer","Python Developer","PHP Developer","Resume Writer","SEO Expert","Social Media Manager","Software Developer","Sofware Engineer","Technical Writer","UI Designer","Virtual Assistant","Web Designer","Wordpress Developer"
]

const Top = () => {
  return (
    <div className='top'>
        {top.map((item) =>(
            <div><h2>{item}</h2></div>
        ))}
    </div>
  )
}

export default Top