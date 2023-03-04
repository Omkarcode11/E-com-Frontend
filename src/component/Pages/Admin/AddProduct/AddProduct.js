import React, { useEffect, useState } from 'react';
import { URL } from '../../../../utils/BASE_URL';
import './AddProduct.css';
// import { BASE_URL } from './../../utils/baseURL';

export default function AddProduct() {
  const [product, setProduct] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  function dataHandler(e) {
    let productInfo = product;
    // console.log(productInfo);
    fetch(`${URL}/product/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    setName('');
    setDescription('');
    setPrice('');
    setCategory('')
  }
  useEffect(() => {
    setProduct({
      name: name,
      description: description,
      price: price,
      categoryId : category
    });
  }, [name, description, price,category]);
  return (
    <div className="add-product">
      <div className="form">
        <div>Name</div>
        <input
          //   required
          value={name}
          name="productName"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Product Name..."
          type={'text'}
        />
        <div>
          Description <span className="text-muted h6">(min 20 char)</span>
        </div>
        <input
          placeholder="description..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          name="description"
          type={'text'}
        />
        <div>Price </div>
        <input
          required
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          name="price"
          value={price}
          placeholder="price..."
          type={'Number'}
        />
        <div>Category Id </div>
        <input
          required
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          name="category"
          value={category}
          placeholder="enter category Id..."
          type={'Number'}
        />
      </div>
      <div className="buttons-login-signup">
        <button name="signup" onClick={dataHandler} className="btn btn-success ">
          Add Product
        </button>
      </div>
    </div>
  );
}
