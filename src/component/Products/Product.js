import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../utils/BASE_URL';
import ProductCard from '../../utils/Card/ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import './Product.css';

function Product() {
  const [data, setData] = useState([]);
  const loader = new Array(10).fill(<Loader/>)

  async function getProductsByCategoryId(arr) {
    let products = await axios.post(`${URL}/category/search`, { ids: arr });
    setData(products.data);
  }

  useEffect(() => {
    getProductsByCategoryId([1, 2, 3]);
  }, []);
   

  return (
    <div>
      <div className="category-products">
        <div className="product-category-arrow">
          <h4 className="mx-4 ">Men's Wear</h4>
          <Link to={'/category/search/1'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-right more-product-right-arrow"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
          </svg>
              </Link>
        </div>
        {
          data.length!==0?(
          <div className="home-products">
          {data[0]?.map((item) => (
            <ProductCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              description={item.description}
              id={item.id}
              categoryId={item.categoryId}
              rating = {item.rating}
            />
            ))}
        </div>):<div className='d-flex products-loader'>{loader.map(item=><div className='mx-2'>{item}</div>)}</div>
          }
      </div>
      <div className="category-products">
        <div className="product-category-arrow">
          <h4 className="mx-4">Women's Wear</h4>
          <Link to={'/category/search/2'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-right more-product-right-arrow"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          </Link>
        </div>
        {
          data.length!==0?(
          <div className="home-products">
          {data[1]?.map((item) => (
            <ProductCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              description={item.description}
              id={item.id}
              categoryId={item.categoryId}
              rating = {item.rating}
            />
            ))}
        </div>):<div className='d-flex products-loader'>{loader.map(item=><div className='mx-2'>{item}</div>)}</div>
          }
      </div>
      <div className="category-products">
        <div className="product-category-arrow">
          <h4 className="mx-4">Kid's Wear</h4>
          <Link to={'/category/search/3'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-right more-product-right-arrow"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          </Link>
        </div>
        {
          data.length!==0?(
          <div className="home-products">
          {data[2]?.map((item) => (
            <ProductCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              description={item.description}
              id={item.id}
              categoryId={item.categoryId}
              rating = {item.rating}
            />
            ))}
        </div>):<div className='d-flex products-loader'>{loader.map(item=><div className='mx-2'>{item}</div>)}</div>
          }
      </div>
    </div>
  );
}

export default Product;
