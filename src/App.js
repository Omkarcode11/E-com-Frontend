import "./App.css";
import Home from "./component/Pages/Home/Home";
import Header from "./component/Header/Header";
import "react-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import SearchProduct from "./component/Pages/Search/SearchProduct";
import CheckOut from "./component/Pages/CheckOut/CheckOut";
import Cart from "./component/Pages/Cart/Cart";
import Order from "./component/Pages/Order/Order";
import UserDetail from "./component/UserDetail/UserDetail";
import { createContext, useEffect, useState } from "react";
import CategoryProducts from "./component/CategoryProducts/CategoryProducts";
import Auth from "./component/Pages/Auth/Auth";
export const AppContext = createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [cart, setCart] = useState();
  const [checkOut, setCheckout] = useState([]);
  const [order, setOrder] = useState({});
  useEffect(() => {
    if (!localStorage.getItem("isAuthenticated")) {
      localStorage.setItem("isAuthenticated", false);
    }
    if (!localStorage.getItem("rajdhaniCart")) {
      localStorage.setItem("rajdhaniCart", []);
    }
    if (!localStorage.getItem("order")) {
      localStorage.setItem("order", []);
    }
    if (!localStorage.getItem("checkOut")) {
      localStorage.setItem("checkOut", []);
    }
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
    if (localStorage.getItem("rajdhaniCart").length > 0)
      setCart(JSON.parse(localStorage.getItem("rajdhaniCart")));
    else setCart(localStorage.getItem("rajdhaniCart"));
  }, []);

  return (
    <AppContext.Provider
      value={{
        checkOut,
        setCheckout,
        isAuthenticated,
        setIsAuthenticated,
        cart,
        setCart,
        order,
        setOrder,
      }}
    >
      <BrowserRouter>
        <div className="home-header">
          <Header />
        </div>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/search/:name" element={<SearchProduct />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/product/detail/:id/:catId"
            element={<ProductDetail />}
          />
          <Route path="/order" element={<Order />} />
          <Route path="/userinfo" element={<UserDetail />} />
          <Route path="/category/search/:id" element={<CategoryProducts />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
