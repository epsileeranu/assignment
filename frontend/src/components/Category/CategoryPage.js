import React from 'react';
import { useLocation } from 'react-router-dom';

import ViewCategoryPage from './ViewCategoryPage';
import AddCategoryPage from './AddCategoryPage';
import EditCategoryPage from './EditCategoryPage';


const CategoryPage = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const routeObjects = [
    {title: 'view', searchParamKey: 'view', component: ViewCategoryPage},
    {title: 'add', searchParamKey: 'add', component: AddCategoryPage},
    {title: 'edit', searchParamKey: 'edit', component: EditCategoryPage},
  ];

  const routeObject = routeObjects.find(item => searchParams.has(item.searchParamKey));

  return (
    <React.Fragment>
      <routeObject.component />
    </React.Fragment>
  );
};

export default CategoryPage;
