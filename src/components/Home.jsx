import React from 'react'
import './Home.scss';
import logo from './assets/logo.png'
import pizza from './assets/pizz.png'
import brd from './assets/border.png'
const Home = () => {
  return (
    <div className='home'>
      <div className='home-left'>
            <div className='top-logo'>
                <img className='truck' src={logo}/>
            </div>
            <div className='text'>
                <p className='home-text'>
                    Discover the  Best food <br />and Drinks
                </p>
            </div>
            <div className='btm-text'>
                <p>
                    Naturally made Healthcare Products for the better care and products of the body
                </p>
            </div>
            <button className='exp-btn'>
                Explore now!
            </button>
      </div>
      <div className='home-right'>
        <img className='piz-pic' src={pizza} />
        <img className='border' src={brd}/>
      </div>
    </div>
  )
}

export default Home
