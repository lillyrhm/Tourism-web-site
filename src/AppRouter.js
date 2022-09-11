import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import ArticleOne from './Pages/Articles/data-page/ArticleOne';
import TourOne from './Pages/Tours/tour-data/TourDescription';
import ServiceOne from './Pages/Service/service-one/ServiceOne';
import {
    Articles,
    ErrorPage,
    Home, Service, SignIn, SignUp,
    Tour
} from './Pages/index';

export default function AppRouter() {
    return (
        <>
            <Router>
                <Layout>
                    {/* <NavbarItem /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/tour' element={<Tour />} />
                        <Route path='/tour/tour-one' element={<TourOne />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/service/service-one" element={<ServiceOne />} />
                        <Route path="/article" element={<Articles />} />
                        <Route path="/article/data-one" element={<ArticleOne />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}