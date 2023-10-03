/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Carousel = ({ className, arrowForwardClassName, arrowForward = "/msp/arrow-forward-89.svg" }) => {
  return (
    <div className={`carousel ${className}`}>
      <div className="overlap-group">
        <img className="rectangle" alt="Rectangle" />
        <div className="div" />
        <div className="frame">
          <p className="text-wrapper">Requirement Fulfillment within 48 hours</p>
          <div className="frame-2">
            <p className="with-efficient-and">
              With efficient and 20+ innovative models, we go on a hiring spree meeting your business&#39;s requirements
              and criteria with pinpoint efficiency. The creative contribution of recruiting models, vast resources of
              candidate profiles and in-house dedicated consultants assures faster processing and results at J2W.
            </p>
            <button className="button">
              <div className="text-wrapper-2">Learn More</div>
              <img className={`img ${arrowForwardClassName}`} alt="Arrow forward" src={arrowForward} />
            </button>
          </div>
        </div>
        <div className="text-wrapper-3">Why work with us?</div>
        <div className="frame-3">
          <div className="ellipse" />
          <div className="ellipse" />
          <div className="ellipse-2" />
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  arrowForward: PropTypes.string,
};
