import React from "react";
import { StateDefaultWrapper } from "../../components/msp/StateDefaultWrapper";
import "./style.css";

export const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="div-4">
        <div className="frame-94">
          <img className="logo-4" alt="Logo" />
          <img className="close" alt="Close" />
        </div>
        <div className="holder-wrapper">
          <div className="holder">
            <div className="frame-95">
              <div className="text-wrapper-75">Solutions</div>
            </div>
            <div className="frame-95">
              <div className="text-wrapper-75">Platforms</div>
            </div>
            <div className="frame-95">
              <div className="text-wrapper-75"> About Us</div>
            </div>
            <div className="frame-95">
              <div className="text-wrapper-75">Leadership</div>
            </div>
            <div className="frame-95">
              <div className="text-wrapper-75">Industries</div>
            </div>
            <div className="frame-95">
              <div className="text-wrapper-75">Careers</div>
            </div>
            <StateDefaultWrapper className="design-component-instance-node" default1 divClassName="CTA-14" />
          </div>
        </div>
      </div>
    </div>
  );
};
