import React from 'react'
import { useState } from 'react'

const list = [
    'Upwork South Africa Reviews',
    'Upwork Australia Reviews',
    'Upwork India Reviews',
    'Upwork Singapore Reviews',
    'Upwork Pakistan Reviews',
    'Upwork Great Britain Reviews',
    'Upwork Philippines Reviews',
    'Upwork New Zealand Reviews',
    'Upwork Nigeria Reviews',
    'Upwork Canada Reviews',
    'Upwork Israel Reviews',
    'Upwork United States Reviews',
    'Upwork United Arab Emirates Reviews'
]

const CountList = () =>(
    
        <li>{list[1]}</li>
    
)

let listToShow = [];
const Explore = () => {
    const [show, setShow] = useState(3);
    const [label, setLabel] = useState('Show More');
    const [exploreList, setExploreList] = useState('explore-list-mb')
    const mbList = () =>{
        for (let i = 0; i < list.length; i++) {
            if( i < show){
                setTimeout(
                    listToShow[i] = list[i],300
                )
            }
        }
    }
    mbList()
  return (
    <section className='explore-container'>
        <div>
            <h3>Explore worldwide reviews</h3>
        </div>
        <div className='explore-list'>
            <ul>
            {list.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
        <div className={exploreList}>
            <ul>
                {listToShow.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
                <a onClick={() => {
                    setShow(14);
                    setExploreList('explore-list-collapsed'); 
                    setLabel(null)}}>{label}</a>
            </ul>
        </div>
        <div>
            <h3>See what people say about other ways to work</h3>
        </div>
        <div className='read-reviews-cards'>
            <div className='read-card'>
                <h3>Talent Marketplace</h3>
                <a href="#">Read reviews</a>
            </div>
            <div className='read-card'>
                <h3>Enterprice Suite</h3>
                <a href="#">Read reviews</a>
            </div>
            <div className='read-card'>
                <h3>Project Catalog</h3>
                <a href="#">Read reviews</a>
            </div>
            
        </div>
    </section>
  )
}

export default Explore