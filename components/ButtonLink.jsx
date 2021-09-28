import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = React.forwardRef(({ onClick, children, variant }, ref) => {
  return (
    <button onClick={onClick} className={`fr-btn ${variant === "secondary" ? "fr-btn--secondary" : ""}`}>
      { children }
    </button>
  );
});

ButtonLink.defaultProps = {
  variant: "primary",
};

ButtonLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default ButtonLink;
