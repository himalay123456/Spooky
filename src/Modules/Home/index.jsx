import React from 'react';
import FAQ from './Components/FAQ';
import GetInTouch from './Components/GetInTouch';
import Header from '../../Components/Header';
import ExclusiveAccess from './Components/ExclusiveAccess';
import AboutUs from './Components/AboutUs';
import MembershipOptions from './Components/MembershipOptions';
import OurCurators from './Components/OurCurators';
import ThePerks from './Components/ThePerks';
// import Subscribe from './Components/Subscribe';
import Footer from '../../Components/Footer/index';

const Home = () => (
  <>
    <Header />
    <ExclusiveAccess />
    <MembershipOptions />
    <OurCurators />
    <ThePerks />
    <AboutUs />
    <FAQ />
    <GetInTouch />
    <Footer />
  </>
);
export default Home;

// <Subscribe />
