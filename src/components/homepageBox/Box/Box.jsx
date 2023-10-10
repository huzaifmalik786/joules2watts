import React from "react";
import { Cta } from "../Cta";
import { PropertyDefault } from "../PropertyDefault";
import { PropertyDefaultWrapper } from "../PropertyDefaultWrapper";
import { Service } from "../Service";
import "./style.css";
import { Frame } from "../Frame/Frame";

export const Box = () => {
  return (
    <>
      <div className="box desktop-only">
        <div className="group">
          <div className="frame-12">
            <div className="frame-13">
              <div className="text-wrapper-4">Business Solutions</div>
              <p className="text-wrapper-5">
                Innovative talent solutions for businesses ranging from start-ups to Fortune 500 clients; we’ve got you
                covered.
              </p>
            </div>
            <Cta
              arrowForward="/homepage/arrow-forward-6.svg"
              arrowForwardClassName="CTA-6"
              className="CTA-4"
              divClassName="CTA-5"
              property1="default"
              text="Connect with us"
              link="/contact-us"
            />
          </div>
          <Service
            CTAArrowForward="/homepage/arrow-forward-5.svg"
            card="two"
            className="service-instance"
            stateProp="default"
          />
          <PropertyDefault className="property-1-default" rectangle="/homepage/rectangle-33.webp" />
          <Service CTAArrowForward="/homepage/arrow-forward-4.svg" card="three" className="service-2" stateProp="default" />
          <PropertyDefaultWrapper CTAArrowForward="/homepage/arrow-forward-3.svg" className="property-default-instance" />
          <Service CTAImg="/homepage/arrow-forward-2.svg" card="five" className="service-3" stateProp="default" />
          <Service CTAArrowForward="/homepage/arrow-forward-1.svg" card="four" className="service-4" stateProp="default" />
          <Service CTAArrowForward1="/homepage/arrow-forward.svg" card="six" className="service-5" stateProp="default" />
        </div>
      </div>
      <div className="mobile-only">
        <Frame />
      </div>
    </>

  );
};
