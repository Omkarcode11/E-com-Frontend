import axios from 'axios';
import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../../utils/BASE_URL';
import ProductCard from '../../utils/Card/ProductCard/ProductCard';
import Filter from '../Filter/Filter';
import './CategoryProducts.css';

function CategoryProducts() {
  let [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });
  let id = useParams();

  async function getProductsByCategoryId(id) {
    let allProducts = await axios.get(`${URL}/category/search/${id}`);
    setData(allProducts.data);
  }

  useMemo(
    () => getProductsByCategoryId(id.id),

    [id.id]
  );

  return (
    <div className="search-category-with-filter">
      <div>
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <div className="search-category-layout">
          <h4 className="mx-4">{data.category !== 'All' ? data?.category?.category : data.category}'s Wear</h4>
          <div className="search-category-product-layout">
            {data.products
              ?.filter((item) => item.price > filter.minPrice && item.price < filter.maxPrice)
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
    </div>
  );
}

export default CategoryProducts;
