import React from 'react';
import { useDispatch } from 'react-redux';
import { manageQuantity, removeItem } from '../../../../redux/feature/cartSlice';
import './CartProductCard.css';

function CartProductCard({ id, name, img, price, qty }) {
 
   const dispatch = useDispatch();

   function manageQty(str){
    if(str==='add'){
      dispatch(manageQuantity({
        id  : id,
        qty : 1
      }))
    }else{
      dispatch(manageQuantity({
        id:id,
        qty: -1
      }))
    }
   }

  return (
    <div className="cartProductCard">
      <div className="cart-product-img">
        <img src={img} alt="product-img" />
      </div>
      <div className="cart-product-detail">
        <h4>{name}</h4>
        <div className="qty-buttons">
          <span onClick={() => manageQty('add')} className="add-qty">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </span>
          <span className="total-qty">{qty}</span>
          <span onClick={() => manageQty('minus')} className="minus-qty">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </span>
        </div>
        <div>
          <button onClick={() => dispatch(removeItem({ id }))} className="btn btn-danger button-delete-cart">
            Delete
          </button>
        </div>
      </div>
      <div>
        <h4>Price</h4>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default CartProductCard;
