/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  return (
    <div className={`component ${className}`}>
      <div className="bring-the-best-out">
        <span className="text-wrapper">Bring&nbsp;&nbsp;the best out of your </span>
        <span className="span">
          {property1 === "frame-14489" && <>business</>}

          {property1 === "frame-14490" && <>people</>}

          {property1 === "frame-14491" && <>industry</>}
        </span>
        <span className="text-wrapper"> for your ambitious goals.</span>
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-14491", "frame-14489", "frame-14490"]),
};
