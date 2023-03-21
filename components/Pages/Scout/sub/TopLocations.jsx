import React, {useState} from 'react'

const locationList = ['Greenville','Los Angeles','Austin','Memphis','Miami','Orlando','Phoenix','San Diego','Augusta','Charleston','Colorado Spring','Columbus','Des Moines','Fort Worth','Greensboro','Kansas City','Lousville','Nashvile','Omaha','Raleigh','Savannah','Seattle','Tammpa','Washington DC','Atlanta','Chicago','Dallas','Denver','Dover','Houston','Jackonville','New Yourk','Sacramento','Arlington',];
const indeustriesList = ['Engineering','Finance','Legal','Media','Technology'];

const TopLocations = () => {
    const [toggle, setToggle] = useState({
        isActive: 'Industries',
        menu: ['Top Locations','Industries']
    })
    console.log(toggle);
    const toggleActive = (index) =>{
        setToggle({...toggle, isActive: toggle.menu[index]})
    }

    const toggleCollor = (index) =>{
        if(toggle.menu[index] === toggle.isActive){
            return 'title-skills active'
        }else{
            return 'title-skills unactive'
        }
    }
  return (
    <div className='locations-industries'>
        <div className='locations-industries-titles'>
            {
                toggle.menu.map((item, index) =>(
                    <div key={index} onClick={() => {toggleActive(index)}}
                    className={toggleCollor(index)}
                    >
                        <h3>{item}</h3>
                    </div>
                    
                ))
            }
        </div>
        <div className='category'>
            {toggle.isActive === 'Top Locations' &&
                <ul className='locations-industries-list'>
                    {locationList.map((item,ind) =>(
                        <li key={ind}><p>{item}</p></li>
                    ))}
                </ul>
            }
            {toggle.isActive === 'Industries' ? 
                <ul className='locations-industries-list'>
                {indeustriesList.map((item,ind) =>(
                    <li key={ind}><p>{item}</p></li>
                ))}
                </ul>
            : null}
        </div>
    </div>
  )
}

export default TopLocations