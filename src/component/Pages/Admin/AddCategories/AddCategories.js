import React, { useEffect, useState } from 'react';
import { URL } from '../../../../utils/BASE_URL';
import './AddCategories.css';
// import { BASE_URL } from './../../utils/baseURL';

export default function AddCategories() {
  const [category, setCategory] = useState({});
  const [name, setName] = useState('');

  function dataHandler(e) {
    let productInfo = category;
    // console.log(productInfo);
    fetch(`${URL}/category/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    setName('');
  }
  useEffect(() => {
    setCategory({
      name: name,
    });
  }, [name]);
  return (
    <div className="add-product">
      <div className="form">
        <div>category</div>
        <input
          //   required
          value={name}
          name="productName"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="category name..."
          type={'text'}
        />
      </div>
      <div className="buttons-login-signup">
        <button name="signup" onClick={dataHandler} className="btn btn-success ">
          Add Category
        </button>
      </div>
    </div>
  );
}
