import { BsFillPersonFill, BsLockFill, BsTelephone } from 'react-icons/bs';
import { FaUbuntu } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../../assets/style/project.css';
import Navbar from "../../component/Navbar/Navbar";
import { SocialMediaHeader } from "../../component/reuseable/SocialMedia";
import './header.css';

export default function Header() {

    return (
        <>
            <header className="header-container">
                <div className="phone-email-header">
                    <span className="phone-email-header-span">
                        <BsTelephone />
                        <a>09378909903</a>
                    </span>

                    <span className="phone-email-header-span">
                        <HiOutlineMail />
                        <a href="Info@MidiaSoft.com">Info@MidiaSoft.com</a>
                    </span>
                </div>

                <nav className="sign-in--data">
                    <Link className="sign-in--data--link" to="/sign-in">
                        <BsLockFill className="sign-in--data--img" />
                        Sign In
                    </Link>

                    <Link className="sign-in--data--link" to="/sign-up">
                        <BsFillPersonFill className="sign-in--data--img" />
                        Sign Up
                    </Link>
                </nav>

                <SocialMediaHeader />
                <Navbar />
            </header>
        </>
    )
}