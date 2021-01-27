import React, { useState } from 'react';

import DrawerToggle from '../DrawerToggle/DrawerToggle';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import SearchBox from './SearchBox/SearchBox';
import Logo from '../../UI/Logo/Logo';

const Toolbar = () => {

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <header className='toolbar'>
      <div className='toolbar__first'>
        <div className='toolbar__drawer_toggle'>
            <DrawerToggle openSideDrawerHandler={() => {setShowSideDrawer(false)}} />
          <div>
            <Logo />
          </div>
        </div>
        <div className='toolbar__desktop-search-box'>
          <SearchBox />
        </div>
        <div className='toolbar_nav'>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </div>
      <div className='toolbar__second toolbar__mobile-search-box'>
        <SearchBox />
      </div>
    </header>
  );
}

export default Toolbar;
