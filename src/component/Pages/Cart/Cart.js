import React, {  useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';
import './Cart.css'
import CartProductCard from './CartProductCard/CartProductCard'


export default function Cart() {
  let {cart,setCheckout} = useContext(AppContext)
  let [cartData,setCartData] = useState([])
  const [totalQuantity,setTotalQuantity] = useState([])
  function checkOutHandler(){
      setCheckout(cartData)
      localStorage.setItem('checkOut',JSON.stringify(cartData))
  }

  useEffect(()=>{
    let totalQty = 0
    let totalPrice = 0
    cartData?.forEach((i)=>{
      totalQty += i.qty
      totalPrice += i.qty * i.price
    })
    setTotalQuantity([totalQty,totalPrice])
  },[cartData])

  useEffect(()=>{
 setCartData(cart)
  },[setCartData,cart])
  
  return (
    <div className="cart-layout">
      <div className="left-section">
        <h2>Shopping Cart</h2>
        <div>
          {cartData?.map((item) => (
            <CartProductCard
              name={item.name}
              price={item.price}
              img={item.img}
              qty={item.qty}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className="right-section">
        <h3>Cart Summary</h3>
        <div className="cart-summary">
          <div>
            <h5>Total items</h5>
            <h5>Total Price</h5>
          </div>
          <div>
            <h5>{totalQuantity[0]}</h5>
            <h5>{totalQuantity[1]}</h5>
          </div>
        </div>
        <div>
          <Link to={cartData?.length>0 ?'/checkout':'/'}
          onClick={cartData?.length>0?()=>checkOutHandler():''}
           className='btn btn-success mt-3 w-75'>Place Order </Link >
        </div>
      </div>
    </div>
  );
}
