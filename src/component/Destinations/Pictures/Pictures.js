import React from 'react';
import './pictures.css';
import { ImLocation2 } from 'react-icons/im';

export default function Pictures() {
    return (
        <div className='container-pic'>
            <div className='container-pic--div'>
                <div className="pic-one">
                    <div className='destination-text'>
                        <h4>
                            <ImLocation2 />
                            Europa
                            <div className='destination-text-a'>
                                <a href='#'> 5 Tour</a>
                                <a href='#'> See All</a>
                            </div>
                        </h4>
                    </div>
                </div>
            </div>

            <div className='container-pic--div'>
                <div className="pic-two">
                    <div className='destination-text'>
                        <h5>
                            <ImLocation2 />
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
                            <ImLocation2 />
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
                            <ImLocation2 />
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
                            <ImLocation2 />
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


