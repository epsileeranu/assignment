import React from 'react';




const ProductItem = (props) => {

  const {subcategoryId,
    sellerId, title,
    description, status,
    rating, price,
    sale, images,
    shipping, tags,
    count, createdAt,
    lastModifiedAt} = props.product;

  return (
    <div>
      <p>SubcategoryId: {subcategoryId}</p>
      <p>SellerId: {sellerId}</p>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Display: {status.display}</p>
      <p>Rating: {rating.avgRating}</p>
      <p>NumberOfPeopleRated: {rating.numberOfRatings}</p>
      <p>Price: {sale.saleEndAt > new Date() ? sale.price : price}</p>
      <img alt={images[0]}  />
      <p>Product Specification : height:{shipping.height} width:{shipping.width} length:{shipping.length} weight:{shipping.weight}</p>
      <p>Tags: {tags.join(", ")}</p>
      <p>ProductCount: {count}</p>
      <p>createdAt: {createdAt}
      lastModifiedAt: {lastModifiedAt}
      </p>
    </div>
  );
};

export default ProductItem;
