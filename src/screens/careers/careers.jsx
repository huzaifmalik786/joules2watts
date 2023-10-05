import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Cta } from "../../components/careers/Cta";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";

export const Careers = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="careers">
      <div
        className="iphone"
        style={{
          height: screenWidth < 1440 ? "3359px" : screenWidth >= 1440 ? "2540px" : undefined,
          width: screenWidth < 1440 ? "390px" : screenWidth >= 1440 ? "1440px" : undefined,
        }}
      >
        <Header />
        {screenWidth < 1440 && <Header1 className="header" />}

        <div
          className="overlap"
          style={{
            height: screenWidth < 1440 ? "1025px" : screenWidth >= 1440 ? "1166px" : undefined,
            left: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "-275px" : undefined,
            top: screenWidth < 1440 ? "60px" : screenWidth >= 1440 ? "1082px" : undefined,
            width: screenWidth < 1440 ? "564px" : screenWidth >= 1440 ? "1715px" : undefined,
          }}
        >
          <div
            className="rectangle"
            style={{
              backgroundColor: screenWidth >= 1440 ? "#183a3d" : screenWidth < 1440 ? "#2e5053" : undefined,
              height: screenWidth >= 1440 ? "659px" : screenWidth < 1440 ? "1025px" : undefined,
              left: screenWidth >= 1440 ? "275px" : screenWidth < 1440 ? "0" : undefined,
              top: screenWidth >= 1440 ? "507px" : screenWidth < 1440 ? "0" : undefined,
              width: screenWidth >= 1440 ? "1440px" : screenWidth < 1440 ? "390px" : undefined,
            }}
          />
          {screenWidth < 1440 && (
            <>
              <div className="div" />
              <Cta
                arrowForward="/careers/arrow-forward-157.svg"
                className="CTA-instance"
                divClassName="instance-node"
                property1="default"
                text="Submit"
              />
            </>
          )}

          {screenWidth >= 1440 && (
            <>
              <div className="rectangle-2" />
              <div className="frame">
                <div className="frame-2">
                  <div className="frame-wrapper">
                    <div className="div-wrapper">
                      <p className="p">Certified to be a Great place to work 3 times in a row!</p>
                    </div>
                  </div>
                  <p className="joulestowatts-is">
                    JoulestoWatts is certified as a great place to work three times in a row&nbsp;&nbsp;by Great Place
                    to Work® Institute, India.
                  </p>
                </div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-2">U.S. OFFICE</div>
                <p className="text-wrapper-3">
                  JoulestoWatts Consulting INC
                  <br />
                  13111 N central expy STE8031,
                  <br />
                  DALLAS, TX-75243
                </p>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-2">DELHI OFFICE</div>
                <p className="text-wrapper-3">
                  JoulestoWatts Business Solutions
                  <br />
                  3rd Floor, Saira Tower,
                  <br />
                  Gulmohar Park, New Delhi-110049
                </p>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-2">MUMBAI OFFICE</div>
                <p className="text-wrapper-3">
                  Accesswork Business Centre,
                  <br />
                  Level 9, Wing A Eureka Towers, Mindspace IT Park Off. New Link Road, Malad(West), Mumbai - 400064
                </p>
              </div>
            </>
          )}

          <div
            className="frame-6"
            style={{
              gap: screenWidth >= 1440 ? "16px" : screenWidth < 1440 ? "29px" : undefined,
              left: screenWidth >= 1440 ? "837px" : screenWidth < 1440 ? "36px" : undefined,
              top: screenWidth >= 1440 ? "708px" : screenWidth < 1440 ? "550px" : undefined,
            }}
          >
            {screenWidth >= 1440 && (
              <>
                <div className="text-wrapper-2">HYDERABAD OFFICE</div>
                <p className="element-floor-sinman">
                  3rd Floor, Sinman Dwaraka, 164/3,
                  <br />
                  Inovies St, Patrika Nagar, Madhapur, HITEC City, Hyderabad, Telangana – 500081
                </p>
              </>
            )}

            {screenWidth < 1440 && (
              <>
                <input className="input" />
                <input className="input" />
                <input className="input" />
                <div className="frame-7">
                  <input className="drop-your-cvs-here" />
                  <img className="clip" alt="Clip" />
                </div>
              </>
            )}
          </div>
          {screenWidth >= 1440 && (
            <>
              <div className="frame-8">
                <div className="div-wrapper">
                  <p className="text-wrapper-4">Spot us in these locations!</p>
                </div>
              </div>
              <div className="certification-badge">
                <div className="a" />
              </div>
              <img className="seekpng" alt="Seekpng" src="/about/seek.png"/>
            </>
          )}

          {screenWidth < 1440 && (
            <>
              <p className="text-wrapper-5">
                Do work that matters, with the flexibility to pursue your passion wherever it leads.
              </p>
              <p className="text-wrapper-6">1500+ jobs. 200+ locations. 1 team.</p>
              <div className="bring-your-ambition-wrapper">
                <p className="bring-your-ambition">
                  <span className="span">Bring your ambition to </span>
                  <span className="text-wrapper-7">make a difference</span>
                </p>
              </div>
              <div className="text-wrapper-8">Join our team!</div>
            </>
          )}
        </div>

        <div
          className="overlap-2"
          style={{
            height: screenWidth >= 1440 ? "993px" : screenWidth < 1440 ? "149px" : undefined,
            left: screenWidth >= 1440 ? "-5px" : screenWidth < 1440 ? "121px" : undefined,
            top: screenWidth >= 1440 ? "89px" : screenWidth < 1440 ? "1131px" : undefined,
            width: screenWidth >= 1440 ? "1450px" : screenWidth < 1440 ? "149px" : undefined,
          }}
        >
          {screenWidth >= 1440 && (
            <>
              <div className="rectangle-3" />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="overlap-3">
                    <img className="img" alt="Rectangle" src="/careers/rectangle-144-1.svg" />
                    <img className="rectangle-4" alt="Rectangle" src="/careers/rectangle-145-1.svg" />
                    <img className="rectangle-5" alt="Rectangle" src="/careers/rectangle-141-1.svg" />
                    <div className="rectangle-6" />
                    <Cta
                      arrowForward="/careers/arrow-forward-156.svg"
                      className="CTA-2"
                      divClassName="instance-node"
                      property1="default"
                      text="Submit"
                    />
                    <p className="text-wrapper-17">
                      Do work that matters, with the flexibility to pursue your passion wherever it leads.
                    </p>
                  </div>
                  <p className="text-wrapper-18">1500+ jobs. 200+ locations. 1 team.</p>
                </div>
              </div>
              <div className="frame-15">
                <div className="frame-16">
                  <div className="frame-17">
                    <div className="text-wrapper-19">Join our team!</div>
                  </div>
                </div>
                <div className="frame-18">
                  <input className="frame-19" placeholder="Name" />
                  <input className="frame-19" placeholder="Email" />
                </div>
                <input className="message" placeholder="Message" />
              </div>
              <div className="frame-20">
                <p className="bring-your-ambition-2">
                  <span className="span">Bring your ambition to </span>
                  <span className="text-wrapper-7">make a difference</span>
                </p>
              </div>
              <div className="frame-21-wrapper">
                <input type="file" className="frame-21 message" placeholder="Drop you CVs here(pdf,docs,docx)" accept=".pdf , .doc , .docx" />
                <img className="clip-2" alt="Clip" src="/careers/clip-1.png" />
              </div>

            </>
          )}

          {screenWidth < 1440 && <div className="a-2" />}
        </div>
        {screenWidth < 1440 && (
          <>
            <div className="overlap-4">
              <div className="frame-22">
                <div className="frame-23" />
              </div>
              <div className="rectangle-7" />
              <img className="seekpng-2" alt="Seekpng" src="/about/seek.png"/>
              <div className="frame-24">
                <div className="frame-25">
                  <div className="text-wrapper-20">HYDERABAD OFFICE</div>
                  <p className="text-wrapper-21">
                    3rd Floor, Sinman Dwaraka, 164/3,
                    <br />
                    Inovies St, Patrika Nagar, Madhapur, HITEC City, Hyderabad, Telangana – 500081
                  </p>
                </div>
                <div className="frame-26">
                  <div className="text-wrapper-20">MUMBAI OFFICE</div>
                  <p className="text-wrapper-21">
                    Accesswork Business Centre,
                    <br />
                    Level 9, Wing A Eureka Towers, Mindspace IT Park Off. New Link Road, Malad(West), Mumbai - 400064
                  </p>
                </div>
                <div className="frame-26">
                  <div className="text-wrapper-20">DELHI OFFICE</div>
                  <p className="text-wrapper-21">
                    JoulestoWatts Business Solutions
                    <br />
                    3rd Floor, Saira Tower,
                    <br />
                    Gulmohar Park, New Delhi-110049
                  </p>
                </div>
                <div className="frame-26">
                  <div className="text-wrapper-20">U.S. OFFICE</div>
                  <p className="text-wrapper-21">
                    JoulestoWatts Consulting INC
                    <br />
                    13111 N central expy STE8031,
                    <br />
                    DALLAS, TX-75243
                  </p>
                </div>
              </div>
            </div>
            <div className="group-3">
              <div className="frame-27">
                <div className="frame-28">
                  <img className="direction" alt="Direction" src="/careers/arrow-forward-ios-1.png" />
                  <p className="text-wrapper-22">
                    Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind MGA Hospital, Subbaiah Reddy
                    Colony, Marathahalli, Bengaluru, Karnataka 560037
                  </p>
                  <div className="text-wrapper-23">View Larger Map</div>
                  <div className="frame-29">
                    <div className="text-wrapper-24">JoulestoWatts Business Solution</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-30">
              <div className="frame-31">
                <p className="text-wrapper-25">Certified to be a Great place to work 3 times in a row!</p>
                <p className="joulestowatts-is-2">
                  JoulestoWatts is certified as a great place to work three times in a row&nbsp;&nbsp;by Great Place to
                  Work® Institute, India.
                </p>
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </div>
  );
};
