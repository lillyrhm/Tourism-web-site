import React from 'react';
import './footer-image.css';
import location from '../../../assets/image/region-code.png';
import pic from '../../../assets/image/shutterstock_195507533-700x660.jpg'
export default function FooterImage() {
    return (
        <>
            <div container-pic-footer>
                <div container-image>
                    <div className="pic-ones">
                    </div>
                    <img className='container-image--img' src={pic} />
                    <img className='container-image--img' src={pic} />
                    <img className='container-image--img' src={pic} />
                    <img className='container-image--img' src={pic} />
                    <img className='container-image--img' src={pic} />
                    <img className='container-image--img' src={pic} />
                </div>
            </div>
        </>
        /*
            <div className='container-pic-footer'>
                <div className='container-pic col-sm-4'>
                    <div className="pic-ones">
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

                <div className='container-pic col-sm-4'>
                    <div className="pic-ones">
                        <div className='destination-text'>
                            <h4>
                                <img src={location} />
                                Argentina
                            </h4>
                            <div className='destination-text-a'>
                                <a href='#'> 5 Tour</a>
                                <a href='#'> See All</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-pic col-sm-4'>
                    <div className="pic-twos">
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

                <div className='container-pic col-sm-4'>
                    <div className="pic-threes">
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

                <div className='container-pic col-sm-4'>
                    <div className="pic-fours">
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

                <div className='container-pic'>
                    <div className="pic-fives">
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
            </div > */
        // </>
    )
}


