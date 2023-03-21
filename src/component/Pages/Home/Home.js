import React, { useEffect } from 'react';
// import URL from '../../../utils/BASE_URL';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
// import Loader from '../../Loader/Loader';
import Product from '../../Products/Product';
import './Home.css'

export default function Home() {
  useEffect(()=>{
    if(!localStorage.getItem('isAuthenticated'))
    localStorage.setItem('isAuthenticated',false)
  },[])
  return (
    <div className="home-layout
    ">
      <div className="banner-layout">
        <Banner />
      </div>
      <div className="product">
        <Product />
      </div>
      <div>
        <Footer className="footer" />
      </div>
    </div>
  );
}
