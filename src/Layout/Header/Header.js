import person from '../../assets/image/contacts.png';
import email from '../../assets/image/gmail.png';
import lock from '../../assets/image/lock.png';
import phone from '../../assets/image/phone.png';
import '../../assets/style/project.css';
import { SocialMediaHeader } from "../../component/reuseable/SocialMedia";
import './header.css';
import Navbar from "../../component/Navbar/Navbar";
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <>
            <header className="header-container">
                <div className="phone-email-header">
                    <span className="phone-email-header-span">
                        <img src={phone} alt="phone" />
                        <a>09378909903</a>
                    </span>

                    <span className="phone-email-header-span">
                        <img src={email} alt="email" />
                        <a href="Info@MidiaSoft.com">Info@MidiaSoft.com</a>
                    </span>
                </div>

                <div className="sign-in--data">
                    <nav >
                        <img  className="sign-in--data--img" src={lock} alt="Sig In" />
                        <Link to="/sign-in"> Sign In</Link>
                        <img className="sign-in--data--img" src={person} alt="SignIn" />
                        <Link to="/sign-up"> Sign Up </Link>
                    </nav>
                </div>

                <SocialMediaHeader />
                <Navbar />
            </header>
        </>
    )
}