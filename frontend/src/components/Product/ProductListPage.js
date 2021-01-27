import React from 'react';
import { connect } from 'react-redux';

import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import { getSelectedProducts } from '../../store/selectors/index';


const ProductListPage = (props) => {
  return (
    <div>
      <ProductFilter />
      <ProductList products={props.products} />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    products: getSelectedProducts(state.product.products, state.productFilters)
  }
};
export default connect(mapStateToProps)(ProductListPage);
