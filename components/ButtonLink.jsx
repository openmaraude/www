import React from 'react';

import styles from '../styles/components/Button.module.css';

export default function ButtonLink({ href, children }) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
}
