import React from 'react'
import './Contact.scss'
import logo from './assets/logo.png';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className='contact'>
        <div className='con-logo'>
            <img className='logo-img' src={logo} alt={''}/>
        </div>
        <div className='con-one'>
                <h3 className='cont'>Contact Us</h3>
                <p>
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                </p>
                <p>
                    example2020@gmail.com
                </p>
                <p>
                (904) 443-0343
                </p>
            
        </div>
        <div className='con-two'>
            <h3 className='cont'>More</h3>
            <p>About Us</p>
            <p>Career</p>
            <p>Products</p>
            <p>Contact Us</p>
        </div>
        <div className='con-three'>
            <h3 className='cont'>Social Links</h3>
            <div className='cont-icons'>
                <FaInstagram className='ic'/>
                <FaTwitter className='ic'/>
                <FaFacebook className='ic'/>
            </div>
            <div className='thr-btm'>
                © 2022 Food Truck Example
            </div>
        </div>
    </div>
  )
}

export default Contact
