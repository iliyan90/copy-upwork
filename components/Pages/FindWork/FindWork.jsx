import React, { useEffect } from 'react'
import { useState } from 'react'
import './FindWork.css'
import {AiFillPlayCircle, AiOutlineSearch} from 'react-icons/ai'
import {dev, design, finance, admin, engin,legal,sales,writing} from '../../../data/findWorkData'
import AnyCategories from './sub/AnyCategories'
import Development from './sub/Development'
import CategoryList from './sub/CategoryList'
import {MdKeyboardArrowDown} from 'react-icons/md'

const id =['any','dev','des','fins','admin','engin','legal','sales','writing'];
const label =[ 
            'Any type of work',
            'Development & IT',
            'Design & Creative',
            'Finance & Accounting',
            'Admin & Customer Support',
            'Engineering & Architecture',
            'Legal',
            'Sales & Marketing',
            'Writing & Translation'
          ];

const alphabet = ['0-9', 'A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','V','W','X','Z'];

const FindWork = () => {
  const [visible, setVsible] = useState(false)
  const [slLabel, setSlLabel] = useState('Any type of work');
  const [category, setCategory] = useState({
    isActive: 'Any',
    menu:['Any','Development','Design','Finance','Admin','Engineering','Legal','Sales','Writing'
    ]
  })

  const categoryActive  = (index)=>{
      setCategory({...category, isActive: category.menu[index]})
  }

  const any = dev.concat(design,finance,admin,engin,legal,sales,writing);

  const isNumber = (num) =>{
    if(num >= 0 && num <= 9){
      return true
    }
    else{
      return false
    }
  }


    const classVisible = () =>{
      if(visible === true){
        return 'input-labels-mb'
      }else{
        return 'input-labels-mb  input-label-mb-unctive'
      }
    }

  return (
    <section className='find-work-container'>
      <div className='find-work-content'>
        <h3>Find the best freelance jobs</h3>
        <p>Browse jobs posted on Upwork, or jump right in and create a free profile to find the work that you love to do.</p>
        <div className='btn-work-group'>
          <button>Find Work</button>
          <a href=""><AiFillPlayCircle/> Watch a demo</a>
        </div>
        <span>Find Freelancer Jobs /</span>
      </div>

      <div className='find-work-list'>
        <div>
          <h3>Type of Work</h3>
            <div className='input-labels'>
              {
                id.map((item, index) =>(
                  <div key={index} className='input-radio'>
                    <input type="radio" name='categ' id={item} value='any' onChange={()=> categoryActive(index)}/>
                    <label htmlFor="any">{label[index]}</label>
                  </div>    
                ))
              }
            </div>
            <div onClick={() => setVsible(!visible)} className='input-select-mb'>{slLabel}<MdKeyboardArrowDown size={25}/></div>
            <div className={classVisible()}>
              <div>
                <div onClick={() => setVsible(!visible)} className='input-labels-mb-close'>X</div>
                {
                  id.map((item, index)=>(
                    <p key={index}
                      onClick={() => {categoryActive(index); setSlLabel(label[index]); setVsible(!visible)}}
                    >{label[index]}</p>
                  ))  
                }
              </div>
            </div>
        </div>
        <div className='find-work-menu'>
          <h4>Explore remote jobs</h4>
          <input type="text" placeholder='Try skills like "PHP" or "JavaScript"'/>
          <div className='find-work-search-icon'><AiOutlineSearch/></div>

          {/* List of Any type appear  */}
          <AnyCategories
            category={category}
            any={any}
            alphabet={alphabet}
            isNumber={isNumber}
          />
          
          {/* List of Development & IT appear */}
          <Development
            category={category}
            dev={dev}
            alphabet={alphabet}
            isNumber={isNumber}
          />
          {/*Other list to appear */}
          { category.isActive === 'Design' ? <CategoryList list={design}/> : null}
          { category.isActive === 'Finance' ? <CategoryList list={finance}/> : null}
          { category.isActive === 'Admin' ? <CategoryList list={admin}/> : null}
          { category.isActive === 'Engineering' ? <CategoryList list={engin}/> : null}
          { category.isActive === 'Legal' ? <CategoryList list={legal}/> : null}
          { category.isActive === 'Sales' ? <CategoryList list={sales}/> : null}
          { category.isActive === 'Writing' ? <CategoryList list={writing}/> : null}
        </div>
      </div>
    </section>
  )
}

export default FindWork