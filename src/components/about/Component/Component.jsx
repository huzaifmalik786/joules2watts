/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  var name = 0;
  function shuffle() {
    if (name == 0) {
      document.querySelector(`.text-21`).style.opacity = 0;
      const ele = document.querySelector(`.text-${name}1`);
      if (ele) {
        ele.style.opacity = 1;
      }
      name++;
    }
    else {
      document.querySelector(`.text-${name - 1}1`).style.opacity = 0;
      const ele = document.querySelector(`.text-${name}1`);
      if (ele) {
        ele.style.opacity = 1;
      }
      name++;
    }
    if (name == 3) {
      name = 0;
    }
  }
  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle])

  return (
    <div className={`component-about ${className}`}>
      <div className="bring-the-best-out">
        <span className="text-wrapper">Bring&nbsp;&nbsp;the best out of your </span>
        <span className="span">
          <span className="highlighted-text text-01" style={name == 0 ? { opacity: 1 } : {}}>business</span>
          <span className="highlighted-text text-11">people</span>
          <span className="highlighted-text text-21">industry</span>
        </span>
        <span className="text-wrapper">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; for your ambitious goals.</span>
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-14491", "frame-14489", "frame-14490"]),
};
