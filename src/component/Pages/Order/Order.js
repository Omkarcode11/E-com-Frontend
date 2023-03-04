import React, { useContext, useEffect, useState } from 'react';
import OrderCard from '../../OrderCard/OrderCard';
import './Order.css';
import axios from 'axios';
import { URL } from '../../../utils/BASE_URL';
import { AppContext } from '../../../App';
// import { useAuth0 } from '@auth0/auth0-react';

function Order() {
  const { ourUser } = useContext(AppContext);
  const [allOrder, setAllOrders] = useState([]);
  // const { isAuthenticated, loginWithRedirect } = useAuth0();
   const isAuthenticated =false
   const loginWithRedirect = () => {
     console.log("lowinWith redirect");
   };
  const getOrderByUser = async (userId) => {
    let allOrders = await axios.post(`${URL}/order`, { id: userId });
    console.log(allOrders);
    setAllOrders(allOrders.data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      getOrderByUser(ourUser.id);
    } else {
      loginWithRedirect();
    }
  }, []);

  console.log(allOrder);
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
            img={item.product.img}
            name={item.product.name}
            price={item.totalBill}
            qty={item.totalQuantity}
            dd={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default Order;
