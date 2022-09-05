import React, { Children } from 'react'
import Footer from './Footer';
import Header from './Header/Header';

export default function Layout({ Children }) {
    return (
        <div>
            <Header />
            <br></br>
            <main>{Children}</main>
            <br></br>
            <Footer />
        </div>
    )
}
