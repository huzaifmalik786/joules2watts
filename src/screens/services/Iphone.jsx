import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Cta } from "../../components/services/Cta";
import { CtaWrapper } from "../../components/services/CtaWrapper";
import { PropertyDefault } from "../../components/services/PropertyDefault";
import { PropertyDefaultWrapper } from "../../components/services/PropertyDefaultWrapper";
import { Service } from "../../components/services/Service";
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
      <img className="arrow-forward-ios desktop-only" alt="Arrow forward ios" src="/services/arrow-forward-ios.png" />
    </button>
  );
};
const ButtonGroup2 = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <button onClick={() => next()} className="arrow-forward-ios-wrapper">
      <img className="arrow-forward-ios-2" alt="Arrow forward ios" src="/services/arrow-forward-ios.png" />
    </button>
  );
};

export const Services = () => {
  const screenWidth = useWindowWidth();

  return (
    <>
      <div className="services">
        <div
          className="div-2"
          style={{
            height: screenWidth < 1440 ? "6907px" : screenWidth >= 1440 ? "5593px" : undefined,
            width: screenWidth < 1440 ? "390px" : screenWidth >= 1440 ? "1440px" : undefined,
          }}
        >
          <Header />
          <Header1 className="header-instance mobile-only" />

          <div
            className="overlap"
            style={{
              height: screenWidth < 1440 ? "3631px" : screenWidth >= 1440 ? "3687px" : undefined,
              left: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "-3px" : undefined,
              top: screenWidth < 1440 ? "60px" : screenWidth >= 1440 ? "-3px" : undefined,
              width: screenWidth < 1440 ? "1438px" : screenWidth >= 1440 ? "1441px" : undefined,
            }}
          >
            <div
              className="rectangle-5"
              style={{
                height: screenWidth >= 1440 ? "3090px" : screenWidth < 1440 ? "3012px" : undefined,
                top: screenWidth >= 1440 ? "99px" : screenWidth < 1440 ? "0" : undefined,
                width: screenWidth >= 1440 ? "1440px" : screenWidth < 1440 ? "390px" : undefined,
              }}
            />
            <div className="mobile-only">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="frame-7">
                    <img className="shutterstock-3" alt="Shutterstock" src="/services/shutterstock-1485872414-1.png" />
                  </div>
                  <div className="rectangle-6" />
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="text-wrapper-5">Hire, Train &amp; Deploy</div>
                    </div>
                    <Cta
                      arrowForward="/services/arrow-forward.svg"
                      className="instance-node"
                      property1="default"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-group-3">
                  <div className="frame-7">
                    <img className="shutterstock-3" alt="Shutterstock" src="/services/shutterstock-1485872414-1.png" />
                  </div>
                  <img className="rectangle-7" alt="Rectangle" src="/services/rectangle-33.svg" />
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="text-wrapper-5">Managed IT services</div>
                    </div>
                    <Cta
                      arrowForward="/services/arrow-forward-1.svg"
                      className="instance-node"
                      property1="default"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="frame-10"
              style={{
                height: screenWidth >= 1440 ? "136px" : screenWidth < 1440 ? "219px" : undefined,
                left: screenWidth >= 1440 ? "354px" : screenWidth < 1440 ? "0" : undefined,
                top: screenWidth >= 1440 ? "174px" : screenWidth < 1440 ? "79px" : undefined,
                width: screenWidth >= 1440 ? "732px" : screenWidth < 1440 ? "390px" : undefined,
              }}
            >
              <div className="mobile-only">
                <CtaWrapper arrowForward="/services/arrow-forward-2.svg" className="CTA-2" />
              </div>

              <div
                className="innovative-talent"
                style={{
                  color:
                    screenWidth < 1440 ? "var(--neutral-10)" : screenWidth >= 1440 ? "var(--secondary-02)" : undefined,
                  fontSize: screenWidth < 1440 ? "16px" : screenWidth >= 1440 ? "50px" : undefined,
                  fontWeight: screenWidth < 1440 ? "400" : screenWidth >= 1440 ? "600" : undefined,
                  height: screenWidth < 1440 ? "66px" : screenWidth >= 1440 ? "60px" : undefined,
                  left: screenWidth < 1440 ? "54px" : screenWidth >= 1440 ? "0" : undefined,
                  letterSpacing: screenWidth < 1440 ? "-0.16px" : screenWidth >= 1440 ? "-1.25px" : undefined,
                  lineHeight: screenWidth < 1440 ? "22.4px" : screenWidth >= 1440 ? "60.0px" : undefined,
                  top: screenWidth < 1440 ? "91px" : screenWidth >= 1440 ? "-1px" : undefined,
                  width: screenWidth < 1440 ? "282px" : screenWidth >= 1440 ? "732px" : undefined,
                }}
              >
                <p className="text-wrapper-61 mobile-only">
                  Innovative talent solutions for businesses ranging from start-ups to Fortune 500 clients; we’ve got
                  you covered.
                </p>

                {screenWidth >= 1440 && <>Transforming Through Technology</>}
              </div>
              <div className="transforming-through mobile-only">
                Transforming Through <br />
                Technology
              </div>

              <p className="text-wrapper-6 desktop-only">
                Innovative talent solutions for businesses ranging from start-ups to Fortune 500 clients; we’ve got you
                covered.
              </p>
            </div>
            <div className="mobile-only">
              <div className="service-2">
                <div className="overlap-group-3">
                  <div className="frame-7">
                    <div className="overlap-group-4">
                      <img className="shutterstock-4" alt="Shutterstock" src="/services/shutterstock-1485872414-1.png" />
                      <img className="shutterstock-5" alt="Shutterstock" src="/services/shutterstock-1485872414-1.png" />
                    </div>
                  </div>
                  <div className="rectangle-6" />
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="text-wrapper-5">Master service provider</div>
                    </div>
                    <Cta
                      arrowForward="/services/arrow-forward-3.svg"
                      className="instance-node"
                      property1="default"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>
              <div className="service-3">
                <div className="overlap-group-3">
                  <div className="frame-7">
                    <img className="shutterstock-6" alt="Shutterstock" src="/services/shutterstock-1485872414-1-7.png" />
                  </div>
                  <div className="rectangle-6" />
                  <div className="frame-11">
                    <div className="frame-9">
                      <div className="text-wrapper-5">Recruitment Process Outsourcing</div>
                    </div>
                    <Cta
                      arrowForward="/services/arrow-forward-4.svg"
                      className="instance-node"
                      property1="default"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>
              <div className="service-4">
                <div className="overlap-group-3">
                  <div className="frame-7">
                    <img className="shutterstock-7" alt="Shutterstock" src="/services/shutterstock-1485872414-1-8.png" />
                  </div>
                  <div className="rectangle-6" />
                  <div className="frame-12">
                    <div className="frame-9">
                      <div className="text-wrapper-5">Flexible Staffing</div>
                    </div>
                    <Cta
                      arrowForward="/services/arrow-forward-5.svg"
                      className="instance-node"
                      property1="default"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>
              <div className="service-5">
                <div className="overlap-group-3">
                  <div className="frame-7">
                    <img className="shutterstock-8" alt="Shutterstock" src="/services/shutterstock-1485872414-1-2.png" />
                  </div>
                  <div className="rectangle-6" />
                  <div className="frame-11">
                    <div className="frame-9">
                      <div className="text-wrapper-5">Administrative &amp; Payroll Management</div>
                    </div>
                    <Cta
                      arrowForward="/services/arrow-forward-6.svg"
                      className="instance-node"
                      property1="default"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>
              <div className="service-6">
                <div className="overlap-group-3">
                  <div className="frame-7">
                    <img className="shutterstock-7" alt="Shutterstock" src="/services/Frame 3791 (1).png" />
                  </div>
                  <div className="rectangle-6" />
                  <div className="frame-11">
                    <div className="frame-9">
                      <p className="text-wrapper-5">Consulting for Global In-house Centers (GICs)</p>
                    </div>
                    <Cta
                      arrowForward="/services/arrow-forward-7.svg"
                      className="instance-node"
                      property1="default"
                      text="Learn More"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-7">OUR PLATFORMS</div>
                  <div className="frame-15">
                    <div className="text-wrapper-8">AI-Powered Human-Cloud Solutions</div>
                    <p className="text-wrapper-9">
                      JoulestoWatts is your game changing growth partner! By using BI and analytics-based technology for
                      talent and client engagement, we ensure to find the right fit for both job seekers and employers.
                    </p>
                  </div>
                </div>
                <div className="frame-16">
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
                    autoPlay={true}
                    infinite
                    autoPlaySpeed={3200}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel"
                    itemClass="carousel-item"
                    pauseOnHover={false}
                  >
                    <div className="frame-wrapper">
                      <div className="frame-wrapper-in">
                        <div className="frame-17">
                          <div className="frame-18">
                            <div className="text-wrapper-10">Offer Letter</div>
                            <p className="text-wrapper-11">
                              One-stop solution for qualified <br />
                              &amp; regular skill fulfillment
                            </p>
                          </div>
                          <button className="button">
                            <div className="this-is-who-we-are-2">Explore</div>
                            <img className="arrow-forward-3" alt="Arrow forward" src="/services/arrow-forward-8.svg" />
                          </button>
                        </div>
                      </div>

                    </div>
                    <div className="frame-19">
                      <div className="overlap-group-5">
                        <img className="group" alt="Group" src="/services/group.png" />
                        <div className="ellipse" />
                        <div className="ellipse-2" />
                        <div className="frame-20">
                          <div className="frame-18">
                            <div className="text-wrapper-10">Premier Lounge</div>
                            <p className="text-wrapper-12">
                              India’s first-of-its kind solution for your niche skill fullfillment
                            </p>
                          </div>
                          <button className="button">
                            <div className="this-is-who-we-are-2">Explore</div>
                            <img className="arrow-forward-3" alt="Arrow forward" src="/services/arrow-forward-8.svg" />
                          </button>
                        </div>
                      </div>
                      <img className="group-2" alt="Group" src="/services/group-1.png" />
                    </div>
                    <div className="frame-21">
                      <div className="overlap-2">
                        <div className="ellipse-3" />
                        <div className="ellipse-4" />
                        <div className="frame-22">
                          <div className="frame-18">
                            <div className="text-wrapper-10">J2W Evolve</div>
                            <p className="text-wrapper-11">
                              Get the assistance of well-qualified trainers to identify the right talent fit for your
                              organization.
                            </p>
                          </div>
                          <button className="button">
                            <div className="this-is-who-we-are-2">Explore</div>
                            <img className="arrow-forward-3" alt="Arrow forward" src="/services/arrow-forward-8.svg" />
                          </button>
                        </div>
                      </div>
                      <div className="overlap-3">
                        <img className="group-3" alt="Group" src="/services/group-1.png" />
                        <img className="group-4" alt="Group" src="/services/group-1.png" />
                      </div>
                    </div>
                  </Carousel>

                </div>
              </div>
            </div>

            <div className="desktop-only">
              <div className="frame-23">
                <div className="frame-14">
                  <div className="text-wrapper-7">OUR PLATFORMS</div>
                  <div className="frame-15">
                    <div className="text-wrapper-13">AI-Powered Human-Cloud Solutions</div>
                    <p className="text-wrapper-9">
                      JoulestoWatts is your game changing growth partner! By using BI and analytics-based technology for
                      talent and client engagement, we ensure to find the right fit for both job seekers and employers.
                    </p>
                  </div>
                </div>
                <div className="frame-24">
                  <Carousel
                    arrows={false}
                    swipeable
                    draggable
                    showDots={false}
                    responsive={
                      {
                        desktop: {
                          breakpoint: { max: 3000, min: 450 },
                          items: 1.8,
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
                  >
                    <div className="frame-25">
                      <div className="overlap-group-6">
                        <div className="frame-26">
                          <div className="frame-27">
                            <div className="text-wrapper-14"> Offer Letter</div>
                            <p className="text-wrapper-11">
                              One-stop solution for qualified <br />
                              &amp; regular skill fulfillment
                            </p>
                          </div>
                          <PropertyDefaultWrapper
                            arrowForward="/services/arrow-forward-24.svg"
                            className="CTA-3"
                            divClassName="CTA-4"
                            property1="default"
                            text="Explore"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-28">
                      <div className="overlap-4">
                        <img className="group-5" alt="Group" src="/services/group-11.png" />
                        <img className="group-6" alt="Group" src="/services/group-12.png" />
                        <div className="ellipse-5" />
                        <div className="ellipse-6" />
                        <div className="frame-29">
                          <div className="frame-30">
                            <div className="text-wrapper-14">Premier Lounge</div>
                            <p className="text-wrapper-15">
                              India’s first-of-its kind solution for your niche skill fullfillment
                            </p>
                          </div>
                          <PropertyDefaultWrapper
                            arrowForward="/services/arrow-forward-25.svg"
                            className="CTA-3"
                            divClassName="CTA-4"
                            property1="default"
                            text="Explore"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-31">
                      <div className="overlap-5">
                        <div className="ellipse-7" />
                        <div className="ellipse-8" />
                        <img className="group-7" alt="Group" src="/services/group-14.png" />
                        <img className="group-8" alt="Group" src="/services/group-15.png" />
                        <div className="frame-32">
                          <div className="text-wrapper-14">J2W Evolve</div>
                          <p className="get-the-assistance">
                            Get the assistance of well-qualified trainers to identify the right talent fit for your
                            organization. With customized training programs, multiple engagement models and HTD,
                            JoulestoWatts -&nbsp;&nbsp;Evolve HTD saves your time and reduces the ROI by cutting down the
                            induction cycle.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Carousel>

                </div>
              </div>
              <Cta
                arrowForward="/services/arrow-forward-27.svg"
                arrowForwardClassName="CTA-5"
                className="CTA-6"
                divClassName="CTA-7"
                property1="default"
                text="Connect with us"
              />
              <Service
                CTAArrowForward="/services/arrow-forward-28.svg"
                card="GIC"
                className="service-instance"
                stateProp="default"
              />
              <Service
                CTAArrowForward="/services/arrow-forward-29.svg"
                card="ITS"
                className="service-7"
                stateProp="default"
              />
              <Service
                CTAArrowForward="/services/arrow-forward-30.svg"
                card="FLX"
                className="service-8"
                stateProp="default"
              />
              <PropertyDefault
                CTAArrowForward="/services/arrow-forward-31.svg"
                className="property-default-instance"
                frameClassName="property-1-default-instance"
              />
              <Service
                CTAArrowForward="/services/arrow-forward-32.svg"
                card="HRD"
                className="service-9"
                stateProp="default"
              />
              <Service
                CTAArrowForward="/services/arrow-forward-33.svg"
                card="default"
                className="service-10"
                stateProp="default"
              />
              <Service
                CTAArrowForward="/services/arrow-forward-34.svg"
                card="RPO"
                className="service-11"
                stateProp="default"
              />
            </div>
          </div>

          <div
            className="overlap-6"
            style={{
              height: screenWidth < 1440 ? "696px" : screenWidth >= 1440 ? "644px" : undefined,
              left: screenWidth < 1440 ? "-201px" : screenWidth >= 1440 ? "-4px" : undefined,
              top: screenWidth < 1440 ? "3691px" : screenWidth >= 1440 ? "4945px" : undefined,
              width: screenWidth < 1440 ? "843px" : screenWidth >= 1440 ? "1444px" : undefined,
            }}
          >
            <div className="group-11 desktop-only">
              <div className="overlap-7">
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="frame-44">
                      <div className="text-wrapper-25">Ready to get started?</div>
                      <p className="are-we-a-good-fit">
                        Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                      </p>
                    </div>
                    <button className="CTA-10">
                      <div className="text-wrapper-26">Learn More</div>
                      <img className="arrow-forward-6" alt="Arrow forward" src="/services/arrow-forward-20.svg" />
                    </button>
                  </div>
                </div>
                <div className="frame-45">
                  <div className="overlap-group-8">
                    <div className="frame-46">
                      <div className="frame-44">
                        <p className="text-wrapper-27">Get ready to level up</p>
                        <p className="you-are-just-one">
                          You are just one step away from creating the industry&#39;s best talent pool for your
                          enterprise. Call us right away to hire promising skills for your organization.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-47">
                    <div className="frame-48">
                      <p className="text-wrapper-28">Set up a virtual briefing</p>
                      <p className="why-waste-time-by">
                        Why waste time by thinking twice? Be proactive in addressing your business needs by contacting
                        our executive, and let&#39;s discuss your business and its exciting possibilities.
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/lead-form">
                  <button className="CTA-11">
                    <div className="text-wrapper-26">Schedule a call now</div>
                    <img className="arrow-forward-6" alt="Arrow forward" src="/services/arrow-forward-21.svg" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="mobile-only">
              <div className="container">
                <Carousel
                  arrows={false}
                  swipeable
                  draggable
                  showDots={false}
                  responsive={
                    {
                      desktop: {
                        breakpoint: { max: 450, min: 0 },
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
                >
                  <div className="BFSI">
                    <div className="text-wrapper-40">Captive Services</div>
                  </div>
                  <div className="IT-services">
                    <div className="text-wrapper-40">IT Services</div>
                  </div>
                  <div className="telecom">
                    <div className="overlap-group-9">
                      <div className="text-wrapper-41">Product</div>
                      <div className="text-wrapper-41">Product</div>
                    </div>
                  </div>
                  <div className="telecom-2">
                    <div className="text-wrapper-40">ITES</div>
                  </div>
                  <div className="telecom-3">
                    <div className="text-wrapper-40">SME</div>
                  </div>
                </Carousel>

              </div>
              <div className="frame-50">
                <div className="frame-51">
                  <div className="text-wrapper-42">Our Industries</div>
                  <p className="are-we-a-good-fit-2">
                    Are we a good fit for your company&#39;s challenges? See our specializations and which industries
                    use JJoulestoWatts products.
                  </p>
                </div>
                <div className="CTA-instance-wrapper">
                  <Cta
                    arrowForward="/services/arrow-forward-11.svg"
                    className="CTA-13"
                    divClassName="CTA-12"
                    property1="default"
                    text="Learn more"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="desktop-only">
            <div className="frame-52">
              <div className="text-wrapper-43">OUR PLATFORMS</div>
              <div className="frame-27">
                <div className="text-wrapper-44">Human-Cloud Solutions</div>
                <p className="text-wrapper-45">
                  Our AI-Driven platforms and human cloud solutions for modern enterprises. Wether you’re searching for
                  freshers or CXO’s, Our platforms got you covered
                </p>
              </div>
            </div>
            <div className="frame-53">
              <img className="group-14" alt="Group" src="/services/group-1.png" />
              <img className="group-15" alt="Group" src="/services/group-1.png" />
              <div className="overlap-9">
                <div className="ellipse-10" />
                <div className="ellipse-11" />
                <div className="frame-54">
                  <div className="frame-27">
                    <div className="text-wrapper-14">J2W Premier Lounge</div>
                    <p className="text-wrapper-11">
                      Quickly sign up on our platforms, create your profile instantly and get to work. It’s that simple.
                      We’ll keep pushing your profiles pushed to.
                    </p>
                  </div>
                  <PropertyDefaultWrapper
                    arrowForward="/services/arrow-forward-9.png"
                    arrowForwardClassName="CTA-14"
                    className="CTA-3"
                    divClassName="CTA-4"
                    property1="default"
                    text="Explore"
                  />
                </div>
              </div>
            </div>
            <div className="frame-55">
              <div className="overlap-10">
                <div className="ellipse-12" />
                <div className="ellipse-13" />
                <div className="frame-56">
                  <div className="text-wrapper-14">J2W Evolve</div>
                  <p className="text-wrapper-46">
                    Quickly sign up on our platforms, create your profile instantly and get to work. It’s that simple.
                    We’ll keep pushing your profiles pushed to.
                  </p>
                </div>
              </div>
              <div className="overlap-11">
                <img className="group-16" alt="Group" src="/services/group-10.png" />
                <img className="group-17" alt="Group" src="/services/group-1.png" />
              </div>
            </div>
            <div className="frame-57">
              <img className="frame-58" alt="Frame" src="/services/arrow-forward-9.png" />
              <div className="frame-59">
                <div className="frame-27">
                  <div className="text-wrapper-14">J2W Offer Letter</div>
                  <p className="text-wrapper-11">
                    Quickly sign up on our platforms, create your profile instantly and get to work. It’s that simple.
                    We’ll keep pushing your profiles pushed to.
                  </p>
                </div>
                <PropertyDefaultWrapper
                  arrowForward="/services/arrow-forward-9.png"
                  arrowForwardClassName="CTA-16"
                  className="CTA-15"
                  divClassName="CTA-4"
                  property1="default"
                  text="Explore"
                />
              </div>
            </div>
            <div className="rectangle-8" />
          </div>

          <div
            className="frame-60"
            style={{
              height: screenWidth >= 1440 ? "356px" : screenWidth < 1440 ? "385px" : undefined,
              left: screenWidth >= 1440 ? "0" : screenWidth < 1440 ? "25px" : undefined,
              top: screenWidth >= 1440 ? "3684px" : screenWidth < 1440 ? "4971px" : undefined,
              width: screenWidth >= 1440 ? "1440px" : screenWidth < 1440 ? "345px" : undefined,
            }}
          >
            <div
              className="overlap-12"
              style={{
                height: screenWidth >= 1440 ? "356px" : screenWidth < 1440 ? "385px" : undefined,
              }}
            >
              <div className="desktop-only">
                <div className="section-industries">
                  <div className="frame-61">
                    <div className="frame-62">
                      <div className="text-wrapper-42">Our Industries</div>
                      <p className="are-we-a-good-fit-3">
                        Are we a good fit for your company&#39;s challenges? See our specializations and which
                        industries use JJoulestoWatts products.
                      </p>
                    </div>
                    <div className="CTA-instance-wrapper">
                      <Cta
                        arrowForward="/services/arrow-forward-26.svg"
                        className="CTA-13"
                        divClassName="CTA-12"
                        property1="default"
                        text="Learn more"
                      />
                    </div>
                  </div>
                  <div className="frame-63">
                    <div className="frame-64">
                      <div className="frame-65">
                        <div className="frame-66">
                          <div className="frame-67">
                            <p className="text-wrapper-47">Trusted by Fortune 500 Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-68">
                      <img
                        className="mercedes-benz-logo"
                        alt="Mercedes benz logo"
                        src="/services/mercedes-benz-logo-2010-1.png"
                      />
                      <img
                        className="GE-healthcare-logo"
                        alt="Ge healthcare logo"
                        src="/services/ge-healthcare-logo-1.png"
                      />
                      <img className="sony-logo" alt="Sony logo" src="/services/sony-logo-1.png" />
                      <img className="shell-logo" alt="Shell logo" src="/services/shell-logo-1971-1995-1.png" />
                      <img className="amazon" alt="Amazon" src="/services/amazon-1-1.png" />
                      <img
                        className="wipro-logo-new-og"
                        alt="Wipro logo new og"
                        src="/services/wipro-logo-new-og-502x263-1.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="container-2">
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
                    customButtonGroup={<ButtonGroup />}
                  >
                    <div className="BFSI-2">
                      <div className="text-wrapper-40">Captive Services</div>
                    </div>
                    <div className="IT-services">
                      <div className="text-wrapper-40">IT Services</div>
                    </div>
                    <div className="telecom">
                      <div className="overlap-group-9">
                        <div className="text-wrapper-41">Product</div>
                        <div className="text-wrapper-41">Product</div>
                      </div>
                    </div>
                    <div className="telecom-2">
                      <div className="text-wrapper-40">ITES</div>
                    </div>
                    <div className="telecom-3">
                      <div className="text-wrapper-40">SME</div>
                    </div>
                  </Carousel>

                </div>
              </div>

              <img className="BG-image mobile-only" alt="Bg image" src="/services/bg-image.svg" />

              <div
                className="UI-element mobile-only"
                style={{
                  borderRadius: screenWidth < 1440 ? "8.2px" : screenWidth >= 1440 ? "30px" : undefined,
                  boxShadow:
                    screenWidth < 1440
                      ? "0px 2.73px 27.32px #8a8a8a0a"
                      : screenWidth >= 1440
                        ? "-3px 1px 16px #00000040"
                        : undefined,
                  height: screenWidth < 1440 ? "132px" : screenWidth >= 1440 ? "60px" : undefined,
                  left: screenWidth < 1440 ? "50px" : screenWidth >= 1440 ? "1365px" : undefined,
                  top: screenWidth < 1440 ? "253px" : screenWidth >= 1440 ? "151px" : undefined,
                  width: screenWidth < 1440 ? "295px" : screenWidth >= 1440 ? "60px" : undefined,
                }}
              >
                <div>
                  <div className="checkmark">
                    <img className="icon" alt="Icon" src="/services/icon.svg" />
                  </div>
                  <div className="headline">Cyber Protected</div>
                  <div className="mockup-text" />
                  <div className="mockup-text-2" />
                  <div className="fake-button" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-sections desktop-only">
            <div className="overlap-13">
              <div className="headline-2">Diguro Cyber Security</div>
              <img
                className="copy-of-CYBER-SEC"
                alt="Copy of CYBER SEC"
                src="/services/copy-of-cyber-sec-practice-removebg-preview-1-1.png"
              />
            </div>
            <div className="overlap-14">
              <img className="BG-image-2" alt="Bg image" src="/services/bg-image-1.svg" />
              <div className="UI-element-2">
                <div className="icon-wrapper">
                  <img className="icon-2" alt="Icon" src="/services/icon-1.svg" />
                </div>
                <div className="headline-3">Cyber Protected</div>
                <div className="mockup-text-3" />
                <div className="mockup-text-4" />
                <div className="fake-button-2" />
              </div>
            </div>
            <div className="at-diguro-cyber-wrapper">
              <p className="at-diguro-cyber">
                <span className="span">
                  At Diguro, Cyber Security practice at Joules to Watts, we are passionate about enabling business
                  acceleration for our clients by creating a cyber-resilient environment. With the help of a team of
                  highly skilled and deep-tech experts dedicated to innovation while providing the best in class
                  platforms and managed-consulting-based outcomes.
                  <br /> <br />
                </span>
                <span className="text-wrapper-48">
                  Joules to Watts has now established a capability vertical to concentrate on end-to-end cyber security
                  services in our effort to offer value-based services to our clients. Our cyber experts will strengthen
                  and augment your security posture, and we are confident.
                </span>
              </p>
            </div>
          </div>

          <div className="mobile-only">
            <div className="group-18">
              <div className="headline-4">Diguro Cyber Security</div>
              <Cta
                arrowForward="/services/arrow-forward-12.svg"
                className="CTA-17"
                divClassName="CTA-12"
                property1="default"
                text="Learn more"
              />
              <img
                className="copy-of-CYBER-SEC-2"
                alt="Copy of CYBER SEC"
                src="/services/copy-of-cyber-sec-practice-removebg-preview-1.png"
              />
              <div className="frame-69">
                <p className="at-diguro-cyber-2">
                  <span className="text-wrapper-49">
                    At Diguro, Cyber Security practice at Joules to Watts, we are passionate about enabling business
                    acceleration for our clients by creating a cyber-resilient environment. With the help of a team of
                    highly skilled and deep-tech experts dedicated to innovation while providing the best in class
                    platforms and managed-consulting-based outcomes.
                    <br />
                  </span>
                  <span className="text-wrapper-50">
                    {" "}
                    <br />
                  </span>
                  <span className="text-wrapper-51">
                    Joules to Watts has now established a capability vertical to concentrate on end-to-end cyber
                    security services in our effort to offer value-based services to our clients. Our cyber experts will
                    strengthen and augment your security posture, and we are confident.
                  </span>
                </p>
              </div>
            </div>
            <div className="overlap-15">
              <div className="rectangle-9" />
              <div className="frame-70">
                <div className="frame-64">
                  <div className="frame-65">
                    <div className="frame-66">
                      <div className="frame-67">
                        <p className="text-wrapper-47">Trusted by Fortune 500 Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-68">
                  <img
                    className="mercedes-benz-logo-2"
                    alt="Mercedes benz logo"
                    src="/services/mercedes-benz-logo-2010-1.png"
                  />
                  <img className="GE-healthcare-logo-2" alt="Ge healthcare logo" src="/services/ge-healthcare-logo-1.png" />
                  <img className="sony-logo-2" alt="Sony logo" src="/services/sony-logo-1.png" />
                  <img className="shell-logo-2" alt="Shell logo" src="/services/shell-logo-1971-1995-1.png" />
                  <img className="amazon-2" alt="Amazon" src="/services/amazon-1-1.png" />
                  <img
                    className="wipro-logo-new-og-2"
                    alt="Wipro logo new og"
                    src="/services/wipro-logo-new-og-502x263-1.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-19">
              <div className="frame-71">
                <div className="overlap-group-10">
                  <div className="frame-72">
                    <div className="text-wrapper-52">Ready to get started?</div>
                    <p className="are-we-a-good-fit-4">
                      Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                    </p>
                    <button className="CTA-18">
                      <div className="text-wrapper-26">Schedule a call now</div>
                      <img className="arrow-forward-6" alt="Arrow forward" src="/services/arrow-forward-13.svg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div >
    </>
  );
};
