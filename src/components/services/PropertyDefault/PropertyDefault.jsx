/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cta } from "../Cta";
import "./style.css";

export const PropertyDefault = ({ className, frameClassName, CTAArrowForward = "/services/arrow-forward-47.svg" }) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="overlap-group-2">
        <div className={`rectangle-wrapper ${frameClassName}`}>
          <div className="rectangle-4" />
        </div>
        <div className="frame-6">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Managed IT services</div>
            <div className="text-wrapper-5-p">
              Experience seamless technology operations with our Managed IT Services. We take the complexity out of IT management, offering proactive monitoring, rapid issue resolution, and strategic guidance to ensure your business remains agile and secure.
            </div>
          </div>
          <Cta
            arrowForward={CTAArrowForward}
            className="design-component-instance-node"
            property1="default"
            text="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

PropertyDefault.propTypes = {
  CTAArrowForward: PropTypes.string,
};
