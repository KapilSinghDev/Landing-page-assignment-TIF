import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Articles.scss';
// import photos from './Utils.js'
import one from './assets/grilled tomatos.png'
import two from './assets/meal prep.png'
import three from './assets/meal prep 3.png'
import four from './assets/meal prep 4.png'
import five from './assets/grill.png'
import six from './assets/meal prep 2.png'
import Cards from './Cards';
const Articles = () => {
  // Define your settings object once
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // vertical: true,
    // rtl:true,
    // verticalSwiping: true,
  };

  return (
    <>
      <div className='art-main'>
        <h2 className='art-head'>Latest Articles</h2>
        <div className='slide-holder'>
          <Slider {...settings}> 
            <Cards
              url={one}
            />
            <Cards
              url={two}
            />
            <Cards
              url={three}
            />
            <Cards
              url={four}
            />
            <Cards
              url={five}
            />
            <Cards
              url={six}
            />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Articles;
