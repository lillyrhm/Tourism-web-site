import React from 'react';
import './pictures.css';
import location from '../../../assets/image/region-code.png'

export default function Pictures() {
    return (
        <div className='container-pic'>
            <div className='container-pic--div'>
                <div className="pic-one">
                    <div className='destination-text'>
                        <h4>
                            <img src={location} />
                            Europa
                        </h4>
                        <div className='destination-text-a'>
                            <a href='#'> 5 Tour</a>
                            <a href='#'> See All</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-pic--div'>
                <div className="pic-two">
                    <div className='destination-text'>
                        <h5>
                            <img src={location} />
                            South America
                        </h5>
                        <div className='destination-text-a'>
                            <a href='#'> 7 Tour</a>
                            <a href='#'> See All</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-pic--div'>
                <div className="pic-three">
                    <div className='destination-text'>
                        <h4>
                            <img src={location} />
                            America
                        </h4>
                        <div className='destination-text-a'>
                            <a href='#'> 7 Tour</a>
                            <a href='#'> See All </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-pic--div'>
                <div className="pic-four">
                    <div className='destination-text'>
                        <h4>
                            <img src={location} />
                            Africa
                        </h4>
                        <div className='destination-text-a'>
                            <a href='#'>7 Tour</a>
                            <a href='#'> See All</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-pic--div'>
                <div className="pic-five">
                    <div className='destination-text'>
                        <h3>
                            <img src={location} />
                            Asia
                        </h3>
                        <div className='destination-text-a'>
                            <a href='#'>7 Tour</a>
                            <a href='#'> See All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


