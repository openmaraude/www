import React from 'react';

import styles from '../styles/components/Button.module.css';

export default function ButtonLink({ href, children, variant }) {
  return (
    <a className={variant === 'light' ? styles.buttonLight: styles.button} href={href}>
      {children}
    </a>
  );
}
