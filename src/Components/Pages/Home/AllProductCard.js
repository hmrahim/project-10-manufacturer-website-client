import React from 'react';
import img from "../../../images/products-img/img-(10).jpg"

const AllProductCard = () => {
    return (
        <div className="card  bg-base-300 shadow-xl">
        <figure className="py-2 px-2">
          <img src={img}  alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p className='capitalize font-semibold'>price:$19</p>
          <div className="card-actions">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default AllProductCard;