import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../utils/Card/ProductCard/ProductCard";
import "./ProductDetail.css";
import axios from "axios";
import { URL } from "./../../utils/BASE_URL";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [suggested, setSuggested] = useState([]);
  const id = useParams();


  async function getSuggestedCart(id) {
    let suggestedProduct = await axios.get(`${URL}/category/${id}`);
    setSuggested(suggestedProduct.data);
  }

  useEffect(() => {
    axios.get(`${URL}/product/${id.id}`).then(function (res) {
      return setProduct(res.data);
    });
    getSuggestedCart(id.catId);
  }, [id]);


  function cartHandler() {
    let prod = {
      name: product.name,
      price: product.price,
      img: product.img,
      id: product.id,
      categoryId: product.categoryId,
      qty: 1,
    };
    if (localStorage.getItem("cart")) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      for (let i = 0; i < cart.length; i++) {
        if (product.id === cart[i].id) {
          return;
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart + prod));
    } else {
      localStorage.setItem("cart", prod);
    }
  }
  // function buyHandler() {
  //   let prod = {
  //     id: product.id,
  //     img: product.img,
  //     name: product.name,
  //     price: product.price,
  //     qty: 1,
  //   };
  //   if (localStorage.getItem("order")) {
  //     let order = localStorage.getItem(localStorage.getItem("order"));
  //     localStorage.setItem("order", JSON.stringify(prod, order));
  //   } else {
  //     localStorage.setItem("order", JSON.stringify(prod));
  //   }
  // }

  function checkOutHandle(){
    let prod = {
      id: product.id,
      img: product.img,
      name: product.name,
      price: product.price,
      qty: 1,
    };
    localStorage.setItem('checkOut',JSON.stringify([prod]))
  }

  // function addCartHandler() {
  //   for (let i = 0; i < cartState.length; i++) {
  //     if (product.id === cartState[i].id) {
  //       return;
  //     }
  //   }
  //   dispatch(
  //     addCart({
  //       name: product.name,
  //       price: product.price,
  //       img: product.img,
  //       id: product.id,
  //       categoryId: product.categoryId,
  //       qty: 1,
  //     })
  //   );
  // }
    
  // () =>
  //                 dispatch(
  //                   buyNow([
  //                     {
  //                       id: product.id,
  //                       img: product.img,
  //                       name: product.name,
  //                       qty: 1,
  //                       price: product.price,
  //                     },
  //                   ])
  //                 )
                

  return (
    <div className='product-detail-layout'>
      <div className='product-detail'>
        <div className='product-detail-img'>
          <img
            src={product.img}
            className=''
            alt='Card title'
          />
        </div>
        <div className='product-details-text'>
          <div className='card-body'>
            <h5 className='card-title h1 py-2'>{product.name}</h5>
            <h6 className='card-title h4 pb-3'>Price ₹{product.price} <del>{product.price*1.5 }</del><sup> 25% off</sup></h6>
            <h6 className='card-review h7 pt-3'>
              {product.rating
                ? new Array(product.rating).fill(
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-star-fill mx-1'
                      viewBox='0 0 16 16'>
                      <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                    </svg>
                  )
                : ""}
              {product.rating
                ? new Array(5 - product.rating).fill(
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-star mx-1'
                      viewBox='0 0 16 16'>
                      <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
                    </svg>
                  )
                : ""}
            </h6>
            <p className='card-text'>{product.description}</p>
            <p className='card-text'>
              <small className='text-muted'>
                {/* Category {produce.category.category} */}
                {/* category {product.category} */}
              </small>
            </p>
            <div className='product-detail-button '>
              <Link
                to={"/checkout"}
                onClick={()=>checkOutHandle()}
                type='button'
                className='btn btn-success  '>
                Buy Now
              </Link>

              <button
                type='button'
                onClick={()=>cartHandler}
                className='btn btn-warning  mx-3'>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------SUGGESTED CARD ------------- */}
      <div className='suggested-card'>
        {suggested?.map((item) => {
          return (
            <ProductCard
              img={item.img}
              name={item.name}
              price={item.price}
              id={item.id}
              categoryId={item.categoryId}
              rating ={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductDetail;
