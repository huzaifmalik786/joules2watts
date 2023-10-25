import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
// import { Carousel } from "../../components/administrative/Carousel";
import { CarouselWrapper } from "../../components/administrative/CarouselWrapper";
import { Cta } from "../../components/administrative/Cta";
import { PropertyDefaultWrapper } from "../../components/administrative/PropertyDefaultWrapper";
import { StateDefaultWrapper } from "../../components/administrative/StateDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LeadForm } from "../../components/shared/LeadForm";

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <button onClick={() => next()} className="next-button">
      <img className="arrow-forward-ios" alt="Arrow forward ios" src="/services/arrow-forward-ios.png" />
    </button>
  );
};

export const Administrative = () => {
  const screenWidth = useWindowWidth();
  const [openModal, setOpenModal] = useState(false);
  const [factor, setFactor] = useState();

  useEffect(() => {
    if (window.innerWidth > 450) {
      setFactor(window.innerWidth / 1440);
    } else {
      setFactor(window.innerWidth / 390);
    }
    document.querySelector(".div-2").style.transform = `scaleX(${factor})`;
    document.querySelector("#app").style.transform = `scaleY(${factor})`;
    document.querySelector(".div-2").style.transformOrigin = `top left`;
    document.querySelector("#app").style.transformOrigin = `top left`;
  });

  useEffect(() => {
    if (openModal) {
      document.querySelector("body").style.overflow = "hidden";
    }
    else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [openModal])

  return (
    <>
      <div className="administrative" >
        <div
          className="div-2"
          style={{
            height: screenWidth < 450 ? "6033px" : screenWidth >= 450 ? "4039px" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
          }}
        >
          {openModal && (
            <LeadForm
              openModal={openModal}
              setOpenModal={setOpenModal}
              factor={factor}
            />
          )}
          <Header blacklogo/>
          <Header1 className="header mobile-only" blacklogo/>

          <div className="mobile-only">
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="frame-7">
                  <div className="overlap-2">
                    <div className="overlap-group-3">
                      <div className="ellipse-5" />
                      <div className="ellipse-6" />
                      <div className="rectangle-4" />
                      <div className="rectangle-5" />
                    </div>
                    <div className="overlap-3">
                      <img
                        className="two-collegues"
                        alt="Two collegues"
                        src="/administrative/two-collegues-working-business-center.webp"
                      />
                      <div className="friendly-partners" />
                    </div>
                  </div>
                  <img className="ellipse-7" alt="Ellipse" />
                </div>
                <div className="frame-8">
                  <p className="standardise-your">
                    <span className="span">Standardise your </span>
                    <span className="text-wrapper-8">Payroll</span>
                    <span className="span"> processes and achieve the best-in-class model with JoulestoWatts.</span>
                  </p>
                  <p className="text-wrapper-9">
                    We are committed to delivering world-class payroll management and the most dependable HR solutions.
                  </p>
                  <Cta arrowForward="/administrative/arrow-forward-100.svg" className="CTA-instance" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="overlap-5"
            style={{
              height: screenWidth >= 450 ? "626px" : screenWidth < 450 ? "2722px" : undefined,
              left: screenWidth >= 450 ? "-3px" : screenWidth < 450 ? "0" : undefined,
              top: screenWidth >= 450 ? "-11px" : screenWidth < 450 ? "605px" : undefined,
              width: screenWidth >= 450 ? "1443px" : screenWidth < 450 ? "393px" : undefined,
            }}
          >
            <div
              className="frame-15"
              style={{
                height: screenWidth < 450 ? "583px" : screenWidth >= 450 ? "532px" : undefined,
                left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "3px" : undefined,
                top: screenWidth < 450 ? "0" : screenWidth >= 450 ? "99px" : undefined,
                width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
              }}
            />
            <div className="mobile-only">
              <div className="frame-16">
                <div className="div-wrapper">
                  <p className="text-wrapper-18">Payroll expertise to power your business</p>
                </div>
                <div className="frame-17">
                  <div className="frame-13">
                    <div className="text-wrapper-19">700+</div>
                    <div className="text-wrapper-20">payroll consultants</div>
                  </div>
                  <div className="frame-18">
                    <img className="vector" alt="Vector" src="/administrative/vector-82.svg" />
                    <div className="text-wrapper-21">Insurance Desk</div>
                  </div>
                  <div className="frame-18">
                    <img className="group-2" alt="Group" src="/administrative/group-8820.png" />
                    <div className="text-wrapper-22">Dedicated HR Business Partners</div>
                  </div>
                  <div className="frame-18">
                    <img className="vector-2" alt="Vector" src="/administrative/vector-83.svg" />
                    <div className="text-wrapper-23">Compliance Desk</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-19">60+</div>
                    <div className="text-wrapper-24">Clients</div>
                  </div>
                </div>
              </div>
              <div className="rectangle-6" />
            </div>

            <img
              className="two-collegues-2"
              style={{
                height: screenWidth >= 450 ? "536px" : screenWidth < 450 ? "533px" : undefined,
                left: screenWidth >= 450 ? "337px" : screenWidth < 450 ? "0" : undefined,
                top: screenWidth >= 450 ? "99px" : screenWidth < 450 ? "1107px" : undefined,
                width: screenWidth >= 450 ? "1106px" : screenWidth < 450 ? "325px" : undefined,
              }}
              alt="Two collegues"
              src={
                screenWidth >= 450
                  ? "/administrative/two-collegues-working-business-center.webp"
                  : screenWidth < 450
                    ? "/administrative/rectangle-137-5.svg"
                    : undefined
              }
            />
            <img
              className="rectangle-7"
              style={{
                height: screenWidth >= 450 ? "536px" : screenWidth < 450 ? "533px" : undefined,
                left: screenWidth >= 450 ? "3px" : screenWidth < 450 ? "16px" : undefined,
                top: screenWidth >= 450 ? "99px" : screenWidth < 450 ? "408px" : undefined,
                width: screenWidth >= 450 ? "1440px" : screenWidth < 450 ? "374px" : undefined,
              }}
              alt="Rectangle"
              src={
                screenWidth >= 450
                  ? "/administrative/rectangle-123-2.svg"
                  : screenWidth < 450
                    ? "/administrative/rectangle-175.svg"
                    : undefined
              }
            />
            <div
              className="frame-20"
              style={{
                gap: screenWidth >= 450 ? "42px" : screenWidth < 450 ? "40px" : undefined,
                left: screenWidth >= 450 ? "83px" : screenWidth < 450 ? "23px" : undefined,
                top: screenWidth >= 450 ? "205px" : screenWidth < 450 ? "805px" : undefined,
              }}
            >
              <div className="desktop-only">
                <div className="frame-21">
                  <div className="standardise-your-wrapper">
                    <p className="standardise-your-2">
                      <span className="span">Standardise your </span>
                      <span className="text-wrapper-8">Payroll</span>
                      <span className="span"> processes and achieve the best-in-class model with JoulestoWatts.</span>
                    </p>
                  </div>
                  <p className="text-wrapper-25">
                    We are committed to delivering world-class payroll management and the most dependable HR solutions.
                  </p>
                </div>
                <PropertyDefaultWrapper
                  arrowForward="/administrative/arrow-forward-105.svg"
                  arrowForwardClassName="CTA-4"
                  className="instance-node"
                  divClassName="CTA-3"
                  property1="default"
                  text="Connect with us"
                  link="/contact-us"
                />
              </div>
              <div className="mobile-only">
                <div style={{display:"flex", flexDirection:"column", gap: 30}}>
                  <div className="frame-22">
                    <div className="frame-23">
                      <div className="img-wrapper">
                        <img className="payroll" alt="Payroll" src="/administrative/payroll.png" />
                      </div>
                      <div className="text-wrapper-26">Payroll processing</div>
                    </div>
                    <div className="frame-24">
                      <div className="img-wrapper">
                        <img className="accounting" alt="Accounting" src="/administrative/accounting.png" />
                      </div>
                      <div className="text-wrapper-27">TDS Processing</div>
                    </div>
                  </div>
                  <div className="frame-22">
                    <div className="frame-24">
                      <div className="img-wrapper">
                        <img className="name-tag" alt="Name tag" src="/administrative/name-tag.png" />
                      </div>
                      <div className="text-wrapper-28">Employee self services</div>
                    </div>
                    <div className="frame-24">
                      <div className="img-wrapper">
                        <img className="money-yours" alt="Money yours" src="/administrative/money-yours.png" />
                      </div>
                      <div className="text-wrapper-29">Professional tax</div>
                    </div>
                  </div>
                  <div className="frame-22">
                    <div className="frame-24">
                      <div className="img-wrapper">
                        <img className="file" alt="File" src="/administrative/file.png" />
                      </div>
                      <div className="text-wrapper-27">EPF &amp; MP Act</div>
                    </div>
                    <div className="frame-24">
                      <div className="img-wrapper">
                        <img className="insurance-agent" alt="Insurance agent" src="/administrative/insurance-agent.png" />
                      </div>
                      <div className="text-wrapper-30">Employee State Insurance Act</div>
                    </div>
                  </div>
                  <div className="frame-22">
                    <div className="frame-24">
                      <div className="img-wrapper">
                        <img className="worker" alt="Worker" src="/administrative/worker.png" />
                      </div>
                      <div className="text-wrapper-31">Labour welfare fund</div>
                    </div>
                    <div className="frame-24">
                      <div className="img-wrapper">
                        <img className="shop" alt="Shop" src="/administrative/shop.png" />
                      </div>
                      <div className="text-wrapper-27">Shop establishment</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="frame-25 mobile-only">
              <div className="text-wrapper-32">Three pronged approach</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-4">
                  <img className="vector-3" alt="Vector" src="/administrative/vector-84.png" />
                  <img className="group-3" alt="Group" src="/administrative/group-27.png" />
                  <div className="text-wrapper-33">Onboarding</div>
                  <p className="online-system-driven">
                    Online system driven offer management
                    <br />
                    Online Offer Acceptance Tracking
                    <br />
                    Online personal data verification
                  </p>
                  <div className="frame-26">
                    <img
                      className="add-user-group-man"
                      alt="Add user group man"
                      src="/administrative/add-user-group-man-man.png"
                    />
                    <img className="vector-4" alt="Vector" src="/administrative/vector-85.svg" />
                  </div>
                </div>
              </div>
              <div className="frame-27">
                <div className="overlap-group-4">
                  <img className="vector-3" alt="Vector" src="/administrative/vector-86.png" />
                  <img className="group-3" alt="Group" src="/administrative/group-27.png" />
                  <div className="text-wrapper-34">Payroll</div>
                  <p className="system-driven">
                    System driven payroll
                    <br />
                    Online IT Declaration <br />
                    Digital payslips with email notifications <br />
                    Online generation of form 16
                  </p>
                  <div className="frame-28">
                    <img
                      className="add-user-group-man-2"
                      alt="Add user group man"
                      src="/administrative/add-user-group-man-man.png"
                    />
                    <img className="vector-4" alt="Vector" src="/administrative/vector-85.svg" />
                  </div>
                </div>
              </div>
              <div className="frame-29">
                <div className="overlap-group-4">
                  <img className="vector-3" alt="Vector" src="/administrative/vector-84.png" />
                  <img className="group-4" alt="Group" src="/administrative/group-40.png" />
                  <div className="text-wrapper-35">Support</div>
                  <p className="online-support">
                    Online support
                    <br />
                    Portal for 24X7 employee information access
                    <br />
                    Built -in escalation triggers
                  </p>
                  <div className="frame-28">
                    <img className="customer-support" alt="Customer support" src="/administrative/customer-support-1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-2 mobile-only">
            <div className="frame-32">
              <div className="overlap-group-5">
                <div className="frame-33">
                  <div className="linkedin" />
                </div>
                <img className="shutterstock" alt="Shutterstock" src="/administrative/shutterstock-1704596071-1-4.webp" />
                <div className="rectangle-9" />
                <div className="frame-34">
                  <p className="we-are-your-growth">
                    We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                    team of industry experts, management practitioners, and training partners catered to your growth.
                  </p>
                  <PropertyDefaultWrapper
                    arrowForward="/administrative/arrow-forward-101.svg"
                    arrowForwardClassName="CTA-9"
                    className="CTA-7"
                    divClassName="CTA-8"
                    property1="default"
                    text="About us"
                    link="/about-us"
                  />
                </div>
              </div>
            </div>
            <div className="frame-35">
              <img className="rectangle-10" alt="Rectangle" />
              <div className="overlap-6">
                <div className="frame-36">
                  <div className="text-wrapper-38">300+ Internal Staff</div>
                  <div className="frame-37">
                    <p className="our-client-and-2">
                      {" "}
                      Our client and solution-driven team structure assure maximum leverage of resources for your
                      business. We are your industry-leading growth partners and are trusted by high-end companies for
                      our commitment and timely delivery with efficient and commendable talent fits.
                    </p>
                    <button className="CTA-10">
                      <div className="text-wrapper-39">Learn More</div>
                      <img className="arrow-forward-4" alt="Arrow forward" src="/administrative/arrow-forward-9.png" />
                    </button>
                  </div>
                </div>
                <div className="text-wrapper-40">Why work with us?</div>
                <div className="frame-38">
                  <div className="ellipse-9" />
                  <div className="ellipse-10" />
                  <div className="ellipse-9" />
                </div>
              </div>
            </div>
            <CarouselWrapper
              arrowForward="/administrative/arrow-forward-9.png"
              arrowForwardClassName="carousel-instance"
              className="carousel-03"
            />
          </div>

          <div
            className="overlap-7"
            style={{
              height: screenWidth >= 450 ? "1100px" : screenWidth < 450 ? "1050px" : undefined,
              left: screenWidth >= 450 ? "-6px" : screenWidth < 450 ? "-185px" : undefined,
              top: screenWidth >= 450 ? "615px" : screenWidth < 450 ? "4123px" : undefined,
              width: screenWidth >= 450 ? "1446px" : screenWidth < 450 ? "742px" : undefined,
            }}
          >
            <div className="desktop-only">
              <div className="rectangle-11" />
              <div className="rectangle-12" />
              <img className="rectangle-13" alt="Rectangle" src="/administrative/rectangle-137-6.svg" />
              <img className="rectangle-14" alt="Rectangle" src="/administrative/rectangle-138-6.svg" />
              <div className="text-wrapper-41">Three pronged approach</div>
            </div>

            <div className="frame-39 mobile-only">
              <div className="overlap-group-6">
                <div className="rectangle-15" />
                <div className="frame-40">
                  <div className="frame-41">
                    <div className="frame-42">
                      <div className="frame-43">
                        <div className="frame-18">
                          <p className="text-wrapper-42">Trusted by Fortune 500 Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-44">
                    <img
                      className="mercedes-benz-logo"
                      alt="Mercedes benz logo"
                      src="/logos/mercedes-benz-logo-2010-1.png"
                    />
                    <img
                      className="GE-healthcare-logo"
                      alt="Ge healthcare logo"
                      src="/logos/ge-healthcare-logo-1.png"
                    />
                    <img className="sony-logo" alt="Sony logo" src="/logos/sony-logo-1.png" />
                    <img className="shell-logo" alt="Shell logo" src="/logos/shell-logo-1971-1995-1.png" />
                    <img className="amazon" alt="Amazon" src="/logos/amazon-1-1.png" />
                    <img
                      className="wipro-logo-new-og"
                      alt="Wipro logo new og"
                      src="/logos/wipro-logo-new-og-502x263-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="frame-45"
              style={{
                gap: screenWidth < 450 ? "92px" : screenWidth >= 450 ? "16px" : undefined,
                left: screenWidth < 450 ? "185px" : screenWidth >= 450 ? "86px" : undefined,
                top: screenWidth < 450 ? "366px" : screenWidth >= 450 ? "94px" : undefined,
              }}
            >
              <>
                <div className="frame-46 mobile-only">
                  <div className="frame-47">
                    <div className="text-wrapper-43">Ready to get started?</div>
                    <p className="text-wrapper-44">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-5 mobile-only">
                  <div className="frame-48">
                    <div className="overlap-group-7">
                      <div className="frame-49">
                        <div className="text-wrapper-45">Ready to get started?</div>
                        <p className="are-we-a-good-fit">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="CTA-11" onClick={() => setOpenModal(true)}>
                          <div className="text-wrapper-46">Schedule a call now</div>
                          <img className="arrow-forward-5" alt="Arrow forward" src="/administrative/arrow-forward-104.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>

              <div className="frame-50 desktop-only" />
            </div>
            <div className="desktop-only">
              <div className="frame-51">
                <div className="frame-43">
                  <p className="text-wrapper-47">Payroll expertise to power your business</p>
                </div>
                <div className="frame-52">
                  <div className="frame-13">
                    <div className="text-wrapper-19">700+</div>
                    <div className="text-wrapper-20">payroll consultants</div>
                  </div>
                  <div className="frame-18">
                    <img className="vector" alt="Vector" src="/administrative/vector-82.svg" />
                    <div className="text-wrapper-21">Insurance Desk</div>
                  </div>
                  <div className="frame-18">
                    <img className="group-2" alt="Group" src="/administrative/group-8820-1.png" />
                    <div className="text-wrapper-22">Dedicated HR Business Partners</div>
                  </div>
                  <div className="frame-18">
                    <img className="vector-2" alt="Vector" src="/administrative/vector-83.svg" />
                    <div className="text-wrapper-23">Compliance Desk</div>
                  </div>
                  <div className="frame-53">
                    <div className="text-wrapper-48">60+</div>
                    <div className="text-wrapper-24">Clients</div>
                  </div>
                </div>
              </div>
              <div className="frame-54">
                <div className="frame-55">
                  <div className="frame-43">
                    <div className="img-wrapper">
                      <img className="payroll" alt="Payroll" src="/administrative/payroll.png" />
                    </div>
                    <div className="text-wrapper-26">Payroll processing</div>
                  </div>
                  <div className="frame-56">
                    <div className="img-wrapper">
                      <img className="accounting" alt="Accounting" src="/administrative/accounting.png" />
                    </div>
                    <div className="text-wrapper-27">TDS Processing</div>
                  </div>
                  <div className="frame-56">
                    <div className="img-wrapper">
                      <img className="name-tag" alt="Name tag" src="/administrative/name-tag.png" />
                    </div>
                    <div className="text-wrapper-49">Employee self services</div>
                  </div>
                  <div className="frame-56">
                    <div className="img-wrapper">
                      <img className="money-yours" alt="Money yours" src="/administrative/money-yours.png" />
                    </div>
                    <div className="text-wrapper-29">Professional tax</div>
                  </div>
                </div>
                <div className="frame-57">
                  <div className="frame-56">
                    <div className="img-wrapper">
                      <img className="file" alt="File" src="/administrative/file.png" />
                    </div>
                    <div className="text-wrapper-27">EPF &amp; MP Act</div>
                  </div>
                  <div className="frame-56">
                    <div className="img-wrapper">
                      <img className="insurance-agent" alt="Insurance agent" src="/administrative/insurance-agent.png" />
                    </div>
                    <div className="text-wrapper-50">Employee State Insurance Act</div>
                  </div>
                  <div className="frame-56">
                    <div className="img-wrapper">
                      <img className="worker" alt="Worker" src="/administrative/worker.png" />
                    </div>
                    <div className="text-wrapper-31">Labour welfare fund</div>
                  </div>
                  <div className="frame-58">
                    <div className="img-wrapper">
                      <img className="shop" alt="Shop" src="/administrative/shop.png" />
                    </div>
                    <div className="text-wrapper-27">Shop establishment</div>
                  </div>
                </div>
              </div>
              <p className="joulestowatts">
                <span className="span">JoulestoWatts ensures </span>
                <span className="text-wrapper-8">100% compliance</span>
                <span className="span">
                  {" "}
                  checks to all statutory, labor and principal employer obligations under the contract labor act.
                </span>
              </p>
            </div>
          </div>
          <div className="desktop-only">
            <div className="overlap-8">
              <div className="carousel-3">
                <div className="frame-59">
                  <div className="overlap-group-8">
                    <img className="shutterstock-2" alt="Shutterstock" src="/administrative/shutterstock-1704596071-1-4.webp" />
                    <div className="rectangle-16" />
                  </div>
                </div>
                {/* <Carousel
                arrowForward="/administrative/arrow-forward-9.png"
                arrowForwardClassName="frame-61"
                className="carousel-02"
                overlapGroupClassName="carousel-02-instance"
                rectangleClassName="frame-60"
              /> */}
                <CarouselWrapper
                  arrowForward="/administrative/arrow-forward-9.png"
                  arrowForwardClassName="carousel-03-instance"
                  className="carousel-03"
                />
              </div>
              <PropertyDefaultWrapper
                arrowForward="/administrative/arrow-forward-111.svg"
                className="CTA-12"
                divClassName="CTA-13"
                property1="default"
                text="About us"
                link="/about-us"
              />
              <p className="we-are-your-growth-2">
                We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our team
                of industry experts, management practitioners, and training partners catered to your growth.
              </p>
            </div>
            <div className="group-6">
              <div className="overlap-9">
                <div className="frame-62">
                  <div className="frame-63">
                    <div className="frame-64">
                      <div className="text-wrapper-51">Ready to get started?</div>
                      <p className="are-we-a-good-fit-2">
                        Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                      </p>
                    </div>
                    <button className="CTA-14">
                      <div className="text-wrapper-52">Learn More</div>
                      <img className="arrow-forward-5" alt="Arrow forward" src="/administrative/arrow-forward-108.svg" />
                    </button>
                  </div>
                  <button className="CTA-15" onClick={() => setOpenModal(true)}>
                    <div className="text-wrapper-46">Schedule a call now</div>
                    <img className="arrow-forward-5" alt="Arrow forward" src="/administrative/arrow-forward-109.svg" />
                  </button>
                </div>
                <div className="frame-65">
                  <div className="overlap-group-9">
                    <div className="frame-66">
                      <div className="frame-64">
                        <div className="text-wrapper-53">Ready to get started?</div>
                        <p className="text-wrapper-54">
                          Whether you still have some questions or you’re ready to sign up for a specific services right
                          now, Our specialists are only a message away.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-67">
                    <div className="frame-37">
                      <p className="text-wrapper-55">Set up a virtual briefing</p>
                      <p className="text-wrapper-56">
                        Spend time with our executives and experts virtually and discuss current and future business
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-68">
              <div className="overlap-10">
                <div className="section-industries">
                  <div className="frame-69">
                    <div className="frame-70">
                      <div className="text-wrapper-57">Our Industries</div>
                      <p className="are-we-a-good-fit-3">
                        Are we a good fit for your company&#39;s challenges? See our specializations and which
                        industries use JoulestoWatts products.
                      </p>
                    </div>
                    <div className="CTA-wrapper">
                      <PropertyDefaultWrapper
                        arrowForward="/administrative/arrow-forward-110.svg"
                        className="CTA-16"
                        divClassName="CTA-13"
                        property1="default"
                        text="Learn more"
                        link="/industries"
                      />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <Carousel
                    arrows={false}
                    swipeable
                    draggable
                    showDots={false}
                    responsive={
                      {
                        desktop: {
                          breakpoint: { max: 3000, min: 450 },
                          items: 3,
                          slidesToSlide: 1,
                        }
                      }}
                    autoPlay={true}
                    infinite
                    autoPlaySpeed={3200}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel"
                    itemClass="carousel-item"
                    pauseOnHover={false}
                    customButtonGroup={<ButtonGroup />}
                  >
                    <div className="BFSI">
                      <div className="text-wrapper-58">Captive Services</div>
                    </div>
                    <div className="div-wrapper-2">
                      <div className="text-wrapper-58">IT Services</div>
                    </div>
                    <div className="telecom">
                      <div className="overlap-group-10">
                        <div className="text-wrapper-59">Product</div>
                        <div className="text-wrapper-59">Product</div>
                      </div>
                    </div>
                    <div className="telecom-3">
                      <div className="text-wrapper-58">ITES</div>
                    </div>
                    <div className="telecom-4">
                      <div className="text-wrapper-58">SME</div>
                    </div>
                  </Carousel>

                </div>
                {/* <div className="arrow">
                <img className="arrow-forward-ios" alt="Arrow forward ios" src="/administrative/arrow-forward-ios.png" />
              </div> */}
              </div>
            </div>
            <div className="group-7">
              <div className="overlap-11">
                <div className="frame-71">
                  <div className="overlap-group-11">
                    <div className="text-wrapper-60">Onboarding</div>
                    <div className="text-wrapper-61">Payroll</div>
                    <div className="text-wrapper-62">Support</div>
                    <p className="online-system-driven-2">
                      Online system driven offer management
                      <br />
                      Online Offer Acceptance Tracking
                      <br />
                      Online personal data verification
                    </p>
                    <p className="system-driven-2">
                      System driven payroll
                      <br />
                      Online IT Declaration <br />
                      Digital payslips with email notifications <br />
                      Online generation of form 16
                    </p>
                    <p className="online-support-2">
                      Online support
                      <br />
                      Portal for 24X7 employee information access
                      <br />
                      Built -in escalation triggers
                    </p>
                    <img className="payroll-2" alt="Payroll" src="/administrative/payroll-1.png" />
                    <img className="customer-support-2" alt="Customer support" src="/administrative/customer-support-1.png" />
                  </div>
                </div>
                <img
                  className="add-user-group-man-3"
                  alt="Add user group man"
                  src="/administrative/add-user-group-man-man-1.png"
                />
              </div>
            </div>
            <div className="overlap-12">
              <div className="frame-72">
                <div className="frame-41">
                  <div className="frame-42">
                    <div className="frame-43">
                      <div className="frame-18">
                        <p className="text-wrapper-42">Trusted by Fortune 500 Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-44">
                  <img
                    className="mercedes-benz-logo-2"
                    alt="Mercedes benz logo"
                    src="/logos/mercedes-benz-logo-2010-1.png"
                  />
                  <img
                    className="GE-healthcare-logo-2"
                    alt="Ge healthcare logo"
                    src="/logos/ge-healthcare-logo-1.png"
                  />
                  <img className="sony-logo-2" alt="Sony logo" src="/logos/sony-logo-1.png" />
                  <img className="shell-logo-2" alt="Shell logo" src="/logos/shell-logo-1971-1995-1.png" />
                  <img className="amazon-2" alt="Amazon" src="/logos/amazon-1-1.png" />
                  <img
                    className="wipro-logo-new-og-2"
                    alt="Wipro logo new og"
                    src="/logos/wipro-logo-new-og-502x263-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>

  );
};
