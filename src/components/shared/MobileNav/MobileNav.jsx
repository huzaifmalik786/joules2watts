import React, { useEffect, useState } from "react";
import { StateDefaultWrapper } from "../../msp/StateDefaultWrapper";
import "./style.css";
import { Link } from "react-router-dom";

const items = [
  {
    name: "IT Services",
    link: "/it-services"
  },
  {
    name: "Workforce Solutions",
    link: "/hire-train-deploy"
  },
  {
    name: "Contact & Flexible Staffing",
    link: "/staffing-solution"
  },
  {
    name: "Master Service Provider",
    link: "/msp"
  },
  {
    name: "Consulting For GICs & COEs",
    link: "/consulting"
  },
  {
    name: "Administrative & Payroll",
    link: "/administrative-and-payroll-management"
  },
  {
    name: "RPO",
    link: "/rpo"
  }
]

export const MobileNav = ({ show, setShow }) => {
  const [soloutions, setSolutions] = useState(false);
  const [platforms, setPlatforms] = useState(false);
  return (

    <div className="mobile-nav mobile-only">
      <div className="div-4-drop">
        <div className="frame-94-drop">
          <img className="logo-4-drop" alt="Logo" src="/services/logo-1.png" />
          <img className="close-drop" alt="Close" src="/services/close-1.png" onClick={() => setShow(false)} />
        </div>
        <div className="holder-wrapper-drop">
          <div className="holder-drop">
            <div className="frame-95-dropdown" onClick={() => setSolutions(!soloutions)}>
              <button className="text-wrapper-75-drop" style={{ alignSelf: "center" }}>Solutions</button>
              {soloutions &&
                <div className="dropdown-wrapper">
                  {items.map((item) => {
                    return (
                      <Link to={item.link}>
                        <div className="dropdown-text-wrapper">{item.name}</div>
                      </Link>
                    )
                  })}
                </div>
              }
            </div>
            <div className="frame-95-dropdown" >
              <button className="text-wrapper-75-drop" onClick={() => setPlatforms(!platforms)} style={{ alignSelf: "center" }}>Platforms</button>
              {platforms &&
                <div className="dropdown-wrapper">
                  <Link to="/offer-letter-platform">
                    <div className="dropdown-text-wrapper">J2W Offer Letter</div>
                  </Link>
                  <Link to="/j2w-premiere-lounge">
                    <div className="dropdown-text-wrapper">J2W Premiere Lounge</div>
                  </Link>
                </div>
              }
            </div>
            <Link to="/about-us">
              <div className="frame-95-drop">
                <div className="text-wrapper-75-drop"> About Us</div>
              </div>
            </Link>
            <Link to="/leadership">
              <div className="frame-95-drop">
                <div className="text-wrapper-75-drop">Leadership</div>
              </div>
            </Link>
            <Link to="/industries">
              <div className="frame-95-drop">
                <div className="text-wrapper-75-drop">Industries</div>
              </div>
            </Link>
            <Link to="/careers">
              <div className="frame-95-drop">
                <div className="text-wrapper-75-drop">Careers</div>
              </div>
            </Link>
            <StateDefaultWrapper className="design-component-instance-node" default1 divClassName="CTA-14-drop" />
          </div>
        </div>
      </div>
    </div>
  )
};