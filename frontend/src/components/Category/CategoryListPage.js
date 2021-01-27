import React from 'react';
import { connect } from 'react-redux';

import CategoryFilter from './CategoryFilter';
import CategoryList from './CategoryList';
import { getSelectedCategories } from '../../store/selectors/index';



const CategoryListPage = (props) => {
  return (
    <div>
      <CategoryFilter />
      <CategoryList categories={props.categories} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: getSelectedCategories(state.category.categories, state.categoryFilters)
});
export default connect(mapStateToProps)(CategoryListPage);
