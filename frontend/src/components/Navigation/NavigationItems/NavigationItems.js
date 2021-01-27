import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import { BrowserRouter } from 'react-router-dom';


const NavigationItems = () => {
  return (
    <BrowserRouter>
      <ul className='navigation-items'>
        <NavigationItem link='/' exact >Account</NavigationItem>
        <NavigationItem link='/cart' exact >Cart</NavigationItem>
      </ul>
    </BrowserRouter>
  );
}

export default NavigationItems;
