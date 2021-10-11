import PropTypes from 'prop-types';
import React from 'react';

import BaseLayout from '@/layouts/BaseLayout';

import styles from '@/styles/layouts/TextContent.module.css';

export function Menu({ title, items }) {
  return (
    <nav className={`fr-col-12 fr-col-md-3 ${styles.nav}`}>
      <h6>{title}</h6>
      <ul>
        {items.map((item) => <li key={item.title}><a href={`#${item.title}`}>{item.title}</a></li>)}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.instanceOf({})).isRequired,
};

export function Content({ children }) {
  return (
    <div className="fr-col">
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function TextContentLayout({ children }) {
  return (
    <BaseLayout>
      <div className="fr-container">
        <div className={`fr-grid-row fr-grid-row--gutters fr-pt-3w fr-pb-3w ${styles.content}`}>
          {children}
        </div>
      </div>
    </BaseLayout>
  );
}

TextContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
