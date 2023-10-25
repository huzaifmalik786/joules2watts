/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Cta } from "../Cta";
import "./style.css";

export const Service = ({
  stateProp,
  card,
  className,
  CTAArrowForward = "/homepage/arrow-forward-18.svg",
  CTAImg = "/homepage/arrow-forward-11.svg",
  CTAArrowForward1 = "/homepage/arrow-forward-15.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: "hover",
    card: card || "one",
  });

  return (
    <div
      className={`service-homepage ${state.card} state-${state.state} ${className}`}
    >
      <div className="overlap-3">
        {((state.card === "five" && state.state === "hover") ||
          (state.card === "four" && state.state === "default") ||
          (state.card === "one" && state.state === "default") ||
          (state.card === "six" && state.state === "default") ||
          state.card === "three" ||
          state.card === "two") && (
            <>
              <div className="frame">
                {(state.card === "five" ||
                  state.card === "four" ||
                  state.card === "one" ||
                  state.card === "six" ||
                  (state.card === "three" && state.state === "default") ||
                  state.card === "two") && (
                    <div className="overlap-group-3">
                      {state.card === "one" && <div className="rectangle" />}

                      {["four", "six", "three"].includes(state.card) && (
                        <img
                          className="shutterstock"
                          alt="Shutterstock"
                          src={
                            state.card === "three"
                              ? "/homepage/shutterstock-1485872414-1-17.webp"
                              : state.card === "six"
                                ? "/homepage/shutterstock-1485872414-1-15.webp"
                                : "/homepage/shutterstock-1485872414-1-20.webp"
                          }
                        />
                      )}

                      {["four", "three"].includes(state.card) && <div className="div" />}

                      {state.card === "six" && (
                        <>
                          <div className="rectangle-2" />
                          <p className="consulting-for">
                            Consulting for Global <br />
                            In-house Centers (GICs)
                          </p>
                        </>
                      )}
                    </div>
                  )}
              </div>
              <div className="frame-2">
                {(state.card === "four" ||
                  state.card === "one" ||
                  (state.card === "three" && state.state === "default") ||
                  (state.card === "two" && state.state === "default")) && (
                    <div className="frame-3">
                      {["four", "one"].includes(state.card) && (
                        <div className="hire-train-deploy">
                          {state.card === "one" && <>Workforce Solutions</>}

                          {state.card === "four" && <div className="master-service-homepage">Master Service Provider</div>}
                        </div>
                      )}

                      {state.card === "two" && (
                        <>
                          Consulting for Global <br />
                          In-house Centers (GICs)
                        </>
                      )}

                      {state.card === "three" && <>Recruitment Process Outsourcing</>}
                    </div>
                  )}

                {state.state === "hover" && (
                  <>
                    <div className="flexible-staffing">
                      {state.card === "five" && <>Flexible Staffing</>}

                      {state.card === "two" && (
                        <>
                          Consulting for Global <br />
                          In-house Centers (GICs)
                        </>
                      )}

                      {state.card === "three" && <>Recruitment Process Outsourcing</>}
                    </div>
                    <div className="joulestowatts">
                      {state.card === "five" && (
                        <p className="text-wrapper-6">
                          Joulestowatts Flexible staffing services helps employers find temporary and direct hires through
                          a streamlined hiring process optimized for quick and cost-effective recruitment.
                        </p>
                      )}

                      {state.card === "two" && (
                        <p className="text-wrapper-6">
                          We at Joulestowatts have tailored our services&nbsp;&nbsp;to address the critical challenges that
                          GICs face in India.

                        </p>
                      )}

                      {state.card === "three" && (
                        <p className="text-wrapper-6">
                          Joulestowatts RPO (Recruitment Process Outsourcing) solutions enable businesses to source and
                          hire talent faster.
                        </p>
                      )}
                    </div>
                  </>
                )}

                <Cta
                  arrowForward={
                    state.card === "five"
                      ? "/homepage/arrow-forward-16.svg"
                      : state.state === "hover" && state.card === "two"
                        ? "/homepage/arrow-forward-13.svg"
                        : state.state === "hover" && state.card === "three"
                          ? "/homepage/arrow-forward-12.svg"
                          : state.card === "six"
                            ? CTAArrowForward1
                            : CTAArrowForward
                  }
                  className="CTA-instance"
                  property1="default"
                  text="Learn More"
                  link={
                    state.card === "five"
                      ? "/staffing-solution"
                      : state.card === "two"
                        ? "/consulting"
                        : state.card === "three"
                          ? "/rpo"
                          : state.card === "six"
                            ? "/administrative-and-payroll-management"
                            : "/hire-train-deplo"
                  }
                />
              </div>
            </>
          )}

        {state.state === "hover" && ["four", "one", "six"].includes(state.card) && (
          <div className="overlap-group-3">
            {/* {state.card === "six" && (
              <>
                <img className="img" alt="Shutterstock" src="/homepage/shutterstock-1485872414-1-14.png" />
              </>
            )} */}

            {["four", "six"].includes(state.card) && (
              <div className="frame-4">
                {state.card === "six" && (
                  <>
                    <p className="text-wrapper">
                      Administrative and <br />
                      Payroll Management
                    </p>
                    <p className="we-at-joulestowatts">
                      We are committed to delivering world-class payroll management and the most dependable HR
                      solutions.
                    </p>
                    <div className="CTA-wrapper">
                      <Cta
                        arrowForward="/homepage/arrow-forward-14.svg"
                        arrowForwardClassName="instance-node"
                        className="CTA-instance"
                        property1="default"
                        text="Learn More"
                        link="/administrative-and-payroll-management"
                      />
                    </div>
                  </>
                )}

                {state.card === "four" && (
                  <>
                    <div className="frame-5">
                      <div className="master-service-homepage-wrapper">
                        <div className="master-service-homepage">Master Service Provider</div>
                      </div>
                      <p className="p">
                        Joulestowatts has a perfect combination of expertise, technology, and thought leaders to manage
                        your operations in various verticals.
                      </p>
                    </div>
                    <Cta
                      arrowForward="/homepage/arrow-forward-19.svg"
                      className="CTA-instance"
                      property1="default"
                      text="Learn More"
                      link="/msp"
                    />
                  </>
                )}
              </div>
            )}

            {state.card === "one" && (
              <>
                <div className="frame-6">
                  <div className="hire-train-deploy-2">Workforce Solutions</div>
                  <p className="with-over-global">
                    With over 85+ global education partners, Joulestowatts offers the best trainers in the industry. An
                    execution-driven methodology from hiring to deployment with complete assistance &amp; tested
                    strategies to recruit, retain, and manage talent.
                  </p>
                </div>
                <Cta arrowForward="/homepage/arrow-forward-10.svg" className="CTA-2" property1="default" text="Learn More" link="/hire-train-deploy" />
              </>
            )}
          </div>
        )}

        {state.state === "default" && state.card === "five" && (
          <>
            <div className="frame-7" />
            <div className="rectangle-4" />
            <div className="frame-8">
              <div className="text-wrapper-2">Flexible Staffing</div>
              <Cta arrowForward={CTAImg} className="CTA-instance" property1="default" text="Learn More" link="/staffing-solution" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Service.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
  card: PropTypes.oneOf(["two", "three", "four", "one", "five", "six"]),
  CTAArrowForward: PropTypes.string,
  CTAImg: PropTypes.string,
  CTAArrowForward1: PropTypes.string,
};
