import React, { useEffect } from 'react';
import Backdrop from '../Backdrop/Backdrop';


const Modal = (props) => {

  useEffect(() => {
    console.log('[Modal] Update', props);
  });

  return (
    <React.Fragment>
      <Backdrop showBackdrop={props.showModal} closeBackdropHandler={props.closeModalHandler} />
      <div
        className='modal'
        style={
          {
            transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.showModal ? '1' : '0'
          }
        }
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
