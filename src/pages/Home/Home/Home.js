import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <div className='text-center my-3'>
            <h2>Welcome to <span style={{color: "purple"}}>SAM Kitchen</span></h2>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;