/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({ property1, className, rectangle = "/homepage/rectangle-190.webp" }) => {
  return (
    <div className={`homepage-frame`}>
      <img
        className="rectangle-mobile"
        alt="Rectangle"
        style={{objectFit:"cover"}}
        src={
          property1 === "variant-2"
            ? "/homepage/rectangle-190-2.webp"
            : property1 === "variant-3"
            ? "/homepage/rectangle-190-3.webp"
            : property1 === "variant-4"
            ? "/homepage/rectangle-190-4.svg"
            : property1 === "variant-5"
            ? "/homepage/rectangle-190-5.webp"
            : rectangle
        }
      />
      <div className="div-mobile">
        <div className="agile-talent">
          {property1 === "default" && <p className="text-wrapper-45">Agile Talent Fulfillment Through Devops</p>}

          {property1 === "variant-2" && (
            <p className="text-wrapper-45">Talent Transformation Through Data, Ai And Ml</p>
          )}

          {property1 === "variant-3" && <p className="text-wrapper-45">Cloud And Hpc To Accelerate Hiring</p>}

          {property1 === "variant-4" && <p className="text-wrapper-45">Digital Consulting To Find The Best Talent</p>}

          {property1 === "variant-5" && <p className="text-wrapper-45">Full Stack For Smooth Operation</p>}
        </div>
        <div className={`an-execution-driven ${property1}`}>
          {property1 === "default" && (
            <p className="text-wrapper-45">
              We leverage DevOps fundamentals and cutting-edge technology to accelerate talent delivery, surpassing
              traditional development and infrastructure management processes.
            </p>
          )}

          {property1 === "variant-2" && (
            <p className="text-wrapper-45">
              Data, AI and ML are essential parts of our recruitment models as it helps scale more quickly with
              innovative talent search and acquire the best talent for you.
            </p>
          )}

          {property1 === "variant-3" && (
            <p className="text-wrapper-45">
              Our methodologies comprise more agile, efficient, and comprehensive cloud environments. HPC tech stack
              boosts the recruiting process through fast access storage and accelerated processing.
            </p>
          )}

          {property1 === "variant-4" && (
            <p className="text-wrapper-45">
              Our digital consulting services enable us to harness data and technology to identify and match the best
              talent to your requirements, delivering optimal solutions for your business needs.
            </p>
          )}

          {property1 === "variant-5" && (
            <p className="text-wrapper-45">
              Our precisely formulated recruitment model, coupled with expertise in Java and full-stack development,
              ensures efficiency and productivity, resulting in high-performance, results-driven solutions.
            </p>
          )}
        </div>
        {/* <div className="div-2">
          <div className={`ellipse property-1-${property1}`} />
          <div className={`ellipse-2 property-1-0-${property1}`} />
          <div className={`ellipse-3 property-1-1-${property1}`} />
          <div className={`ellipse-4 property-1-2-${property1}`} />
          <div className={`ellipse-5 property-1-3-${property1}`} />
        </div> */}
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4"]),
  rectangle: PropTypes.string,
};
