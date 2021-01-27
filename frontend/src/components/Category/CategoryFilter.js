import React from 'react';
import { connect } from 'react-redux';

import { setCategoryTextFilter, setSortByCategoryTitle } from '../../store/actions/filter';


const CategoryFilter = (props) => {

  const onTextChange = (e) => {
    props.setCategoryTextFilter(e.target.value);
  }
  const onSortByTitleChange = (e) => {
    props.setSortByCategoryTitle(e.target.value);
  }

  return (
    <div>
      <input
        type='text'
        name='text'
        value={props.filters.text}
        onChange={onTextChange}
        placeholder='search category name'
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
  filters: state.categoryFilters
});
const mapDispatchToProps = (dispatch) => ({
  setCategoryTextFilter: (text) => dispatch(setCategoryTextFilter(text)),
  setSortByCategoryTitle: (sortByTitle) => dispatch(setSortByCategoryTitle(sortByTitle))
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
