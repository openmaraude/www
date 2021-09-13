import React from 'react';
import PropTypes from 'prop-types';

import styles from '@/styles/components/Button.module.css';

export default function ButtonLink({ href, children, variant }) {
  return (
    <a className={variant === 'light' ? styles.buttonLight : styles.button} href={href}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  variant: 'normal',
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
