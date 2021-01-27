import React from 'react';

import PropTypes from 'prop-types';


const Button = ({
  classNames,
  disabled,
  onClick,
  ...props
}) => (
  <button
    className={classNames.join(' ')}
    disabled={disabled ? 'disabled': ''}
    onClick={onClick}
  >
    {props.children}
  </button>
);
Button.defaultProps = {
  classNames: ['button'],
  disabled: ''
};

export default Button;
