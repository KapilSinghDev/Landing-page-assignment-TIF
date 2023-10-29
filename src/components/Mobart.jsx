import React from 'react';
import './Mobart.scss';
import Slider from 'react-slick';
import Cards from './Cards.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//  this is the articles section for mobiles
import one from './assets/grilled tomatos.png'
import two from './assets/meal prep.png'
import three from './assets/meal prep 3.png'
import four from './assets/meal prep 4.png'
import five from './assets/grill.png'
import six from './assets/meal prep 2.png'
const Mobart = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        // rtl:true,
        verticalSwiping: true,
      };
    return (
    <>
    
      <div className='art-main-mob'>
        <h2 className='art-head-mob'>Latest Articles</h2>
        <div className='slide-holder-mob'>
          <Slider {...settings}> 
          <Cards
              url={one}
              heading={"Grilled Tomatos at Home"}
            />
            <Cards
              url={two}
              heading={"Snacks for Travel"}
            />
            <Cards
              url={three}
              heading={"Post-workout Recipies"}
            />
            <Cards
              url={four}
              heading={"How to Grill corn "}
            />
            <Cards
              url={five}
              heading={"Crunch Wrap supreme"}
            />
            <Cards
              url={six}
              heaing = {"Brocolli cheese soup"}
            />
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Mobart
