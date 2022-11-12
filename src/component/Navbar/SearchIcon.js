import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import './search-icon.css';

export default function SearchIcon() {
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = () => {
        return setIsSearching(!isSearching);
    }

    console.log("is search :", isSearching)

    return (
        <>
            <div className={isSearching ? 'search-container active ' : 'search-container'}>
                {isSearching ? (
                    <div>
                        <button
                            className="search-button-active"
                            onClick={handleSearch}>
                            <ImSearch className="search-icon-active" />
                        </button>
                        <input className="input"
                            type='search'
                            placeholder='search...' />
                    </div>
                ) : (
                    <button className="search-button" onClick={handleSearch}>
                        <ImSearch className="search-icon" />
                    </button>
                )
                }
            </div>
        </>
    )
}
