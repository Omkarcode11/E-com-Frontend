import './App.css';
import Home from './component/Pages/Home/Home';
import Header from './component/Header/Header';
import 'react-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './component/Pages/Admin/Admin';
import AddProduct from './component/Pages/Admin/AddProduct/AddProduct';
import AddCategories from './component/Pages/Admin/AddCategories/AddCategories';
import EditProduct from './component/Pages/Admin/EditProduct/EditProduct';
import ProductDetail from './component/ProductDetail/ProductDetail';
import SearchProduct from './component/Pages/Search/SearchProduct';
import CheckOut from './component/Pages/CheckOut/CheckOut';
import Cart from './component/Pages/Cart/Cart';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import Order from './component/Pages/Order/Order';
import UserDetail from './component/UserDetail/UserDetail';
import { createContext, useState } from 'react';
import CategoryProducts from './component/CategoryProducts/CategoryProducts';
import Auth from './component/Pages/Auth/Auth';
export const AppContext = createContext();

function App() {
  const [ourUser,setOurUser] = useState({})
  return (
    <Provider store={store}>
        <AppContext.Provider value={{ourUser,setOurUser}}>
        <BrowserRouter>
          <div className="home-header">
            <Header />
          </div>
          <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/search/:name" element={<SearchProduct />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/add-categories" element={<AddCategories />} />
            <Route path="/edit-product" element={<EditProduct />} />
            <Route path="/product/detail/:id/:catId" element={<ProductDetail />} />
            <Route path="/order" element={<Order />} />
            <Route path="/userinfo" element={<UserDetail />} />
            <Route path="/category/search/:id" element={<CategoryProducts />} />
          </Routes>
        </BrowserRouter>
        </AppContext.Provider>
    </Provider>
  );
}

export default App;
