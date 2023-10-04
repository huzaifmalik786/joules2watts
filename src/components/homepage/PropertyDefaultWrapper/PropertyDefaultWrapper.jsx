/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Carousel } from "../Carousel";
import "./style.css";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  rectangleClassName,
  arrowForwardClassName,
  arrowForward = "/homepage/arrow-forward-22.svg",
  carouselArrowForward = "/homepage/arrow-forward-23.svg",
  carouselArrowForwardClassName,
}) => {
  return (
    <div className={`property-default-wrapper-main ${className}`}>
      <div className="div-3">
        <div className="div-3">
          <div className={`overlap-group-8 property-1-5-${property1}`}>
            <div className="frame-5">
              <div className="text-wrapper-4">Fitment mapping for efficacy</div>
              <div className="div-wrapper">
                <p className="p">
                  J2W provides industry-leading recruitment process outsourcing solutions focused on scalability and
                  measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-6">
          <div className={`ellipse-8 property-1-7-${property1}`} />
          <div className={`ellipse-9 property-1-8-${property1}`} />
          <div className={`ellipse-10 property-1-9-${property1}`} />
        </div>
      </div>
      <div className="frame-7">
        <img className={`rectangle-3 property-1-10-${property1} ${rectangleClassName}`} alt="Rectangle" />
        <div className="overlap">
          <div className="frame-8">
            <div className="text-wrapper-5">300+ Internal Staff</div>
            <div className="frame-9">
              <p className="our-client-and">
                {" "}
                Our client and solution-driven team structure assure maximum leverage of resources for your business. We
                are your industry-leading growth partners and are trusted by high-end companies for our commitment and
                timely delivery with efficient and commendable talent fits.
              </p>
              <button className="CTA-2">
                <div className="text-wrapper-6">Learn More</div>
                <img
                  className={`arrow-forward-3 property-1-11-${property1} ${arrowForwardClassName}`}
                  alt="Arrow forward"
                  src={
                    property1 === "variant-2"
                      ? "/homepage/arrow-forward-24.svg"
                      : property1 === "variant-3"
                      ? "/homepage/arrow-forward-26.svg"
                      : arrowForward
                  }
                />
              </button>
            </div>
          </div>
          <div className="text-wrapper-7">Why work with us?</div>
          <div className="frame-10">
            <div className="ellipse-11" />
            <div className="ellipse-12" />
            <div className="ellipse-11" />
          </div>
        </div>
      </div>
      <Carousel
        arrowForward={carouselArrowForward}
        arrowForwardClassName={carouselArrowForwardClassName}
        className="carousel-03"
      />
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
  arrowForward: PropTypes.string,
  carouselArrowForward: PropTypes.string,
};
