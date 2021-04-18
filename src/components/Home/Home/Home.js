import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Information from '../Information/Information/Information';

import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Service></Service>
            <Review></Review>
            <Information></Information>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;