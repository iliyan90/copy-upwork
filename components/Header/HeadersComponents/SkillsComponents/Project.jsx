import React from 'react'

const projects = [
    "Resume Writing Services","SEO Services","Translation Services","Transcription Services","Virtual Assistant Services","Email Marketing Services","Web Design Services","Proofreading Services","Business Consulting Services","Logo Design Services","Architecture/Interior Design Serv","Branding Services","Social Media Management Servic","Video Editing Services","Lead Generation Services","Content Marketing Services","Survey Services","Landscape Design Services","Photoshop Services","Mobile App Development Servic","Data Entry Services","Building Information Modeling Se","Podcast Editing Services","Wellness Services","HR Consulting Services","Video Marketing Services","WordPress Development Service","Ecommerce Services","Influencer Marketing Services","Public Relations Services","QA Services","Podcast Marketing Services"
]

const Project = () => {
  return (
    <div>{projects.map((item)=>(
        <div><h2>{item}</h2></div>
    ))}</div>
  )
}

export default Project