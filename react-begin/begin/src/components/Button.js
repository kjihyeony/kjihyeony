import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({className, children, size, color, outline, fullWidth, onClick }) {
  return (
    <button onClick={onClick} className={classNames('Button', className, size, color, {outline, fullWidth})}>{children}</button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;