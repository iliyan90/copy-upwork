import React from 'react'

const ShortList = () => {
  return (
    <section className='short-list-container'>
        <div className='short-list-image'>
            <img src="https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/60815cf2ec016474121aa53f_banner%20image%20(1).png" alt="" />
        </div>
        <div className='short-list-content'>
            <h3>Get your shortlist of talent that’s ready to deliver</h3>
            <div className='short-h-line'></div>
            <div className='short-list-desc'>
                <p>Access a pre-screened pool of remote talent, shortlisted for you by specialized recruiters who help you select the best talent based on your business needs.</p>
                <button className='btn-short-list'>Talk to a recruiter</button>
            </div>
        </div>
    </section>
  )
}

export default ShortList