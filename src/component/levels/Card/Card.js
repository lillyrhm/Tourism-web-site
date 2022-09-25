import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import images from './../../../assets/images';
import './card.css';

export default function Card({ image }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const firstIndex = currentIndex === 0;
        const newIndex = firstIndex ? currentIndex.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const lastIndex = currentIndex === image.length - 1;
        const newIndex = lastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }


    // if (!Array.isArray(image) || image.length <= 0) {
    //     console.log(currentIndex)
    //     // return image;
    // }

    // setInterval(() => {
    //     goToNext();
    // }, 5000);

    // console.log(currentIndex)
    // clearInterval();

    return (
        <section className='container--card'>
            <div className='container--img'>
                {
                    images.map((image, index) => {
                        return (
                            <div
                                key={image.id}
                                className={index === currentIndex ? ' slider-cards slide--card-active' : ' slider-cards  slide--card'}
                            // className={index === currentIndex ? ' slider-cards slide--card-active' : 'slider-cards slide--card'}
                            >
                                <img src={image.img} alt='card image' />
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}

