/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cta } from "../Cta";
import "./style.css";

export const PropertyDefault = ({ className, rectangle = "/img/rectangle-33-1.svg" }) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="rectangle-5" alt="Rectangle" src={rectangle} />
          </div>
        </div>
        <div className="frame-9">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Managed IT services</div>
          </div>
          <Cta
            className="design-component-instance-node"
            hasArrowForward={false}
            property1="default"
            text="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

PropertyDefault.propTypes = {
  rectangle: PropTypes.string,
};