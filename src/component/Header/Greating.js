import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function Greating() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
  const { cart } = useContext(AppContext);
  const user = JSON.parse(localStorage.getItem("rajdhaniUser"));
  const localST = localStorage.getItem("isAuthenticated");
  useEffect(() => {
    setIsAuthenticated(localST);
  }, [localST, setIsAuthenticated]);
  if (isAuthenticated==='true') {
    return (
      <>
        <Link
          to="/userinfo"
          className="mx-2 logout nav-link text-muted px-2"
        >{`Hi! ${
          user?.firstName[0].toUpperCase() + user?.firstName.slice(1)
        }`}</Link>
        <Link className="pe-3 nav-link" to={"/cart"} aria-current="page">
          Cart
          {cart?.length > 0 && (
            <span className="cart-count bg-warning m-1">{cart.length}</span>
          )}
        </Link>
      </>
    );
  } else if (isAuthenticated === 'false') {
    return (
      <>
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
            className="bi bi-person-circle mx-1"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          Account<span className="visually-hidden"></span>
        </Link>
        <Link className="pe-3 nav-link" to={"/cart"} aria-current="page">
          Cart
          {cart?.length > 0 && (
            <span className="cart-count bg-warning m-1">{cart.length}</span>
          )}
        </Link>
      </>
    );
  }
}

export default Greating;
