/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Carousel } from "../Carousel";
import "./style.css";

export const PropertyDefault = ({
  className,
  rectangleClassName,
  arrowForwardClassName,
  arrowForward = "/homepage/arrow-forward-6.svg",
  carouselArrowForward = "/homepage/arrow-forward-7.svg",
  carouselArrowForwardClassName,
  slide
}) => {
  return (
    <div className={`property-default-main ${className}`}>
      {slide == 1 &&
        <div className="frame-15">
          <div className="frame-16">
            <div className="text-wrapper-10">Fitment mapping for efficacy</div>
            <div className="frame-17">
              <p className="text-wrapper-11">
                J2W provides industry-leading recruitment process outsourcing solutions focused on scalability and
                measurable results.
              </p>
            </div>
          </div>

        </div>
      }
      {slide == 2 &&
        <div className="frame-15-2">
          <div className="frame-16">
            <div className="text-wrapper-10">Your Growth Partners</div>
            <div className="frame-17">
              <p className="text-wrapper-11">
                With a tech-oriented team on board, we aim to ensure maximum resource utilization for you company. We are you industry's leading growth partner working on AI powered mechanisms to bring you the best talent.
              </p>
            </div>
          </div>

        </div>
      }

      {/* <div className="frame-19">
        <img className={`rectangle-6 ${rectangleClassName}`} alt="Rectangle" src="/homepage/rectangle-26.png" />
        <div className="overlap-group-3">
          <div className="frame-20">
            <div className="text-wrapper-12">300+ Internal Staff</div>
            <div className="frame-17">
              <p className="our-client-and-2">
                {" "}
                Our client and solution-driven team structure assure maximum leverage of resources for your business. We
                are your industry-leading growth partners and are trusted by high-end companies for our commitment and
                timely delivery with efficient and commendable talent fits.
              </p>
              <button className="CTA-3">
                <div className="text-wrapper-13">Learn More</div>
                <img className={`arrow-forward-4 ${arrowForwardClassName}`} alt="Arrow forward" src={arrowForward} />
              </button>
            </div>
          </div>
          <div className="text-wrapper-14">Why work with us?</div>
          <div className="frame-21">
            <div className="ellipse-21" />
            <div className="ellipse-19" />
            <div className="ellipse-21" />
          </div>
        </div>
      </div>
      <Carousel
        arrowForward={carouselArrowForward}
        arrowForwardClassName={carouselArrowForwardClassName}
        className="carousel-instance"
      /> */}
    </div>
  );
};

PropertyDefault.propTypes = {
  arrowForward: PropTypes.string,
  carouselArrowForward: PropTypes.string,
};
