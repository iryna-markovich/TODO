import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Button = ({ children, variety, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[variety]}`}>
      {children}
    </button>
  );
};

Button.propTypess = {
  children: PropTypes.string.isRequired,
  variety: PropTypes.oneOf(['danger', 'regular']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
