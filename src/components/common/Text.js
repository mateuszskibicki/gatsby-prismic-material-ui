import React from "react";
import PropTypes from "prop-types";

export const Text = props => {
  const { h1, h2, h3, h4, h5, h6, bold, className } = props;

  if (h1)
    return (
      <h1 className={className && className}>
        {bold ? <strong>{props.children}</strong> : props.children}
      </h1>
    );
  if (h2)
    return (
      <h2 className={className && className}>
        {bold ? <strong>{props.children}</strong> : props.children}
      </h2>
    );
  if (h3)
    return (
      <h3 className={className && className}>
        {bold ? <strong>{props.children}</strong> : props.children}
      </h3>
    );
  if (h4)
    return (
      <h4 className={className && className}>
        {bold ? <strong>{props.children}</strong> : props.children}
      </h4>
    );
  if (h5)
    return (
      <h5 className={className && className}>
        {bold ? <strong>{props.children}</strong> : props.children}
      </h5>
    );
  if (h6)
    return (
      <h6 className={className && className}>
        {bold ? <strong>{props.children}</strong> : props.children}
      </h6>
    );

  return <p>{bold ? <strong>{props.children}</strong> : props.children}</p>;
};

Text.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  bold: PropTypes.bool,
  className: PropTypes.string
};
