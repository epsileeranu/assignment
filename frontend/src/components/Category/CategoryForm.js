import React, { useState } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';
import FileUpload from '../Utils/FileUpload/FileUpload';

const CategoryForm = () => {

  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState({});

  const onFormSubmit = (e) => {
    e.preventDefault();

  }

  let form = null;
  form =
    <form onSubmit={onFormSubmit}>
      <Input
        name='categoryName'
        type='text'
        value={categoryName}
        placeholder='Category name'
        error={error.categoryName}
        classNames={['input']}
        onChange={(e) => setCategoryName(e.target.value)}
        required
      />
      <Textarea
        classNames={[]}
        name='description'
        maxLength={100}
        placeholder='Category description'
        value={description}

        onChange={(e) => setDescription(e.target.value)}
      />
      <FileUpload />
      <Button
        classNames={['button', 'button--small']}
      >
        Submit
      </Button>
    </form>
  ;

  return (
    <div>
      CategoryForm
      {form}
    </div>
  );
};

export default CategoryForm;
