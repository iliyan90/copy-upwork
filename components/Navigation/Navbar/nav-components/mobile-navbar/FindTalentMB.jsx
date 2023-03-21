import React from 'react'
import CatalogMB from '../sub-components/CatalogMB'
import MarketplaceMB from '../sub-components/MarketplaceMB'
import ScoutMB from '../sub-components/ScoutMB'

const FindTalentMB = () => {
  return (
    <div className='nav-list-a mb-nav-list-a'>
        <MarketplaceMB/>
        <CatalogMB/>
        <ScoutMB/>
    </div>
  )
}

export default FindTalentMB