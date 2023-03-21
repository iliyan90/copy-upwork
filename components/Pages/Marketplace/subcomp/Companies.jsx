import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const images = [
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/6080bb0ff0490361a94fc2b4_Microsoft.svg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/6080bb0ff04903bb884fc2b0_Airbnb.svg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/6080bb0ff0490343134fc2b5_logo-automatic.svg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/6080bb0ff0490327424fc2b2_Bissell.svg',
    'https://assets-global.website-files.com/5f030e7bdf54ce3c5daf3964/60c6edf1ac258c018f8dc1dd_NASDAQ_Logo.svg'];

const cardsArticle = [
    "How Flexible Talent Help a Fast-Paced Company Improve Productivity",
    "Flexera Engineers a Way to Deliver Work 2x Faster and Keeps Security at the Forefront",
    "Singularity University Shows What Working Faster (and Doing it Right) Looks Like"];

const Companies = () => {
  return (
    <div className='companies-container'>
        <div className='comp-logo'>
            <p>Trusted by</p>
            {images.map((item, index) =>(
                <img src={item} alt={index} key={index} srcset="" />
            ))}
        </div>
        <div className='comp-titles'>
            <h3>You`re in god company</h3>
            <p>Millions of companies, big and small, use Upwork to get great work done. Join them today.</p>
        </div>
        <article className='articles'>
        {
            cardsArticle.map((item, index) =>(
                <div key={index} className='article-item'>
                    <p className='art-title'>{item}</p>
                    <div className='art-link'>
                        <a href="">Read article</a>
                        <HiArrowNarrowRight/>
                    </div>
                </div>        
            ))
        }
        </article>
    </div>
  )
}

export default Companies