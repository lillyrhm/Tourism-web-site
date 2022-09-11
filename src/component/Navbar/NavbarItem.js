import React from "react";
import './nav.css';
import { Link } from "react-router-dom";

export default function NavbarItem() {
    return (
        <>
            <nav>
                <div className="nav-item-list">
                    <Link className="list-item" to="/">Homepage</Link>
                    <Link className="list-item" to="/tour">ToursList</Link>
                    <Link className="list-item" to="/service">service</Link>
                    <Link className="list-item" to="/article" >Blog</Link>
                </div>
            </nav>
        </>
    )
}