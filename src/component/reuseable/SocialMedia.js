import facebook from '../../assets/image/facebook-new.png';
import flickr from '../../assets/image/flickr.png';
import email from '../../assets/image/gmail.png';
import gplus from '../../assets/image/google-logo.png';
import instagram from '../../assets/image/instagram-new.png';
import lin from '../../assets/image/linkedin.png';
import pinterest from '../../assets/image/pinterest.png';
import skype from '../../assets/image/skype.png';
import snapchat from '../../assets/image/snapchat.png';
import twitter from '../../assets/image/twitter.png';
import vimeo from '../../assets/image/vimeo.png';

import './social-media.css';

export function SocialMediaHeader() {
    return (
        <div className="social-header">
            <a href='http://instagram.com/'>
                <img className='header-img' src={instagram} alt='instagram' />
            </a>
            <a href='http://twitter.com/'>
                <img className='header-img' src={twitter} alt='twitter' />
            </a>
            <a href='http://skype.com/'>
                <img className='header-img' src={skype} alt='skype' />
            </a>
            <a href='http://pinterest.com/'>
                <img className='header-img' src={pinterest} alt='pinterest' />
            </a>
            <a href='http://linkedin.com/'>
                <img className='header-img' src={lin} alt='linkedin' />
            </a>

        </div>
    )
}

export function SocialMediaFooter() {
    return (

        <div className='social-media-container'>
            <a href='http://facebook.com/'>
                <img src={facebook} alt='facebook' />
            </a>
            <a href='http://twitter.com/'>
                <img src={twitter} alt='twitter' />
            </a>
            <a href='http://linkedin.com/'>
                <img src={lin} alt='linkedin' />
            </a>
            <a href='http://pinterest.com/'>
                <img src={pinterest} alt='pinterest' />
            </a>
            <a href='http://vimeo.com/'>
                <img src={vimeo} alt='vimeo' />
            </a>
        </div>

    )
}

export function SocialMediaMagazine() {
    return (
        <div className='social-media-container'>
            <a href='http://snapchat.com/'>
                <img src={snapchat} alt='snapchat' />
            </a>
            <a href='http://instagram.com/'>
                <img src={instagram} alt='instagram' />
            </a>
            <a href='http://twitter.com/'>
                <img src={twitter} alt='twitter' />
            </a>
            <a href='http://skype.com/'>
                <img src={skype} alt='skype' />
            </a>
            <a href='http://pinterest.com/'>
                <img src={pinterest} alt='pinterest' />
            </a>
            <a href='http://linkedin.com/'>
                <img src={lin} alt='linkedin' />
            </a>
            <a href='http://google-plus.com/'>
                <img src={gplus} alt='google-plus' />
            </a>
            <a href='http://facebook.com/'>
                <img src={facebook} alt='facebook' />
            </a>
            <a href='http://flickr.com/'>
                <img src={flickr} alt='flickr' />
            </a>
            <a href='http://google.com/'>
                <img src={email} alt='email' />
            </a>
        </div>
    )
}