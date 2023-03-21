import React from 'react'
import styled from 'styled-components'
import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'


const CardHeader = ({titleImg, description, title1, title2, desc1, desc2, background}) => {
  return (
    <Card style={background={background}}>
        <div >
            <img data-v-e4caeaf8="" alt="NASDAQ Logo" src={titleImg} width="199" height="56" ></img>
        </div>
        <div className='description'>
            <p><RiDoubleQuotesL/>
            {description}
            <RiDoubleQuotesR/></p>
        </div>
        <p>Results</p>
        <Vl/>
        <div className='podcst'>
          <div className='podcst-1'>
            <h3>{title1}</h3>
            <p>{desc1}</p>
          </div>
          <div className='podcst-1'>
            <h3>{title2}</h3>
            <p>{desc2}</p>
          </div>
        </div>

    </Card>
  )
}

export default CardHeader

const Card = styled.div`
    padding: 30px;
    color: white;
    height: 400px;
    border-radius: 15px;
    .description p{
      font-size: 20px;
    }
    @media (max-width: 768px){
      width: 80%;
      margin: 0;
      height: 100%;
      gap: 0;
      
    }
`

const Vl = styled.div`
  border: 1px solid white;
  width: 100%;
  margin-top: 80px;
`