import React from 'react'
import './Services.css'
import Project from './subcomponents/Project'
import ShopCategory from './subcomponents/ShopCategory'
import CatalogWork from './subcomponents/CatalogWork'
import Solution from './subcomponents/Solution'
import InspiredProject from './subcomponents/InspiredProject/InspiredProject'
import {cardsScale, cardsWeb, titleWeb, titleScale} from '../../../data/dataCatalog'
import BroweseCategories from './subcomponents/BrowseCategories/BroweseCategories'

const Services = () => {
  return (
    <div className='services-container'>
      <Project/>  
      <ShopCategory/>   
      <CatalogWork/> 
      <Solution cardsItems={cardsScale} title={titleScale}/>
      <Solution cardsItems={cardsWeb} title={titleWeb}/>
      <InspiredProject/>
      <BroweseCategories/>
    </div>
  )
}

export default Services