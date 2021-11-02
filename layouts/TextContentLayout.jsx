import PropTypes from 'prop-types';
import React from 'react';

import BaseLayout from '@/layouts/BaseLayout';

import styles from '@/styles/layouts/TextContent.module.css';

function getMenu(items, root) {
  // If any of the items has submenus, use <ul> otherwise <ol>
  const List = items.filter((item) => item.submenus).length ? 'ul' : 'ol';
  const getLink = (item) => `#${[...root, item.title].join('_')}`;

  return (
    <List>
      {items.map((item) => (
        <li key={[...root, item.title].join('_')}>
          {!item.submenus && <a href={getLink(item)}>{item.title}</a>}

          {item.submenus && (
            <>
              <a className={styles.topMenu} href={getLink(item)}>{item.title}</a>
              {getMenu(item.submenus, [...root, item.title])}
            </>
          )}
        </li>
      ))}
    </List>
  );
}

export function Menu({ title, items }) {
  return (
    <nav className={`fr-col-12 fr-col-md-3 ${styles.nav}`}>
      <h6>{title}</h6>
      {getMenu(items, [])}
    </nav>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
