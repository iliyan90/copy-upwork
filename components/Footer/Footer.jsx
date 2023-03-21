import React from 'react'
import "./Footer.css"
import FooterList from './FooterList'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle, AiFillYoutube, AiOutlineInstagram,AiOutlineApple, AiOutlineAndroid} from 'react-icons/ai'
import {FaRegCopyright} from 'react-icons/fa'
import {itemsTalent, itemsResources, itemsCompany, itemsClients} from '../../data/dataFooter'

// icons style
const style = {border: "1px solid white", borderRadius:'50px', padding:'5px', color:'white', marginRight:'10px'}

const Footer = () => {
  return (
    <div className='list-content'>
      <div className='list-bar'>
        <FooterList title='For Clients' items={itemsClients}/>
        <FooterList title='For Talent' items={itemsTalent}/>
        <FooterList title='Resources' items={itemsResources}/>
        <FooterList title='Company' items={itemsCompany}/>
      </div>
      <div className='list-icons'>
        <div className='list-icon-fr' >
          <div>
            <h3>Follow Us</h3>
          </div>
          <div className='list-icon-sc'>
            <FaFacebookF style={style}/>
            <AiFillLinkedin style={style}/>
            <AiFillTwitterCircle style={style}/>
            <AiFillYoutube style={style}/>
            <AiOutlineInstagram style={style}/>
          </div>
        </div>
        <div className='list-icon-fr'>
          <div>
            <h3>Mobile app</h3>
          </div>
          <div className='list-icon-sc'>
            <AiOutlineApple style={style}/>
            <AiOutlineAndroid style={style}/>
          </div>
        </div>
      </div>
      <div className='hl'></div>
      <div className='copyright'>
        <div className='upworkGlobal'>
          <FaRegCopyright style={{color:'white'}}/>
          <p>2015 - 2022 Upwork Global Inc.</p>
        </div>
        <div>
          <ul className='copy-ul'>
            <li><a href="">Term and Service</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">CA Notice at Collection</a></li>
            <li><a href="">Cookie Settings</a></li>
            <li><a href="">Accessability</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer