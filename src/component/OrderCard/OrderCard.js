import React from 'react'
import './OrderCard.css';

function OrderCard({orderId,paymentMethod,img,name,price,qty,dd}) {
  return (
    <div className="order-product-card">
      {/* //qty,img,price,name,createdAt, payment Method */}
      <h6>{orderId}</h6>
      <div className="order-product-img">
        <img src={img} />
      </div>
      <div className="order-product-info">
        <div>{name}</div>
        <div>{price}</div>
      <div>{qty}</div>
      <div>{paymentMethod}</div>
      </div>
      <div className="order-delivery-date">{new Date(dd).toDateString()}</div>
    </div>
  );
}

export default OrderCard