import React from 'react';

const Map = () => {
    return (
        <div className=' my-5'>
            <h1 className='text-center text-4xl font-semibold capitalize my-5'>Our location</h1>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2047.1311091419172!2d91.21605120056617!3d23.904761447748257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f7d409e0bca5%3A0x8852eeda0c2ca61a!2sSingerbil%20Bazar!5e0!3m2!1sen!2sbd!4v1653167252231!5m2!1sen!2sbd"  className='w-full h-[500px]' style={{border:"0"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Map;