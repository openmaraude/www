import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = React.forwardRef(
  ({
    children, variant, href, target,
  }, ref) => {
    const classes = ['fr-btn'];

    if (variant === 'secondary') {
      classes.push('fr-btn--secondary');
    }

    return (
      <a href={href} ref={ref} className={classes.join(' ')} target={target} rel={target === '_blank' ? 'noreferrer noopener' : null}>
        { children }
      </a>
    );
  },
);

ButtonLink.defaultProps = {
  variant: "primary",
  href: null,
  target: null,
};

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default ButtonLink;
