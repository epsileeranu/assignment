import React from 'react';
import { useLocation } from 'react-router-dom';

import CategoryListPage from './CategoryListPage';
import SingleCategoryPage from './SingleCategoryPage';


const ViewCategoryPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const searchParamValue = searchParams.get('view');
  const component = searchParamValue === 'all' ?
    <CategoryListPage /> :
    <SingleCategoryPage categoryId={searchParamValue} />;

  return (
    <React.Fragment>
      {component}
    </React.Fragment>
  );
};

export default ViewCategoryPage;
