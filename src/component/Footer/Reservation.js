import React from 'react';
import './reserve.css';

export default function Reservation() {
    return (
        <div className='reserve'>
            <h1> Why pray?</h1>
            <div className='reserve-answer'>
                <img src='https://bomisaz.ir/demo/traveltour/wp-content/uploads/2016/06/icon-10.png' />
                <div className='reserve-answer-note'>
                    <h4>40,000+ customers</h4>
                    <p>Comfort and satisfaction of passengers</p>
                </div>
            </div>

            <div className='reserve-answer'>
                <img src='https://bomisaz.ir/demo/traveltour/wp-content/uploads/2016/06/icon-11.png' />
                <div className='reserve-answer-note'>
                    <h4>Awards won</h4>
                    <p>Travel tour awards and honors</p>
                </div>
            </div>

            <div className='reserve-answer'>
                <img src='https://bomisaz.ir/demo/traveltour/wp-content/uploads/2016/06/icon-12.png' />
                <div className='reserve-answer-note'>
                    <h4>Secure payment</h4>
                    <p>The best price guarantee</p>
                </div>
            </div>
        </div>

    )
}
