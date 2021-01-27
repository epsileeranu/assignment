import React from 'react';


const Backdrop = (props) => {

  return (
    <div>
      {props.showBackdrop && (
        <div
          className='backdrop'
          onClick={props.closeBackdropHandler}
        >
        </div>
      )}
    </div>
  );
}

export default Backdrop;
