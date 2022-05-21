import React from 'react';

const BannerItem = ({banner}) => {
    return (
        <div id={banner.id} class="carousel-item relative w-full">
        <img
          src={banner.img}
          class="w-full"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={banner.id} class="btn btn-circle">
            ❮
          </a>
          <a href={banner.id} class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;