/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const StateDefaultWrapper = ({ default1 = false, className, divClassName }) => {
  return (
    <Link to="/contact-us">
      <button className={`state-default-wrapper default-${default1} ${className}`}>
        <div className={`text-wrapper-4-drop ${divClassName}`}>Contact Us</div>
      </button>
    </Link>

  );
};

StateDefaultWrapper.propTypes = {
  default1: PropTypes.bool,
};
