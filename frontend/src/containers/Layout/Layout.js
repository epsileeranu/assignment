import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';


const Layout = (props) => {
  return (
    <div className='app-layout'>
      <Toolbar />
      {/* <SideDrawer /> */}
      <main className='main'>
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
