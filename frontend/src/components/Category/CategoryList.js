import React from 'react';

import CategoryItem from './CategoryItem';



const CategoryList = (props) => {
  return (
    <div>
      {
        props.categories.length === 0 ? (
          <p>No categories to show...!</p>
        ) : (
          props.categories.map(category => (
            <CategoryItem key={category.id} category={category} />
          ))
        )
      }
    </div>
  );
};

export default CategoryList;
