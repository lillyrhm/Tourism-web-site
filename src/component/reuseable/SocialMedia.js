import { AiOutlineGooglePlus, AiOutlineMail } from "react-icons/ai";
import {
    BsInstagram, BsLinkedin, BsPinterest, BsSkype, BsSnapchat, BsVimeo
} from "react-icons/bs";
import { FaFlickr, FaTwitterSquare } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import './social-media.css';

export function SocialMediaHeader() {
    return (
        <div className="social-header">
            <a href='http://instagram.com/'>
                <BsInstagram />
            </a>
            <a href='http://twitter.com/'>
                <FaTwitterSquare />
            </a>
            <a href='http://skype.com/'>
                <BsSkype />
            </a>
            <a href='http://pinterest.com/'>
                <BsPinterest />
            </a>
            <a href='http://linkedin.com/'>
                <BsLinkedin />
            </a>
        </div>
    )
}

export function SocialMediaFooter() {
    return (
        <div className='social-media-footer'>
            <a href='http://facebook.com/'>
                <FiFacebook />
            </a>
            <a href='http://twitter.com/'>
                <FaTwitterSquare />
            </a>
            <a href='http://linkedin.com/'>
                <BsLinkedin />
            </a>
            <a href='http://pinterest.com/'>
                <BsPinterest />
            </a>
            <a href='http://vimeo.com/'>
                <BsVimeo />
            </a>
        </div>
    )
}

export function SocialMediaMagazine() {
    return (
        <div className='social-media-container'>
            <a href='http://snapchat.com/'>
                <BsSnapchat />
            </a>
            <a href='http://instagram.com/'>
                <BsInstagram />
            </a>
            <a href='http://twitter.com/'>
                <FaTwitterSquare />
            </a>
            <a href='http://skype.com/'>
                <BsSkype />
            </a>
            <a href='http://pinterest.com/'>
                <BsPinterest />
            </a>
            <a href='http://linkedin.com/'>
                <BsLinkedin />
            </a>
            <a href='http://google-plus.com/'>
                <AiOutlineGooglePlus />
            </a>
            <a href='http://facebook.com/'>
                <FiFacebook />
            </a>
            <a href='http://flickr.com/'>
                <FaFlickr />
            </a>
            <a href='http://google.com/'>
                <AiOutlineMail />
            </a>
        </div>
    )
}