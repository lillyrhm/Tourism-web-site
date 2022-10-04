import React, { useState, useEffect } from "react";
import { ImMenu, ImSearch } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import travelTour from '../../assets/image/travel-tour-logo.png';
import { CLOSE_NAVBAR, OPEN_NAVBAR } from "./../../store/Action";
import './nav.css';
import NavbarItem from "./NavbarItem";
import SearchIcon from "./SearchIcon";

export default function Navbar() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const handleNavbar = () => {
        dispatch({ type: state.isShowNavbar ? CLOSE_NAVBAR : OPEN_NAVBAR })
        console.log('navbar is :')
    }

    useEffect(() => {
        console.log("isOpen: ", state.isShowNavbar)
    }, [state.isShowNavbar]);

    return (
        <>
            <div className="nav--container">
                <img src={travelTour} alt="travel-tour-logo" />
                <NavbarItem />
                <div>
                    <SearchIcon />
                    <button
                        onClick={handleNavbar}
                        className="nav-button">
                        <ImMenu />
                    </button>
                </div>
            </div>
        </>
    )
}