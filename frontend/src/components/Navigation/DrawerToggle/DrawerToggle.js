import React from 'react';


const DrawerToggle = (props) => {

  return (
    <div className='drawer-toggle' onClick={props.openSideDrawerHandler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default DrawerToggle;
