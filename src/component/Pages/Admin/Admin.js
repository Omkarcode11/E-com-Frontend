import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'
function Admin() {
  return (
    <div className='adminMenu'>
    <div>
    <Link className='btn btn-warning m-3' to={"/add-product"}>
    Add Product
    </Link>
    </div>
    <div>
    <Link className='btn btn-primary m-3' to={"/add-categories"}>
    Add Categories
    </Link>
    </div>
    <div>
    <Link className='btn btn-secondary m-3' to={"/edit-product"}>
    Edit Product
    </Link>
    </div>

    </div>
  )
}

export default Admin