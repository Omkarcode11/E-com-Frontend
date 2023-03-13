// import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { AppContext } from '../../App';
import { addOrder } from "../../redux/feature/orderSlice";
import { URL } from "../../utils/BASE_URL";
import "./Header.css";

function Header() {
  // const { ourUser, setOurUser } = useContext(AppContext);
  const [searchStr, setSearchStr] = useState("");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  // let isAuthenticated = false
  // let user = {email : 'omkar@12324'}
  // let ourUser = {name : 'omkar'}

  async function myOrderHandler() {
    let res = await axios.post(`${URL}/order`, { id: user.id });
    let data = res.data;
    dispatch(addOrder(data));
  }

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     addUser(user);
  //     axios.post(`${URL}/auth/login`, { email: user.email }).then((res) => setOurUser(res.data));
  //   }
  // }, [isAuthenticated, user, setOurUser]);

  // console.log(ourUser);

  return (
    <div className="header-layout">
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ backgroundColor: "white" }}
      >
        <Link className="navbar-brand d-flex" to={"/"}>
          <div className="logo mx-2">
            <img src="assets/logo.png" alt="logo" />
          </div>
          Rajdhani
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={"/order"}
                onClick={myOrderHandler}
              >
                My Order
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active px-2 dropdown-toggle"
                to={"/"}
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <Link
                  className="dropdown-item"
                  to={`/category/search/${"all"}`}
                >
                  All
                </Link>
                <Link className="dropdown-item" to={`/category/search/${1}`}>
                  Men
                </Link>
                <Link className="dropdown-item" to={`/category/search/${2}`}>
                  Women
                </Link>
                <Link className="dropdown-item" to={`/category/search/${3}`}>
                  Kids
                </Link>
              </div>
            </li>
          </ul>
          <div className="search">
            <input
              onChange={(e) => setSearchStr(e.target.value)}
              
              className="border-0"
              type="text"
              placeholder="Search"
            />
            <img src="/assets/search.png" alt="search" />
          </div>
          {/* <Link to={`/search/${searchStr}`} className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </Link> */}
          {user.isAuthenticated ? (
            <Link to="/userinfo" className="mx-2 logout nav-link ">{`Hi! ${
              user?.firstName[0].toUpperCase() + user?.firstName.slice(1)
            }`}</Link>
          ) : (
            <Link
              className="nav-link d-flex align-items-center login px-3 active"
              to={"/auth"}
              aria-current="page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              Account<span className="visually-hidden"></span>
            </Link>
          )}
           <Link
                className="pe-3 nav-link"
                to={"/cart"}
                aria-current="page"
              >
                Cart <span className="cart-count">{cart.length}</span>{" "}
                <span className="visually-hidden">(current)</span>
              </Link>
        </div>
      </nav>
      {"omkar" === "SuperUser" ? (
        <Link className="btn btn-danger" to={"/admin"}>
          Admin
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
