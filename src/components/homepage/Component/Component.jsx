/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({
  property1,
  className,
  overlapClassName,
  overlapGroupClassName,
  rectangleClassName,
  rectangle = "/homepage/rectangle-190-1.svg",
}) => {
  return (
    <div className={`component ${className}`}>
      <div className={`overlap-2 ${property1} ${overlapClassName}`}>
        {["frame-14693", "frame-14695"].includes(property1) && (
          <>
            <div className="group">
              <div className="group-2">
                {property1 === "frame-14693" && (
                  <div className={`overlap-group-2 ${overlapGroupClassName}`}>
                    <div className="rectangle-4" />
                    <img className={`rectangle-5 ${rectangleClassName}`} alt="Rectangle" src={rectangle} />
                    <div className="frame-11">
                      <p className="text-wrapper-8">Agile Talent Fulfillment Through Devops</p>
                      <p className="an-execution-driven-2">
                        We leverage DevOps fundamentals and cutting-edge technology to accelerate talent delivery,
                        surpassing traditional development and infrastructure management processes.
                      </p>
                    </div>
                  </div>
                )}

                {property1 === "frame-14695" && (
                  <>
                    <div className="rectangle-4" />
                    <img className="rectangle-5" alt="Rectangle" src="/homepage/rectangle-190-3.svg" />
                    <div className="frame-12">
                      <p className="text-wrapper-8">Cloud And Hpc To Accelerate Hiring</p>
                      <p className="an-execution-driven-2">
                        Our methodologies comprise more agile, efficient, and comprehensive cloud environments. HPC tech
                        stack boosts the recruiting process through fast access storage and accelerated processing.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* <div className="frame-13">
              <div className="ellipse-13" />
              <div className="ellipse-14" />
              <div className="ellipse-15" />
              <div className="ellipse-14" />
              <div className="ellipse-14" />
            </div> */}
          </>
        )}

        {["frame-14694", "frame-14696", "frame-14697"].includes(property1) && (
          <div className="overlap-group-2">
            <div className="rectangle-4" />
            <img
              className="rectangle-5"
              alt="Rectangle"
              src={
                property1 === "frame-14696"
                  ? "/homepage/rectangle-190-4.svg"
                  : property1 === "frame-14697"
                  ? "/homepage/rectangle-190-5.svg"
                  : "/homepage/rectangle-190-2.svg"
              }
            />
            <div className="frame-14">
              <div className="talent">
                {property1 === "frame-14694" && (
                  <p className="text-wrapper-45">Talent Transformation Through Data, Ai And Ml</p>
                )}

                {property1 === "frame-14696" && (
                  <p className="text-wrapper-45">Digital Consulting To Find The Best Talent</p>
                )}

                {property1 === "frame-14697" && <p className="text-wrapper-45">Full Stack For Smooth Operation</p>}
              </div>
              <div className="an-execution-driven-3">
                {property1 === "frame-14694" && (
                  <p className="text-wrapper-45">
                    Data, AI and ML are essential parts of our recruitment models as it helps scale more quickly with
                    innovative talent search and acquire the best talent for you.
                  </p>
                )}

                {property1 === "frame-14696" && (
                  <p className="text-wrapper-45">
                    Our digital consulting services enable us to harness data and technology to identify and match the
                    best talent to your requirements, delivering optimal solutions for your business needs.
                  </p>
                )}

                {property1 === "frame-14697" && (
                  <p className="text-wrapper-45">
                    Our precisely formulated recruitment model, coupled with expertise in Java and full-stack
                    development, ensures efficiency and productivity, resulting in high-performance, results-driven
                    solutions.
                  </p>
                )}
              </div>
            </div>
            {/* <div className="frame-13">
              <div className="ellipse-14" />
              <div className="ellipse-16" />
              <div className="ellipse-14" />
              <div className="ellipse-17" />
              <div className="ellipse-18" />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-14696", "frame-14697", "frame-14693", "frame-14694", "frame-14695"]),
  rectangle: PropTypes.string,
};
