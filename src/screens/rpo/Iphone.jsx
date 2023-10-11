import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Carousel } from "../../components/rpo/Carousel";
import { Cta } from "../../components/rpo/Cta";
import { PropertyDefaultWrapper } from "../../components/rpo/PropertyDefaultWrapper";
import { StateDefaultWrapper } from "../../components/rpo/StateDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { LeadForm } from "../../components/shared/LeadForm";

export const RPO = () => {
  const screenWidth = useWindowWidth();
  const [openModal, setOpenModal] = useState(false);
  const [height, setHeight] = useState(0)

  useEffect(() => {
    // console.log(window.innerWidth);
    if (window.innerWidth > 450) {
      const el = document.querySelector('.footer-2-shared');
      setHeight(el.getBoundingClientRect().bottom);
      document.querySelector(".div-2").style.transform = `scale(${window.innerWidth / 1430})`;
      document.querySelector(".div-2").style.transformOrigin = `top left`;
    } else {
      const el = document.querySelector('.footer-3-shared');
      setHeight(el.getBoundingClientRect().bottom);
      document.querySelector(".div-2").style.transform = `scale(${window.innerWidth / 390})`;
      document.querySelector(".div-2").style.transformOrigin = `top left`;
    }
  });

  return (
    <>
      {openModal &&
        <LeadForm openModal={openModal} setOpenModal={setOpenModal} />
      }
      <div className="rpo" style={{height: height}}>
        <div
          className="div-2"
          style={{
            height: screenWidth < 450 ? "5153px" : screenWidth >= 450 ? "3553px" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
          }}
        >
          <Header />
          <div className="mobile-only">
            <Header1 className="header" />
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="frame-4">
                  <div className="overlap-2">
                    <div className="overlap-group-2">
                      <div className="ellipse-3" />
                      <div className="ellipse-4" />
                      <div className="rectangle-2" />
                      <div className="rectangle-3" />
                    </div>
                    <img
                      className="friendly-partners"
                      alt="Friendly partners"
                      src="/rpo/friendly-partners-handshaking-group-meeting-thanking-successful.webp"
                    />
                  </div>
                  <img className="ellipse-5" alt="Ellipse" />
                </div>
                <div className="frame-5">
                  <p className="hire-the-right">
                    <span className="span">Hire the right talent seamlessly with the&nbsp;&nbsp;</span>
                    <span className="text-wrapper-5">best-in-class RPO</span>
                  </p>
                  <p className="text-wrapper-6">
                    JoulestoWatts RPO (Recruitment Process Outsourcing) solutions enable businesses to source and hire
                    talent faster.
                  </p>
                  <Cta arrowForward="/rpo/arrow-forward-92.svg" className="CTA-instance" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="overlap-4"
            style={{
              height: screenWidth >= 450 ? "629px" : screenWidth < 450 ? "1945px" : undefined,
              left: screenWidth >= 450 ? "-17px" : screenWidth < 450 ? "0" : undefined,
              top: screenWidth >= 450 ? "2632px" : screenWidth < 450 ? "502px" : undefined,
              width: screenWidth >= 450 ? "1456px" : screenWidth < 450 ? "390px" : undefined,
            }}
          >
            <div
              className="frame-12"
              style={{
                backgroundColor: screenWidth < 450 ? "#e9e9e9" : screenWidth >= 450 ? "#f6f7f8" : undefined,
                height: screenWidth < 450 ? "1945px" : screenWidth >= 450 ? "629px" : undefined,
                left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "16px" : undefined,
                width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
              }}
            >
              <div className="mobile-only">
                <div className="frame-13">
                  <div className="div-wrapper">
                    <p className="text-wrapper-15">
                      We at JoulestoWatts have tailored our RPO solutions to provide valuable insight at every stage of
                      the talent acquisition lifecycle.
                    </p>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <img
                        className="abstract-geometric"
                        alt="Abstract geometric"
                        src="/rpo/abstract-geometric-design-element-3d-hexagonal-three-dimensional-1.webp"
                      />
                      <img className="rectangle-4" alt="Rectangle" src="/rpo/rectangle-138-4.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-14">
                  <div className="text-wrapper-16">RPO Capabilities</div>
                  <p className="joulestowatts">
                    JoulestoWatts industry-leading recruitment process outsourcing solutions focus on methodology,
                    scalability,&nbsp;&nbsp;seamless compliance &amp; measurable results for every step of the hiring
                    process
                  </p>
                </div>
                <div className="frame-15">
                  <div className="group-wrapper">
                    <div className="group-2">
                      <div className="overlap-group-4">
                        <img className="rectangle-5" alt="Rectangle" src="/rpo/rectangle-125-6.svg" />
                        <div className="frame-16">
                          <div className="frame-17">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Demand Management</div>
                          </div>
                          <div className="frame-17">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Sourcing</div>
                          </div>
                          <div className="frame-17">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Validation</div>
                          </div>
                          <div className="frame-17">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Interview management</div>
                          </div>
                          <div className="frame-17">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Onboarding support</div>
                          </div>
                          <div className="frame-17">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="frame-18">
                              <div className="systems-process">Systems &amp; Process Implementation</div>
                            </div>
                          </div>
                          <div className="frame-17">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">SLA management</div>
                          </div>
                        </div>
                        <div className="text-wrapper-18">Recruiting Resource Outsourcing</div>
                      </div>
                    </div>
                  </div>
                  <div className="group-3">
                    <div className="group-2">
                      <div className="overlap-group-4">
                        <img className="rectangle-6" alt="Rectangle" src="/rpo/rectangle-125-7.svg" />
                        <div className="frame-19">
                          <div className="frame-20">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="partner-s-submission">Partner&#39;s submission management</div>
                          </div>
                          <div className="frame-20">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Validation</div>
                          </div>
                          <div className="frame-20">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Interview scheduling</div>
                          </div>
                          <div className="frame-20">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Interview coordination</div>
                          </div>
                          <div className="frame-20">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="text-wrapper-17">Feedback coordination</div>
                          </div>
                          <div className="frame-21">
                            <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                            <div className="selection-onboarding">Selection &amp; Onboarding support</div>
                          </div>
                        </div>
                        <p className="contractor">Contractor Submission &amp; Interview Management</p>
                      </div>
                    </div>
                  </div>
                  <div className="group-4">
                    <div className="group-5">
                      <img className="rectangle-7" alt="Rectangle" src="/rpo/rectangle-125-8.png" />
                      <div className="frame-16">
                        <div className="frame-17">
                          <img className="vector-2" alt="Vector" src="/rpo/rectangle-125-8.png" />
                          <div className="text-wrapper-17">Demand Management</div>
                        </div>
                        <div className="frame-17">
                          <img className="vector-3" alt="Vector" src="/rpo/rectangle-125-8.png" />
                          <div className="text-wrapper-17">Sourcing</div>
                        </div>
                        <div className="frame-17">
                          <img className="vector-4" alt="Vector" src="/rpo/rectangle-125-8.png" />
                          <div className="text-wrapper-17">Validation</div>
                        </div>
                        <div className="frame-17">
                          <img className="vector-5" alt="Vector" src="/rpo/rectangle-125-8.png" />
                          <div className="text-wrapper-17">Interview management</div>
                        </div>
                        <div className="frame-17">
                          <img className="vector-6" alt="Vector" src="/rpo/rectangle-125-8.png" />
                          <div className="text-wrapper-17">Onboarding support</div>
                        </div>
                        <div className="frame-17">
                          <img className="vector-7" alt="Vector" src="/rpo/rectangle-125-8.png" />
                          <div className="frame-18">
                            <div className="systems-process">Systems &amp; Process Implementation</div>
                          </div>
                        </div>
                        <div className="frame-17">
                          <img className="vector-8" alt="Vector" src="/rpo/rectangle-125-8.png" />
                          <div className="text-wrapper-17">SLA management</div>
                        </div>
                      </div>
                      <div className="text-wrapper-18">Internal Job Posting Coordination</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop-only">
              <div className="group-6">
                <div className="overlap-5">
                  <div className="frame-22">
                    <div className="overlap-group-5">
                      <div className="frame-23">
                        <div className="frame-24">
                          <div className="text-wrapper-19">Ready to get started?</div>
                          <p className="are-we-a-good-fit">
                            Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                          </p>
                        </div>
                        <button className="CTA-2">
                          <div className="text-wrapper-20">Learn More</div>
                          <img className="arrow-forward-3" alt="Arrow forward" src="/rpo/arrow-forward-98.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="frame-25">
                    <div className="overlap-6">
                      <div className="frame-26">
                        <div className="frame-24">
                          <div className="text-wrapper-21">Ready to get started?</div>
                          <p className="text-wrapper-22">
                            Whether you still have some questions or you’re ready to sign up for a specific services
                            right now, Our specialists are only a message away.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="frame-27">
                      <div className="frame-28">
                        <p className="text-wrapper-23">Set up a virtual briefing</p>
                        <p className="text-wrapper-24">
                          Spend time with our executives and experts virtually and discuss current and future business
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="CTA-3" onClick={()=> setOpenModal(true)}>
                    <div className="text-wrapper-25">Schedule a call now</div>
                    <img className="arrow-forward-3" alt="Arrow forward" src="/rpo/arrow-forward-99.svg" />
                  </button>
                </div>
              </div>
              <div className="frame-29">
                <div className="frame-30">
                  <div className="frame-31">
                    <div className="frame-32">
                      <div className="frame-18">
                        <p className="text-wrapper-26">Trusted by Fortune 500 Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-33">
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

            <div className="frame-34 mobile-only">
              <div className="frame-35">
                <div className="frame-36">
                  <img className="group-7" alt="Group" src="/rpo/group-8800.png" />
                  <div className="text-wrapper-27">Best-in-class Technology</div>
                </div>
                <div className="frame-37">
                  <img className="group-8" alt="Group" src="/rpo/group-25.png" />
                  <div className="text-wrapper-28">Seamless Compliance</div>
                </div>
              </div>
              <div className="frame-35">
                <div className="frame-37">
                  <img className="group-9" alt="Group" src="/rpo/group-8804.png" />
                  <div className="text-wrapper-29">Global Reach</div>
                </div>
                <div className="frame-37">
                  <img className="group-10" alt="Group" src="/rpo/group-8803.png" />
                  <div className="text-wrapper-30">Scalability</div>
                </div>
              </div>
              <div className="frame-38">
                <div className="frame-37">
                  <img className="group-11" alt="Group" src="/rpo/group-8801.png" />
                  <div className="text-wrapper-30">Flexibility</div>
                </div>
                <div className="frame-37">
                  <img className="group-12" alt="Group" src="/rpo/group-8802.png" />
                  <div className="text-wrapper-31">Enhanced candidate experience</div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-2 mobile-only">
            <div className="frame-39">
              <div className="overlap-group-6">
                <img className="rectangle-8" alt="Rectangle" />
                <div className="frame-40">
                  <div className="linkedin" />
                </div>
                <img className="shutterstock" alt="Shutterstock" src="/rpo/shutterstock-1704596071-1-1.webp" />
                <div className="rectangle-9" />
                <div className="frame-41">
                  <p className="we-are-your-growth">
                    We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                    team of industry experts, management practitioners, and training partners catered to your growth.
                  </p>
                  <PropertyDefaultWrapper
                    arrowForward="/rpo/arrow-forward-93.svg"
                    arrowForwardClassName="CTA-5"
                    className="instance-node"
                    divClassName="CTA-4"
                    property1="default"
                    text="About us"
                    link="/about-us"
                  />
                </div>
              </div>
            </div>
            <div className="frame-42">
              <img className="rectangle-10" alt="Rectangle" />
              <div className="overlap-7">
                <div className="frame-43">
                  <div className="text-wrapper-32">300+ Internal Staff</div>
                  <div className="frame-28">
                    <p className="our-client-and">
                      {" "}
                      Our client and solution-driven team structure assure maximum leverage of resources for your
                      business. We are your industry-leading growth partners and are trusted by high-end companies for
                      our commitment and timely delivery with efficient and commendable talent fits.
                    </p>
                    <button className="CTA-6">
                      <div className="text-wrapper-33">Learn More</div>
                      <img className="arrow-forward-4" alt="Arrow forward" src="/rpo/rectangle-125-8.png" />
                    </button>
                  </div>
                </div>
                <div className="text-wrapper-34">Why work with us?</div>
                <div className="frame-44">
                  <div className="ellipse-7" />
                  <div className="ellipse-8" />
                  <div className="ellipse-7" />
                </div>
              </div>
            </div>
            <Carousel
              arrowForward="/rpo/rectangle-125-8.png"
              arrowForwardClassName="carousel-instance"
              className="carousel-03"
            />
          </div>

          <div
            className="overlap-8"
            style={{
              height: screenWidth >= 450 ? "2639px" : screenWidth < 450 ? "1050px" : undefined,
              left: screenWidth >= 450 ? "0" : screenWidth < 450 ? "-185px" : undefined,
              top: screenWidth >= 450 ? "-7px" : screenWidth < 450 ? "3243px" : undefined,
              width: screenWidth >= 450 ? "1440px" : screenWidth < 450 ? "742px" : undefined,
            }}
          >
            <div className="desktop-only">
              <img className="rectangle-11" alt="Rectangle" src="/rpo/rectangle-119.svg" />
              <div className="text-wrapper-35">Seamless Compliance</div>
              <img className="rectangle-12" alt="Rectangle" src="/rpo/rectangle-137-4.svg" />
              <div className="text-wrapper-36">Global Reach</div>
              <div className="text-wrapper-37">Scalability</div>
              <div className="text-wrapper-38">Flexibility</div>
              <div className="text-wrapper-39">Enhanced candidate experience</div>
              <p className="text-wrapper-40">
                We at JoulestoWatts have tailored our RPO solutions to provide valuable insight at every stage of the
                talent acquisition lifecycle.
              </p>
              <div className="frame-45">
                <div className="text-wrapper-41">RPO Capabilities</div>
                <p className="joulestowatts-2">
                  JoulestoWatts industry-leading recruitment process outsourcing solutions focus on methodology,
                  scalability,&nbsp;&nbsp;seamless compliance &amp; measurable results for every step of the hiring
                  process
                </p>
              </div>
              <img
                className="abstract-geometric-2"
                alt="Abstract geometric"
                src="/rpo/abstract-geometric-design-element-3d-hexagonal-three-dimensional-1.webp"
              />
              <img className="rectangle-13" alt="Rectangle" src="/rpo/rectangle-138-5.svg" />
              <div className="group-13">
                <div className="group-14">
                  <div className="overlap-group-7">
                    <img className="img-2" alt="Rectangle" src="/rpo/rectangle-125-3.svg" />
                    <div className="frame-46">
                      <div className="frame-47">
                        <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                        <div className="text-wrapper-17">Demand Management</div>
                      </div>
                      <div className="frame-48">
                        <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                        <div className="text-wrapper-17">Sourcing</div>
                      </div>
                      <div className="frame-49">
                        <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                        <div className="text-wrapper-17">Validation</div>
                      </div>
                      <div className="frame-50">
                        <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                        <div className="text-wrapper-17">Interview management</div>
                      </div>
                      <div className="frame-51">
                        <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                        <div className="text-wrapper-17">Onboarding support</div>
                      </div>
                      <div className="frame-52">
                        <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                        <div className="frame-18">
                          <div className="text-wrapper-17">Systems &amp; Process Implementation</div>
                        </div>
                      </div>
                      <div className="frame-53">
                        <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                        <div className="text-wrapper-17">SLA management</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-42">Recruiting Resource Outsourcing</div>
              <div className="group-15">
                <div className="overlap-9">
                  <div className="group-16">
                    <div className="overlap-group-8">
                      <div className="text-wrapper-43">Internal Job Posting Coordination</div>
                    </div>
                  </div>
                  <img className="rectangle-14" alt="Rectangle" src="/rpo/rectangle-139.svg" />
                  <div className="frame-54">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Tracking&nbsp;&nbsp;applicant</div>
                  </div>
                  <div className="frame-55">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Transfer coordination</div>
                  </div>
                  <div className="frame-56">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Internal interview coordination</div>
                  </div>
                </div>
              </div>
              <div className="group-17">
                <div className="overlap-group-7">
                  <img className="img-2" alt="Group" src="/rpo/group-60.png" />
                  <p className="contractor-2">Contractor Submission &amp; Interview Management</p>
                  <img className="rectangle-14" alt="Rectangle" src="/rpo/rectangle-110-8.svg" />
                  <div className="frame-57">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Partner&#39;s submission management</div>
                  </div>
                  <div className="frame-58">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Validation</div>
                  </div>
                  <div className="frame-59">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Interview scheduling</div>
                  </div>
                  <div className="frame-60">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Interview coordination</div>
                  </div>
                  <div className="frame-61">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Feedback coordination</div>
                  </div>
                  <div className="frame-62">
                    <img className="vector" alt="Vector" src="/rpo/vector-9.svg" />
                    <div className="text-wrapper-17">Selection &amp; Onboarding support</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-63 mobile-only">
              <div className="overlap-group-9">
                <div className="rectangle-15" />
                <div className="frame-64">
                  <div className="frame-30">
                    <div className="frame-31">
                      <div className="frame-32">
                        <div className="frame-18">
                          <p className="text-wrapper-26">Trusted by Fortune 500 Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-33">
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

            <div
              className="frame-65"
              style={{
                gap: screenWidth < 450 ? "92px" : screenWidth >= 450 ? "15px" : undefined,
                left: screenWidth < 450 ? "185px" : screenWidth >= 450 ? "133px" : undefined,
                top: screenWidth < 450 ? "366px" : screenWidth >= 450 ? "1364px" : undefined,
              }}
            >
              <div className="mobile-only">
                <div className="frame-66">
                  <div className="frame-67">
                    <div className="text-wrapper-44">Ready to get started?</div>
                    <p className="text-wrapper-45">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-18">
                  <div className="frame-68">
                    <div className="overlap-group-10">
                      <div className="frame-69">
                        <div className="text-wrapper-46">Ready to get started?</div>
                        <p className="are-we-a-good-fit-2">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="CTA-7" onClick={()=> setOpenModal(true)}>
                          <div className="text-wrapper-25">Schedule a call now</div>
                          <img className="arrow-forward-3" alt="Arrow forward" src="/rpo/arrow-forward-96.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="desktop-only">
                <img className="group-19" alt="Group" src="/rpo/group-8800-1.png" />
                <div className="text-wrapper-47">Best-in-class Technology</div>
              </div>
            </div>
            <div className="desktop-only">
              <img className="group-20" alt="Group" src="/rpo/group-8801-1.png" />
              <img className="group-21" alt="Group" src="/rpo/group-8802-1.png" />
              <img className="group-22" alt="Group" src="/rpo/group-8803-1.png" />
              <img className="group-23" alt="Group" src="/rpo/group-26.png" />
              <img className="group-24" alt="Group" src="/rpo/group-8804-1.png" />
              <img
                className="friendly-partners-2"
                alt="Friendly partners"
                src="/rpo/friendly-partners-handshaking-group-meeting-thanking-successful-1.webp"
              />
              <div className="frame-70">
                <p className="hire-the-right-2">
                  <span className="span">Hire the right talent seamlessly with the&nbsp;&nbsp;</span>
                  <span className="text-wrapper-5">best-in-class</span>
                  <span className="span">&nbsp;</span>
                  <span className="text-wrapper-5">RPO</span>
                </p>
                <p className="text-wrapper-48">
                  JoulestoWatts RPO (Recruitment Process Outsourcing) solutions enable businesses to source and hire
                  talent faster.
                </p>
                <PropertyDefaultWrapper
                  arrowForward="/rpo/arrow-forward-97.svg"
                  arrowForwardClassName="CTA-10"
                  className="CTA-8"
                  divClassName="CTA-9"
                  property1="default"
                  link="/contact-us"
                  text="Connect with us"
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>

  );
};
