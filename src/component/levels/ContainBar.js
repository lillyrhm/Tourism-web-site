import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import TravelSlider from './travel-slider/TravelSlide';
// import { TravelData } from './Card/TravelData';
import Card from './Card/Card';
import './container-bar.css';
import images from '../../assets/images';

export default function ContainBar({ images }) {
    return (
        <div className='main-container'>
            <SearchBar />
            <h2>The most popular tour/<small>show packages of all tours</small></h2>

            <Card image={images} />

        </div>
    )
}
