import React from 'react'

const trending = [
  "Blockchain","Go developer","Node.js","Vue.js","HR consulting","Microsoft Power BI","Instructional design","React.js","Videographers","HTML5 Developers","Ghostwriters",
  "Unity 3d Developers","Business Consultants","Coders","Marketing Consultants","Web Developers","Illustrators","Google AdWords Experts","Digital Marketers","Project Managers","Arduino Programmers","Ruby Developers","AngularJS Developers","Full Stack Developers","Email Marketing Consultants","React Native Developers","Swift Developers","CSS Developers","Google Sketchup Freelancers","Back End Developers","Smartsheet Freelancers","Zoom Video Conferencing Feel"
]

const Trandeing = () => {


  return (
    <div>{trending.map((item)=>(
      <div className=''><h2>{item}</h2></div>
    ))}</div>
  )
}

export default Trandeing