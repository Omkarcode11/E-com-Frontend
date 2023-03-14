import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../../../redux/feature/userSlice";
import { URL } from "../../../../utils/BASE_URL";
import "./Login.css";

export default function Login({ logOrSign, setLogOrSigh }) {
  const dispatch = useDispatch();
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
    // let getData = await axios.post(`${URL}/auth/login`, data);
    let user = JSON.parse(localStorage.getItem('user'))
      if(user.phone === data.email){
          dispatch(addUser({...user,isAuthenticated:true}))
        if(user.password===data.password){
          navigate('/')
        }
      }

    // if (getData.statusText === "OK") {
    //   navigate("/");
    // }
  }

  return (
    <div className='login-layout'>
      <h1 className='login-heading'>Login</h1>
      <div>

      <div
        className='login-form'
        onChange={(e) => fillData(e)}>
        <input
          className='login-name-input px-2'
          name='email'
          type={"Number"}
          placeholder='Phone Number'
        />
        <input
          className='login-name-input px-2'
          name='password'
          type={"password"}
          placeholder='Password'
        />
      </div>
      <buttons className='login-buttons'>
        <div>
          <button
            onClick={() => setLogOrSigh(!logOrSign)}
            className='btn btn-primary log-btn'>
            SignUp
          </button>
        </div>
        <div>
          <button
            className='btn btn-success log-btn'
            onClick={() => login(data)}>
            Login
          </button>
        </div>
      </buttons>
              </div>
    </div>
  );
}
