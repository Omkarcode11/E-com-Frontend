import React, {  useEffect, useState } from 'react';
import OrderCard from '../../OrderCard/OrderCard';
import './Order.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../utils/BASE_URL';



 function Order() {
  const [allOrder, setAllOrders] = useState([]);
  const navigate = useNavigate()
   const isAuthenticated =localStorage.getItem('isAuthenticated')
  const getOrderByUser =async  () => {
       let orders = JSON.parse(localStorage.getItem('order'))
      let orderData = await axios.post(`${URL}/product/`,{id:orders.productId})
      console.log(orderData)
      setAllOrders(orderData.data)
  };
  useEffect(() => {
    if (isAuthenticated) {
      getOrderByUser();
    } else {
      navigate('/')
    }
  }, [isAuthenticated,navigate]);

  return (
    <div className="Order-layout">
      <div>
        <h2 className="heading">My Order</h2>
      </div>
      <div>
        {allOrder?.map((item) => (
          <OrderCard
            key={item.id}
            orderId={item.id}
            paymentMethod={item.paymentMethod}
            img={item.img}
            name={item.name}
            price={item.price}
            qty={item.quantity}
            dd={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default Order;
