import person from '../../assets/image/contacts.png';
import email from '../../assets/image/gmail.png';
import lock from '../../assets/image/lock.png';
import phone from '../../assets/image/phone.png';
import '../../assets/style/project.css';
import { SocialMediaHeader } from "../reuseable/SocialMedia";
import './header.css';
import Navbar from "./Navbar";



export default function Header() {
    return (
        <header className="header-container">
            <div className="phone-email-header">
                <span className="phone-email-header-span">
                    <img src={phone} alt="phone" />
                    <a>09378909903</a>
                </span>
                <span className="phone-email-header-span">
                    <img src={email} alt="email" />
                    <a>Info@MidiaSoft.com</a>
                </span>
            </div>

            <div className="login--data">
                <img src={lock} alt="login" />
                <a href="#"> login</a>
                <img src={person} alt="SignIn" />
                <a href="#"> SignIn </a>
            </div>
            <SocialMediaHeader />

            <Navbar />
        </header>
    )
}