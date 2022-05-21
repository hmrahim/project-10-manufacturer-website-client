import React from 'react';
import img from "../../../images/products-img/img-(10).jpg"

const AllProductCard = () => {
    return (
        <div class="card  bg-base-300 shadow-xl">
        <figure class="py-2 px-2">
          <img src={img}  alt="Shoes" class="rounded-xl " />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p className='capitalize font-semibold'>price:$19</p>
          <div class="card-actions">
            <button class="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default AllProductCard;