import React from "react";
import { AiFillCustomerService, AiFillHome } from 'react-icons/ai';
import { ImBlogger2 } from 'react-icons/im';
import { MdDashboardCustomize, MdTour } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { CLOSE_NAVBAR } from '../../store/Action';
import "./nav-item.css";
import './nav.css';

export default function NavbarItem() {
    const { isShowNavbar } = useSelector((state) => state)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ CLOSE_NAVBAR });
    }

    return (
        <div className={isShowNavbar ? 'navbar-container active' : 'navbar-container'}>
            {isShowNavbar ?
                <>
                    <nav>
                        <Link
                            className="list-item"
                            to="/"
                            onClick={handleClick}>
                            <MdDashboardCustomize className="icon-nav" />
                            Dashboard
                        </Link>
                        <Link
                            className="list-item"
                            to="/"
                            onClick={handleClick}>
                            <AiFillHome className="icon-nav" />
                            Homepage
                        </Link>
                        <Link
                            className="list-item"
                            to="/tour"
                            onClick={handleClick}>
                            <MdTour className="icon-nav" />
                            ToursList
                        </Link>
                        <Link
                            className="list-item"
                            to="/service"
                            onClick={handleClick}>
                            <AiFillCustomerService className="icon-nav" />
                            service</Link>
                        <Link
                            className="list-item"
                            to="/article"
                            onClick={handleClick}>
                            <ImBlogger2 className="icon-nav" />
                            Blog
                        </Link>
                    </nav>
                </> : null}
        </div>
    )
}

