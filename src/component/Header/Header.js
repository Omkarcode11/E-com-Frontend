import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Greating from "./Greating";
import "./Header.css";

function Header() {
  const [searchStr, setSearchStr] = useState("");
  const navigate = useNavigate();

  function search(str) {
    navigate(`/search/${str}`);
    setSearchStr("");
  }

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
        <div className="collapse navbar-collapse mx-3" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={"/order"}
                // onClick={myOrderHandler}
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
              onKeyDownCapture={(e) => e.key === "Enter" && search(searchStr)}
              className="border-0 input-search"
              type="text"
              value={searchStr}
              placeholder="Search"
            />
            <img
              src="/assets/search.png"
              alt="search"
              onClick={() => search(searchStr)}
            />
          </div>
          <Greating />
        </div>
      </nav>
    </div>
  );
}

export default Header;
