import React from 'react'

const usaskills =[
    "Accountants in US","CAD Designer in US","Curriculum Developer in US","Ebook Designers in US","Fashion Designers in US","Ghostwriters in US","Google Adwords Experts in US","Graphic Designers in US","JavaScript Developers in US","Product Developers in US","Shopify Developers in US","SquareSpace Developers in US","Tax Preparers in US","Technical Support Agents in US","Virtual Assistants in US","Web Designers in US","WooCommerce Developers in U","WordPress Developers in US","Writers in US","Zoho CRM Specialists in US","Accountants Near North Carolina","Adobe Photoshop Experts Near S","Android Developers Near San Fr","Bookkeepers Near Los Angeles, ","Business Coaches Near Atlanta","Fashion Designers Near Los An","Grant Writers Near Chicago, IL","Graphic Designers Near New York","Logo Designers Near Pittsburgh, ","Mechanical Engineers Near Seattl","Music Producers Near Chicago, IL","Photo Editors Near Los Angeles, C","Photographers Near Brooklyn","Product Photographers Near Sea","Resume Writers Near Chicago, IL","SEO Experts Near New York, NY","Social Media Managers Near Lo","Videographers Near Dallas, TX","Virtual Assistants Near Charlott","Web Designers Near San Francisc"
]

const UsaSkills = () => {
  return (
    <div>{usaskills.map((item) =>(
        <div><h2>{item}</h2></div>
    ))}</div>
  )
}

export default UsaSkills