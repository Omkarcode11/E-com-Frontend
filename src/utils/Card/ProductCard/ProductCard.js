import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../redux/feature/cartSlice';
import { buyNow } from '../../../redux/feature/buySlice';

function ProductCard(props) {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart)
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
      <div className="card-img">
        <img src={props.img} className='p-3' alt="Title" />
      </div>
      <div className="card-body">
        <Link className="link" to={`/product/detail/${props.id}/${props.categoryId}`}>
          <h4 className="card-title">{props.name.slice(0,25)}...</h4>
        </Link>
        <p className="card-text">Price {props.price}</p>
      </div>
      <div className="button-add-cart">
        <div>
          <button onClick={cartHandler} className="btn btn-warning product-add-cart-btn">Add Cart</button>
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
           className="btn btn-success product-but-btn">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
