import React from 'react'

const cards = [
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/607409dd00dab67243102da3_Group%202089%20(1).jpg',
        title:'Getting started',
        btnName:'Learn More',
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/607409d5d6dc71deb7806354_Group%202090%20(1).jpg',
        title:'Growing your career',
        btnName:'Learn More',
    },
    {
        image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/607409d8672f3c7c22fe1abc_Group%202067%20(1).jpg',
        title:'Finding support',
        btnName:'Visit Help Center'
    }
];

const Learn = () => {
  return (
    <section className='learn-continer'>
        <h3>Learn as you work</h3>
        <div className='learn-cards'>
            {cards.map((item, index) =>(
                <div className='card' key={index}>
                    <div className='card-image'><img src={item.image} alt="" /></div>
                    <div className='card-cont'>
                        <h4>{item.title}</h4>
                        <button className='btn-hire'>{item.btnName}</button>
                    </div>
                </div>
            ))
            }
        </div>
    </section>
  )
}

export default Learn