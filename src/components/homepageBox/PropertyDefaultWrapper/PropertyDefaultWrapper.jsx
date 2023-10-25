/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cta } from "../Cta";
import "./style.css";

export const PropertyDefaultWrapper = ({ className, CTAArrowForward = "/homepage/arrow-forward-7.svg" }) => {
  return (
    <div className={`property-default-wrapper-home ${className}`}>
      <div className="overlap-2">
        <div className="frame-10">
          <div className="overlap-group-2">
            <img className="shutterstock-2" alt="Shutterstock" src="/homepage/shutterstock-1485872414-1-9.webp" />
            <div className="rectangle-6" />
          </div>
        </div>
        <div className="frame-11">
          <div className="hire-train-deploy-wrapper">
            <div className="hire-train-deploy-3">Workforce Solutions</div>
            <div className="hire-train-deploy-text">
              With over 85+ global education partners, Joulestowatts offers the best trainers in the industry. An execution-driven methodology from hiring to deployment with complete assistance & tested strategies to recruit, retain, and manage talent.
            </div>
          </div>
          <Cta arrowForward={CTAArrowForward} className="CTA-3" property1="default" text="Learn More" link="/workforce-solutions"/>
        </div>
      </div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  CTAArrowForward: PropTypes.string,
};
