import React from 'react';
import './text.css';
import { SocialMediaMagazine } from '../../reuseable/SocialMedia';
import list from '../../../assets/image/list-2.png';
import mail from '../../../assets/image/filled-message.png';


export default function Texts() {
    return (
        <div className='text-container'>
            <div>
                <div className='wrap-image'>
                    <img src={list} />
                    <h2>List of tours by category</h2>
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

            <div>
                <div className='wrap-image'>
                    <img src={mail} />
                    <h2>subscribe to newsletter</h2>
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
