/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cta = ({ default1 = false, className, divClassName }) => {
  return (
    <button className={`CTA default-${default1} ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>Contact Us</div>
    </button>
  );
};

Cta.propTypes = {
  default1: PropTypes.bool,
};
