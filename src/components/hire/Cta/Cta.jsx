/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Cta = ({ className, arrowForward = "/hire/arrow-forward-19.svg" }) => {
  return (
    <Link to="/contact-us">
      <button className={`CTA ${className}`}>
        <div className="text-wrapper">Connect with us</div>
        <img className="arrow-forward" alt="Arrow forward" src={arrowForward} />
      </button>
    </Link>

  );
};

Cta.propTypes = {
  arrowForward: PropTypes.string,
};
