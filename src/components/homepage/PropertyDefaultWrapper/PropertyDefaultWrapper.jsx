/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
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
            <div className="frame-5-home">
              <div className="text-wrapper-4">{property1 == "variant-3" ? "Your Growth Partners" : "Fitment mapping for efficacy"}</div>
              <div className="div-wrapper">
                <p className="p">
                  {property1 == "variant-3" ?
                    " With a tech-oriented team on board, we aim to ensure maximum resource utilization for you company. We are you industry's leading growth partner working on AI powered mechanisms to bring you the best talent."
                    :
                    "J2W provides industry-leading recruitment process outsourcing solutions focused on scalability andmeasurable results."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
  arrowForward: PropTypes.string,
  carouselArrowForward: PropTypes.string,
};
