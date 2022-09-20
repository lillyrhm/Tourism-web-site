import React from 'react';
import './articles.css';
import { GoLocation } from "react-icons/go";
import { ImClock2 } from "react-icons/im";

export default function Articles() {
    return (
        <>
            <div className='articles-header'>

                <h1>
                    <GoLocation />
                    Latest and latest articles/view all articles
                </h1>
            </div>
            <div className='container-box'>
                <div className='image-box'>
                    <div className='text-box-one'>
                    <div className='text-box'>
                            <h5>The title of the desired article</h5>
                            <h5> Number 1</h5>
                            <h5>
                                <ImClock2 />
                                June 17, 1395 </h5>
                        </div>
                    </div>
                </div>

                <div className='image-box'>
                    <div className='text-box-two'>
                    <div className='text-box'>
                            <h5>The title of the desired article</h5>
                            <h5> Number 1</h5>
                            <h5>
                                <ImClock2 />
                                June 17, 1395 </h5>
                        </div>
                    </div>
                </div>

                <div className='image-box'>
                    <div className='text-box-three'>
                    <div className='text-box'>
                            <h5>The title of the desired article</h5>
                            <h5> Number 1</h5>
                            <h5>
                                <ImClock2 />
                                June 17, 1395 </h5>
                        </div>
                    </div>
                </div>

                <div className='image-box'>
                    <div className='text-box-four'>
                        <div className='text-box'>
                            <h5>The title of the desired article</h5>
                            <h5> Number 1</h5>
                            <h5>
                                <ImClock2 />
                                June 17, 1395 </h5>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
