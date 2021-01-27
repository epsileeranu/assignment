import React from 'react';
import { connect } from 'react-redux';


const SingleCategoryPage = (props) => {

  const {id, title, description, image, status, createdAt, lastModifiedAt} = props.category;

  return (
    <React.Fragment>
      <div>
        Id: {id}
        Title: {title}
        description: {description}
        <img alt={image.desktop}  />
        display: {status.display}
        createdAt: {createdAt}
        lastModifiedAt: {lastModifiedAt}
      </div>
      <div>
        list all subcategories
      </div>
    </React.Fragment>

  );
};

const mapStateToProps = (state, props) => ({
  category: state.category.categories.find(
    category => category.id === props.categoryId
  )
});
export default connect(mapStateToProps)(SingleCategoryPage);
