import React from 'react'
import './Scout.css'
import DemandTalent from './sub/DemandTalent/DemandTalent'
import Frequently from './sub/Frequently'
import HowTalentScout from './sub/HowTalentScout'
import LeadingBrand from './sub/LeadingBrand'
import Partner from './sub/Partner'
import ScoutRecruiters from './sub/ScoutRecruiters'
import ScreenedTalent from './sub/ScreenedTalent'
import ShortList from './sub/ShortList'
import TopLocations from './sub/TopLocations'
const Scout = () => {
  return (
    <div className='scout-container'>
      <Partner/>
      <HowTalentScout/>
      <ScoutRecruiters/>
      <LeadingBrand/>
      <ScreenedTalent/>
      <DemandTalent/>
      <TopLocations/>
      <Frequently/>
      <ShortList/>
    </div>
  )
}

export default Scout