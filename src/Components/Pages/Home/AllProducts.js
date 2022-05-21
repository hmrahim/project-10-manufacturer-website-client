import React from 'react';
import AllProductCard from './AllProductCard';
import img1 from "../../../images/products-img/img-(2).jpg"
import img2 from "../../../images/products-img/img-(3).jpg"
import img3 from "../../../images/products-img/img-(4).jpg"
import img4 from "../../../images/products-img/img-(5).jpg"
import img5 from "../../../images/products-img/img-(6).jpg"
import img6 from "../../../images/products-img/img-(7).jpg"
import img7 from "../../../images/products-img/img-(8).jpg"
import img8 from "../../../images/products-img/img-(9).jpg"
import img9 from "../../../images/products-img/img-(10).jpg"
import img10 from "../../../images/products-img/img-(11).jpg"

const AllProducts = () => {
  
    return (
        <div className='mt-20 w-11/12 mx-auto'>
            <h1 className='text-center text-4xl font-semibold my-5'>OUR PRODUCTS</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>

            <AllProductCard/>
            <AllProductCard/>
            <AllProductCard/>
            <AllProductCard/>
            <AllProductCard/>
            <AllProductCard/>
            <AllProductCard/>
            <AllProductCard/>
            <AllProductCard/>
            <AllProductCard/>
            </div>
        </div>
    );
};

export default AllProducts;