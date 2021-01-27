import React from 'react';
import { connect } from 'react-redux';

import SubcategoryFilter from './SubcategoryFilter';
import SubcategoryList from './SubcategoryList';
import { getSelectedSubcategories } from '../../store/selectors/index';


const SubcategoryListPage = (props) => {
  return (
    <div>
      <SubcategoryFilter />
      <SubcategoryList subcategories={props.subcategories} />
    </div>
  );
};


const mapStateToProps = (state) => ({
  subcategories: getSelectedSubcategories(state.subcategory.subcategories, state.subcategoryFilters)
});
export default connect(mapStateToProps)(SubcategoryListPage);
