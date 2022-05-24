import React from 'react';
import Footer from '../Footer/Footer';
import AllProducts from './AllProducts';
import Banner from './Banner';
import ClientMessage from './ClientMessage';
import FetureProduct from './FetureProduct';
import Map from './Map';
import ReviewSection from './ReviewSection';
import Summary from './Summary';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <FetureProduct/>
            <AllProducts/>
            <Summary/>
            <ClientMessage/>
            <ReviewSection/>
            <Map/>

            <Footer/>
            
        </div>
    );
};

export default Home;