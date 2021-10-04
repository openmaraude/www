import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = React.forwardRef(
  ({ onClick, children, variant }, ref) => (
    <button type="button" onClick={onClick} ref={ref} className={`fr-btn ${variant === "secondary" ? "fr-btn--secondary" : ""}`}>
      { children }
    </button>
  ),
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
