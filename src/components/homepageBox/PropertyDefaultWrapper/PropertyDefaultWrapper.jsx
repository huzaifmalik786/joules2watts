/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cta } from "../Cta";
import "./style.css";

export const PropertyDefaultWrapper = ({ className, CTAArrowForward = "/img/arrow-forward-7.svg" }) => {
  return (
    <div className={`property-default-wrapper ${className}`}>
      <div className="overlap-2">
        <div className="frame-10">
          <div className="overlap-group-2">
            <img className="shutterstock-2" alt="Shutterstock" src="/img/shutterstock-1485872414-1-9.png" />
            <div className="rectangle-6" />
          </div>
        </div>
        <div className="frame-11">
          <div className="hire-train-deploy-wrapper">
            <div className="hire-train-deploy-3">Hire, Train &amp; Deploy</div>
          </div>
          <Cta arrowForward={CTAArrowForward} className="CTA-3" property1="default" text="Learn More" />
        </div>
      </div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  CTAArrowForward: PropTypes.string,
};
