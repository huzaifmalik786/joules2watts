/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  divClassName,
  text = "This is who we are",
  arrowForward = "/services/arrow-forward-48.svg",
  arrowForwardClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper property-1-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <p className={` ${divClassName}`}>{text}</p>
      <img
        className={`arrow-forward-2 ${arrowForwardClassName}`}
        alt="Arrow forward"
        src={state.property1 === "hover" ? "/services/arrow-forward-49.svg" : arrowForward}
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
  arrowForward: PropTypes.string,
};
