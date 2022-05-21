import React from 'react';

const BannerItem = ({banner}) => {
    return (
        <div id={banner.id} className="carousel-item relative w-full">
        <img
          src={banner.img}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={banner.id} className="btn btn-circle">
            ❮
          </a>
          <a href={banner.id} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;