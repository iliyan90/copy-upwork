import React from 'react'
import './Header.css'

import TopSkills from './HeadersComponents/TopSkills/TopSkills'
import Container from './HeadersComponents/Container'
import Container1 from './HeadersComponents/Container1'
import Container2 from './HeadersComponents/Container2'
import Container3 from './HeadersComponents/Container3'
import Container4 from './HeadersComponents/Container4'
import Container5 from './HeadersComponents/Container5'
import Container6 from './HeadersComponents/Container6'

const Header = () => {
  return (
    <section className='header-section'>
        <Container/>
        <Container1/>
        <Container2/>
        <Container3/>
        <Container4/>
        <Container5/>
        <Container6/>
        <TopSkills/>
    </section>
  )
}

export default Header