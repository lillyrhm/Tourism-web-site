import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import TravelSlider from './travel-slider/TravelSlide';
import { TravelData } from './travel-slider/TravelData';
import './container-bar.css';

export default function ContainBar() {
    return (
        <div className='main-container'>
            <SearchBar />
            <h2>The most popular tour/<small>show packages of all tours</small></h2>

            <TravelSlider slides={TravelData} />

        </div>
    )
}
