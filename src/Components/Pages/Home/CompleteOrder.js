import React from 'react';
import { Link } from 'react-router-dom';

const CompleteOrder = () => {
    return (
        <div className=''>
            <div className='w-full md:w-2/5 mx-auto shadow-xl rounded-lg p-4 mt-10'>
                <h1 className='capitalize my-2 text-3xl text-success '>Your Order is done</h1>
                <p className=''>Please complete the payment</p>
                <Link to="/dashboard/myorders" className='btn btn-primary btn-sm mt-3'>Got to Dashboard</Link>
            </div>
            
        </div>
    );
};

export default CompleteOrder;