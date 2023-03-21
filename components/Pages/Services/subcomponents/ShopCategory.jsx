import React from 'react'
import Slider from 'react-slick'
import "./ShopCategory.css"
const cardsShop = {
  obj1:{
    title:'Logo Design',
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/logo-design.jpg'
  },
  obj2:{
    title:'WordPress',
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/wordpress.jpg'
  },
  obj3:{
    title:'Articles & Blog Posts',
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/articles-blog-posts.jpg'
  },
  obj4:{
    title:'Video Editing',
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/video-editing.jpg'
  },
  obj5:{
    title:'Illustration',
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/illustration.jpg'
  },
  obj6:{
    title:'SEO',
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/seo.jpg'
  },
  obj7:{
    title:'Ecommerce Development',
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/ecommerce-development.jpg'
  },
  obj9:{
    title:'Data Entry',
    image:'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/data-entry.jpg'
  },
  obj10:{
    title:'Architecture & Interior Design',
    image:'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/architecture-interior-design.jpg'
  },
  obj11:{
    title:'Voiceover Recordings',
    image:'https://res.cloudinary.com/upwork-cloud/image/upload/c_fill,h_225,w_300/catalog-ui-assets/taxonomy/category/voice-over.jpg'
  },
}

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "transparent" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

const ShopCategory = () => {

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    className: 'shop-category'
  };

  return (
    <div className='slickBox'>
        <h4>Show by Category</h4>
        <Slider {...settings}>
          {
            Object.values(cardsShop).map((item, index) =>(
              <div className='slickCards'>
                <div className='slick-image'><img src={item.image} alt="" /></div>
                <div><p>{item.title}</p></div>
              </div>
            ))
          }
        </Slider>
    </div>
  )
}

export default ShopCategory