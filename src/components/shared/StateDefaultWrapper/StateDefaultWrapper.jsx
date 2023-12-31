/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const StateDefaultWrapper = ({ default1 = false, className, divClassName, msp }) => {
  return (
    <Link to="/contact-us">
      <button className={`state-default-wrapper-shared default-shared-${default1} ${className}`} style={msp?{background: "transparent"}:{}}>
        <div className={`text-wrapper-4-shared ${divClassName}`}>Contact Us</div>
      </button>
    </Link>

  );
};

StateDefaultWrapper.propTypes = {
  default1: PropTypes.bool,
};
