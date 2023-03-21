import React from 'react'

const SafeWithUs = () => {
  return (
    <section className='safe-with-us'>
        <div className='safe-with-us-image'>
            <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/609641fd91abfa8dc06ce025_3_%402x-p-800.jpeg" alt="" />
        </div>
        <div className='safe-with-us-cont'>
            <div className='safe-with-us-card'>
              <h3>You’re safe with us</h3>
              <h4>You get what you pay for. And we can prove it.</h4>
              <p><span>On hourly contracts</span>, we count keystrokes and take random screenshots of your freelancer’s screen so you can see they’re putting in the time.</p>
              <p><span>On fixed price contracts</span>, you agree on milestones and only pay up when those milestones are hit.</p>
            </div>
            <div className='safe-with-us-card'>
              <h3>All in one place</h3>
              <h4>Once you sign in you’ll get your own online space to manage your project.</h4>
              <p>Use it to securely send and receive files, give real-time feedback and make payments. And if you’re out and about a lot, you’ll want to download the app too.</p>
            </div>
        </div>
    </section>
  )
}

export default SafeWithUs