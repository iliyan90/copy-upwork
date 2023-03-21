import React from 'react'
import { useState } from 'react'

const quest = {
    obj1:{
        title:'Why use talent scout?',
        desc:'It`s the quick way to hire highly-qualified talent – and with very little effort on your part.'
    },
    obj2:{
        title:'Who can I meet this way?',
        desc:'People with years of experience in creative, design, development, and marketing: the very best people on our platform, handpicked from hundreds of thousands globally.'
    },
    obj3:{
        title:'How is Talent Scout different from a staffing agency?',
        desc:'First off, we’re fast. Staffing agencies can take weeks and even months to find the right fit, and often mark up costs by 75% (that’s on the low end).'
    },
    obj4:{ 
        title:'Do I have to pay for this service?',
        desc:'When our specialized recruiters share your shortlist with you, they’ll include the hourly rate for each professional – that’s all you’ll pay: there aren’t any extra fees outside these rates.'
    },
    obj5:{
        title:'How can Talent Scout support your business?',
        desc:'When you need to move important work forward, working with Talent Scout makes finding the highly skilled talent you need easy, fast, and cost effective. '
    },
}

const Frequently = () => {

    const [show, setShow] = useState(false);

  return (
    <section className='frequently-container'>
        <h3>Frequently asked questions</h3>
        <div className='frequently-list'>
            {
                Object.values(quest).map((item, index) =>(
                    <div key={index} className='frequently-items'>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))
            }
            <div className='frequently-hidden'>
                <div className={show ? 'fr-ls-show' :'fr-ls-hidden'}>
                    <p>Our specialized recruiters have experience in the legal industry that enables them to do the heavy lifting on your behalf. In as few as two days, they’ll get back to you with a curated list of pre-vetted remote professionals who tick all the right boxes, selected from the global pool of talent on Upwork.</p>
                    <p>You don’t pay until you choose a professional who’s a good match for your project, and you avoid the high fees and markups that are typical for traditional recruiting firms.</p>
                </div>
                <a onClick={()=>{setShow(!show)}}>{show ? 'View less' :'Read more'}</a>
            </div>
        </div>
    </section>
  )
}

export default Frequently