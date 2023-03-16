import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ logOrSign, setLogOrSigh }) {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  function fillData(e) {
    let inputField = e.target.name;
    let value = e.target.value;
    let newData = { ...data };
    newData[inputField] = value;
    setData(newData);
  }

  async function login(data) {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user.firstName === data.firstName) {
  
      if (user.password === data.password) {
        localStorage.setItem('isAuthenticated',JSON.stringify(true ))
        navigate("/");
      }
    }
  }

  useEffect(() => {
    let isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log(isAuthenticated);
    if (JSON.parse(isAuthenticated)) {
      navigate("/");
    } else {
      console.log("please login");
    }
  }, []);

  return (
    <div className="login-layout">
      <h1 className="login-heading">Login</h1>
      <div>
        <div className="login-form" onChange={(e) => fillData(e)}>
          <input
            className="login-name-input px-2"
            name="firstName"
            type={"text"}
            placeholder="First Name"
          />
          <input
            className="login-name-input px-2"
            name="password"
            type={"password"}
            placeholder="Password"
          />
        </div>
        <buttons className="login-buttons">
          <div>
            <button
              onClick={() => setLogOrSigh(!logOrSign)}
              className="btn btn-primary log-btn"
            >
              SignUp
            </button>
          </div>
          <div>
            <button
              className="btn btn-success log-btn"
              onClick={() => login(data)}
            >
              Login
            </button>
          </div>
        </buttons>
      </div>
    </div>
  );
}
