import React from 'react'
import TrustedBy from '../../../../utils/TrustedBy'
const Approval = () => {
  return (
    <div className='approval-container'>
        <div className='approval-title'><h3>The seal of approval</h3></div>
        <div className='approval-cont'>
            <div className='approval-desc'>
                <h4>You’ll have plenty of help choosing the right person for the job. And no matter who you’re hiring you can:</h4>
            </div>
            <div className='approval-list'>
                <ul>
                    <li><p>Browse similar projects they’ve worked on</p></li>
                    <li><p>Direct-access to proven talent without unnecessary layers</p></li>
                    <li><p>Check their portfolio</p></li>
                    <li><p>Check qualifications</p></li>
                    <li><p>Run a chat or video interview</p></li>
                </ul>
            </div>
        </div>
        <TrustedBy/>
    </div>
  )
}

export default Approval