import React from "react";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import BannerItem from "./BannerItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const banner = [
        {id:"slide1",img:banner1},
        {id:"slide2",img:banner2},
        
    ]
  return (
    <div>
       <Carousel>
                <div>
                    <img src={banner1} />
                    
                </div>
                <div>
                    <img src={banner2} />
                   
                </div>
                <div>
                    <img src={banner1} />
                   
                </div>
            </Carousel>
    </div>
  );
};

export default Banner;
