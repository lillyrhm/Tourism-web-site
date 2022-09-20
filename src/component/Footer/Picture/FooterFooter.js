import React from 'react';
import './footer-image.css';
import pic from '../../../assets/image/shutterstock_195507533-700x660.jpg'
export default function FooterImage() {
    return (
        <>
            <h3>Categories of tours</h3>
            <div className='container-image--footer'>
                <img className='image-item' src={pic} alt='travel tour' />
                <img className='image-item' src={pic} alt='travel tour' />
                <img className='image-item' src={pic} alt='travel tour' />
                <img className='image-item' src={pic} alt='travel tour' />
                <img className='image-item' src={pic} alt='travel tour' />
                <img className='image-item' src={pic} alt='travel tour' />
            </div >
        </>
    )
}


