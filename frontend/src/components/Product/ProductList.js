import React from 'react';

import ProductItem from './ProductItem';


const ProductList = (props) => {
  return (
    <div>
      {
        props.products.length === 0 ? (
          <p>No products to show...</p>
        ) : (
          <div>
            <p>Total: {props.products.length}</p>
            {
              props.products.map(product => (
                <ProductItem key={product.id} product={product} />
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default ProductList;
