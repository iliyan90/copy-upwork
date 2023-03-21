import React from 'react'

const linkFee = () =>{
  <a href="">'3%-5% marketplace fee'</a>
} ;
const items = {
  obj1:{
    image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/61f27db471fd1d94ad12c61a_profile-search.svg',
    title:"Discover quality talent fast",
    list:['Post a job and receive proposals from talent','See verified work history and reviews','Send 30 invitations to talent per job post','Use advanced search filters'],
  },
  obj2:{
    image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/61f27db4fd39a19644ed23b8_Group%201%20(1).svg',
    title:'Collaboration tools for project tracking',
    list:['Chat, video call, and share files with talent','Get advanced reporting and tracking','Set coworker teams and member permission settings','Customize your invoice with activity codes']
  },
  obj3:{
    image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/61f27db4f69cca0cd9604a89_avatar-customer-service-female-one.svg',
    title:'Account support and guidance',
    list:['24/7 premium customer support']
  },
  obj4:{
    image:'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/61f27db5e3a57e46f7311a3a_secure-payment.svg',
    title:'Safe, easy payments',
    list:['Get an extra level of security with Upwork Payment Protection','Pay as you go billing for milestone and hourly contracts',`3-5% marketplace fee depending on payment method`]
  }
}

const images = ['',
'','','']

const WhatUGet = () => {
  return (
    <div className='what-u-get'>
          <h4>What you`ll get</h4>
          {
            Object.values(items).map((item, index) =>(
              <div className='whu-get' key={index}>
                <div className='whu-images'>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <ul>
                    {item.list.map((itemLi, ind) =>(
                      <li key={ind}>{itemLi}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          }
    </div>
  )
}

export default WhatUGet