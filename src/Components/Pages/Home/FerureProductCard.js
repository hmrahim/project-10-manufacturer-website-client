import React from 'react';

const FerureProductCard = ({product}) => {
    return (
        <div class="card card-side bg-base-300 shadow-xl">
     
        <div class="card-body z-10">
          <h2 class="card-title">{product.title}</h2>
          <p>{product.disc}</p>
          <div class="card-actions ">
            <button class="btn btn-primary">Order Now</button>
          </div>
        </div>
        <figure className='w-52'><img src={product.img} className="rounded-xl p-1 " alt="Movie"/></figure>
      </div>
    );
};

export default FerureProductCard;