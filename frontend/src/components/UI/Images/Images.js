import React from 'react';
import { SVG } from 'css.gg';

const Images = (props) => {

  let images = props.images.map((image, index) => {
    return (
      <div key={index}>
        <div
          onClick={() => props.removeImage(image.public_id)}
        >
          <svg width="24" height="24"><use xlinkHref={SVG + '#gg-REMOVE'} /></svg>
        </div>
          <img src={image.secure_url} alt='uploaded' />
      </div>
    );
  });



  return (
    <React.Fragment>
      {images}
    </React.Fragment>
  );
};

export default Images;
