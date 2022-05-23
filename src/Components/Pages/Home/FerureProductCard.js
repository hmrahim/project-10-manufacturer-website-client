import React from 'react';
import { Link } from 'react-router-dom';

const FerureProductCard = ({product}) => {
    return (
        <div className="card card-side bg-base-300 shadow-xl">
     
        <div className="card-body z-10">
          <h2 className="card-title">{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>20% off</p>
          <div className="card-actions ">
            <Link to={`/details/${product._id}`} className="btn btn-primary">Order Now</Link>
          </div>
        </div>
        <figure className='w-52'><img src={product.image} className="rounded-xl p-1 " alt="Movie"/></figure>
      </div>
    );
};

export default FerureProductCard;