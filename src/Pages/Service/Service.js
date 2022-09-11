import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import location from '../../assets/image/visit.png';
import Search from '../../component/reuseable/search/Search';
import './service.css';
import { ServiceData } from './ServiceData';

export default function ServicesTour() {
  const [services, setServices] = useState(ServiceData);
  const navigate = useNavigate();

  const serviceCard = services.map((service, index) => {

    return (
      <div key={index.id} className='service--container'>
        <img className="service--img" src={service.img} />
        <h1>{service.title}</h1>
        <h6><img src={location} className='img--location' />Location {service.location}</h6>
        <button className='service--btn' onClick={() => navigate(service.path)}>{service.location}</button>
      </div>
    )
  })

  return (
    <>
      <div className='service-container--main'>
        <h1>Service </h1>
        <Search placeholder="search..." data={ServiceData} />
        <div className='container-main'>
          {serviceCard}
        </div>
      </div>
    </>
  )
}
