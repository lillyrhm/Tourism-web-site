import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import '../travel-slider/travel-slide.css';
import images from './../../../assets/images';
import './card.css';

export default function Card() {
    const [width, SetWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        SetWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -width, right: -1000 }}
                    className='inner-carousel'>
                    {images.map((image) => {
                        return (
                            <motion.div className='slider-card'>
                                
                                <h1>
                                <img src={image.img} alt={images.length} />
                                {image.title}
                                <p>{image.note}</p>
                                </h1>
                             
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </>
    )
}

