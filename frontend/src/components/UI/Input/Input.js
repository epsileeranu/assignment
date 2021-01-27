import React from 'react';
import PropTypes from 'prop-types';


const Input = ({
  name,
  type,
  placeholder,
  value,
  label,

  error,
  classNames,
  children,

  onChange,
  ...props
}) => {

  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={classNames.join(' ')}
        style={error ? {border: '1px solid red'} : {}}

        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </React.Fragment>
  );
}
Input.defaultProps = {
  type: 'text',
  classNames: ['input']
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  classNames: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}
export default Input;
