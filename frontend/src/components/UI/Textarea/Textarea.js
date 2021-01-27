import React from 'react';

const Textarea = ({
  classNames,
  disabled,
  name,
  maxLength,
  placeholder,
  required,
  value,

  onChange,
  ...props
}) => {
  return (
    <textarea
      className={classNames.join(' ')}
      disabled={disabled}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      required={required}
      value={value}

      onChange={onChange}
    />
  );
};
Textarea.defaultProps = {
  classNames: [],
  disabled: false,
  required: true
}

export default Textarea;
