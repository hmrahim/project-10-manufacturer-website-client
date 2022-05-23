import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../images/products-img/img-(10).jpg"

const AllProductCard = ({product}) => {
    return (
        <div className="card  bg-base-300 shadow-xl">
        <figure className="py-2 px-2">
          <img src={product.image}  alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.title}</h2>
          <p className='capitalize font-semibold'>price:${product.price}</p>
          <div className="card-actions">
            <Link to={`/details/${product._id}`} className="btn btn-primary">Order Now</Link>
          </div>
        </div>
      </div>
    );
};

export default AllProductCard;