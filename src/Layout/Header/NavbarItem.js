import React from "react";
import './nav.css';

export default function NavbarItem() {

    return (
        <div className="nav-item-list">
            <div className="list-item">
                <span> Homepage</span>
                <div className="list-item-content">
                    <p>Home</p>
                    <p>Main page 2</p>
                    <p>Main page 3</p>
                    <p>Main page 4</p>
                </div>
            </div>

            <div className="list-item">
                <span>Tabs </span>
                <div className="list-item-content">
                    <p>Features</p>
                    <p>About us</p>
                    <p>Our Services</p>
                    <p>Contact us</p>
                    <p>Portfolio</p>
                    <p>Gallery</p>
                    <p>Team</p>
                    <p>Product</p>
                    <p>Price table</p>
                    <p>under construction</p>
                    <p>We will be back soon</p>
                    <p>page not Found 404</p>
                </div>
            </div>

            <div className="list-item">
                <span>ToursList</span>
                <div className="list-item-content">
                    <p>Tor - full width</p>
                    <p>Thumbnail next to net</p>
                    <p>Tour Thumbnail Style</p>
                    <p>classic tour</p>
                    <p>Classic tour with details</p>
                    <p>Classic tour - with custom summary</p>
                </div>
            </div>

            <div className="list-item">
                <span>Destinations</span>
                <div className="list-item-content">
                    <p>Europe</p>
                    <p>America</p>
                </div>
            </div>

            <div className="list-item">
                <span> DateAndPrice </span>
                <div className="list-item-content">
                    <p>Many days</p>
                    <p>Multiple history </p>
                    <p>One day - within a certain time frame </p>
                    <p>One day - one time</p>
                    <p>Variable pricing</p>
                    <p>Booking by room</p>
                    <p>No room</p>
                    <p>reference</p>
                </div>
            </div>

            <div className="list-item">
                <span>TourSystem </span>
                <div className="list-item-content">
                    <p>System test</p>
                    <p>How the payment gateway works</p>
                    <p>Administration - Transaction page</p>
                    <p>Management - single transaction </p>
                    <p>Customer counter</p>
                    <p>Customer Reservation</p>
                    <p> Customer invoice</p>
                    <p>Reviews - Customer </p>
                    <p>Customer interest</p>
                </div>
            </div>

            <div className="list-item">
                <span>Blogs </span>
                <div className="list-item-content">
                    <p>Complete blog</p>
                    <p>network blog </p>
                    <p>Blog columns</p>
                    <p>Individual posts </p>
                </div>
            </div>
        </div>
    )
}