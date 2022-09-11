import React from 'react';
import airplane from '../../assets/image/icon-1.png';
import money from '../../assets/image/icon-2.png';
import costumer from '../../assets/image/icon-3.png';
import calendar from '../../assets/image/icon-4.png';
import './travel.css';


// const Div=styled.div`
// background-color:var(--blue)
// `

export default function TravelFacilities() {

  return (
    <section className='travel-facilities'>
      <div className='container-level--two'>
        <img className='img-item' src={airplane} alt='' />
        <div>
          <p className='note--title' > +500 destinations and locations </p>
          <p className='note'>The most spectacular and amazing places</p>
        </div>
      </div>

      <div className='container-level--two'>
        <img className='img-item' src={money} alt='The best warranty ' />
        <div>
          <p className='note--title' >Best Guarantee </p>
          <p className='note'>The lowest price and the highest quality service</p>
        </div>
      </div>

      <div className='container-level--two'>
        <img className='img-item' src={costumer} alt='Excellent customer' />
        <div>
          <p className='note--title' >Great customer </p>
          <p className='note'>
            The comfort and satisfaction of passengers is our most important mission
          </p>
        </div>
      </div>

      <div className='container-level--two'>
        <img className='img-item' src={calendar} alt='' />
        <div>
          <p className='note--title' > Super fast booking</p>
          <p className='note'>The best hotels and flights at your disposal</p>
        </div>
      </div>
    </section>
  )
}
