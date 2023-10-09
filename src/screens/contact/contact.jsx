import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";

export const Contact = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="contact">
      <div
        className="iphone"
        style={{
          height: screenWidth < 450 ? "4446px" : screenWidth >= 450 ? "3783px" : undefined,
          width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
        }}
      >
        <Header />
        <Header1 className="header mobile-only" />
        <div className="mobile-only">
          <div className="overlap">
            <div className="div">Contact Us</div>
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <p className="let-s-help-you-find">
                <span className="span">Let’s help you find the </span>
                <span className="text-wrapper-9">
                  right talent.
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-10">Drop us your details, we&#39;ll get in touch with you soon </span>
              </p>
            </div>
            <div className="frame-9">
              <div className="frame-10">
                <input className="input" />
                <input className="input" />
              </div>
              <input className="input" />
              <textarea className="please-describe-your-wrapper" />
              <button className="button">
                <div className="text-wrapper-11">Submit</div>
                <img className="arrow-circle-right" alt="Arrow circle right" src="/contact/arrow-circle-right.png" />
              </button>
            </div>
          </div>
          <div className="frame-11">
            <div className="text-wrapper-12">Contact Information</div>
            <div className="frame-12">
              <div className="div-wrapper">
                <div className="div-2">
                  <img className="img" alt="Phone call" src="/contact/phone-call-1-2.svg" />
                  <div className="frame-4">
                    <div className="text-wrapper-13">Phone Number</div>
                    <div className="text-wrapper-14">+(91) 9867567898</div>
                  </div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="div-2">
                  <img className="img" alt="Mail" src="/contact/mail-1.svg" />
                  <div className="frame-4">
                    <div className="text-wrapper-13">Email Address</div>
                    <div className="text-wrapper-14">Support@joulestowatts.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desktop-only">
          <div className="overlap-2">
            <div className="text-wrapper-15">Contact Us</div>
          </div>
          <div className="frame-13">
            <div className="text-wrapper-12">Contact Information</div>
            <div className="frame-14">
              <div className="frame-15">
                <div className="div-2">
                  <img className="img" alt="Phone call" src="/contact/phone-call-1-1.svg" />
                  <div className="frame-4">
                    <div className="text-wrapper-13">Phone Number</div>
                    <div className="text-wrapper-14">+(91) 9867567898</div>
                  </div>
                </div>
              </div>
              <div className="frame-15">
                <div className="div-2">
                  <img className="img" alt="Mail" src="/contact/mail-1.svg" />
                  <div className="frame-4">
                    <div className="text-wrapper-13">Email Address</div>
                    <div className="text-wrapper-14">Support@joulestowatts.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-16">
            <div className="frame-14">
              <p className="let-s-help-you-find-2">
                <span className="span">Let’s help you find the </span>
                <span className="text-wrapper-9">
                  right talent.
                  <br />
                </span>
                <span className="span">
                  <br />
                </span>
                <span className="text-wrapper-10">Drop us your details, we&#39;ll get in touch with you soon </span>
              </p>
            </div>
            <div className="frame-17">
              <div className="frame-18">
                <input className="frame-19" placeholder="Name" />
                <input className="frame-19" placeholder="Email" />
              </div>
              <input className="subject" placeholder="Subject" />
              {/* <div className="input-wrapper"> */}
              <textarea className="input-wrapper" placeholder="Please Describe your requirement" />
              {/* </div> */}
              <button className="button">
                <div className="text-wrapper-11">Submit</div>
                <img className="arrow-circle-right" alt="Arrow circle right" src="/contact/arrow-circle-right.png" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="section-growth"
          style={{
            height: screenWidth >= 450 ? "540px" : screenWidth < 450 ? "627px" : undefined,
            left: screenWidth >= 450 ? "-15px" : screenWidth < 450 ? "-1px" : undefined,
            top: screenWidth >= 450 ? "1244px" : screenWidth < 450 ? "1445px" : undefined,
            width: screenWidth >= 450 ? "1440px" : screenWidth < 450 ? "391px" : undefined,
          }}
        >
          <div className="background-image desktop-only">
            <div className="overlap-group-2">
              <img className="pyramids" alt="Pyramids" src="/contact/pyramids-1.png" />
              <div className="frame-20">
                <div className="frame-21">
                  <div className="text-wrapper-16">HEAD OFFICE</div>
                  <p className="text-wrapper-17">
                    JoulestoWatts Business Solutions, Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road,
                    behind MGA Hospital, Subbaiah Reddy Colony, Marathahalli, Bengaluru, Karnataka 560037
                  </p>
                </div>
              </div>
              <div className="frame-22">
                <div className="frame-21">
                  <div className="text-wrapper-16">BRANCH OFFICE</div>
                  <p className="text-wrapper-17">
                    JoulestoWatts Business Solutions, Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road,
                    behind MGA Hospital, Subbaiah Reddy Colony, Marathahalli, Bengaluru, Karnataka 560037
                  </p>
                </div>
              </div>
              <img
                className="minimal-podium"
                alt="Minimal podium"
                src="/contact/minimal-podium-product-display-stand-pedestal-studio-gray-color.png"
              />
              <img className="rectangle" alt="Rectangle" src="/contact/rectangle-118-15.svg" />
            </div>
          </div>

          <div className="mobile-only">
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <img className="pyramids-2" alt="Pyramids" src="/contact/pyramids-1.png" />
                <img className="minimal-podium-2" alt="Minimal podium"
                  src="/contact/minimal-podium-product-display-stand-pedestal-studio-gray-color.png"
                />
                <img className="rectangle-2" alt="Rectangle" src="/contact/rectangle-118-15.svg" />
                <div className="frame-23">
                  <div className="frame-24">
                    <div className="text-wrapper-18">BRANCH OFFICE</div>
                    <p className="text-wrapper-19">
                      JoulestoWatts Business Solutions, Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road,
                      behind MGA Hospital, Subbaiah Reddy Colony, Marathahalli, Bengaluru, Karnataka 560037
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-25">
              <div className="frame-24">
                <div className="text-wrapper-18">HEAD OFFICE</div>
                <p className="text-wrapper-19">
                  JoulestoWatts Business Solutions, Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind
                  MGA Hospital, Subbaiah Reddy Colony, Marathahalli, Bengaluru, Karnataka 560037
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-only">
          <div className="frame-26">
            <div className="frame-27">
              <div className="frame-28">
                <div className="text-wrapper-20">HYDERABAD OFFICE</div>
                <p className="text-wrapper-21">
                  3rd Floor, Sinman Dwaraka, 164/3,
                  <br />
                  Inovies St, Patrika Nagar, Madhapur, HITEC City,
                  <br />
                  Hyderabad, Telangana – 500081
                </p>
              </div>
            </div>
          </div>
          <div className="frame-29">
            <div className="frame-28">
              <div className="text-wrapper-20">DELHI OFFICE</div>
              <p className="text-wrapper-21">
                JoulestoWatts Business Solutions
                <br />
                3rd Floor, Saira Tower,
                <br />
                Gulmohar Park, New Delhi-110049
              </p>
            </div>
          </div>
          <div className="frame-30">
            <div className="frame-28">
              <div className="text-wrapper-20">MUMBAI OFFICE</div>
              <p className="text-wrapper-21">
                Accesswork Business Centre,
                <br />
                Level 9, Wing A Eureka Towers, Mindspace IT Park Off. New Link Road, Malad(West), Mumbai - 400064
              </p>
            </div>
          </div>
          <div className="frame-31">
            <div className="frame-28">
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
          <div className="frame-32">
            <div className="frame-33">
              <div className="frame-28">
                <div className="text-wrapper-22">400+</div>
                <div className="text-wrapper-23">Clients</div>
              </div>
              <div className="frame-28">
                <div className="text-wrapper-22">4000+</div>
                <div className="text-wrapper-23"> Consultants</div>
              </div>
              <div className="frame-28">
                <div className="text-wrapper-22">85+</div>
                <div className="text-wrapper-23">Education Partners</div>
              </div>
              <div className="frame-28">
                <div className="text-wrapper-22">05</div>
                <div className="text-wrapper-23">Offices</div>
              </div>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group-2">
              <div className="frame-34">
                <p className="text-wrapper-24">© Copyright © 2018-19 Joulestowatts Business Solutions Pvt. Ltd.</p>
                <div className="ellipse-2" />
                <div className="text-wrapper-24">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group-3"
          style={{
            backgroundImage:
              screenWidth >= 450
                ? "url(/contact/mask-group-8.png)"
                : screenWidth < 450
                  ? "url(/contact/arrow-forward-ios-1.png)"
                  : undefined,
            height: screenWidth >= 450 ? "644px" : screenWidth < 450 ? "173px" : undefined,
            left: screenWidth >= 450 ? "82px" : screenWidth < 450 ? "-3123px" : undefined,
            top: screenWidth >= 450 ? "2552px" : screenWidth < 450 ? "-8388px" : undefined,
            width: screenWidth >= 450 ? "1280px" : screenWidth < 450 ? "344px" : undefined,
          }}
        >
          <div
            className="frame-35"
            style={{
              display: screenWidth >= 450 ? "inline-flex" : screenWidth < 450 ? "flex" : undefined,
              height: screenWidth >= 450 ? "214px" : screenWidth < 450 ? "57px" : undefined,
              left: screenWidth >= 450 ? "32px" : screenWidth < 450 ? "9px" : undefined,
              top: screenWidth >= 450 ? "32px" : screenWidth < 450 ? "9px" : undefined,
              width: screenWidth < 450 ? "104px" : undefined,
            }}
          >
            <div
              className="frame-36"
              style={{
                marginBottom: screenWidth < 450 ? "-135.51px" : undefined,
                marginRight: screenWidth < 450 ? "-283.77px" : undefined,
              }}
            >
              <img
                className="direction"
                style={{
                  left: screenWidth >= 450 ? "305px" : screenWidth < 450 ? "-3951px" : undefined,
                  top: screenWidth >= 450 ? "0" : screenWidth < 450 ? "-14467px" : undefined,
                }}
                alt="Direction"
                src={
                  screenWidth >= 450
                    ? "/contact/direction-1-1.svg"
                    : screenWidth < 450
                      ? "/contact/arrow-forward-ios-1.png"
                      : undefined
                }
              />
              <p className="text-wrapper-25">
                Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind MGA Hospital, Subbaiah Reddy Colony,
                Marathahalli, Bengaluru, Karnataka 560037
              </p>
              <div className="text-wrapper-26">View Larger Map</div>
              <div className="frame-37">
                <div className="text-wrapper-13">JoulestoWatts Business Solution</div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-only">
          <div className="overlap-group-wrapper">
            <div className="overlap-4">
              <div className="frame-40">
                <div className="DIV-3">
                  <div className="text-wrapper-3">Services</div>
                  <div className="text-wrapper-3">Platforms</div>
                  <div className="text-wrapper-3">About</div>
                  <div className="text-wrapper-3">Leadership</div>
                  <div className="text-wrapper-3">Industries</div>
                  <div className="text-wrapper-3">Careers</div>
                  <div className="text-wrapper-3">CSR</div>
                </div>
                <a
                  className="text-wrapper-29"
                  href="https://www.facebook.com/joulestowatts/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
                <a
                  className="text-wrapper-30"
                  href="https://www.instagram.com/joulestowatts/?hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className="text-wrapper-31"
                  href="https://twitter.com/j2w_consulting"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
                <a
                  className="text-wrapper-32"
                  href="https://www.linkedin.com/in/joules-to-watts-612591236/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <div className="text-wrapper-33">Privacy policy</div>
                <div className="text-wrapper-34">Contact us</div>
                <div className="frame-41">
                  <div className="text-wrapper-2">HEAD OFFICE</div>
                  <p className="p">
                    Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind MGA Hospital, Subbaiah Reddy
                    Colony, Marathahalli, Bengaluru, Karnataka 560037
                  </p>
                </div>
                <div className="group-4">
                  <a
                    className="text-wrapper-5"
                    href="https://www.youtube.com/channel/UCpxlw04SInw2jA2fGqZbNeQ"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Youtube
                  </a>
                  <img className="face-book" alt="Face book" src="/contact/facebook-55.svg" />
                </div>
                <img className="linkedin-2" alt="Linkedin" src="/contact/linkedin-13.svg" />
                <img className="facebook-2" alt="Facebook" src="/contact/facebook-72.svg" />
                <img className="facebook-3" alt="Facebook" src="/contact/facebook-52.svg" />
                <img className="facebook-4" alt="Facebook" src="/contact/facebook-74.svg" />
              </div>
              <div className="group-5">
                <div className="frame-34">
                  <p className="text-wrapper-24">© Copyright © 2018-19 Joulestowatts Business Solutions Pvt. Ltd.</p>
                  <div className="ellipse-2" />
                  <div className="text-wrapper-24">Privacy Policy</div>
                </div>
              </div>
              <img className="logo-3" alt="Logo" src="/contact/logo.png" />
            </div>
          </div>
        </div>

        <div className="mobile-only">
          <div className="overlap-5">
            <div className="frame-42">
              <div className="frame-43">
                <img className="direction-2" alt="Direction" src="/contact/direction-1-3.svg" />
                <p className="text-wrapper-35">
                  Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind MGA Hospital, Subbaiah Reddy
                  Colony, Marathahalli, Bengaluru, Karnataka 560037
                </p>
                <div className="text-wrapper-36">View Larger Map</div>
                <div className="frame-44">
                  <div className="text-wrapper-37">JoulestoWatts Business Solution</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-45">
            <div className="frame-46">
              <div className="frame-47">
                <div className="frame-48">
                  <div className="text-wrapper-22">400+</div>
                  <div className="text-wrapper-23">Clients</div>
                </div>
                <div className="frame-48">
                  <div className="text-wrapper-22">4000+</div>
                  <div className="text-wrapper-23"> Consultants</div>
                </div>
              </div>
              <div className="frame-47">
                <div className="frame-49">
                  <div className="text-wrapper-22">85+</div>
                  <div className="text-wrapper-38">Education Partners</div>
                </div>
                <div className="frame-48">
                  <div className="text-wrapper-22">05</div>
                  <div className="text-wrapper-23">Offices</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-50">
            <div className="frame-8">
              <div className="frame-51">
                <div className="frame-52">
                  <div className="frame-53">
                    <div className="text-wrapper-39">HYDERABAD OFFICE</div>
                    <p className="text-wrapper-40">
                      3rd Floor, Sinman Dwaraka, 164/3,
                      <br />
                      Inovies St, Patrika Nagar, Madhapur, HITEC City,
                      <br />
                      Hyderabad, Telangana – 500081
                    </p>
                  </div>
                </div>
              </div>
              <div className="frame-52">
                <div className="frame-53">
                  <div className="text-wrapper-39">MUMBAI OFFICE</div>
                  <p className="text-wrapper-40">
                    Accesswork Business Centre,
                    <br />
                    Level 9, Wing A Eureka Towers, Mindspace IT Park Off. New Link Road, Malad(West), Mumbai - 400064
                  </p>
                </div>
              </div>
              <div className="frame-52">
                <div className="frame-53">
                  <div className="text-wrapper-39">DELHI OFFICE</div>
                  <p className="text-wrapper-40">
                    JoulestoWatts Business Solutions
                    <br />
                    3rd Floor, Saira Tower,
                    <br />
                    Gulmohar Park, New Delhi-110049
                  </p>
                </div>
              </div>
              <div className="frame-52">
                <div className="frame-53">
                  <div className="text-wrapper-39">U.S. OFFICE</div>
                  <p className="text-wrapper-40">
                    JoulestoWatts Consulting INC
                    <br />
                    13111 N central expy STE8031,
                    <br />
                    DALLAS, TX-75243
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
