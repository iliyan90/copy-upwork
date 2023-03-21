import React from 'react'

const HowPaymentWork = () => {
  return (
    <div className='payment-work'>
        <div className='payment-work-desc-mb'>
            <h3>How payment work</h3>
        </div>
        <div className='payment-work-image'>
            <img src="https://assets-global.website-files.com/603fea6471d9d8559d077603/609531536237e4235b6bc7cb_5ef62de4a589e2e0ab51f674_image.jpg" alt="" />
        </div>
        <div className='payment-work-desc'>
            <h3>How payments work</h3>
            <p>Whether you’re paid hourly or on a fixed-price contract, all the work you complete comes with payment protection.</p>
            <div>
                <span>All in one place</span>
                <p>Invoice clients and track your earnings on Upwork for a simple and streamlined process.</p>
            </div>
            <div>
                <span>Choose how you get paid</span>
                <p>Use what works best for you—including direct deposit, PayPal, Payoneer, wire transfer, and more.</p>
            </div>
            <div>
                <span>No fees until you complete your work</span>
                <p>Our service fees are taken as a percentage of your earnings. We charge you based on lifetime earnings with each client:</p>
                <ul>
                    <li>20% for the first $500 you bill your client</li>
                    <li>10% for total billings between $500.01 and $10,000</li>
                    <li>5% for total billings over $10,000</li>
                </ul>
            </div>
            <a>Learn more about service fees.</a>
        </div>
    </div>
  )
}

export default HowPaymentWork