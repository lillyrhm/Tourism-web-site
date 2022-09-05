import React from 'react';
import Reservation from '../component/Footer/Reservation';
import travel from '../assets/image/travel-tour-logo.png';
import FooterImage from '../component/Footer/Picture/FooterFooter';
import '../component/Footer/footer.css';


export default function Footer() {
    return (
        <>
            <Reservation />
            <div className='footer-container'>
                <div>
                    <img src={travel} />
                    <p className='footer-container--p' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div>
                    <h4>Categories of tours</h4>

                    <FooterImage />
                </div>
                <div className='footer-container--p'>
                    <h4>Contacts</h4>
                    <p>
                        Address: Tehran, 2nd floor, Sadeghieh, Sepehr Complex, Unit 8
                    </p>
                    <p>Contact: 09378909903</p>
                    <p>contact@traveltourtheme.com</p>
                </div>

            </div>
            <div className='end-footer'>
                <h5 className='footer-container--p '>
                    All rights of Persianization and development are reserved for Mediasoft.
                </h5>
            </div>
        </>
    )
}
