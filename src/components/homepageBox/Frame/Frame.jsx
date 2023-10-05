import React from "react";
import { Cta } from "../Ctamobile";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame-mobile">
      <div className="service">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src="/img/rectangle-33.svg" />
            </div>
          </div>
          <div className="div">
            <div className="div-wrapper">
              <div className="text-wrapper">Managed IT services</div>
            </div>
            <Cta
              className="CTA-instance"
              divClassName="design-component-instance-node"
              hasArrowForward={false}
              property1="default"
              text="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group-wrapper-2">
            <div className="overlap-group-2">
              <img className="shutterstock" alt="Shutterstock" src="/img/shutterstock-1485872414-1-4.png" />
              <div className="rectangle-2" />
            </div>
          </div>
          <div className="div-2">
            <div className="administrative-and">
              Administrative and <br />
              Payroll Management
            </div>
            <Cta
              arrowForward="/img/arrow-forward-6.svg"
              arrowForwardClassName="CTA-2"
              className="CTA-instance"
              divClassName="CTA-3"
              property1="default"
              text="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group-wrapper-3">
            <div className="overlap-group-3">
              <img className="img" alt="Shutterstock" src="/img/shutterstock-1485872414-1-3.png" />
              <div className="rectangle-3" />
            </div>
          </div>
          <div className="div-3">
            <div className="hire-train-deploy">Hire, Train &amp; Deploy</div>
            <Cta
              arrowForward="/img/arrow-forward-5.svg"
              arrowForwardClassName="CTA-2"
              className="CTA-instance"
              divClassName="CTA-3"
              property1="default"
              text="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="overlap-group-wrapper-4">
            <div className="overlap-group-4">
              <img className="shutterstock-2" alt="Shutterstock" src="/img/shutterstock-1485872414-1-2.png" />
              <div className="rectangle-4" />
            </div>
          </div>
          <div className="div-4">
            <div className="text-wrapper-2">Recruitment Process Outsourcing</div>
            <Cta
              arrowForward="/img/arrow-forward-4.svg"
              arrowForwardClassName="CTA-2"
              className="CTA-instance"
              divClassName="CTA-3"
              property1="default"
              text="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="shutterstock-wrapper">
            <img className="shutterstock-3" alt="Shutterstock" src="/img/shutterstock-1485872414-1-1.png" />
          </div>
          <div className="rectangle-5" />
          <div className="div-5">
            <div className="text-wrapper-3">Flexible Staffing</div>
            <Cta
              arrowForward="/img/arrow-forward-3.svg"
              arrowForwardClassName="CTA-2"
              className="CTA-instance"
              divClassName="CTA-3"
              property1="default"
              text="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <div className="overlap-group-wrapper-5">
            <div className="overlap-group-5">
              <img className="img" alt="Shutterstock" src="/img/shutterstock-1485872414-1.png" />
              <div className="rectangle-6" />
            </div>
          </div>
          <div className="div-6">
            <p className="consulting-for">
              Consulting for Global <br />
              In-house Centers (GICs)
            </p>
            <div className="CTA-wrapper">
              <Cta
                arrowForward="/img/arrow-forward-2.svg"
                arrowForwardClassName="CTA-2"
                className="CTA-instance"
                divClassName="CTA-3"
                property1="default"
                text="Learn More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
