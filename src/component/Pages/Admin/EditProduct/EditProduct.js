import React, { useEffect, useState } from 'react';
import { URL } from '../../../../utils/BASE_URL';
import './EditProduct.css';
// import { BASE_URL } from './../../utils/baseURL';

export default function EditProduct() {
  const [product, setProduct] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [productId, setProductId] = useState('');

  function dataHandler(e) {
    let productInfo = product;
    fetch(`${URL}/product/edit`, {
      method: 'PUT',
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
    setProductId('');
  }
  useEffect(() => {
    setProduct({
      id: productId,
      name: name,
      description: description,
      price: price,
    });
  }, [name, description, price, productId]);
  return (
    <div className="add-product">
      <div className="form">
        <h3 className="box-header">Edit Product</h3>
        <div>Product Id</div>
        <input
          //   required
          value={productId}
          name="productId"
          onChange={(e) => {
            setProductId(e.target.value);
          }}
          placeholder="Product id..."
          type={'number'}
        />
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
      </div>
      <div className="buttons-login-signup">
        <button name="signup" onClick={dataHandler} className="btn btn-success ">
          Edit Product
        </button>
      </div>
    </div>
  );
}
