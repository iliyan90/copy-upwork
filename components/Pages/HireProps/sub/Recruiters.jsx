import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
const Recruiters = () => {
  return (
    <section className='recruiters-sector'>
      <div className='recruiters-title'>
        <h3>Let our recruiters find you vetted
pros for larger projects</h3>
        <div className='recruiters-buttons'>
          <button>Development & IT <BsArrowRightShort size={15}/></button>
          <button>Design & Creative <BsArrowRightShort size={15}/></button>
          <button>Sales & Marketing <BsArrowRightShort size={15}/></button>
        </div>
      </div>
      <div className='recruiters-image'>
        <img src="https://www.upwork.com/static/assets/Arges/img/desktop.31acc2d.png" alt="" />
      </div>
    </section>
  )
}

export default Recruiters