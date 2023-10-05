import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Component } from "../../components/about/Component";
import { Cta } from "../../components/about/Cta";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const ButtonGroup2 = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <button onClick={() => next()} className="arrow">
      <img className="arrow-forward-ios-2" alt="Arrow forward ios" src="/services/arrow-forward-ios.png" />
    </button>
  );
};

export const About = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="about">
      <div
        className="iphone"
        style={{
          height: screenWidth < 450 ? "7582px" : screenWidth >= 450 ? "4905px" : undefined,
          width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
        }}
      >
        <Header />
        <Header1 className="header-instance mobile-only" />

        <div className="desktop-only">
          <div className="overlap">
            <div className="overlap-group">
              <div className="frame">
                <div className="overlap-group-2">
                  <div className="overlap-2">
                    <div className="ellipse" />
                    <img className="rectangle" alt="Rectangle" src="/about/rectangle-76.svg" />
                    <img className="christina" alt="Christina" src="/about/christina.png" />
                  </div>
                  <div className="overlap-3">
                    <img className="img" alt="Rectangle" src="/about/rectangle-118-1.svg" />
                    <Component className="component-1" property1="frame-14489" />
                  </div>
                  <Cta
                    arrowForward="/about/arrow-forward.svg"
                    arrowForwardClassName="CTA-2"
                    className="CTA-instance"
                    divClassName="instance-node"
                    property1="default"
                    text="Connect with us"
                  />
                </div>
              </div>
              <p className="p">
                We are the pioneers in technology-based recruiting solutions with a wide array of holistic services.
              </p>
              <div className="overlap-wrapper">
                <div className="section-industries-wrapper">
                  <div className="section-industries">
                    <div className="overlap-group-3">
                      <div className="container">
                        <Carousel
                          arrows={false}
                          swipeable={true}
                          draggable={true}
                          showDots={false}
                          responsive={
                            {
                              desktop: {
                                breakpoint: { max: 3000, min: 450 },
                                items: 4.5,
                                slidesToSlide: 1,
                              }
                            }}
                          autoPlay={true}
                          infinite
                          autoPlaySpeed={3000}
                          containerClass="carousel"
                          itemClass="carousel-item"
                          pauseOnHover={false}
                          transitionDuration={500}
                          customButtonGroup={<ButtonGroup />}
                        >
                          <div className="BFSI">
                            <p className="text-wrapper-2">Smart CEO Start-up 50 2017</p>
                            <div className="frame-wrapper">
                              <div className="frame-3">
                                <p className="by-femina-for">
                                  For long term potential growth
                                  and client satisfaction
                                </p>
                              </div>
                            </div>
                            <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                          </div>
                          <div className="BFSI">
                            <p className="text-wrapper-2">Women super achiever awards 2018</p>
                            <div className="frame-wrapper">
                              <div className="frame-3">
                                <p className="by-femina-for">
                                  By Femina For Excellence Talent
                                  <br />
                                  industry
                                </p>
                              </div>
                            </div>
                            <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                          </div>
                          <div className="BFSI">
                            <p className="text-wrapper-2">We innovation awards</p>
                            <div className="frame-wrapper">
                              <div className="frame-3">
                                <p className="by-femina-for">
                                  “Think Big” event
                                  by WeConnect and niti ayog
                                </p>
                              </div>
                            </div>
                            <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                          </div>
                          <div className="BFSI">
                            <p className="text-wrapper-2">Entrepreneur of the year 2018</p>
                            <div className="frame-wrapper">
                              <div className="frame-3">
                                <p className="by-femina-for">
                                  UBS Transformation future women
                                  leader awards
                                </p>
                              </div>
                            </div>
                            <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                          </div>
                          <div className="BFSI">
                            <p className="text-wrapper-2">India’s 50 most exciting startups</p>
                            <div className="frame-wrapper">
                              <div className="frame-3">
                                <p className="by-femina-for">
                                  award for its accelerated
                                  growth and differentiated solutions
                                </p>
                              </div>
                            </div>
                            <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                          </div>
                          <div className="telecom-2">
                            <div className="text-wrapper-6">Products</div>
                          </div>
                          <div className="telecom">
                            <div className="text-wrapper-6">E-Commerce</div>
                          </div>
                        </Carousel>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle-2" />
              <div className="frame-10">
                <p className="being-the-fastest">
                  <span className="text-wrapper-7">
                    Being the fastest-growing leaders in the talent industry, we help our clients scale faster with
                  </span>
                  <span className="text-wrapper-8">
                    {" "}
                    innovative talent solutions.
                    <br />
                  </span>
                  <span className="text-wrapper-7">
                    <br />
                    Technology Experts with a strategic and proactive Solution management. JoulestoWatts delivers the
                    best talent solutions, business and technology consulting with innovative models that address the
                    industry.{" "}
                  </span>
                </p>
                <Cta
                  arrowForward="/about/arrow-forward-1.svg"
                  arrowForwardClassName="CTA-2"
                  className="CTA-3"
                  divClassName="instance-node"
                  property1="default"
                  text="Connect with us"
                />
              </div>
              <img className="element-cube-design" alt="Element cube design" src="/about/cube.png" />
              <img className="rectangle-3" alt="Rectangle" src="/about/rectangle-140.svg" />
              <div className="frame-11">
                <div className="frame-12">
                  <p className="div-2">
                    <span className="text-wrapper-8">
                      3500+
                      <br />
                    </span>
                    <span className="text-wrapper-9">Trusted consultants</span>
                  </p>
                  <p className="div-3">
                    <span className="text-wrapper-10">
                      Every 30 Seconds
                      <br />
                    </span>
                    <span className="text-wrapper-11">
                      Connect to a Potential <br />
                      Candidate
                    </span>
                  </p>
                </div>
              </div>
              <div className="frame-13">
                <div className="frame-14">
                  <p className="text-wrapper-12">Trusted by Fortune 500 Clients for</p>
                  <div className="text-wrapper-13">Talent Transformation</div>
                </div>
              </div>
              <img className="vector" alt="Vector" src="/about/vector-1.svg" />
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-4">
                <div className="frame-15">
                  <p className="div-2">
                    <span className="text-wrapper-8">
                      200+
                      <br />
                    </span>
                    <span className="text-wrapper-9">Skill Sets</span>
                  </p>
                  <p className="div-3">
                    <span className="text-wrapper-10">
                      Every 1 Minute
                      <br />
                    </span>
                    <span className="text-wrapper-11">
                      Profile is uploaded on <br />
                      OfferLetter Platform
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-16">
              <div className="frame-17">
                <p className="div-2">
                  <span className="text-wrapper-8">
                    200+
                    <br />
                  </span>
                  <span className="text-wrapper-9">Clients</span>
                </p>
                <p className="div-3">
                  <span className="text-wrapper-10">
                    Every 5 Minutes
                    <br />
                  </span>
                  <span className="text-wrapper-11">
                    A New Requirement <br />
                    is covered
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="overlap-5">
            <img className="rectangle-4" alt="Rectangle" src="/about/rectangle-118.svg" />
            <div className="frame-18">
              <div className="frame-19">
                <img className="element" alt="Element" src="/about/man.png" />
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="text-wrapper-14">BM Gupta</div>
                  </div>
                  <div className="text-wrapper-15">Chief Operating Officer, JoulestoWatts</div>
                  <p className="text-wrapper-16">
                    Business Strategist &amp; Leader having more than 30+ years of experience in diversified industry
                    domains including recruitment and staffing, dairy, FMCG, consumer durable, pharmaceuticals,
                    automobile, manufacturing, e-commerce and services sector in India and overseas markets. Over the
                    years, associated with globally reputed and select Fortune 500 companies such as ABC Consultants,
                    Manpower Group, Mother Dairy India, Con Agra, Apollo International, Thakral Corp, Tata Steel and
                    Nestle India.
                    <br />
                    <br />
                    Recognized for decisive leadership and proven ability to face challenges head-on and execute sound
                    decisions while driving different business agendas.
                  </p>
                </div>
              </div>
              <img className="linkedin-circled" alt="Linkedin circled" src="/about/linkedin-circled-1.png" />
            </div>
            <div className="frame-22">
              <div className="frame-19">
                <img className="element" alt="Element" src="/about/lady.png" />
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="text-wrapper-17">Priti Sawant</div>
                  </div>
                  <div className="text-wrapper-15">Founder &amp; CEO, JoulestoWatts</div>
                  <p className="text-wrapper-16">
                    Priti Sawant brings over two decades’ experience in managing strategic engagements and leverages
                    her vast operational experience to advise companies on growing their business by uncovering new
                    opportunities and identifying untapped revenue streams in addition to developing leadership
                    capital. <br />
                    <br />
                    She is widely recognised for her role in charting the growth of IT contract staffing in India and
                    defining path-breaking staffing models for Fortune 500 technology companies. A hands-on people
                    person, she is known for shaping and fostering enthusiastic and energetic work culture and
                    building high-performance teams.
                  </p>
                </div>
              </div>
              <img className="linkedin-circled-2" alt="Linkedin circled" src="/about/linkedin-circled.png" />
            </div>
          </div>
          <div className="overlap-6">
            <div className="rectangle-5" />
            <img className="seekpng" alt="Seekpng" src="/about/seek.png" />
            <div className="frame-23">
              <div className="frame-24">
                <div className="frame-25">
                  <div className="text-wrapper-18">HYDERABAD OFFICE</div>
                  <p className="text-wrapper-19">
                    3rd Floor, Sinman Dwaraka, 164/3,
                    <br />
                    Inovies St, Patrika Nagar, Madhapur, HITEC City,
                    <br />
                    Hyderabad, Telangana – 500081
                  </p>
                </div>
              </div>
              <div className="frame-26">
                <div className="frame-25">
                  <div className="text-wrapper-18">MUMBAI OFFICE</div>
                  <p className="text-wrapper-19">
                    Accesswork Business Centre,
                    <br />
                    Level 9, Wing A Eureka Towers, Mindspace IT Park Off. New Link Road, Malad(West), Mumbai - 400064
                  </p>
                </div>
              </div>
              <div className="frame-26">
                <div className="frame-25">
                  <div className="text-wrapper-18">DELHI OFFICE</div>
                  <p className="text-wrapper-19">
                    JoulestoWatts Business Solutions
                    <br />
                    3rd Floor, Saira Tower,
                    <br />
                    Gulmohar Park, New Delhi-110049
                  </p>
                </div>
              </div>
              <div className="frame-27">
                <div className="frame-25">
                  <div className="text-wrapper-18">U.S. OFFICE</div>
                  <p className="text-wrapper-19">
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

        <div
          className="frame-28"
          style={{
            height: screenWidth < 450 ? "746px" : screenWidth >= 450 ? "334px" : undefined,
            left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "-8px" : undefined,
            top: screenWidth < 450 ? "60px" : screenWidth >= 450 ? "3919px" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1446px" : undefined,
          }}
        >
          <div
            className="overlap-7"
            style={{
              alignItems: screenWidth >= 450 ? "center" : undefined,
              display: screenWidth >= 450 ? "inline-flex" : undefined,
              flexDirection: screenWidth >= 450 ? "column" : undefined,
              gap: screenWidth >= 450 ? "25px" : undefined,
              height: screenWidth < 450 ? "746px" : undefined,
              left: screenWidth >= 450 ? "187px" : undefined,
              top: screenWidth >= 450 ? "94px" : undefined,
            }}
          >
            <div className="mobile-only">
              <img className="rectangle-6" alt="Rectangle" src="/about/rectangle-118-2.svg" />
              <div className="frame-29">
                <p className="bring-the-best-out-2">
                  <span className="text-wrapper-20">Bring&nbsp;&nbsp;the best out of your </span>
                  <span className="text-wrapper-21">business</span>
                  <span className="text-wrapper-20"> for your ambitious goals.</span>
                </p>
                <p className="text-wrapper-22">
                  We are the pioneers in technology-based recruiting solutions with a wide array of holistic services.
                </p>
              </div>
              <div className="frame-30">
                <div className="overlap-group-4">
                  <div className="ellipse-2" />
                  <img className="rectangle-7" alt="Rectangle" src="/about/rectangle-76-1.svg" />
                  <img className="christina-2" alt="Christina" src="/about/christina.png" />
                </div>
              </div>
              <Cta
                arrowForward="/about/arrow-forward-6.svg"
                arrowForwardClassName="CTA-2"
                className="CTA-4"
                divClassName="instance-node"
                property1="default"
                text="Connect with us"
              />
            </div>

            <div className="desktop-only">
              <div className="frame-31">
                <div className="frame-32">
                  <div className="frame-33">
                    <div className="frame-14">
                      <p className="text-wrapper-23">Trusted by Fortune 500 Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-34">
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
          className="frame-35"
          style={{
            height: screenWidth < 450 ? "1910px" : screenWidth >= 450 ? "360px" : undefined,
            left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "-2px" : undefined,
            top: screenWidth < 450 ? "5644px" : screenWidth >= 450 ? "4253px" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
          }}
        >
          <div className="mobile-only">
            <div className="frame-41">
              <div className="frame-42">
                <div className="overlap-group-6">
                  <div className="rectangle-8" />
                  <div className="frame-43">
                    <div className="frame-31">
                      <div className="frame-32">
                        <div className="frame-33">
                          <div className="frame-14">
                            <p className="text-wrapper-23">Trusted by Fortune 500 Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-34">
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
              <div className="frame-44">
                <div className="frame-45">
                  <div className="frame-46">
                    <div className="text-wrapper-32">Ready to get started?</div>
                    <p className="text-wrapper-33">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-3">
                  <div className="frame-47">
                    <div className="overlap-group-7">
                      <div className="frame-48">
                        <div className="text-wrapper-34">Ready to get started?</div>
                        <p className="are-we-a-good-fit">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="button">
                          <div className="text-wrapper-35">Schedule a call now</div>
                          <img className="arrow-forward-2" alt="Arrow forward" src="/about/arrow-forward-7.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overlap-8 desktop-only">
            <div className="frame-49">
              <div className="frame-50">
                <div className="frame-51">
                  <div className="text-wrapper-36">Ready to get started?</div>
                  <p className="are-we-a-good-fit-2">
                    Are we a good fit for your company&#39;s challenges? Let’s talk it out today.
                  </p>
                </div>
                <button className="CTA-5">
                  <div className="text-wrapper-37">Learn More</div>
                  <img className="arrow-forward-2" alt="Arrow forward" src="/about/arrow-forward-2.svg" />
                </button>
              </div>
              <button className="CTA-6">
                <div className="text-wrapper-35">Schedule a call now</div>
                <img className="arrow-forward-2" alt="Arrow forward" src="/about/arrow-forward-3.svg" />
              </button>
            </div>
            <div className="frame-52">
              <div className="overlap-group-8">
                <div className="frame-53">
                  <div className="frame-51">
                    <div className="text-wrapper-38">Ready to get started?</div>
                    <p className="text-wrapper-39">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
              </div>
              <div className="frame-54">
                <div className="frame-55">
                  <p className="text-wrapper-40">Set up a virtual briefing</p>
                  <p className="text-wrapper-41">
                    Spend time with our executives and experts virtually and discuss current and future business
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img className="leadership desktop-only" alt="Leadership" src="/about/leadership.png" />

        <div className="mobile-only">
          <div className="leadership-wrapper">
            <img className="leadership-2" alt="Leadership" src="/about/leadership-1.png" />
          </div>
          <div className="section-industries-2">
            <div className="overlap-group-3">
              <div className="container-2">
                <Carousel
                  arrows={false}
                  swipeable
                  draggable
                  showDots={false}
                  responsive={
                    {
                      desktop: {
                        breakpoint: { max: 450, min: 0 },
                        items: 2,
                        slidesToSlide: 1,
                      }
                    }}
                  autoPlay={false}
                  infinite
                  autoPlaySpeed={3200}
                  keyBoardControl={true}
                  transitionDuration={500}
                  containerClass="carousel"
                  itemClass="carousel-item"
                  pauseOnHover={false}
                  customButtonGroup={<ButtonGroup2 />}
                >
                  <div className="BFSI-2">
                    <p className="text-wrapper-2">Smart CEO Start-up 50 2017</p>
                    <div className="frame-wrapper">
                      <div className="frame-3">
                        <p className="by-femina-for">
                          For long term potential growth
                          and client satisfaction
                        </p>
                      </div>
                    </div>
                    <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                  </div>
                  <div className="BFSI-2">
                    <p className="text-wrapper-2">Women super achiever awards 2018</p>
                    <div className="frame-wrapper">
                      <div className="frame-3">
                        <p className="by-femina-for">
                          By Femina For Excellence Talent
                          <br />
                          industry
                        </p>
                      </div>
                    </div>
                    <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                  </div>
                  <div className="BFSI-2">
                    <p className="text-wrapper-2">We innovation awards</p>
                    <div className="frame-wrapper">
                      <div className="frame-3">
                        <p className="by-femina-for">
                          “Think Big” event
                          by WeConnect and niti ayog
                        </p>
                      </div>
                    </div>
                    <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                  </div>
                  <div className="BFSI-2">
                    <p className="text-wrapper-2">Entrepreneur of the year 2018</p>
                    <div className="frame-wrapper">
                      <div className="frame-3">
                        <p className="by-femina-for">
                          UBS Transformation future women
                          leader awards
                        </p>
                      </div>
                    </div>
                    <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                  </div>
                  <div className="BFSI-2">
                    <p className="text-wrapper-2">India’s 50 most exciting startups</p>
                    <div className="frame-wrapper">
                      <div className="frame-3">
                        <p className="by-femina-for">
                          award for its accelerated
                          growth and differentiated solutions
                        </p>
                      </div>
                    </div>
                    <img className="frame-4" alt="Frame" src="/about/frame-1.svg" />
                  </div>
                  <div className="telecom">
                    <div className="text-wrapper-6">Products</div>
                  </div>
                  <div className="telecom-3">
                    <div className="text-wrapper-6">E-Commerce</div>
                  </div>
                </Carousel>

              </div>
            </div>
          </div>
          <div className="overlap-10">
            <div className="rectangle-9" />
            <img className="element-d-cube-design" alt="Element cube design" src="/about/cube.png" />
            <div className="frame-61">
              <p className="being-the-fastest-2">
                <span className="text-wrapper-51">
                  Being the fastest-growing leaders in the talent industry, we help our clients scale faster with
                </span>
                <span className="text-wrapper-8">
                  {" "}
                  innovative talent solutions.
                  <br />
                </span>
                <span className="text-wrapper-51">
                  <br />
                  Technology Experts with a strategic and proactive Solution management. JoulestoWatts delivers the
                  best talent solutions, business and technology consulting with innovative models that address the
                  industry.{" "}
                </span>
              </p>
              <Cta
                arrowForward="/about/arrow-forward-8.svg"
                arrowForwardClassName="CTA-2"
                className="CTA-3"
                divClassName="instance-node"
                property1="default"
                text="Connect with us"
              />
            </div>
            <img className="rectangle-10" alt="Rectangle" src="/about/rectangle-178.svg" />
            <div className="frame-62">
              <div className="frame-63 image-1">
                <div className="frame-64">
                  <p className="div-4">
                    <span className="text-wrapper-8">
                      3500+
                      <br />
                    </span>
                    <span className="text-wrapper-52">Trusted consultants</span>
                  </p>
                  <p className="div-5">
                    <span className="text-wrapper-53">
                      Every 30 Seconds
                      <br />
                    </span>
                    <span className="text-wrapper-11">
                      Connect to a Potential <br />
                      Candidate
                    </span>
                  </p>
                </div>
              </div>
              <div className="frame-63 image-2">
                <div className="frame-64">
                  <p className="div-4">
                    <span className="text-wrapper-8">
                      200+
                      <br />
                    </span>
                    <span className="text-wrapper-52">Skill Sets</span>
                  </p>
                  <p className="div-5">
                    <span className="text-wrapper-53">
                      Every 1 Minute
                      <br />
                    </span>
                    <span className="text-wrapper-11">
                      Profile is uploaded on <br />
                      OfferLetter Platform
                    </span>
                  </p>
                </div>
              </div>
              <div className="frame-63 image-3">
                <div className="frame-64">
                  <p className="div-4">
                    <span className="text-wrapper-8">
                      200+
                      <br />
                    </span>
                    <span className="text-wrapper-52">Clients</span>
                  </p>
                  <p className="div-5">
                    <span className="text-wrapper-53">
                      Every 5 Minutes
                      <br />
                    </span>
                    <span className="text-wrapper-11">
                      A New Requirement <br />
                      is covered
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-65">
            <div className="frame-14">
              <p className="text-wrapper-12">Trusted by Fortune 500 Clients for</p>
              <div className="text-wrapper-13">Talent Transformation</div>
            </div>
          </div>
          <div className="frame-66">
            <div className="frame-67">
              <img className="element-2" alt="Element" src="/about/lady.png" />
              <div className="frame-68">
                <div className="frame-69">
                  <div className="text-wrapper-54">Priti Sawant</div>
                  <img className="linkedin-circled-3" alt="Linkedin circled" src="/about/linkedin-circled-1.png" />
                </div>
                <div className="text-wrapper-55">Founder &amp; CEO, JoulestoWatts</div>
                <p className="text-wrapper-56">
                  Priti Sawant brings over two decades’ experience in managing strategic engagements and leverages her
                  vast operational experience to advise companies on growing their business by uncovering new
                  opportunities and identifying untapped revenue streams in addition to developing leadership capital.{" "}
                  <br />
                  <br />
                  She is widely recognised for her role in charting the growth of IT contract staffing in India and
                  defining path-breaking staffing models for Fortune 500 technology companies. A hands-on people
                  person, she is known for shaping and fostering enthusiastic and energetic work culture and building
                  high-performance teams.
                </p>
              </div>
            </div>
          </div>
          <div className="frame-70">
            <div className="frame-67">
              <img className="element-3" alt="Element" src="/about/man.png"/>
              <div className="frame-68">
                <div className="frame-69">
                  <div className="text-wrapper-54">BM Gupta</div>
                  <img className="linkedin-circled-4" alt="Linkedin circled" src="/about/linkedin-circled-1.png" />
                </div>
                <div className="text-wrapper-55">Chief Operating Officer, JoulestoWatts</div>
                <p className="text-wrapper-56">
                  Business Strategist &amp; Leader having more than 30+ years of experience in diversified industry
                  domains including recruitment and staffing, dairy, FMCG, consumer durable, pharmaceuticals,
                  automobile, manufacturing, e-commerce and services sector in India and overseas markets. Over the
                  years, associated with globally reputed and select Fortune 500 companies such as ABC Consultants,
                  Manpower Group, Mother Dairy India, Con Agra, Apollo International, Thakral Corp, Tata Steel and
                  Nestle India.
                  <br />
                  <br />
                  Recognized for decisive leadership and proven ability to face challenges head-on and execute sound
                  decisions while driving different business agendas.
                </p>
              </div>
            </div>
          </div>
          <div className="overlap-11">
            <div className="frame-71">
              <div className="frame-72">
                <div className="frame-73">
                  <div className="text-wrapper-18">HYDERABAD OFFICE</div>
                  <p className="element-floor-sinman">
                    3rd Floor, Sinman Dwaraka, 164/3,
                    <br />
                    Inovies St, Patrika Nagar, Madhapur, HITEC City,
                    <br />
                    Hyderabad, Telangana – 500081
                  </p>
                </div>
              </div>
              <div className="frame-74">
                <div className="frame-73">
                  <div className="text-wrapper-18">MUMBAI OFFICE</div>
                  <p className="text-wrapper-57">
                    Accesswork Business Centre,
                    <br />
                    Level 9, Wing A Eureka Towers, Mindspace IT Park Off. New Link Road, Malad(West), Mumbai - 400064
                  </p>
                </div>
              </div>
              <div className="frame-74">
                <div className="frame-73">
                  <div className="text-wrapper-18">DELHI OFFICE</div>
                  <p className="text-wrapper-57">
                    JoulestoWatts Business Solutions
                    <br />
                    3rd Floor, Saira Tower,
                    <br />
                    Gulmohar Park, New Delhi-110049
                  </p>
                </div>
              </div>
              <div className="frame-75">
                <div className="frame-73">
                  <div className="text-wrapper-18">U.S. OFFICE</div>
                  <p className="text-wrapper-57">
                    JoulestoWatts Consulting INC
                    <br />
                    13111 N central expy STE8031,
                    <br />
                    DALLAS, TX-75243
                  </p>
                </div>
              </div>
            </div>
            <img className="seekpng-2" alt="Seekpng" src="/about/seek.png" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
