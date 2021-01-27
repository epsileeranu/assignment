import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  setProductTextFilter,
  setSubcategoryId,
  // setSellerId,
  setLowPrice,
  setHighPrice,
  unsetPrice,
  setSortByProductTitle,
  setSortByProductPrice,
  addRatingCount,
  removeRatingCount,
  unsetRating
} from '../../store/actions/filter';


const ProductFilter = (props) => {

  const onTextChange = (e) => {
    props.setProductTextFilter(e.target.value);
  }
  const onSubcategoryIdChange = (e) => {
    props.setSubcategoryId(e.target.value);
  }

  // sort handler
  const onSortByChange = (e) => {
    const sortBy = e.target.value;
    sortBy.includes('price') ? props.setSortByProductPrice(sortBy) : props.setSortByProductTitle(sortBy);
  }

  // price handler
  const [minPrice, setMinPrice] = useState(props.filters.lowPrice);
  const onMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    props.setLowPrice(e.target.value);
  }
  const [maxPrice, setMaxPrice] = useState(props.filters.highPrice);
  const onMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    props.setHighPrice(e.target.value);
  }
  const onUnsetPriceChange = () => {
    props.unsetPrice();
    setMinPrice(0);
    setMaxPrice(Infinity);
  }

  // rating handler
  const onRatingChange = (e) => {
    if(e.target.checked){
      props.addRatingCount(parseInt(e.target.value));
    }else{
      props.removeRatingCount(parseInt(e.target.value));
    }
  }
  const onUnsetRating = () => {
    props.unsetRating();
  }


  return (
    <div>
      <input
        type='text'
        name='text'
        value={props.filters.text}
        onChange={onTextChange}
        placeholder='search product name'
      />
      <input
        type='text'
        name='subcategoryId'
        value={props.filters.subcategoryId}
        onChange={onSubcategoryIdChange}
        placeholder='search by subcategory id'
      />
      <select name="sortBy" onChange={onSortByChange}>
        <option value="" >choose sort by</option>
        <option value="priceAsc" >Price Asc</option>
        <option value="priceDesc" >Price Desc</option>
        <option value="titleAsc" >Title Asc</option>
        <option value="titleDesc">Title Desc</option>
      </select>

      <div>
        <input type="text" name="price-min-input" id="price-min-input" value={minPrice} onChange={onMinPriceChange} />
        <input type="range" name="price-min" id="price-min" value={minPrice} min={0} max={1000} onChange={onMinPriceChange}/>
        <input type="range" name="price-max" id="price-min" value={maxPrice} min={1000} max={2000} onChange={onMaxPriceChange}/>
        <input type="text" name="price-max-input" id="price-max-input" value={maxPrice} onChange={onMaxPriceChange} />
        {
        (props.filters.lowPrice !== 0 || props.filters.highPrice !== Infinity ) &&
        <div>
          <input type="checkbox" name="unset-price" id="unset-price" onChange={onUnsetPriceChange}
          checked={props.filters.lowPrice !== 0 || props.filters.highPrice !== Infinity }
          />
          <label htmlFor="unset-price">Unset Price</label>
        </div>
        }
      </div>
      <div>
        {
          [1,2,3,4,5].map(rating => (
            <div key={rating}>
              <label htmlFor={'rating' + rating}>{rating}*</label>
              <input type="checkbox" name="rating" id={rating} value={rating} checked={props.filters.ratings.includes(rating)} onChange={onRatingChange} />
            </div>
          ))
        }
        {
          (props.filters.ratings.length !== 0) &&
          <div>
            <input type="checkbox" name="unsetRating" id="unsetRating" onChange={onUnsetRating}
              checked={props.filters.ratings.length !== 0}
            />
            <label htmlFor="unsetRating">Unset rating</label>
          </div>
        }
      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.productFilters
});
const mapDispatchToProps = (dispatch) => ({
  setProductTextFilter: (text) => dispatch(setProductTextFilter(text)),
  setSortByProductTitle: (sortBy) => dispatch(setSortByProductTitle(sortBy)),
  setSortByProductPrice: (sortBy) => dispatch(setSortByProductPrice(sortBy)),
  setSubcategoryId: (subcategoryId) => dispatch(setSubcategoryId(subcategoryId)),
  setLowPrice: (lowPrice) => dispatch(setLowPrice(lowPrice)),
  setHighPrice: (highPrice) => dispatch(setHighPrice(highPrice)),
  unsetPrice: () => dispatch(unsetPrice()),
  addRatingCount: (rating) => dispatch(addRatingCount(rating)),
  removeRatingCount: (rating) => dispatch(removeRatingCount(rating)),
  unsetRating: () => dispatch(unsetRating())
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);
