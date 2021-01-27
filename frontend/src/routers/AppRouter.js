import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import FirstContainer from '../containers/FirstContainer/FirstContainer';
import AllPhotos from '../components/FirstComponent/AllPhotos';
// import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Footer from '../components/Navigation/Footer/Footer';
import CategoryPage from '../components/Category/CategoryPage';
import SubcategoryListPage from '../components/Subcategory/SubcategoryListPage';
import ProductListPage from '../components/Product/ProductListPage';


const history = createBrowserHistory({
  basename: '',
  forceRefresh: false
});

const AppRouter = () => (
  <Router history={history}>
    <div className='page-container'>
      {/* <Toolbar /> */}
      <div className='content-wrap'>
        <Switch>
          <Route path='/' exact component={FirstContainer} />
          <Route path='/second' exact component={AllPhotos} />

          <Route path='/category' exact component={CategoryPage} />
          <Route path='/subcategory' exact component={SubcategoryListPage} />
          <Route path='/product' exact component={ProductListPage} />

        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
