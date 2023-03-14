// import axios from "axios";
import React, { useState } from "react";
// import { URL } from "../../../../utils/BASE_URL";
import "./Signup.css";

function Signup({ logOrSign, setLogOrSigh }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  
  function setValues(e) {
    let value = e.target.value;
    let tagName = e.target.name;
    let newData = userData;
    newData[tagName] = value;
    setUserData(newData);
    console.log(userData);
  }
  

  async function addUserDb(userData) {
    // let addUser = await axios.post(`${URL}/auth/signup`, userData);
    localStorage.setItem('user',JSON.stringify(userData))
    // console.log(addUser)
    if (localStorage.getItem('user')) {
      setLogOrSigh(!logOrSign);
    }
  }

  return (
    <div className='signup-layout'>
      <h1 className='signup-heading'>Signup</h1>
      <div
        className='signup-form'
        onChange={(e) => setValues(e)}>
         <div className="user-name">
        <input
          name='firstName'
          className='signup-name-input col-6 px-2'
          placeholder='First Name'
          type={"text"}
          />
        <input
          name='lastName'
          className='signup-name-input col-6 px-2'
          placeholder='Last Name'
          type={"text"}
          />
          </div>
        <input
          name='email'
          className='signup-name-input px-2'
          placeholder='Email'
          type={"email"}
        />
        <input
          name='phone'
          className='signup-name-input px-2'
          placeholder='Phone'
          type={"number"}
        />
        <input
          name='address'
          className='signup-name-input px-2'
          placeholder='Address'
          type={"text"}
        />
        <input
          className='signup-name-input px-2'
          placeholder='Password'
          name='password'
          type={"password"}
        />
      </div>
      <buttons className='signup-buttons'>
        <div>
          <button
            onClick={() => setLogOrSigh(!logOrSign)}
            className='btn btn-primary log-btn'>
            Login
          </button>
        </div>
        <div>
          <button
            onClick={() => addUserDb(userData)}
            className='btn btn-success log-btn'>
            Signup
          </button>
        </div>
      </buttons>
    </div>
  );
}

export default Signup;
