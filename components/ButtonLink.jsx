import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function ButtonLink({
  children, variant = "primary", href, target = null,
}) {
  const classes = ['fr-btn'];

  if (variant === 'secondary') {
    classes.push('fr-btn--secondary');
  }

  return (
    <Link href={href} className={classes.join(' ')} target={target} rel={target === '_blank' ? 'noreferrer noopener' : null}>
      { children }
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.string,
  target: PropTypes.string,
};
