import React from 'react';

import SubcategoryItem from './SubcategoryItem';


const SubcategoryList = (props) => {
  return (
    <div>
      {
        props.subcategories.length === 0 ? (
          <p>No subcategories to show...</p>
        ) : (
          props.subcategories.map(subcategory => (
            <SubcategoryItem key={subcategory.id} subcategory={subcategory} />
          ))
        )
      }
    </div>
  );
};

export default SubcategoryList;
