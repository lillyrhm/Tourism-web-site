import React from "react";
import { ImSearch, ImMenu } from 'react-icons/im';
import travelTour from '../../assets/image/travel-tour-logo.png';
import './nav.css';
import NavbarItem from "./NavbarItem";



export default function Navbar() {
    return (
        <>
            <div className="nav--container">
                <img src={travelTour} alt="travel-tour-logo" />

                <NavbarItem />

                <div>
                    <button className="search-icon">
                        <ImSearch />
                    </button>
                    <button className="nav-button">
                        <ImMenu />
                    </button>
                </div>
            </div>
        </>
    )
}