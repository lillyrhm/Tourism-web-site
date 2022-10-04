import React, { useState } from 'react';
import './tour-data.css';
import { TourData } from './TourData';
import { useNavigate } from "react-router-dom";
import location from '../../assets/image/visit.png';
import Search from '../../component/reuseable/search/Search';

export default function Tour() {
    const [tourListData, setTourListData] = useState(TourData);
    const navigate = useNavigate();

    const TourCard = tourListData.map((tour, index) => {
        return (
            <div key={index.id} className='tour--container'>
                <img className="tour--img" src={tour.img} />
                <h1>{tour.title}</h1>
                <h6><img src={location} className='img--location' />Location {tour.location}</h6>
                <button className='tour--btn' onClick={() => navigate(tour.path)}>{tour.location}</button>
            </div>
        )
    })

    return (
        <>
            <div className='tour-container--main'>
                <h1>Tour List</h1>
                <Search placeholder="search..." data={TourData} />
                <div className='container-main'>
                    {TourCard}
                </div>
            </div>
        </>
    )
}
