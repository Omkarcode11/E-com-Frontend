import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../redux/feature/cartSlice';
import { buyNow } from '../../../redux/feature/buySlice';

function ProductCard(props) {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart)
  let star = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi m-1 bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
  function cartHandler(){
    for (let i = 0; i < cart.length; i++) {
        if(props.id===cart[i].id){
          return 
        }
    }
      dispatch(
        addCart({
          name: props.name,
          price: props.price,
          img: props.img,
          id: props.id,
          categoryId: props.categoryId,
          qty: 1,
        })
      );
  }

  return (
    <div className="card-layout m-1">
        <Link className="link" to={`/product/detail/${props.id}/${props.categoryId}`}>
      <div className="card-img">
        <img src={props.img} className='p-3' alt="Title" />
      </div>
      <div className="card-body">
          <h4 className="card-title">{props.name.slice(0,25)}...</h4>
        <div>{props.rating?new Array(props.rating).fill(star):new Array(3).fill(star)}</div>
        <p className="card-text">Price {props.price} <del>{props.price*1.5 }</del><sup> 25% off</sup></p>
      </div>
        </Link>
      <div className="button-add-cart">
        <div>
          <button onClick={cartHandler} className="btn warning product-add-cart-btn">Add Cart</button>
        </div>
        <div>
          <Link to={'/checkout'} 
          onClick={()=>dispatch(buyNow([{
            id : props.id,
            img : props.img,
            name : props.name,
            price : props.price,
            qty : 1
          }]))}
          className="btn success product-but-btn">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
