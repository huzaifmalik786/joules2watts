import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Carousel } from "../../components/hire/Carousel";
import { Cta } from "../../components/hire/Cta";
import { PropertyDefaultWrapper } from "../../components/hire/PropertyDefaultWrapper";
import { StateDefaultWrapper } from "../../components/hire/StateDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { LeadForm } from "../../components/shared/LeadForm";

export const Hire = () => {
  const screenWidth = useWindowWidth();
  const [openModal, setOpenModal] = useState(false);
  const[height, setHeight] = useState(0)

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
      <div
        className="hire"
        style={{
          height: height,
          backgroundColor: screenWidth < 450 ? "#ffffff" : screenWidth >= 450 ? "#f6f7f8" : undefined,
        }}
      >
        <div
          className="div-2"
          style={{
            backgroundColor: screenWidth < 450 ? "#ffffff" : screenWidth >= 450 ? "#f6f7f8" : undefined,
            height: screenWidth < 450 ? "7740px" : screenWidth >= 450 ? "5333px" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
          }}
        >
          <Header />
          <Header1 className="header mobile-only" />
          <div className="mobile-only">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="rectangle-2" alt="Rectangle" src="/hire/rectangle-137.svg" />
                <img className="rectangle-3" alt="Rectangle" src="/hire/rectangle-76-1.svg" />
                <div className="frame-4">
                  <div className="text-wrapper-5">Hire-Train-Deploy</div>
                  <p className="with-over-global">
                    <span className="span">
                      With over 85+ global education partners, JoulestoWatts offers the best trainers in the industry.
                      An{" "}
                    </span>
                    <span className="text-wrapper-6">execution-driven methodology</span>
                    <span className="span">
                      {" "}
                      from hiring to deployment with complete assistance &amp; tested strategies to{" "}
                    </span>
                    <span className="text-wrapper-6">recruit, retain, and manage talent.</span>
                  </p>
                  <Cta arrowForward="/hire/arrow-forward-57.svg" className="CTA-instance" />
                </div>
              </div>
            </div>
            <div className="frame-11">
              <div className="div-wrapper">
                <p className="text-wrapper-15">
                  With JoulestoWatts on your side, creating a productive workplace culture with the right talent is
                  effortless.
                </p>
              </div>
              <div className="frame-12">
                <div className="frame-13">
                  <div className="text-wrapper-16">250k+</div>
                  <div className="text-wrapper-17">Active Students</div>
                </div>
                <div className="frame-13">
                  <div className="text-wrapper-18">06</div>
                  <div className="text-wrapper-19">Global Campuses</div>
                </div>
                <div className="frame-14">
                  <div className="text-wrapper-16">85+</div>
                  <div className="text-wrapper-19">Global Education Partners</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="overlap-2"
            style={{
              height: screenWidth >= 450 ? "1051px" : screenWidth < 450 ? "1108px" : undefined,
              left: screenWidth >= 450 ? "-1px" : screenWidth < 450 ? "0" : undefined,
              top: screenWidth >= 450 ? "841px" : screenWidth < 450 ? "1017px" : undefined,
              width: screenWidth >= 450 ? "1441px" : screenWidth < 450 ? "390px" : undefined,
            }}
          >
            <div className="desktop-only">
              <div className="group-2">
                <div className="frame-15">
                  <div className="frame-16">
                    <div className="frame-17">
                      <div className="text-wrapper-20">Engagement Models</div>
                    </div>
                  </div>
                  <p className="joulestowatts-brings">
                    JoulestoWatts brings customized training programs for candidates under the constant assistance of
                    well-qualified trainers.
                    <br />
                    <br />
                    With various engagement models and tailored programs, the HTD (Hire, Train and Deploy) offers
                    end-to-end custom solutions.
                  </p>
                  <PropertyDefaultWrapper
                    arrowForward="/hire/arrow-forward-63.svg"
                    arrowForwardClassName="CTA-3"
                    className="instance-node"
                    divClassName="CTA-2"
                    property1="default"
                    text="Connect with us"
                    link="/contact-us"
                  />
                </div>
              </div>
              <div className="frame-18">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="frame-21">
                      <div className="frame-22">
                        <div className="text-wrapper-21">Fresh Graduates</div>
                        <p className="text-wrapper-22">
                          The model provides fresh Graduates with personalized training programs from experienced
                          training partners thereby replacing/reducing the need for in-house induction cycles, training
                          efforts, and other factors.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-23">
                    <div className="overlap-group-3">
                      <img className="group-3" alt="Group" src="/hire/group-20.png" />
                      <img className="group-4" alt="Group" src="/hire/group-21.png" />
                      <div className="ellipse-4" />
                      <div className="ellipse-5" />
                      <div className="frame-24">
                        <div className="frame-25">
                          <div className="text-wrapper-23">Lateral Hires</div>
                          <p className="a-focused-customized">
                            A focused &amp; customized training program for select candidates. This engagement model
                            provides lateral hires with the knowledge and the base skills required for a given job
                            profile.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-3">
                      <div className="ellipse-6" />
                      <div className="ellipse-7" />
                      <img className="group-5" alt="Group" src="/hire/group-22.png" />
                      <img className="group-5" alt="Group" src="/hire/group-23.png" />
                      <div className="frame-26">
                        <div className="text-wrapper-21">Consulting Solutions</div>
                        <p className="a-comprehensive">
                          A comprehensive, structured assessment &amp; Consulting Program for the overall hiring
                          process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-6">
                <div className="overlap-4">
                  <img className="mask-group" alt="Mask group" src="/hire/mask-group-5.webp" />
                  <img className="mask-group-2" alt="Mask group" src="/hire/mask-group-6.png" />
                  <img className="mask-group-3" alt="Mask group" src="/hire/mask-group-7.png" />
                </div>
              </div>
            </div>

            <div className="mobile-only">
              <div className="frame-27">
                <div className="group-7">
                  <div className="overlap-group-4">
                    <img className="mask-group-4" alt="Mask group" src="/hire/mask-group-2.webp" />
                    <img className="mask-group-5" alt="Mask group" src="/hire/mask-group-3.png" />
                    <img className="mask-group-6" alt="Mask group" src="/hire/mask-group-4.png" />
                  </div>
                </div>
                <div className="frame-28">
                  <div className="frame-29">
                    <div className="frame-17">
                      <div className="text-wrapper-24">Engagement Models</div>
                    </div>
                  </div>
                  <p className="joulestowatts-brings-2">
                    JoulestoWatts brings customized training programs for candidates under the constant assistance of
                    well-qualified trainers.
                    <br />
                    <br />
                    With various engagement models and tailored programs, the HTD (Hire, Train and Deploy) offers
                    end-to-end custom solutions.
                  </p>
                  <PropertyDefaultWrapper
                    arrowForward="/hire/arrow-forward-58.svg"
                    arrowForwardClassName="CTA-3"
                    className="instance-node"
                    divClassName="CTA-2"
                    property1="default"
                    link="/contact-us"
                    text="Connect with us"
                  />
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-31">
                  <div className="frame-22">
                    <div className="text-wrapper-21">Fresh Graduates</div>
                    <p className="text-wrapper-22">
                      The model provides fresh Graduates with personalized training programs from experienced training
                      partners thereby replacing/reducing the need for in-house induction cycles, training efforts, and
                      other factors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-32 mobile-only">
            <div className="overlap-5">
              <img className="group-8" alt="Group" src="/hire/group-16.png" />
              <img className="group-9" alt="Group" src="/hire/group-17.png" />
              <div className="ellipse-8" />
              <div className="ellipse-9" />
              <div className="frame-33">
                <div className="frame-34">
                  <div className="text-wrapper-23">Lateral Hires</div>
                  <p className="a-focused-customized">
                    A focused &amp; customized training program for select candidates. This engagement model provides
                    lateral hires with the knowledge and the base skills required for a given job profile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="overlap-6"
            style={{
              height: screenWidth >= 450 ? "613px" : screenWidth < 450 ? "1349px" : undefined,
              top: screenWidth >= 450 ? "-5px" : screenWidth < 450 ? "2425px" : undefined,
              width: screenWidth >= 450 ? "1450px" : screenWidth < 450 ? "392px" : undefined,
            }}
          >
            <div className="desktop-only">
              <div className="frame-35">
                <div className="overlap-group-5">
                  <div className="frame-36">
                    <div className="frame-37">
                      <div className="text-wrapper-25">Hire-Train-Deploy</div>
                      <p className="with-over-global-2">
                        <span className="text-wrapper-26">
                          With over 85+ global education partners, JoulestoWatts offers the best trainers in the
                          industry. An{" "}
                        </span>
                        <span className="text-wrapper-27">execution-driven methodology</span>
                        <span className="text-wrapper-26">
                          {" "}
                          from hiring to deployment with complete assistance &amp; tested strategies to{" "}
                        </span>
                        <span className="text-wrapper-27">recruit, retain, and manage talent.</span>
                      </p>
                    </div>
                    <PropertyDefaultWrapper
                      arrowForward="/hire/arrow-forward-64.svg"
                      arrowForwardClassName="CTA-3"
                      className="instance-node"
                      link="/contact-us"
                      divClassName="CTA-2"
                      property1="default"
                      text="Connect with us"
                    />
                  </div>
                  <img className="rectangle-4" alt="Rectangle" src="/hire/rectangle-137-1.svg" />
                  <img className="rectangle-5" alt="Rectangle" src="/hire/rectangle-76-3.svg" />
                </div>
              </div>
            </div>

            <div className="mobile-only">
              <div className="frame-40">
                <div className="overlap-7">
                  <div className="ellipse-10" />
                  <div className="ellipse-11" />
                  <img className="group-10" alt="Group" src="/hire/group-18.png" />
                  <img className="group-10" alt="Group" src="/hire/group-19.png" />
                  <div className="frame-41">
                    <div className="text-wrapper-21">Consulting Solutions</div>
                    <p className="a-comprehensive">
                      A comprehensive, structured assessment &amp; Consulting Program for the overall hiring process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="frame-42">
                <div className="overlap-8">
                  <div className="overlap-9">
                    <div className="text-wrapper-30">Solutions</div>
                    <img className="rectangle-6" alt="Rectangle" src="/hire/rectangle-76-2.svg" />
                    <img className="rectangle-7" alt="Rectangle" src="/hire/rectangle-130.svg" />
                    <div className="frame-43">
                      <div className="overlap-group-6">
                        <div className="frame-44">
                          <img className="vector" alt="Vector" src="/hire/vector-1.svg" />
                          <div className="frame-45" />
                          <img className="vector-2" alt="Vector" src="/hire/vector-2.svg" />
                        </div>
                        <img className="frame-46" alt="Frame" src="/hire/frame-14679.svg" />
                      </div>
                    </div>
                    <div className="frame-47">
                      <div className="text-wrapper-31">01</div>
                      <div className="text-wrapper-32">
                        Executive <br />
                        Education
                      </div>
                    </div>
                    <div className="frame-48">
                      <div className="text-wrapper-33">02</div>
                      <div className="text-wrapper-32">
                        Role based Skill <br />
                        Development
                      </div>
                    </div>
                  </div>
                  <div className="frame-49">
                    <div className="text-wrapper-33">03</div>
                    <div className="text-wrapper-32">
                      Management <br />
                      training
                    </div>
                  </div>
                  <div className="frame-50">
                    <div className="text-wrapper-31">04</div>
                    <div className="text-wrapper-32">
                      Skills and Knowledge <br />
                      Assessment
                    </div>
                  </div>
                  <div className="frame-51">
                    <div className="text-wrapper-31">05</div>
                    <div className="text-wrapper-32">
                      Cutting Edge <br />
                      Technology Upskilling
                    </div>
                  </div>
                  <div className="frame-52">
                    <div className="text-wrapper-31">06</div>
                    <div className="text-wrapper-32">
                      Leadership <br />
                      Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-only">
            <div className="frame-53">
              <div className="text-wrapper-34">Our Methodology</div>
            </div>
            <div className="frame-54">
              <div className="group-11">
                <div className="div-3">
                  <div className="group-12">
                    <div className="frame-55">
                      <img className="rectangle-8" alt="Rectangle" src="/hire/rectangle-110-1.svg" />
                      <div className="frame-56">
                        <div className="text-wrapper-35">Aptitude Test</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-36">Hire</div>
                </div>
                <div className="overlap-10">
                  <div className="technical-test-wrapper">
                    <p className="technical-test">
                      Technical Test - Client specific
                      <br /> - Net, Java
                    </p>
                  </div>
                </div>
                <div className="overlap-11">
                  <div className="text-wrapper-37">Client Interview</div>
                </div>
                <div className="group-13">
                  <div className="quality-graphic-desi-wrapper">
                    <img
                      className="quality-graphic-desi"
                      alt="Quality graphic desi"
                      src="/hire/quality-graphic-desi.png"
                    />
                  </div>
                </div>
              </div>
              <div className="group-14">
                <div className="div-3">
                  <div className="div-3">
                    <div className="overlap-group-7">
                      <img className="rectangle-9" alt="Rectangle" src="/hire/rectangle-125-1.svg" />
                      <div className="frame-57">
                        <img className="rectangle-8" alt="Rectangle" src="/hire/rectangle-110-2.svg" />
                        <div className="frame-58" />
                        <div className="certification-based">
                          Certification based <br />
                          training partner
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-38">Train</div>
                </div>
                <img className="group-15" alt="Group" src="/hire/group-44.png" />
                <p className="client-specific">
                  Client specific tailored <br />
                  training module
                </p>
                <div className="overlap-12">
                  <img className="group-16" alt="Group" src="/hire/group-45-1.png" />
                  <p className="instructor-led">
                    Instructor-led highly focused on
                    <br />
                    Skill gaps training
                  </p>
                </div>
                <img className="group-17" alt="Group" src="/hire/group-45-1.png" />
                <img className="group-18" alt="Group" src="/hire/group-45-1.png" />
                <div className="overlap-13">
                  <img className="group-16" alt="Group" src="/hire/group-46.png" />
                  <p className="text-wrapper-39">4-6 weeks of rigorous training</p>
                </div>
                <img className="group-19" alt="Group" src="/hire/group-46.png" />
                <p className="feedback-fine-tuning">
                  Feedback / fine-tuning <br />
                  of training process
                </p>
                <div className="text-wrapper-40">Soft skills training</div>
                <p className="projects-and">
                  Projects and Exercises with
                  <br />
                  Industry scenarios
                </p>
              </div>
              <div className="group-20">
                <div className="div-3">
                  <div className="div-3">
                    <img className="rectangle-10" alt="Rectangle" src="/hire/arrow-forward-9.png" />
                    <div className="frame-59">
                      <img className="rectangle-11" alt="Rectangle" src="/hire/arrow-forward-9.png" />
                      <div className="text-wrapper-41">Contract placement</div>
                    </div>
                  </div>
                  <div className="text-wrapper-42">Deploy</div>
                </div>
                <img className="group-21" alt="Group" src="/hire/arrow-forward-9.png" />
                <img className="group-22" alt="Group" src="/hire/arrow-forward-9.png" />
                <img className="group-23" alt="Group" src="/hire/arrow-forward-9.png" />
                <div className="dedicated-HR-support">
                  Dedicated HR support
                  <br />
                  for candidates
                </div>
                <div className="constant-support-and">
                  Constant support
                  <br />
                  and feedback
                </div>
                <div className="performance-based">
                  Performance based
                  <br />
                  conversion
                </div>
                <img className="group-24" alt="Group" src="/hire/arrow-forward-9.png" />
                <div className="continuous">
                  Continuous evaluation
                  <br />
                  and guidance
                </div>
              </div>
            </div>
          </div>

          <div className="frame-60 desktop-only">
            <div className="frame-61">
              <div className="text-wrapper-43">Our Methodology</div>
            </div>
            <div className="frame-62">
              <div className="group-25">
                <div className="overlap-14">
                  <div className="group-26">
                    <div className="frame-63">
                      <div className="frame-64">
                        <div className="text-wrapper-35">Aptitude Test</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-44">Hire</div>
                </div>
                <div className="overlap-15">
                  <div className="frame-65">
                    <p className="technical-test-2">
                      Technical Test - Client specific
                      <br /> - Net, Java
                    </p>
                  </div>
                </div>
                <div className="overlap-16">
                  <div className="text-wrapper-45">Client Interview</div>
                </div>
                <div className="group-27">
                  <div className="img-wrapper">
                    <img
                      className="quality-graphic-desi-2"
                      alt="Quality graphic desi"
                      src="/hire/quality-graphic-desi-1.png"
                    />
                  </div>
                </div>
              </div>
              <img className="frame-66" alt="Frame" src="/hire/frame-14495.svg" />
              <div className="group-28">
                <div className="overlap-14">
                  <div className="group-29">
                    <div className="frame-63">
                      <div className="certification-based">
                        Certification based <br />
                        training partner
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-46">Train</div>
                </div>
                <div className="overlap-17">
                  <p className="client-specific-2">
                    Client specific tailored <br />
                    training module
                  </p>
                </div>
                <div className="overlap-16">
                  <p className="instructor-led-2">
                    Instructor-led highly focused on
                    <br />
                    Skill gaps training
                  </p>
                </div>
                <div className="overlap-18">
                  <p className="feedback-fine-tuning-2">
                    Feedback / fine-tuning <br />
                    of training process
                  </p>
                </div>
                <div className="overlap-19">
                  <div className="text-wrapper-47">Soft skills training</div>
                </div>
                <div className="overlap-20">
                  <p className="text-wrapper-48">4-6 weeks of rigorous training</p>
                </div>
                <div className="projects-and-wrapper">
                  <p className="projects-and-2">
                    Projects and Exercises with
                    <br />
                    Industry scenarios
                  </p>
                </div>
              </div>
              <img className="frame-66" alt="Frame" src="/hire/frame-14495.svg" />
              <div className="group-30">
                <div className="overlap-14">
                  <div className="group-31">
                    <div className="frame-67">
                      <div className="overlap-group-8">
                        <div className="text-wrapper-41">Contract placement</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-49">Deploy</div>
                </div>
                <div className="overlap-17">
                  <div className="dedicated-HR-support-2">
                    Dedicated HR support
                    <br />
                    for candidates
                  </div>
                </div>
                <div className="overlap-16">
                  <div className="constant-support-and-2">
                    Constant support
                    <br />
                    and feedback
                  </div>
                </div>
                <div className="overlap-18">
                  <div className="performance-based-2">
                    Performance based
                    <br />
                    conversion
                  </div>
                </div>
                <div className="overlap-20">
                  <div className="continuous-2">
                    Continuous evaluation
                    <br />
                    and guidance
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="carousel-2"
            style={{
              height: screenWidth < 450 ? "796px" : screenWidth >= 450 ? "488px" : undefined,
              top: screenWidth < 450 ? "5034px" : screenWidth >= 450 ? "3921px" : undefined,
              width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
            }}
          >
            <div
              className="frame-68"
              style={{
                height: screenWidth < 450 ? "1425px" : screenWidth >= 450 ? "488px" : undefined,
                width: screenWidth < 450 ? "667px" : screenWidth >= 450 ? "1440px" : undefined,
              }}
            >
              <div
                className="overlap-group-9"
                style={{
                  height: screenWidth < 450 ? "923px" : screenWidth >= 450 ? "697px" : undefined,
                  left: screenWidth < 450 ? "-134px" : screenWidth >= 450 ? "-149px" : undefined,
                  top: screenWidth < 450 ? "-24px" : screenWidth >= 450 ? "-130px" : undefined,
                  width: screenWidth < 450 ? "687px" : screenWidth >= 450 ? "1757px" : undefined,
                }}
              >
                <img
                  className="rectangle-12"
                  style={{
                    left: screenWidth < 450 ? "134px" : screenWidth >= 450 ? "149px" : undefined,
                    top: screenWidth < 450 ? "24px" : screenWidth >= 450 ? "130px" : undefined,
                    width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
                  }}
                  alt="Rectangle"
                />
                <div
                  className="frame-69"
                  style={{
                    left: screenWidth < 450 ? "214px" : screenWidth >= 450 ? "229px" : undefined,
                    top: screenWidth < 450 ? "166px" : screenWidth >= 450 ? "272px" : undefined,
                  }}
                >
                  <div className="linkedin" />
                </div>
                <img
                  className="shutterstock"
                  style={{
                    height: screenWidth < 450 ? "441px" : screenWidth >= 450 ? "488px" : undefined,
                    left: screenWidth < 450 ? "134px" : screenWidth >= 450 ? "857px" : undefined,
                    top: screenWidth < 450 ? "379px" : screenWidth >= 450 ? "130px" : undefined,
                    width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "732px" : undefined,
                  }}
                  alt="Shutterstock"
                  src="/hire/shutterstock-1704596071-1-1.webp"
                />
                <div
                  className="rectangle-13"
                  style={{
                    height: screenWidth < 450 ? "687px" : screenWidth >= 450 ? "697px" : undefined,
                    left: screenWidth < 450 ? "-118px" : screenWidth >= 450 ? "0" : undefined,
                    top: screenWidth < 450 ? "118px" : screenWidth >= 450 ? "0" : undefined,
                    transform: screenWidth < 450 ? "rotate(90.00deg)" : undefined,
                    width: screenWidth < 450 ? "923px" : screenWidth >= 450 ? "1757px" : undefined,
                  }}
                />
                <div
                  className="frame-70"
                  style={{
                    left: screenWidth < 450 ? "150px" : screenWidth >= 450 ? "229px" : undefined,
                    top: screenWidth < 450 ? "106px" : screenWidth >= 450 ? "212px" : undefined,
                  }}
                >
                  <p
                    className="we-are-your-growth"
                    style={{
                      fontSize: screenWidth < 450 ? "22px" : screenWidth >= 450 ? "29px" : undefined,
                      letterSpacing: screenWidth < 450 ? "-0.22px" : screenWidth >= 450 ? "-0.29px" : undefined,
                      lineHeight: screenWidth < 450 ? "30.8px" : screenWidth >= 450 ? "40.6px" : undefined,
                      width: screenWidth < 450 ? "358px" : screenWidth >= 450 ? "587px" : undefined,
                    }}
                  >
                    We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                    team of industry experts, management practitioners, and training partners catered to your growth.
                  </p>
                  <PropertyDefaultWrapper
                    arrowForward={
                        "/hire/arrow-forward-59.svg"
                    }
                    arrowForwardClassName={`${screenWidth < 450 && "class-3"}`}
                    className={`${screenWidth < 450 && "class"} ${screenWidth >= 450 && "class-2"}`}
                    divClassName={`${screenWidth < 450 && "class-4"} ${screenWidth >= 450 && "class-5"}`}
                    property1="default"
                    text="About us"
                    link="/about-us"
                  />
                </div>
              </div>
            </div>
            <div className="frame-71">
              <img
                className="rectangle-14"
                style={{
                  top: screenWidth < 450 ? "-7798px" : screenWidth >= 450 ? "-1143px" : undefined,
                }}
                alt="Rectangle"
              />
              <div className="overlap-21">
                <div className="frame-72">
                  <div className="text-wrapper-50">300+ Internal Staff</div>
                  <div className="frame-73">
                    <p className="our-client-and">
                      {" "}
                      Our client and solution-driven team structure assure maximum leverage of resources for your
                      business. We are your industry-leading growth partners and are trusted by high-end companies for our
                      commitment and timely delivery with efficient and commendable talent fits.
                    </p>
                    <button className="CTA-6">
                      <div className="text-wrapper-51">Learn More</div>
                      <img
                        className="arrow-forward-3"
                        style={{
                          marginTop: screenWidth < 450 ? "-8170.00px" : screenWidth >= 450 ? "-1515.00px" : undefined,
                        }}
                        alt="Arrow forward"
                        src={
                          screenWidth < 450
                            ? "/hire/arrow-forward-9.png"
                            : screenWidth >= 450
                              ? "/hire/arrow-forward-66.png"
                              : undefined
                        }
                      />
                    </button>
                  </div>
                </div>
                <div className="text-wrapper-52">Why work with us?</div>
                <div className="frame-74">
                  <div className="ellipse-12" />
                  <div className="ellipse-13" />
                  <div className="ellipse-12" />
                </div>
              </div>
            </div>
            <Carousel
              arrowForward={
                screenWidth < 450
                  ? "/hire/arrow-forward-9.png"
                  : screenWidth >= 450
                    ? "/hire/arrow-forward-66.png"
                    : undefined
              }
              arrowForwardClassName={`${screenWidth < 450 && "class-6"} ${screenWidth >= 450 && "class-7"}`}
              className="carousel-03"
            />
          </div>
          <div className="frame-75 desktop-only">
            <div className="frame-76">
              <div className="frame-77">
                <div className="frame-78">
                  <div className="frame-79">
                    <p className="text-wrapper-53">Trusted by Fortune 500 Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-80">
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

          <div
            className="frame-81"
            style={{
              height: screenWidth < 450 ? "1050px" : screenWidth >= 450 ? "713px" : undefined,
              left: screenWidth < 450 ? "-185px" : screenWidth >= 450 ? "0" : undefined,
              top: screenWidth < 450 ? "5830px" : screenWidth >= 450 ? "1892px" : undefined,
              width: screenWidth < 450 ? "742px" : screenWidth >= 450 ? "1449px" : undefined,
            }}
          >
            <div className="mobile-only">
              <div className="frame-82">
                <div className="overlap-group-10">
                  <div className="rectangle-15" />
                  <div className="frame-83">
                    <div className="frame-76">
                      <div className="frame-77">
                        <div className="frame-78">
                          <div className="frame-79">
                            <p className="text-wrapper-53">Trusted by Fortune 500 Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-80">
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
                      <img className="amazon" alt="Amazon" src="/logos/amazon-1-1.png" />
                      <img
                        className="wipro-logo-new-og-2"
                        alt="Wipro logo new og"
                        src="/logos/wipro-logo-new-og-502x263-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-84">
                <div className="frame-85">
                  <div className="frame-86">
                    <div className="text-wrapper-54">Ready to get started?</div>
                    <p className="text-wrapper-55">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-32">
                  <div className="frame-87">
                    <div className="overlap-group-11">
                      <div className="frame-88">
                        <div className="text-wrapper-56">Ready to get started?</div>
                        <p className="are-we-a-good-fit">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="CTA-7" onClick={()=> setOpenModal(true)}>
                          <div className="text-wrapper-57">Schedule a call now</div>
                          <img className="arrow-forward-4" alt="Arrow forward" src="/hire/arrow-forward-62.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-89 desktop-only">
              <div className="overlap-22">
                <div className="group-33">
                  <div className="overlap-group-12">
                    <div className="frame-90">
                      <div className="text-wrapper-58">
                        Executive <br />
                        Education
                      </div>
                      <div className="text-wrapper-59">01</div>
                    </div>
                    <div className="frame-91">
                      <div className="text-wrapper-58">
                        Role based Skill <br />
                        Development
                      </div>
                      <div className="text-wrapper-60">02</div>
                    </div>
                    <div className="overlap-23">
                      <div className="frame-92">
                        <div className="text-wrapper-58">
                          Management <br />
                          training
                        </div>
                        <div className="text-wrapper-61">03</div>
                      </div>
                      <div className="text-wrapper-62">Solutions</div>
                      <img className="layer" alt="Layer" src="/hire/layer-1.png" />
                      <div className="frame-93">
                        <div className="text-wrapper-63">
                          Skills and Knowledge <br />
                          Assessment
                        </div>
                        <div className="text-wrapper-64">04</div>
                      </div>
                    </div>
                    <div className="frame-94">
                      <div className="text-wrapper-63">
                        Cutting Edge <br />
                        Technology Upskilling
                      </div>
                      <div className="text-wrapper-64">05</div>
                    </div>
                    <div className="frame-95">
                      <div className="text-wrapper-63">
                        Leadership <br />
                        Development
                      </div>
                      <div className="text-wrapper-64">06</div>
                    </div>
                  </div>
                </div>
                <img className="group-34" alt="Group" src="/hire/group-63.png" />
                <img className="group-35" alt="Group" src="/hire/group-64.png" />
                <img className="group-36" alt="Group" src="/hire/group-65.png" />
                <img className="group-37" alt="Group" src="/hire/group-66.png" />
                <img className="group-38" alt="Group" src="/hire/group-67.png" />
                <img className="group-39" alt="Group" src="/hire/group-68.png" />
                <img className="rectangle-16" alt="Rectangle" src="/hire/rectangle-76-4.svg" />
                <img className="rectangle-17" alt="Rectangle" src="/hire/rectangle-77-1.svg" />
              </div>
            </div>
          </div>
          <div className="desktop-only">
            <div className="frame-96">
              <div className="frame-97">
                <div className="frame-78">
                  <p className="text-wrapper-65">
                    With JoulestoWatts on your side, creating a productive workplace culture with the right talent is
                    effortless.
                  </p>
                </div>
                <div className="frame-98">
                  <div className="frame-9">
                    <div className="text-wrapper-66">250k+</div>
                    <div className="text-wrapper-67">Active Students</div>
                  </div>
                  <div className="frame-9">
                    <div className="text-wrapper-68">06</div>
                    <div className="text-wrapper-69">Global Campuses</div>
                  </div>
                  <div className="frame-99">
                    <div className="text-wrapper-66">85+</div>
                    <div className="text-wrapper-70">Global Education Partners</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-40">
              <div className="overlap-24">
                <div className="frame-100">
                  <div className="overlap-group-13">
                    <div className="frame-101">
                      <div className="frame-102">
                        <div className="text-wrapper-71">Ready to get started?</div>
                        <p className="are-we-a-good-fit-2">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                      </div>
                      <button className="CTA-8">
                        <div className="text-wrapper-72">Learn More</div>
                        <img className="arrow-forward-4" alt="Arrow forward" src="/hire/arrow-forward-68.svg" />
                      </button>
                    </div>
                    <button className="CTA-9" onClick={()=> setOpenModal(true)}>
                      <div className="text-wrapper-57">Schedule a call now</div>
                      <img className="arrow-forward-4" alt="Arrow forward" src="/hire/arrow-forward-69.svg" />
                    </button>
                  </div>
                </div>
                <div className="frame-103">
                  <div className="overlap-25">
                    <div className="frame-104">
                      <div className="frame-102">
                        <div className="text-wrapper-73">Ready to get started?</div>
                        <p className="text-wrapper-74">
                          Whether you still have some questions or you’re ready to sign up for a specific services right
                          now, Our specialists are only a message away.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-105">
                    <div className="frame-73">
                      <p className="text-wrapper-75">Set up a virtual briefing</p>
                      <p className="text-wrapper-76">
                        Spend time with our executives and experts virtually and discuss current and future business
                        requirements.
                      </p>
                    </div>
                  </div>
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
