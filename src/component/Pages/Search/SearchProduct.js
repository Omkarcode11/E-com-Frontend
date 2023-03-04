import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../../utils/Card/ProductCard/ProductCard';
import './SearchProduct.css';
import axios from 'axios';
import { URL } from '../../../utils/BASE_URL';
import Filter from '../../Filter/Filter';

function SearchProduct() {
  const [searchProducts, setSearchProducts] = useState([]);
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });
  const search = useParams();

  async function loadSearchProducts(search) {
    console.log(search.name);
    let products = await axios.get(`${URL}/search/${search.name}`);
    console.log(products);
    setSearchProducts(products.data);
  }

  useMemo(() => {
    loadSearchProducts(search);
  }, [search]);

  useEffect(() => {
    console.log(filter);
  }, [search, filter]);

  return searchProducts ? (
    <div className="search-layout">
      <div className='filter-layout'>
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <h3 className="mx-4 ">Search by {search.name}</h3>
        <div className="search-products">
          {searchProducts
            ?.filter((item) =>item.price <= filter.maxPrice && item.price >= filter.minPrice
            )
            .map((item) => (
              <ProductCard
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                description={item.description}
                id={item.id}
                categoryId={item.categoryId}
              />
            ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="main-item">
      <div className="static-background">
        <div className="background-masker btn-divide-left"></div>
      </div>

      <div className="my-3 animated-background">
        <div className="background-masker btn-divide-left"></div>
      </div>
      <div className=" my-3 animated-background">
        <div className="background-masker btn-divide-left"></div>
      </div>
    </div>
  );
}

export default SearchProduct;
