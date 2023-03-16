import React, {  useEffect, useState } from "react";
import ShortProductCart from "../../ShortProductCard/ShortProductCard";
import "./CheckOut.css";
import { Link, useNavigate } from "react-router-dom";

export default function CheckOut() {
  const buy = JSON.parse(localStorage.getItem('checkOut'))
  const navigate = useNavigate();
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  let userDetail = JSON.parse(localStorage.getItem('user'))
  const [totals, setTotals] = useState({
    items: 0,
    totalPrice: 0,
  });
  const [order, setOrder] = useState({
    address: userDetail.address,
    paymentMethod: 'Cash on Delivery',
    productId: [],
    totalBill: 0,
    totalQuantity: 0,

  });

  function orderHandler() {
    if (localStorage.getItem("isAuthenticated")) {
      let AllOrders = JSON.parse(localStorage.getItem('order'))
      if (AllOrders) {
        AllOrders.productId.push(...order.productId)
        localStorage.setItem("order", JSON.stringify(AllOrders));
      }else{
        localStorage.setItem('order',JSON.stringify(order))
      }
    navigate('/order')
    } else {
      navigate("/auth");
    }
  }
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    } else {
      let price = 0;
      let qty = 0;
      for (let i = 0; i < buy.length; i++) {
        price += buy[i].price * buy[i].qty;
        qty += buy[i].qty;
      }
      setTotals({
        items: qty,
        totalPrice: price,
      });
      let productsId = buy.map((e) => e.id);
      setOrder({
        ...order,
        totalQuantity: qty,
        totalBill: price,
        productId: productsId,
      });
    }
  },[buy,isAuthenticated,order,navigate]);

  // console.log(order)

  return (
    <div className="checkout-layout">
      <div className="checkout-left-section">
        {userDetail.address && userDetail.phone ? (
          <div
            className="address-section "
            onChange={(e) => setOrder({ ...order, address: e.target.value })}
          >
            <h5>Address</h5>
            <div>
              <div className=" my-2 selected-address">
                <input
                  type={"radio"}
                  name="address"
                  required
                  
                  value={userDetail.address}
                />
                <div>{userDetail.address}</div>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/userinfo" className="btn btn-primary m-2">
            Enter Detail
          </Link>
        )}

        {/* ------------------------------------------ */}

        <div className="payment-method">
          <h3>Payment Method</h3>
          <div
            className="pay-with"
            onChange={(e) =>
              setOrder({ ...order, paymentMethod: e.target.value })
            }
          >
            <div>
              <input name="payment" type={"radio"} value="Pay With Card" />
              <label>Pay with Card</label>
            </div>
            <div>
              <input name="payment" type={"radio"} value="Net Banking" />
              <label>Net Banking</label>
            </div>
            <div>
              <input name="payment" type={"radio"} value="UPI Apps" />
              <label>Upi apps</label>
            </div>
            <div>
              <input name="payment" type={"radio"} value="Cash On Delivery" />
              <label>Cash On Delivery<span className="text-muted"> default</span></label>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------- */}
        <div className="border rounded p-3 my-3">
          <div>
            <h2>Items and delivery</h2>
            <div className="delivery-detail">
              <div className="delivery-date">
                <h5 className="text-success">
                  Delivery Date: {(new Date().getDate()+2)+new Date().toDateString().slice(3,7)}
                </h5>
              </div>
            </div>
          </div>
          <div>
            {buy.map((item) => (
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
        <button className="btn btn-warning w-100" onClick={()=>orderHandler()}>
          Place You Order and Pay
        </button>
        <h3 className="billing-heading">Order Summary</h3>
        <div className="billing">
          <div>
            <div>items</div>
            <div>Delivery Charges</div>
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
