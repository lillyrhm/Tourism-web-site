import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { BsListCheck } from "react-icons/bs";
import { SocialMediaMagazine } from '../../reuseable/SocialMedia';
import './text.css';


export default function Texts() {
    return (
        <div className='text-container'>
            <div>
                <div className='wrap-image'>
                    <BsListCheck className='wrap-image-icon' />
                    <h3> List of tours by category </h3>
                </div>
                <ul>
                    <li> Outdoor activity</li>
                    <li> City tours </li>
                    <li>Cultural and thematic tours</li>
                    <li> Luxury tours</li>
                    <li>  Family and friendly tours </li>
                    <li>Recreational tours </li>
                    <li> Seasonal tours and holidays </li>
                    <li>Jungle and adventure tours </li>
                </ul>
            </div>

            <div >
                <div className='wrap-image'>
                    <AiTwotoneMail className='wrap-image-icon' />
                    <h3>subscribe to newsletter</h3>

                </div>


                <p className='text-p'>Benefit from special member discounts with us</p>

                <form>
                    <input className='form-category' type='email' placeholder='Email' required />
                    <input className='form-button' type='submit' value="Sharing" />
                </form>

                <SocialMediaMagazine />
            </div>
        </div>
    )
}
