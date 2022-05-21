import React from "react";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
    const banner = [
        {id:"slide1",img:banner1},
        {id:"slide2",img:banner2},
        
    ]
  return (
    <div>
      <div class="carousel w-full">
          {
              banner.map(item=>  <BannerItem banner={item} />)
          }
         
    
      </div>
    </div>
  );
};

export default Banner;
