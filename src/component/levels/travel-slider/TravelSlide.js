import React from 'react';
import Card from './Card';
import './travel-slide.css';
import { TravelData } from './TravelData';
import { TravelDataOne } from './TravelDataOne';
import { TravelDataTwo } from './TravelDataTwo';

export default function TravelSlider({ slides }) {

    return (
        <section className='card page--slider'>
            <Card slides={TravelData} slidesOne={TravelDataOne} slidesTwo={TravelDataTwo} />
        </section >
    )
}
