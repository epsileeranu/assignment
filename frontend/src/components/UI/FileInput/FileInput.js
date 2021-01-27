import React from 'react';
import { SVG } from 'css.gg';

const FileInput = (props) => {
  return (
    <div>
      <div>
        <label htmlFor='single'>
          <svg width="24" height="24"><use xlinkHref={SVG + '#gg-IMAGE'} /></svg>
        </label>
        <input type='file' id='single' onChange={props.onChange} multiple />
      </div>
    </div>
  );
};

export default FileInput;
