import React from 'react'
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import './FrequentlyAsk.css'

function Resize() {
  const [lenght, setLenght] = useState(0);
  
  useLayoutEffect(() => {
    function handleResize(){
      setLenght(window.innerWidth);
      console.log(lenght);
    }
    window.addEventListener('size', handleResize);
    handleResize();
    return ()=> window.removeEventListener('size', handleResize)
  });

  return lenght;
} 

const FrequentlyAsk = ({question}) => {
  const size = Resize();
  const [show, setShow] = useState({
    isActive: null,
    text:[0,1,2,3,4,5,6,7,8,9,10]
  });

  const active = (index) =>{
    if(index === show.isActive){
      setShow({...show, isActive: null})
    }else{
      setShow({...show, isActive: show.text[index]})
    }
  }
  
  const activeClass = (index) =>{
    if(show.isActive === show.text[index]){
      return 'show-pargr pargr-active'
    }else{
      return 'show-pargr pargr-unactive'
    }
  }

  const mobileActiveClass = (index) =>{
    if(show.isActive === show.text[index]){
      return 'mobile-show-prg prg-active'
    }else{
      return 'mobile-show-prg prg-unactive'
    }
  }

  let str = '';
  return (
    <section className='frequently-ask-question'>
      <div className='frequntly-ask-title'>
        <h3>Frequently asked question</h3>
      </div>
      <div className='frequently-answer'>
          {question.map((item, index) =>(
            <div key={index} className='answer-items'>
              <h4>{item.quest}</h4>
              <div style={{display: 'none'}}>
                {str = item.answer}
              </div>
              <p className={activeClass(index)}>{item.answer}</p>
              {
                str.length < 240 ? null :
                <a onClick={()=> {active(index)}} >{ show.isActive === index ? 'Veiw less' :"Read more"}</a> 
              }
              <div className='mobile-question'>
                  <p className={mobileActiveClass(index)}>{item.answer}</p>
                  <a onClick={()=> {active(index)}} >{ show.isActive === index ? 'Veiw less' :"Read more"}</a>
              </div>
              </div>
              
          ))}
      </div>
    </section>
  )
}

export default FrequentlyAsk