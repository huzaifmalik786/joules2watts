/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CarouselWrapper = ({ className, arrowForwardClassName, arrowForward = "/offerletter/arrow-forward-55.svg" }) => {
  return (
    <div className={`carousel-wrapper ${className}`}>
      <div className="overlap-group-2">
        <img className="rectangle-2" alt="Rectangle" src="/offerletter/rectangle-26-2.webp" />
        <div className="rectangle-3" />
        <div className="frame-4">
          <p className="p">Requirement Fulfillment within 48 hours</p>
          <div className="frame-5">
            <p className="with-efficient-and">
              With efficient and 20+ innovative models, we go on a hiring spree meeting your business&#39;s requirements
              and criteria with pinpoint efficiency. The creative contribution of recruiting models, vast resources of
              candidate profiles and in-house dedicated consultants assures faster processing and results at J2W.
            </p>
            <button className="CTA-2">
              <div className="text-wrapper-4">Learn More</div>
              <img className={`arrow-forward-2 ${arrowForwardClassName}`} alt="Arrow forward" src={arrowForward} />
            </button>
          </div>
        </div>
        <div className="text-wrapper-5">Why work with us?</div>
        <div className="frame-6">
          <div className="ellipse-3" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
        </div>
      </div>
    </div>
  );
};

CarouselWrapper.propTypes = {
  arrowForward: PropTypes.string,
};
