import React from 'react';
import { BsStopCircle } from "react-icons/bs";
import { SlideData } from './SlideData';
import './slideshow.css';

export default function Slideshow({ slides }) {
    const [current, setCurrent] = React.useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    let slideTime = setInterval(nextSlide, 10000)
    clearInterval(slideTime);
    
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (

        <section className=' slider'>
            <div className='inner-carousel'>

                {SlideData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slider slide active' : 'slider slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='natural' className='image ' />
                            )}
                            <p className='note--one'>{slide.title}</p>
                            <p className='note--two'>{slide.note}</p>
                            <p className='note--three'>{slide.city}</p>
                            <button className='button-slider'>More...</button>

                            <BsStopCircle className='left-arrow' onClick={prevSlide} />
                            <BsStopCircle className='right-arrow' onClick={nextSlide} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}




