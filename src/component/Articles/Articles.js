import React from 'react';
import './articles.css';
import location from './../../assets/image/visit.png';

export default function Articles() {
    return (
        <>
            <div className='articles-header'>
                <img src={location} />
                <h1>Latest and latest articles/view all articles</h1>
            </div>
            <div className='container-box'>
                <div className='image-box'>
                    <div className='text-box-one'>
                        <div className='text-box'>
                            <h4>The title of the desired article</h4>
                            <h5> Number 1</h5>
                            <h5> June 17, 1395 </h5>
                        </div>
                    </div>
                </div>

                <div className='image-box'>
                    <div className='text-box-two'>
                        <div className='text-box'>
                            <h4>The title of the desired article</h4>
                            <h5> Number 1</h5>
                            <h5> June 17, 1395 </h5>
                        </div>
                    </div>
                </div>

                <div className='image-box'>
                    <div className='text-box-three'>
                        <div className='text-box'>
                            <h4>The title of the desired article</h4>
                            <h5> Number 1</h5>
                            <h5> June 17, 1395 </h5>
                        </div>
                    </div>
                </div>

                <div className='image-box'>
                    <div className='text-box-four'>
                        <div className='text-box'>
                            <h4>The title of the desired article</h4>
                            <h5> Number 1</h5>
                            <h5> June 17, 1395 </h5>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
