import React from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { BsClockHistory } from 'react-icons/bs';
import '../travel-slider/travel-slide.css';
import { TravelData } from './TravelData';
import { TravelDataOne } from './TravelDataOne';
import { TravelDataTwo } from './TravelDataTwo';
import Card from './Card';

export default function CardsPage({ slides }) {
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

        <section>
            <Card />





            {/* <div className='cards-section'>

                {TravelData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'page--slider slide-page active' : 'page--slider slide-page'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='natural' className='image-card ' />
                            )}
                            <p className='notes--one'> {slide.country} </p>
                            <p className='notes--two'> {slide.price} </p>
                            <BsClockHistory className='notes--img' />
                            <p className='notes--three'> {slide.time} </p>
                        </div>
                    )
                })}
            </div>

            <div className='cards-section'>

                {TravelDataOne.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'page--slider slide-page active' : 'page--slider slide-page'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='natural' className='image-card ' />
                            )}

                            <p className='notes--one'> {slide.country} </p>
                            <p className='notes--two'> {slide.price} </p>
                            <BsClockHistory className='notes--img' />
                            <p className='notes--three'> {slide.time} </p>
                        </div>
                    )
                })}
            </div>

            <div className='cards-section'>

                {TravelDataTwo.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'page--slider slide-page active' : 'page--slider slide-page'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='natural' className='image-card ' />
                            )}

                            <p className='notes--one'> {slide.country} </p>
                            <p className='notes--two'> {slide.price} </p>
                            <BsClockHistory className='notes--img' />
                            <p className='notes--three'> {slide.time} </p>
                        </div>
                    )
                })}
            </div>

            <div className='cards-section'>

                {TravelDataTwo.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'page--slider slide-page active' : 'page--slider slide-page'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='natural' className='image-card ' />
                            )}

                            <p className='notes--one'> {slide.country} </p>
                            <p className='notes--two'> {slide.price} </p>
                            <BsClockHistory className='notes--img' />
                            <p className='notes--three'> {slide.time} </p>
                        </div>
                    )
                })}
            </div> */}

            {/* <BiChevronLeftCircle className='left-arrows' onClick={prevSlide} />
            <BiChevronRightCircle className='right-arrows' onClick={nextSlide} /> */}


        </section>
    )
}




