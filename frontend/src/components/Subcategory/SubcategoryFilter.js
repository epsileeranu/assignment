import React from 'react';
import { connect } from 'react-redux';

import { setSubcategoryTextFilter, setCategoryId, setSortBySubcategoryTitle } from '../../store/actions/filter';


const SubcategoryFilter = (props) => {

  const onTextChange = (e) => {
    props.setSubcategoryTextFilter(e.target.value);
  }
  const onCategoryIdChange = (e) => {
    props.setCategoryId(e.target.value);
  }
  const onSortByTitleChange = (e) => {
    props.setSortBySubcategoryTitle(e.target.value);
  }

  return (
    <div>
      <input
        type='text'
        name='text'
        value={props.filters.text}
        onChange={onTextChange}
        placeholder='search subcategory name'
      />
      <input
        type='text'
        name='categoryId'
        value={props.filters.categoryId}
        onChange={onCategoryIdChange}
        placeholder='search by category id'
      />
      <select name="sortByTitle" onChange={onSortByTitleChange}>
        <option value="" >Select</option>
        <option value="titleAsc" >Title Asc</option>
        <option value="titleDesc">Title Desc</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.subcategoryFilters
});
const mapDispatchToProps = (dispatch) => ({
  setSubcategoryTextFilter: (text) => dispatch(setSubcategoryTextFilter(text)),
  setSortBySubcategoryTitle: (sortByTitle) => dispatch(setSortBySubcategoryTitle(sortByTitle)),
  setCategoryId: (categoryId) => dispatch(setCategoryId(categoryId))
});
export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryFilter);
