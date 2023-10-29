import React from 'react'
import './Cards.scss'
const Cards = (props) => {
    return (
        <div className='res-cards'>
            <img className='img-P' src={props.url} alt='' />
            
            <p className='dis-res'>{props.heading}</p>
            <p className='dis-price'>{props.para}</p>
            <button className='dis-line-2'>
                read more
            </button>
        </div>
    );
}

export default Cards
