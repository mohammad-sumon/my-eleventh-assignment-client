import React from 'react';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='text-center my-3'>
            <h2>Welcome to <span style={{color: "purple"}}>SAM Kitchen</span></h2>
            </div>
            <Banner></Banner>
            <Services></Services>
            <Section></Section>
        </div>
    );
};

export default Home;