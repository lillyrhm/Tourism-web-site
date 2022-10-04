import React from 'react';
import Card from './Card/Card';
import './container-bar.css';
import SearchBar from './SearchBar/SearchBar';

export default function ContainBar() {
    return (
        <div className='main-container'>
            <SearchBar />
            <h2>The most popular tour/<small>show packages of all tours</small></h2>
            <Card/>
        </div>
    )
}
