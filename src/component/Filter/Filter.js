import React from 'react';
import './Filter.css'

function Filter({ filter, setFilter }) {
  return (
    <div className='filter-layout-1'>
      <div>
        <div>
          Min Price
          <input
            type={'number'}
            className="max-price"
            onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
            value={filter.minPrice}
          />
        </div>
        <div>
          Max Price
          <input
            type={'number'}
            className="max-price"
            onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
