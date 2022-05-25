import React from "react";
import Footer from "../Footer/Footer";
import AllProducts from "./AllProducts";
import Banner from "./Banner";
import ClientMessage from "./ClientMessage";
import FetureProduct from "./FetureProduct";
import Map from "./Map";
import ReviewSection from "./ReviewSection";
import Summary from "./Summary";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Falcon-Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner />
      <FetureProduct />
      <AllProducts />
      <Summary />
      <ClientMessage />
      <ReviewSection />
      <Map />

      <Footer />
    </div>
  );
};

export default Home;
