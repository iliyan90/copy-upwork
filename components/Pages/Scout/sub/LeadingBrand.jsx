import React from 'react'

const leadingImages = [
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/60815bad833a7c432e0a986d_Frame%202162.jpg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/60815bb00e0fd673c74b861b_Frame%202157.jpg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/60815bae1bcdbff6f6e548cd_Frame%202158.jpg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/60815bb0ec0164ba121a9bf4_Frame%202159.jpg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/60815badf394fb93d952a3e0_Frame%202160.jpg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/60815badd78dc3935f360aee_Frame%202161.jpg'
]

const LeadingBrand = () => {
  return (
    <div className='leading-brand'>
        <h3>Leading brands trust Talent Scout</h3>
        <p>From startups to Fortune 500: brands trust our recruiters to help find the best people for them</p>
        <div className='leading-brand-images'>
            {
                leadingImages.map((item, index) =>(
                    <img key={index} src={item} alt="" />
                ))
            }
        </div>
    </div>
  )
}

export default LeadingBrand