import React from "react";
import menu from '../../assets/image/menu.png';
import search from '../../assets/image/search.png';
import travelTour from '../../assets/image/travel-tour-logo.png';
import './nav.css';
import NavbarItem from "./NavbarItem";



export default function Navbar() {
    return (
        <>
            <div className="nav--container">
                <img src={travelTour} alt="travel-tour-logo" />

                <NavbarItem />

                <div className="nav--item">
                    <img className='search-icon' src={search} alt="travel-tour-logo" />
                    <button className="nav-button">
                        <img className='menu-icon' src={menu} alt="travel-tour-logo" />
                    </button>
                </div>
            </div>
        </>
    )
}