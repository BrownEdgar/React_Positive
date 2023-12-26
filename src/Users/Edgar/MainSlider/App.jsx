import Slider from "react-slick";
import { useState } from 'react';
import './App.scss'



export default function App() {
  const [posts, setposts] = useState([
    { id: 1, title: 'Modern lamp study', image: './photo.jpg', price: 135 },
    { id: 2, title: 'Modern lamp study', image: './photo.jpg', price: 135 },
    { id: 3, title: 'Modern lamp study', image: './photo.jpg', price: 135 },
    { id: 4, title: 'Modern lamp study', image: './photo.jpg', price: 135 },
    { id: 5, title: 'Modern lamp study', image: './photo.jpg', price: 135 },
    { id: 6, title: 'Modern lamp study', image: './photo.jpg', price: 135 },
  ])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,

  };


  return (
    <div>
      <h1>
        Our you have to buy <br />
        <span>Product</span>
      </h1>
      <Slider {...settings}>

        {
          posts.map(elem => {
            return (
              <div className="slider-item" key={elem.id}>
                <img src={elem.image} />
                <div className="content">
                  <h2>{elem.title}</h2>
                  <p>${elem.price}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
