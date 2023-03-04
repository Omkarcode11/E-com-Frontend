// import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { URL } from '../../utils/BASE_URL';
import './UserDetail.css';

function UserDetail() {
  const navigate = useNavigate();
  const user = {
  
  }
  const isAuthenticated = false
  const logout = false
  const { ourUser, setOurUser } = useContext(AppContext);
  // const { isAuthenticated, logout, user } = useAuth0();

  const [newInfo, setNewInfo] = useState({
    phone: null,
    address: '',
    pinCode: null,
    email: user.email,
  });

  async function editUserHandler() {
    await axios.patch(`${URL}/auth/edit`, newInfo);
    getUserInfo(user);
  }

  async function getUserInfo(user) {
    let userinfo = await axios.post(`${URL}/auth/login`, { email: user.email });
    setOurUser(userinfo.data);
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    } else {
      getUserInfo(user);
    }
  }, [isAuthenticated, user]);


  return (
    <div className="userDetail-layout">
      <div className="top-section">
        <div className="user-image-container">
          <img src={user.picture} className="user-image" alt="user pic" />
        </div>
        <div>
          <h3>Name: {user.name}</h3>
          <div>Email: {user.email}</div>
          <div>Address: {ourUser.address}</div>
          <div>Phone: {ourUser.phone}</div>
          <div>City Code:{ourUser.pinCode}</div>
        </div>
      </div>

      <h2>Change Information</h2>
      <div className="user-info-edit">
        <h5>Phone</h5>
        <input
          type={'Number'}
          onChange={(e) => setNewInfo({ ...newInfo, phone: e.target.value })}
          placeholder="new phone"
        />
        <h5>Address</h5>
        <input
          type={'text'}
          onChange={(e) => setNewInfo({ ...newInfo, address: e.target.value })}
          placeholder="new address"
        />
        <h5>Pin Code</h5>
        <input
          type={'number'}
          onChange={(e) => setNewInfo({ ...newInfo, pinCode: e.target.value })}
          placeholder="new address"
        />
        <div className="user-buttons">
          <button onClick={() => logout()} className="btn btn-danger">
            Logout
          </button>
          <button onClick={() => editUserHandler()} className="btn btn-warning">
            Change info
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
