import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import Card from './Card/Card';
import './container-bar.css';
import images from '../../assets/images';
// import CardsPage from './Card/CardsPage';

export default function ContainBar({ image }) {
    return (
        <div className='main-container'>
            <SearchBar />
            <h2>The most popular tour/<small>show packages of all tours</small></h2>
            <Card image={image} />
        </div>
    )
}
