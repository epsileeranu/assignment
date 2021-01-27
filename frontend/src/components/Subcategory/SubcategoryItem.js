import React from 'react';




const SubcategoryItem = (props) => {

  const {categoryId, title, description, image, status, createdAt, lastModifiedAt} = props.subcategory;

  return (
    <div>
      CategoryId: {categoryId}
      Title: {title}
      description: {description}
      <img alt={image.desktop}  />
      display: {status.display}
      createdAt: {createdAt}
      lastModifiedAt: {lastModifiedAt}
    </div>
  );
};

export default SubcategoryItem;
