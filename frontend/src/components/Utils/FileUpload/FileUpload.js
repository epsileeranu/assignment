import React, { useState } from 'react';

import FileInput from '../../UI/FileInput/FileInput';
import Images from '../../UI/Images/Images';
import Spinner from '../../UI/Spinner/Spinner';


const FileUpload = () => {

  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);

  const onFileChange = (e) => {
    setUploading(true);

    const files = Array.from(e.target.files);
    const formData = new FormData();

    for (const [index, file] of files.entries()) {
      formData.append(index, file);
    }

  }
  const onRemoveImage = () => {

  };

  const content = () => {
    switch(true){
      case uploading:
        return <Spinner />;
      case images.length > 0:
        return <Images images={images} removeImage={onRemoveImage} />;
      default:
        return <FileInput onChange={onFileChange} />
    }
  };

  return (
    <React.Fragment>
      <div className='button'>
        {content()}
      </div>
    </React.Fragment>
  );
};

export default FileUpload;
