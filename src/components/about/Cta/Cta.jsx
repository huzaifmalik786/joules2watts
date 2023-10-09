/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Cta = ({
  property1,
  className,
  divClassName,
  text = "This is who we are",
  arrowForwardClassName,
  arrowForward = "/about/arrow-forward-4.svg",
  link
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <Link to={link}>
      <div
        className={`CTA ${state.property1} ${className}`}
      // onMouseLeave={() => {
      //   dispatch("mouse_leave");
      // }}
      // onMouseEnter={() => {
      //   dispatch("mouse_enter");
      // }}
      >
        <p className={`this-is-who-we-are ${divClassName}`}>{text}</p>
        <img
          className={`arrow-forward ${arrowForwardClassName}`}
          alt="Arrow forward"
          src={state.property1 === "hover" ? "/about/arrow-forward-5.svg" : arrowForward}
        />
      </div>
    </Link>

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

Cta.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
  arrowForward: PropTypes.string,
};
