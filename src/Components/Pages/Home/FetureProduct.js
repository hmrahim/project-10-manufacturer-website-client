import React, { useEffect, useState } from 'react';
import FerureProductCard from './FerureProductCard';
import img1 from "../../../images/banner/drin.jpg"
import img2 from "../../../images/banner/scrow.jpg"
import img3 from "../../../images/banner/sow.jpg"
import { useQuery } from 'react-query';
import Loading from '../Dashboard/Loading';
import getToken from '../../Hooks/getToken';

const FetureProduct = () => {
 const [data,setData] = useState([])
 useEffect(()=> {
    fetch("https://protected-peak-92782.herokuapp.com/fetureproduct",getToken)
    .then(res=>res.json())
    .then(data=>setData(data))
 },[])

    return (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto my-5'>
         {
             data.map((product,index)=> <FerureProductCard key={index} product={product} />)
         }
         
         

     </div>
    );
};

export default FetureProduct;
