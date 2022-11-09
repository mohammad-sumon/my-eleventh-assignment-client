import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
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