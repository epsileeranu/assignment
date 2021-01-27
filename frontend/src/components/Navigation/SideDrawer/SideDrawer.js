import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {
  let classes = ['sideDrawer', 'open'];
  if(props.showSideDrawer){
    classes = ['sideDrawer', 'close'];
  }

  return (
    <React.Fragment>
      <Backdrop showBackdrop={props.showSideDrawer} closeBackdropHandler={props.closeSideDrawerHandler} />
      <div className={classes.join(' ')}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </React.Fragment>
  );
}

export default SideDrawer;
