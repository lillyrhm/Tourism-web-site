import React from 'react';
import { SlideData } from './SlideData';
import './slideshow.css';
import circle from '../../assets/image/circle.png';

export default function Slideshow({ slides }) {
    const [current, setCurrent] = React.useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (

        // <section className=' slider'>
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

                        <img src={circle} className='left-arrow' onClick={prevSlide} />
                        <img src={circle} className='right-arrow' onClick={nextSlide} />
                    </div>
                )
            })}
        </div>
        // </section>
    )
}




