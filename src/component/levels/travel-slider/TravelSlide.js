import React from 'react';
import Card from './Card';
import './travel-slide.css';
import { TravelData } from './TravelData';

export default function TravelSlider({ slides }) {
   
    return (
        <section className=' cards page--slider'>
            <Card slides={TravelData} />
        </section >
    )
}




