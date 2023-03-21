import React from 'react'
import ImageParag from '../../../../utils/ImageParag'
import { sellWahtUDo } from '../../../../data/browseAndBuy'
import BrowseBuy from '../../../../utils/BrowseBuy'
const opportunity = {
    title:'Find your next opportunity',
    desc:'Search on Talent Marketplace™ for the hourly or fixed-price work you’re looking for. Submit a proposal, set your rate, and show how great you’ll be. Give a little extra by sharing your unique approach and offering a rapport-building interview.',
    image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/6074025d72cc43936c8c16a8_visual.svg',
    btnName:'Find Job',
}

const findYou ={
    title:'Let the work find you',
    desc:'Does your work stand out? Are your skills in demand? If you’re in development, design, or marketing, you can apply to our fast lane. Our recruiters will assess your hard-earned experience and match you to exclusive opportunities with trusted clients.',
    image:'https://assets-global.website-files.com/603fea6471d9d8559d077603/607403369191facceb7e7889_visual%20(1).svg',
    btnName:'Apply to Join',
}

const ExploreWays = () => {
  return (
    <div className='explore-ways-to-earn'>
        <div className='explore-ways-title'>
            <h3>Explore ways to earn</h3>
        </div>
        <ImageParag item={opportunity}/>
        <BrowseBuy item={sellWahtUDo}/>
        <ImageParag item={findYou}/>
    </div>
  )
}

export default ExploreWays