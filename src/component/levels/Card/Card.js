import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import images from './../../../assets/images';
import './card.css';

export default function Card() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='container--card '>
      <Slider {...settings}>
        {
          images.map((image, index) => {
            return (
              <div>
                <div className='card--one' >
                  <div className='card '>
                    <div className='card-top'>
                      <img className='card-top--img' src={image.img} alt={image.title} />
                      <h1>{image.title}</h1>
                    </div>
                    <div className='card-bottom'>
                      <h1>{image.title}</h1>
                      <h3>{image.note}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </Slider >
    </div>
  )
}

