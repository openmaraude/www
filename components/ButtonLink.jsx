import React from 'react';
import PropTypes from 'prop-types';

import styles from '@/styles/components/Button.module.css';

const ButtonLink = React.forwardRef(({ onClick, children }, ref) => {
  return (
    <button onClick={onClick} className="fr-btn">
      { children }
    </button>
  );
})

export default ButtonLink;
