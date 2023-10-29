import React from 'react'
import './About.scss'
import about  from './assets/about-sec.png'
const About = () => {
  return (
    <div className='abt-main'>
        <div className="abt-left">
            <img className='abt-img' src={about}/>
        </div>
        <div className='abt-txt'>
            <h1 className='abt-heading'>About Us</h1>
            <div className='abt-para'>
                Lorem lpsum is simply dummy text of the printing and typesettting industry .
                Lorem lpsum has been the industry's standard dummy text ever since the 1500s, whne an 
                unknown printer took a gallery of type and scrambled it to make a type specimen book . 
                t has survived not only five centuries.
            </div>
        <button className='abt-btn'>
            Read more
        </button>
        </div>
    </div>
  )
}

export default About
