import React from 'react';
import right from '../../../assets/image/right-arrow - Copy.png';
import left from '../../../assets/image/left-arrow.png';
import './travel-slide.css';
import { TravelData } from './TravelData';
import clock from '../../../assets/image/clock.png'

export default function Card({ slides }) {
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
        <section className='cards'>
            <div className='cards-section'>

                {TravelData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'page--slider slide-page active' : 'page--slider slide-page'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='natural' className='image-card ' />
                            )}

                            <br />
                            <p className='notes--one'> {slide.country} </p>
                            <p className='notes--two'> {slide.price} </p>
                            <img className='notes--img' src={clock} />
                            <p className='notes--three'> {slide.time} </p>
                        </div>
                    )
                })}
            </div>

            <img src={left} className='left-arrows' onClick={prevSlide} />
            <img src={right} className='right-arrows' onClick={nextSlide} />

        
        </section>
    )
}




