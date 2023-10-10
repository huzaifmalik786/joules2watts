/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Cta } from "../Cta";
import "./style.css";

export const PropertyServiceWrapper = ({
  property1,
  className,
  vector = "/it/vector-9.svg",
  img = "/it/vector-9.svg",
  vector1 = "/it/vector-9.svg",
  vector2 = "/it/vector-9.svg",
  vector3 = "/it/vector-9.svg",
  rectangle = "/it/rectangle-228-1.webp",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "service-cloud-services",
  });

  return (
    <div className={`property-service-wrapper ${className}`}>
      <div className="frame-10">
        <div className="text-wrapper-6">Industry-leading IT solutions</div>
        <div className="frame-11">
          <Cta
            className={`${state.property1 === "service-digital" ? "class-2" : "class-3"}`}
            divClassName={`${state.property1 === "service-digital" ? "class-4" : "class-5"}`}
            hasArrowForward={false}
            onClick={() => {
              dispatch("click");
            }}
            property1="default"
            text="Digital"
          />
          <Cta
            className={`${state.property1 === "service-cloud-services" ? "class-9" : "class-7"}`}
            divClassName={`${state.property1 === "service-cloud-services" ? "class-4" : "class-5"}`}
            hasArrowForward={false}
            onClick={() => {
              dispatch("click_482");
            }}
            property1={state.property1 === "service-cloud-services" ? "hover" : "default"}
            text="Cloud services"
          />
          <Cta
            className={`${["service-cloud-services", "service-digital"].includes(state.property1)
                ? "class-7"
                : state.property1 === "service-product-engineering"
                  ? "class-9"
                  : "class-7"
              }`}
            divClassName={`${state.property1 === "service-product-engineering" ? "class-4" : "class-5"}`}
            hasArrowForward={false}
            onClick={() => {
              dispatch("click_396");
            }}
            property1={["service-cloud-services", "service-digital"].includes(state.property1) ? "default" : "hover"}
            text="Product engineering"
          />
          <Cta
            className={`${state.property1 === "service-QA-and-testing" ? "class-9" : "class-7"}`}
            divClassName={`${state.property1 === "service-QA-and-testing" ? "class-4" : "class-5"}`}
            hasArrowForward={false}
            onClick={() => {
              dispatch("click_399");
            }}
            property1="default"
            text="QA and testing"
          />
          <Cta
            className={`${state.property1 === "service-infrastruture-services" ? "class-9" : "class-7"}`}
            divClassName={`${state.property1 === "service-infrastruture-services" ? "class-4" : "class-5"}`}
            hasArrowForward={false}
            onClick={() => {
              dispatch("click_402");
            }}
            property1="default"
            text="Infrastructure Services"
          />
          <Cta
            className={`${state.property1 === "service-app-modernization" ? "class-9" : "class-7"}`}
            divClassName={`${state.property1 === "service-app-modernization" ? "class-4" : "class-5"}`}
            hasArrowForward={false}
            onClick={() => {
              dispatch("click_405");
            }}
            property1="default"
            text="App modernization"
          />
          <Cta
            className={`${state.property1 === "service-professional-services" ? "class-9" : "class-7"}`}
            divClassName={`${state.property1 === "service-professional-services" ? "class-4" : "class-5"}`}
            hasArrowForward={false}
            onClick={() => {
              dispatch("click_408");
            }}
            property1="default"
            text="Professional Services"
          />
        </div>
      </div>
      <div className="frame-12">
        <div className={`frame-13 property-1-8-${state.property1}`}>
          <div className="cloud-services">
            {state.property1 === "service-cloud-services" && <>Cloud Services</>}

            {state.property1 === "service-product-engineering" && <>Product Engineering</>}

            {state.property1 === "service-QA-and-testing" && <>Qa And Testing</>}

            {state.property1 === "service-infrastruture-services" && <>Infrastructure Services</>}

            {state.property1 === "service-app-modernization" && <>App Modernization</>}

            {state.property1 === "service-professional-services" && <>Professional Services</>}

            {state.property1 === "service-digital" && <>Digital</>}
          </div>
          <div className="with-the-help-of">
            {state.property1 === "service-cloud-services" && (
              <p className="text-wrapper-46">
                With the help of scalable and adaptable cloud services, businesses can use distant servers for data
                storage, processing power, and software applications.
              </p>
            )}

            {state.property1 === "service-product-engineering" && (
              <p className="text-wrapper-46">
                With a focus on providing high-quality, user-centred solutions, we  innovate, design, develop, test and
                deploy software solutions.
              </p>
            )}

            {state.property1 === "service-QA-and-testing" && (
              <p className="text-wrapper-46">
                Software applications are thoroughly assessed by QA and testing teams to ensure they adhere to quality
                standards, are error-free, and operate as intended.
              </p>
            )}

            {state.property1 === "service-infrastruture-services" && (
              <p className="text-wrapper-46">
                The provision and maintenance of crucial IT infrastructure elements including servers, networks, and
                storage systems are referred to as infrastructure services. These services ensure that vital IT
                infrastructure is always available, dependable, and secure, allowing organisations to run smoothly.
              </p>
            )}

            {state.property1 === "service-app-modernization" && (
              <p className="text-wrapper-46">
                Businesses can increase performance, scalability, and user pleasure by modernising existing apps.
              </p>
            )}

            {state.property1 === "service-professional-services" && (
              <p className="text-wrapper-46">
                Professional services provide a broad spectrum of specialized knowledge offered to enterprises to meet
                their unique requirements. These services include consulting, project management, instruction, and
                application.
              </p>
            )}

            {state.property1 === "service-digital" && (
              <p className="text-wrapper-46">
                Our digital services enable businesses to interact with consumers, increase online exposure, and improve
                brand reputation.
              </p>
            )}
          </div>
          <div className="frame-14">
            <div className="frame-15">
              <div className="frame-16">
                <img
                  className="vector-2"
                  alt="Vector"
                  src={
                    ["service-app-modernization", "service-cloud-services", "service-digital"].includes(state.property1)
                      ? vector
                      : "/it/vector-9.svg"
                  }
                />
                <div className="time-and-material-2">
                  {state.property1 === "service-professional-services" && <>Time and Material</>}

                  {state.property1 === "service-QA-and-testing" && <>Test advisory &amp; consulting</>}

                  {state.property1 === "service-infrastruture-services" && <>Data Center Management</>}

                  {state.property1 === "service-product-engineering" && <>SaaS-ification</>}

                  {state.property1 === "service-cloud-services" && <>Cloud Advisory</>}

                  {state.property1 === "service-app-modernization" && <>Custom Development</>}

                  {state.property1 === "service-digital" && <>AI/ML</>}
                </div>
              </div>
              <div className="frame-16">
                <img
                  className="vector-2"
                  alt="Vector"
                  src={
                    ["service-app-modernization", "service-cloud-services", "service-digital"].includes(state.property1)
                      ? img
                      : "/it/vector-9.svg"
                  }
                />
                <div className="lab-on-hire-2">
                  {state.property1 === "service-product-engineering" && <>Lab-on-Hire</>}

                  {state.property1 === "service-cloud-services" && <>Cloud App Development</>}

                  {state.property1 === "service-app-modernization" && <>Application Maintenance</>}

                  {state.property1 === "service-digital" && <>RPA</>}

                  {state.property1 === "service-professional-services" && <>Extended Delivery Center (EDC)</>}

                  {state.property1 === "service-QA-and-testing" && <>Intelligent automation</>}

                  {state.property1 === "service-infrastruture-services" && <>Server Management</>}
                </div>
              </div>
              {[
                "service-QA-and-testing",
                "service-app-modernization",
                "service-cloud-services",
                "service-digital",
                "service-infrastruture-services",
                "service-product-engineering",
              ].includes(state.property1) && (
                  <div className="frame-16">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src={
                        ["service-app-modernization", "service-cloud-services", "service-digital"].includes(
                          state.property1
                        )
                          ? vector1
                          : "/it/vector-9.svg"
                      }
                    />
                    <div className="digitalization-2">
                      {state.property1 === "service-product-engineering" && <>Digitalization</>}

                      {state.property1 === "service-cloud-services" && <>Cloud Managed Services</>}

                      {state.property1 === "service-app-modernization" && <>Legacy Migration</>}

                      {state.property1 === "service-digital" && <>BI &amp; Analytics</>}

                      {state.property1 === "service-QA-and-testing" && <>Accessibility assurance</>}

                      {state.property1 === "service-infrastruture-services" && <>Storage Management</>}
                    </div>
                  </div>
                )}

              {["service-QA-and-testing", "service-infrastruture-services"].includes(state.property1) && (
                <div className="frame-16">
                  <img className="vector-2" alt="Vector" src="/it/vector-9.svg" />
                  <div className="security-testing-2">
                    {state.property1 === "service-QA-and-testing" && <>Security testing</>}

                    {state.property1 === "service-infrastruture-services" && <>Network Services</>}
                  </div>
                </div>
              )}
            </div>
            {[
              "service-QA-and-testing",
              "service-app-modernization",
              "service-cloud-services",
              "service-digital",
              "service-infrastruture-services",
            ].includes(state.property1) && (
                <div className="frame-17">
                  <div className="frame-16">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src={
                        ["service-cloud-services", "service-digital"].includes(state.property1)
                          ? vector2
                          : "/it/vector-9.svg"
                      }
                    />
                    <div className="functional-testing-2">
                      {state.property1 === "service-QA-and-testing" && <>Functional testing</>}

                      {state.property1 === "service-infrastruture-services" && <>Security Services</>}

                      {state.property1 === "service-app-modernization" && <>System Integration</>}

                      {state.property1 === "service-cloud-services" && <>Cloud Security</>}

                      {state.property1 === "service-digital" && <>Mobility</>}
                    </div>
                  </div>
                  <div className="frame-16">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src={
                        ["service-cloud-services", "service-digital"].includes(state.property1)
                          ? vector3
                          : "/it/vector-9.svg"
                      }
                    />
                    <div className="cloud-migration">
                      {state.property1 === "service-cloud-services" && <>Cloud Migration</>}

                      {state.property1 === "service-digital" && <>UX/UI</>}

                      {state.property1 === "service-QA-and-testing" && <>Performance testing/engineering</>}

                      {state.property1 === "service-infrastruture-services" && <>Workplace Services</>}

                      {state.property1 === "service-app-modernization" && <>EDI Services</>}
                    </div>
                  </div>
                  {["service-QA-and-testing", "service-app-modernization", "service-infrastruture-services"].includes(
                    state.property1
                  ) && (
                      <div className="frame-16">
                        <img className="vector-2" alt="Vector" src="/it/vector-9.svg" />
                        <div className="ERP-testing-2">
                          {state.property1 === "service-QA-and-testing" && <>ERP testing</>}

                          {state.property1 === "service-infrastruture-services" && <>Cyber Security</>}

                          {state.property1 === "service-app-modernization" && <>UX/UI</>}
                        </div>
                      </div>
                    )}

                  {["service-QA-and-testing", "service-infrastruture-services"].includes(state.property1) && (
                    <div className="frame-16">
                      <img className="vector-2" alt="Vector" src="/it/vector-9.svg" />
                      <div className="customer-experience-2">
                        {state.property1 === "service-QA-and-testing" && <>Customer experience testing</>}

                        {state.property1 === "service-infrastruture-services" && <>BCP/ DR</>}
                      </div>
                    </div>
                  )}
                </div>
              )}
          </div>
        </div>
        <img
          className={`rectangle-2 ${state.property1}`}
          alt="Rectangle"
          src={
            state.property1 === "service-product-engineering"
              ? "/it/rectangle-228-7.webp"
              : state.property1 === "service-QA-and-testing"
                ? "/it/rectangle-228-3.webp"
                : state.property1 === "service-infrastruture-services"
                  ? "/it/rectangle-228-4.webp"
                  : state.property1 === "service-app-modernization"
                    ? "/it/rectangle-228-5.webp"
                    : state.property1 === "service-professional-services"
                      ? "/it/rectangle-228-6.webp"
                      : state.property1 === "service-digital"
                        ? rectangle
                        : "/it/rectangle-228-2.webp"
          }
        />
      </div>
    </div>
  );
};

function reducer(state, action) {

  switch (action) {
    case "click":
      return {
        ...state,
        property1: "service-digital",
      };

    case "click_396":
      return {
        ...state,
        property1: "service-product-engineering",
      };

    case "click_399":
      return {
        ...state,
        property1: "service-QA-and-testing",
      };

    case "click_402":
      return {
        ...state,
        property1: "service-infrastruture-services",
      };

    case "click_405":
      return {
        ...state,
        property1: "service-app-modernization",
      };
    case "click_482":
      return {
        ...state,
        property1: "service-cloud-services",
      };
    case "click_408":
      return {
        ...state,
        property1: "service-professional-services",
      };
  }

  return state;
}

PropertyServiceWrapper.propTypes = {
  property1: PropTypes.oneOf([
    "service-cloud-services",
    "service-infrastruture-services",
    "service-digital",
    "service-product-engineering",
    "service-QA-and-testing",
    "service-professional-services",
    "service-app-modernization",
  ]),
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  rectangle: PropTypes.string,
};
