import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = React.forwardRef(
  ({ onClick, children, variant }, ref) => {
    const classes = ['fr-btn'];

    if (variant === 'secondary') {
      classes.push('fr-btn--secondary');
    }

    return (
      <button type="button" onClick={onClick} ref={ref} className={classes.join(' ')}>
        { children }
      </button>
    );
  }
);

ButtonLink.defaultProps = {
  onClick: null,
  variant: "primary",
};

ButtonLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default ButtonLink;
