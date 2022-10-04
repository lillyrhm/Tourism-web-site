import React from 'react';
import { BsRecordCircle } from 'react-icons/bs';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import { SlideData } from './SlideData';
import './slideshow.css';

export default function Slideshow({ slides }) {
    const [current, setCurrent] = React.useState(0);

    const goToPrevious = () => {
        const firstIndex = current === 0;
        const newIndex = firstIndex ? current.length - 1 : current - 1;
        setCurrent(newIndex)
    }

    const goToNext = () => {
        const lastIndex = current === slides.length - 1;
        const newIndex = lastIndex ? 0 : current + 1
        setCurrent(newIndex);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const goToSlide = (index) => {
        setCurrent(index);
    }

    return (
        <section className=' slider--banner'>
            <div className='slider'>
                {SlideData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'image--banner slider slide--top-active' : ' image--banner slider slide--top'}
                            key={index}>
                            <img className="image--banner" src={slide.url} alt='all image of slider' />
                        </div>
                    )
                })}

                <div className='boult--div'>
                    {SlideData.map((slide, index) => {
                        return (
                            <div >
                                <h1 className='boult' id={slide.id} onClick={() => goToSlide(index)}><BsRecordCircle /></h1>
                            </div>
                        )
                    })}
                </div>
                <button onClick={goToPrevious} className='left-arrow'> <IoMdArrowDropleft /></button>
                <button onClick={goToNext} className='right-arrow'> <IoMdArrowDropright /></button>
            </div>
        </section >
    )
}