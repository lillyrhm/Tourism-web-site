import React from 'react';
import { GoLocation } from "react-icons/go";
import './destinations.css';
import Pictures from './Pictures/Pictures';
import Texts from './texts/Texts';


export default function Destinations() {
    return (
        <>
            <div className='header-destination'>
                <GoLocation />
                <h3>
                    Popular Destinations/
                    <small>Show All</small>
                </h3>
            </div>
            <p className="text-destination">

                The most complete comprehensive hotel guide with more than 200,000 hotels around the world, guaranteeing the best price, instant and online hotel reservations only at Travel Tour Reservations. In just a few minutes, search for the city or hotel of your choice by using the site's facilities, and check the price and specifications of the hotel, choose the room and pay the amount online. These steps are completed in the shortest time and your hotel will be booked online.
            </p>

            <Pictures />
            <Texts />

            <div className='banner'>
                <div className='banner--img'>
                    <h3>Special discount 10-30% percent</h3>
                    <p>Special offers with the cheapest prices, discounts on tour purchases, hotel reservations, plane tickets, last minute tours, cheap tickets</p>
                    <p>Airline tickets, travel tours and last minute hotel reservations</p>
                    <button className='banner-button'>Go To Amazing Tours</button>
                </div>
            </div>
        </>
    )
}
