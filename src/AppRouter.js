import React from 'react';
import Navbar from './Layout/Header/Navbar';
import Layout from './Layout/Layout';
import {
    Articles,
    Home,
    Login,
    Service,
    Signin,
    Tour
} from './Pages/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from './Layout/Header/Navbar';

export default function AppRouter() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/sign-in" component={Signin} />
                <Route path="/login" component={Login} />
                <Route path="/tour" component={Tour} />
                <Route path="/service" component={Service} />
                <Route path="/articles" component={Articles} />
            </Layout>
        </Router>
    );
}

// export default function AppRouter() {
//     return (

// <BrowserRouter>
//     <Layout>
//         <Navbar />
//         <Switch>
// <h1>kkkkk</h1>
{/* <Route exact path="/" component={Home} />
                    <Route path="/sign-in" component={Signin} />
                    <Route path="/login" component={Login} />
                    <Route path="/tour" component={Tour} />
                    <Route path="/service" component={Service} />
                    <Route path="/articles" component={Articles} /> */}
        //         </Switch>
        //     </Layout>
        // </BrowserRouter>
//     )
// }
