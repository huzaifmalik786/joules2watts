/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Carousel = ({
  className,
  overlapGroupClassName,
  rectangleClassName,
  arrowForwardClassName,
  arrowForward = "/administrative/arrow-forward-56.svg",
}) => {
  return (
    <div className={`carousel ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <img className={`rectangle ${rectangleClassName}`} alt="Rectangle" src="/administrative/rectangle-26-1.png" />
        <div className="div" />
        <div className="frame">
          <div className="text-wrapper-2">300+ Internal Staff</div>
          <div className="frame-2">
            <p className="our-client-and">
              {" "}
              Our client and solution-driven team structure assure maximum leverage of resources for your business. We
              are your industry-leading growth partners and are trusted by high-end companies for our commitment and
              timely delivery with efficient and commendable talent fits.
            </p>
            <button className="button">
              <div className="text-wrapper-3">Learn More</div>
              <img className={`arrow-forward-2 ${arrowForwardClassName}`} alt="Arrow forward" src={arrowForward} />
            </button>
          </div>
        </div>
        <div className="text-wrapper-4">Why work with us?</div>
        <div className="frame-3">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse" />
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  arrowForward: PropTypes.string,
};
