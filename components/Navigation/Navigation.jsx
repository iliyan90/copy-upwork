import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from '../Header/Header';
import Scout from '../Pages/Scout/Scout'
import MarketPlace from '../Pages/Marketplace/MarketPlace'
import Services from '../Pages/Services/Services'
import FindWork from '../Pages/FindWork/FindWork';
import Work from '../Pages/Work/Work';
import Promote from '../Pages/Promote/Promote';
import Successfull from '../Pages/Succesfull/Successfull';
import HowToHire from '../Pages/HowToHire/HowToHire';
import Reviews from '../Pages/Reviews/Reviews';
import HowToFind from '../Pages/HowToFind/HowToFind';
import ScndNavItems from '../../utils/ScndNavItems';
import HireProps from '../Pages/HireProps/HireProps';

import { development, design, sales, writer, admin, finance, engin, hrTraining, legal } from '../../data/scnNavData';

const Navigation = () => {
  return (
    <Routes>
      <Route path='/' element={<Header/>}/>
       
      <Route path='/scout' element={<Scout/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/marketplace' element={<MarketPlace/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/findWork' element={<FindWork/>}/>
      <Route path='/promote' element={<Promote/>}/>
      <Route path='/success' element={<Successfull/>}/>
      <Route path='/howHire' element={<HowToHire/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/howFind' element={<HowToFind/>}/>
      <Route path='/dev' element={<ScndNavItems data={development}/>}/>
      <Route path='/des' element={<ScndNavItems data={design}/>}/>
      <Route path='/sales' element={<ScndNavItems data={sales}/>}/>
      <Route path='/writing' element={<ScndNavItems data={writer}/>}/>
      <Route path='/admin' element={<ScndNavItems data={admin}/>}/>
      <Route path='/finance' element={<ScndNavItems data={finance}/>}/>
      <Route path='/engin' element={<ScndNavItems data={engin}/>}/>
      <Route path='/hr-training' element={<ScndNavItems data={hrTraining}/>}/>
      <Route path='/legal' element={<ScndNavItems data={legal}/>}/>
      <Route path='/hire' element={<HireProps/>}/>
    
    </Routes>
  )
}

export default Navigation