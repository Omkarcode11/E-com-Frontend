import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShortProductCart from '../../ShortProductCard/ShortProductCard';
import './CheckOut.css';
import axios from 'axios';
import { URL } from '../../../utils/BASE_URL';
// import { useAuth0 } from '@auth0/auth0-react';
import { AppContext } from '../../../App';
import { Link, useNavigate } from 'react-router-dom';

export default function CheckOut() {
  const buy = useSelector((state) => state.buy);
  const navigate = useNavigate()
  const {ourUser} = useContext(AppContext)
  // const { isAuthenticated, loginWithPopup, user } = useAuth0();
  const isAuthenticated = false
  // const use = {name : 'omakr'}
  function loginWithPopup(){console.log('login ins')}
  const [totals, setTotals] = useState({
    items: 0,
    totalPrice: 0,
  });
  const [order, setOrder] = useState({
    address: '',
    paymentMethod: '',
    productId: [],
    totalBill: 0,
    totalQuantity: 0,
    phone: ourUser.phone,
    userId: ourUser.id,
  });

  function orderHandler() {
    if (isAuthenticated) {
      axios
        .post(`${URL}/order/add`, order)
        .then((res) => {
          if(res.statusText == "OK"){
          navigate('/order')
          };
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      loginWithPopup();
      navigate('/')
    }
  }
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithPopup();
    } else {
      let price = 0;
      let qty = 0;
      for (let i = 0; i < buy[0].length; i++) {
        price += buy[0][i].price * buy[0][i].qty;
        qty += buy[0][i].qty;
      }
      // console.log(price,qty)
      setTotals({
        items: qty,
        totalPrice: price,
      });
      let productsId = buy[0].map((e) => e.id);
      setOrder({...order,totalQuantity:qty,totalBill:price,productId:productsId})
    }
  }, []);

  // console.log(order)

  return (
    <div className="checkout-layout">
      <div className="checkout-left-section">
{   (ourUser.address && ourUser.phone) ?    <div className="address-section " onChange={(e) => setOrder({ ...order, address: e.target.value })}>
          <h5>Address</h5>
          <div>
            <div className=" my-2 selected-address">
              <input type={'radio'} name="address" required value={ourUser.address} />
              <div>{ourUser.address}</div>
            </div>
          </div>
        </div>: <Link to='/userinfo' className='btn btn-primary m-2'>Enter Detail</Link>}

        {/* ------------------------------------------ */}

        <div className="payment-method">
          <h3>Payment Method</h3>
          <div className="pay-with" onChange={(e) => setOrder({ ...order, paymentMethod: e.target.value })}>
            <div>
              <input name="payment" type={'radio'} value="Pay With Card" />
              <label>Pay with Card</label>
            </div>
            <div>
              <input name="payment" type={'radio'} value="Net Banking" />
              <label>Net Banking</label>
            </div>
            <div>
              <input name="payment" type={'radio'} value="UPI Apps" />
              <label>Upi apps</label>
            </div>
            <div>
              <input name="payment" type={'radio'} value="Cash On Delivery" />
              <label>Cash On Delivery</label>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------- */}
        <div className="border rounded p-3 my-3">
          <div>
            <h2>Items and delivery</h2>
            <div className="delivery-detail">
              <div className="delivery-date">
                <h5 className="text-success">Delivery Date: {new Date().toDateString()}</h5>
              </div>
            </div>
          </div>
          <div>
            {buy[0].map((item) => (
              <ShortProductCart
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                qty={item.qty}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}

      <div className="checkout-right-section">
        <button className="btn btn-warning w-100" onClick={orderHandler}>
          Place You Order and Pay
        </button>
        <h3 className="billing-heading">Order Summary</h3>
        <div className="billing">
          <div>
            <div>items</div>
            <div>Delivery</div>
            <div>Total</div>
          </div>
          <div>
            <div>{totals.items}</div>
            <div>0</div>
            <div>{totals.totalPrice}</div>
          </div>
        </div>
        <div>
          <h2>Order Total : {totals.totalPrice}</h2>
        </div>
      </div>
    </div>
  );
}
