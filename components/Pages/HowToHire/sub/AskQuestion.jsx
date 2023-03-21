import React from 'react'

const AskQuestion = () => {
  return (
    <section className='ask-question'>
        <div className='ask-question-title'>
            <h3>Frequently asked questions</h3>
        </div>
        <div className='ask-question-list'>
            <div>
                <h4>What projects can I do on Upwork?</h4>
                <p>Anything people generally do on a computer. Popular tasks are web, mobile and software development, design work and copywriting, but you can also find lawyers, accountants and more.</p>
            </div>
            <div>
                <h4>How does Upwork make money?</h4>
                <p>We charge freelancers and agencies a 20%, 10%, or 5% service fee depending on the total amount they’ve billed with a client.</p>
            </div>
            <div>
                <h4>What’s the top rated program?</h4>
                <p>It’s a badge of honor for talent who consistently do great work.</p>
            </div>
        </div>
    </section>
  )
}

export default AskQuestion