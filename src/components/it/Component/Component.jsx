/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cta } from "../Cta";
import "./style.css";

export const Component = ({
  property1,
  className,
  frameClassName,
  vector = "/it/vector-9.svg",
  img = "/it/vector-9.svg",
  vector1 = "/it/vector-9.svg",
  vector2 = "/it/vector-9.svg",
  vector3 = "/it/vector-9.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "service-cloud-services",
  });
  return (
    <div className={`itcomponent ${className}`}>
      <div className="text-wrapper-4">Industry-leading IT solutions</div>
      <div className={`frame-4 ${property1}`}>
        {["service-digital", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1) && (
          <div className="frame-5">
            <Cta
              className="CTA-instance"
              divClassName="instance-node"
              hasArrowForward={false}
              property1="default"
              text="Digital"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="Cloud services"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="Product engineering"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="QA and testing"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="Infrastructure Services"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="App modernization"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="Professional Services"
            />
          </div>
        )}

        {["variant-2", "variant-3"].includes(property1) && (
          <>
            <Cta className="CTA-4" divClassName="CTA-3" hasArrowForward={false} property1="default" text="Digital" />
            <Cta
              className={`${property1 === "variant-3" ? "CTA-2" : "class"}`}
              divClassName={`${property1 === "variant-3" ? "CTA-3" : "instance-node"}`}
              hasArrowForward={false}
              property1={property1 === "variant-3" ? "default" : "hover"}
              text="Cloud services"
            />
            <Cta
              className={`${property1 === "variant-3" ? "class" : "CTA-2"}`}
              divClassName={`${property1 === "variant-3" ? "instance-node" : "CTA-3"}`}
              hasArrowForward={false}
              property1={property1 === "variant-3" ? "hover" : "default"}
              text="Product engineering"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="QA and testing"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="Infrastructure Services"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="App modernization"
            />
            <Cta
              className="CTA-2"
              divClassName="CTA-3"
              hasArrowForward={false}
              property1="default"
              text="Professional Services"
            />
          </>
        )}
      </div>
      <div className="frame-wrapper">
        <div className={`frame-6 ${frameClassName}`}>
          <div className="digital">
            {property1 === "service-digital" && <>Digital</>}

            {property1 === "variant-2" && <>Cloud Services</>}

            {property1 === "variant-3" && <>Product Engineering</>}

            {property1 === "variant-4" && <>Qa And Testing</>}

            {property1 === "variant-5" && <>Infrastructure Services</>}

            {property1 === "variant-6" && <>App Modernization</>}

            {property1 === "variant-7" && <>Professional Services</>}
          </div>
          <div className={`our-digital-services property-1-${property1}`}>
            {["service-digital", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(
              property1
            ) && (
                <p className="text-wrapper-46">
                  Our digital services enable businesses to interact with consumers, increase online exposure, and improve
                  brand reputation.
                </p>
              )}

            {property1 === "variant-2" && (
              <p className="text-wrapper-46">
                With the help of scalable and adaptable cloud services, businesses can use distant servers for data
                storage, processing power, and software applications.
              </p>
            )}
          </div>
          <div className={`frame-7 property-1-0-${property1}`}>
            <div className="frame-8">
              <div className="frame-9">
                <img
                  className="vector"
                  alt="Vector"
                  src={["service-digital", "variant-2", "variant-6"].includes(property1) ? vector : "/it/vector-9.svg"}
                />
                <div className="time-and-material">
                  {property1 === "variant-7" && <>Time and Material</>}

                  {property1 === "variant-4" && <>Test advisory &amp; consulting</>}

                  {property1 === "variant-5" && <>Data Center Management</>}

                  {property1 === "variant-3" && <>SaaS-ification</>}

                  {property1 === "service-digital" && <>AI/ML</>}

                  {property1 === "variant-2" && <>Cloud Advisory</>}

                  {property1 === "variant-6" && <>Custom Development</>}
                </div>
              </div>
              <div className="frame-9">
                <img
                  className="vector"
                  alt="Vector"
                  src={["service-digital", "variant-2", "variant-6"].includes(property1) ? img : "/it/vector-9.svg"}
                />
                <div className="lab-on-hire">
                  {property1 === "variant-3" && <>Lab-on-Hire</>}

                  {property1 === "service-digital" && <>RPA</>}

                  {property1 === "variant-2" && <>Cloud App Development</>}

                  {property1 === "variant-6" && <>Application Maintenance</>}

                  {property1 === "variant-7" && <>Extended Delivery Center (EDC)</>}

                  {property1 === "variant-4" && <>Intelligent automation</>}

                  {property1 === "variant-5" && <>Server Management</>}
                </div>
              </div>
              {["service-digital", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(
                property1
              ) && (
                  <div className="frame-9">
                    <img
                      className="vector"
                      alt="Vector"
                      src={
                        ["service-digital", "variant-2", "variant-6"].includes(property1) ? vector1 : "/it/vector-9.svg"
                      }
                    />
                    <div className="digitalization">
                      {property1 === "variant-3" && <>Digitalization</>}

                      {property1 === "service-digital" && <>BI &amp; Analytics</>}

                      {property1 === "variant-2" && <>Cloud Managed Services</>}

                      {property1 === "variant-6" && <>Legacy Migration</>}

                      {property1 === "variant-4" && <>Accessibility assurance</>}

                      {property1 === "variant-5" && <>Storage Management</>}
                    </div>
                  </div>
                )}

              {["variant-4", "variant-5"].includes(property1) && (
                <div className="frame-9">
                  <img className="vector" alt="Vector" src="/it/vector-9.svg" />
                  <div className="security-testing">
                    {property1 === "variant-4" && <>Security testing</>}

                    {property1 === "variant-5" && <>Network Services</>}
                  </div>
                </div>
              )}
            </div>
            {["service-digital", "variant-2", "variant-4", "variant-5", "variant-6"].includes(property1) && (
              <div className="frame-8">
                <div className="frame-9">
                  <img
                    className="vector"
                    alt="Vector"
                    src={["service-digital", "variant-2"].includes(property1) ? vector2 : "/it/vector-9.svg"}
                  />
                  <div className="functional-testing">
                    {property1 === "variant-4" && <>Functional testing</>}

                    {property1 === "variant-5" && <>Security Services</>}

                    {property1 === "variant-6" && <>System Integration</>}

                    {property1 === "service-digital" && <>Mobility</>}

                    {property1 === "variant-2" && <>Cloud Security</>}
                  </div>
                </div>
                <div className="frame-9">
                  <img
                    className="vector"
                    alt="Vector"
                    src={["service-digital", "variant-2"].includes(property1) ? vector3 : "/it/vector-9.svg"}
                  />
                  <div className="UX-UI">
                    {property1 === "service-digital" && <>UX/UI</>}

                    {property1 === "variant-2" && <>Cloud Migration</>}

                    {property1 === "variant-4" && <>Performance testing/engineering</>}

                    {property1 === "variant-5" && <>Workplace Services</>}

                    {property1 === "variant-6" && <>EDI Services</>}
                  </div>
                </div>
                {["variant-4", "variant-5", "variant-6"].includes(property1) && (
                  <div className="frame-9">
                    <img className="vector" alt="Vector" src="/it/vector-9.svg" />
                    <div className="ERP-testing">
                      {property1 === "variant-4" && <>ERP testing</>}

                      {property1 === "variant-5" && <>Cyber Security</>}

                      {property1 === "variant-6" && <>UX/UI</>}
                    </div>
                  </div>
                )}

                {["variant-4", "variant-5"].includes(property1) && (
                  <div className="frame-9">
                    <img className="vector" alt="Vector" src="/it/vector-9.svg" />
                    <div className="customer-experience">
                      {property1 === "variant-4" && <>Customer experience testing</>}

                      {property1 === "variant-5" && <>BCP/ DR</>}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf([
    "service-digital",
    "variant-5",
    "variant-2",
    "variant-3",
    "variant-4",
    "variant-7",
    "variant-6",
  ]),
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
};
