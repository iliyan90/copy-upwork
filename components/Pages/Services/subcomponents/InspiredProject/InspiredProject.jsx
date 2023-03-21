import React from 'react'
import CardProject from './CardProject'
import './InspiredProject.css'
import {cardProject} from '../../../../../data/dataInspiredProject'

const InspiredProject = () => {
  
  return (
    <div className='inspired-project'>
      <h3>Get inspired with project like these</h3>
      <div className='inspired-project-container'>
        {
          Object.values(cardProject).map((card, index) =>(
            <div key={index}>
              <CardProject cardProject={card}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default InspiredProject