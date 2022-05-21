import React from 'react';
import FerureProductCard from './FerureProductCard';
import img1 from "../../../images/banner/drin.jpg"
import img2 from "../../../images/banner/scrow.jpg"
import img3 from "../../../images/banner/sow.jpg"

const FetureProduct = () => {
    const products = [
        {img:img1,title:"Drill Machine",disc:"Flat 35% Discount"},
        {img:img2,title:"Circular Saw",disc:"Flat 35% Discount"},
        {img:img3,title:"Screwdriver",disc:"Flat 35% Discount"},
      
    ]
    return (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto my-5'>
         {
             products.map(product=> <FerureProductCard product={product} />)
         }
         
         

     </div>
    );
};

export default FetureProduct;
