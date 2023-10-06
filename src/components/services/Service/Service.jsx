/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Cta } from "../Cta";
import "./style.css";

export const Service = ({ stateProp, card, className, CTAArrowForward = "/services/arrow-forward-35.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: "hover",
    card: card || "GIC",
  });

  return (
    <div
      className={`service card-${state.card} state-${state.state} ${className}`}
    >
      <div className="overlap-17">
        {(state.card === "FLX" ||
          state.card === "GIC" ||
          (state.card === "HRD" && state.state === "default") ||
          state.card === "ITS" ||
          state.card === "RPO" ||
          state.card === "default") && (
            <>
              <div
                className="frame"
                onMouseLeave={() => {
                  dispatch("mouse_leave_736");
                }}
                onMouseEnter={() => {
                  dispatch("mouse_enter_736");
                }}
              >
                {(state.card === "FLX" ||
                  state.card === "GIC" ||
                  state.card === "HRD" ||
                  (state.card === "ITS" && state.state === "default") ||
                  state.card === "RPO" ||
                  state.card === "default") && (
                    <div className="overlap-group-11">
                      {state.state === "default" && state.card === "GIC" && (
                        <>
                          <img className="shutterstock" alt="Shutterstock" />
                          <div className="rectangle" />
                        </>
                      )}

                      {((state.card === "FLX" && state.state === "hover") ||
                        (state.card === "GIC" && state.state === "hover") ||
                        state.card === "HRD" ||
                        state.card === "ITS" ||
                        state.card === "RPO" ||
                        state.card === "default") && <div className="rectangle-2" />}
                    </div>
                  )}
              </div>
              <div className="frame-2">
                <div className="frame-3">
                  {state.state === "hover" && (
                    <>
                      <div className="administrative">
                        {state.card === "default" && <>Administrative &amp; Payroll Management</>}

                        {state.card === "RPO" && (
                          <>
                            Consulting for Global <br />
                            In-house Centers (GICs)
                          </>
                        )}

                        {state.card === "ITS" && <>Master Service Provider</>}

                        {state.card === "GIC" && <>Hire, Train &amp; Deploy</>}

                        {state.card === "FLX" && <>Recruitment Process Outsourcing</>}
                      </div>
                      <div className="we-are-committed-to">
                        {state.card === "default" && (
                          <p className="text-wrapper-61">
                            We are committed to delivering world-class payroll management and the most dependable HR
                            solutions.
                          </p>
                        )}

                        {state.card === "RPO" && (
                          <p className="text-wrapper-61">
                            We at Joulestowatts have tailored our services&nbsp;&nbsp;to address the critical challenges
                            that GICs face in India.
                          </p>
                        )}

                        {state.card === "ITS" && (
                          <p className="text-wrapper-61">
                            Joulestowatts has a perfect combination of expertise, technology, and thought leaders to
                            manage your operations in various verticals.
                          </p>
                        )}

                        {state.card === "GIC" && (
                          <p className="text-wrapper-61">
                            With over 85+ global education partners, Joulestowatts offers the best trainers in the
                            industry. An execution-driven methodology from hiring to deployment with complete assistance
                            &amp; tested strategies to recruit, retain, and manage talent.
                          </p>
                        )}

                        {state.card === "FLX" && (
                          <p className="text-wrapper-61">
                            Joulestowatts RPO (Recruitment Process Outsourcing) solutions enable businesses to source and
                            hire talent faster.
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <Cta arrowForward={CTAArrowForward} className="CTA-instance" property1="default" text="Learn More" />
              </div>
            </>
          )}

        {state.state === "hover" && state.card === "HRD" && (
          <div className="overlap-group">
            <div className="rectangle-3" />
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-2">Flexible Staffing</div>
                <p className="p">
                  Joulestowatts Flexible staffing services helps employers find temporary and direct hires through a
                  streamlined hiring process optimized for quick and cost-effective recruitment.
                </p>
              </div>
              <Cta
                arrowForward="/services/arrow-forward-43.svg"
                className="CTA-instance"
                property1="default"
                text="Learn More"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.card === "GIC" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          card: "GIC",
          state: "hover",
        };
    }
  }

  if (state.card === "GIC" && state.state === "hover") {
    switch (action) {
      case "click":
        return {
          card: "GIC",
          state: "default",
        };
    }
  }

  if (state.card === "default" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          card: "default",
          state: "hover",
        };
    }
  }

  if (state.card === "default" && state.state === "hover") {
    switch (action) {
      case "click":
        return {
          card: "default",
          state: "default",
        };
    }
  }

  if (state.card === "FLX" && state.state === "default") {
    switch (action) {
      case "mouse_enter_736":
        return {
          card: "FLX",
          state: "hover",
        };
    }
  }

  if (state.card === "FLX" && state.state === "hover") {
    switch (action) {
      case "mouse_leave_736":
        return {
          card: "FLX",
          state: "default",
        };
    }
  }

  if (state.card === "RPO" && state.state === "default") {
    switch (action) {
      case "mouse_enter_736":
        return {
          card: "RPO",
          state: "hover",
        };
    }
  }

  if (state.card === "RPO" && state.state === "hover") {
    switch (action) {
      case "mouse_leave_736":
        return {
          card: "RPO",
          state: "default",
        };
    }
  }

  if (state.card === "ITS" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          card: "ITS",
          state: "hover",
        };
    }
  }

  if (state.card === "HRD" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          card: "HRD",
          state: "hover",
        };
    }
  }

  switch (action) {
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
  card: PropTypes.oneOf(["default", "FLX", "RPO", "GIC", "HRD", "ITS"]),
  CTAArrowForward: PropTypes.string,
};
