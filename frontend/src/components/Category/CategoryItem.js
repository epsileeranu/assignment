import React from 'react';

const CategoryListItem = (props) => {

  const {title, description, image, status, createdAt, lastModifiedAt} = props.category;

  return (
    <div>
      Title: {title}
      description: {description}
      <img alt={image.desktop}  />
      display: {status.display}
      createdAt: {createdAt}
      lastModifiedAt: {lastModifiedAt}
    </div>
  );
};

export default CategoryListItem;
