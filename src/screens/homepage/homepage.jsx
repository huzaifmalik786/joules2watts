import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Component } from "../../components/homepage/Component";
import { Cta } from "../../components/homepage/Cta";
import { Frame } from "../../components/homepage/Frame";
import { PropertyDefault } from "../../components/homepage/PropertyDefault";
import { PropertyDefaultWrapper } from "../../components/homepage/PropertyDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";
import { Box } from "../../components/homepageBox/Box/Box";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { LeadForm } from "../../components/shared/LeadForm";

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <button
      onClick={() => next()}
      className="next-button"
    >
      <img
        className="arrow-forward-ios"
        alt="Arrow forward ios"
        src="/services/arrow-forward-ios.png"
      />
    </button>
  );
};

const ButtonGroup2 = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <button
      onClick={() => next()}
      className="arrow-forward-ios-wrapper"
    >
      <img
        className="arrow-forward-ios-2"
        alt="Arrow forward ios"
        src="/services/arrow-forward-ios.png"
      />
    </button>
  );
};

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  const carouselItems = [1, 2, 3, 4, 5];

  return (
    <button
      className={active ? "dot-active" : "dot-inactive"}
      onClick={() => onClick()}
    >
      <p />
    </button>
  );
};

export const Homepage = () => {
  const screenWidth = useWindowWidth();
  const [openModal, setOpenModal] = useState(false);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (window.innerWidth > 450) {
      const el = document.querySelector('.footer-2-shared');
      setHeight(el.getBoundingClientRect().bottom);
      document.querySelector(".iphone").style.transform = `scale(${window.innerWidth / 1430})`;
      document.querySelector(".iphone").style.transformOrigin = `top left`;
    } else {
      const el = document.querySelector('.footer-3-shared');
      setHeight(el.getBoundingClientRect().bottom);
      document.querySelector(".iphone").style.transform = `scale(${window.innerWidth / 390})`;
      document.querySelector(".iphone").style.transformOrigin = `top left`;
    }
  });

  return (
    <>
      {openModal && (
        <LeadForm
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <div className="homepage" style={{ height: height }}>
        <div
          className="iphone"
          style={{
            height: screenWidth < 450 ? "10076px" : screenWidth >= 450 ? "7026px" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
          }}
        >
          <Box />
          <Header nobg />
          <div className="mobile-carousel-1 mobile-only">
            <Carousel
              arrows={false}
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={{
                desktop: {
                  breakpoint: { max: 450, min: 0 },
                  items: 1,
                  slidesToSlide: 1,
                },
              }}
              autoPlay={true}
              infinite
              autoPlaySpeed={2000}
              containerClass="carousel"
              itemClass="carousel-item"
              pauseOnHover={false}
              customTransition="all ease-in .8"
              transitionDuration={500}
            // customDot={<CustomDot/>}
            >
              <Frame
                property1="default"
                rectangle="/homepage/rectangle-190.webp"
              />
              <Frame property1="variant-2" />
              <Frame property1="variant-3" />
              <Frame property1="variant-4" />
              <Frame property1="variant-5" />
            </Carousel>
          </div>

          <div
            className="overlap-3"
            style={{
              height: screenWidth < 450 ? "507px" : screenWidth >= 450 ? "992px" : undefined,
              left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "1px" : undefined,
              top: screenWidth < 450 ? "0" : screenWidth >= 450 ? "752px" : undefined,
              width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1459px" : undefined,
            }}
          >
            <div className="mobile-only">
              <div className="frame-wrapper">
                <div className="video-mobile">
                  <video
                    src="/video/-8c11-427a-a8ab-8a822a28e590.mp4"
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="frame-22">
                  <div className="frame-23">
                    <p className="accelerating-your">
                      <span className="span">Accelerating</span>
                      <span className="text-wrapper-15"> your digital evolution</span>
                    </p>
                    <div className="scale-faster-with-wrapper">
                      <p className="scale-faster-with">
                        Scale faster with innovative business solutions that leverage cutting-edge technology&nbsp;&nbsp;to&nbsp;&nbsp;drive strategic growth &amp; deliver exceptional results <br />
                        for your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Header1
                className="header-instance mobile-only"
                white
              />
            </div>

            <div className="desktop-only">
              <div className="carousel-1">
                <Carousel
                  arrows={false}
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  responsive={{
                    desktop: {
                      breakpoint: { max: 3000, min: 450 },
                      items: 1,
                      slidesToSlide: 1,
                    },
                  }}
                  autoPlay={true}
                  infinite
                  autoPlaySpeed={2000}
                  containerClass="carousel"
                  itemClass="carousel-item"
                  pauseOnHover={false}
                  customTransition="all ease-in .8"
                  transitionDuration={500}
                // customDot={<CustomDot/>}
                >
                  <Component
                    // className="component-2"
                    overlapClassName="component-instance"
                    overlapGroupClassName="component-2-instance"
                    property1="frame-14693"
                    rectangle="/homepage/rectangle-190.webp"
                    rectangleClassName="instance-node"
                  />
                  <Component
                    // className="component-2"
                    overlapClassName="component-instance"
                    overlapGroupClassName="component-2-instance"
                    property1="frame-14694"
                    rectangle="/homepage/rectangle-190.webp"
                    rectangleClassName="instance-node"
                  />
                  <Component
                    // className="component-2"
                    overlapClassName="component-instance"
                    overlapGroupClassName="component-2-instance"
                    property1="frame-14695"
                    rectangle="/homepage/rectangle-190.webp"
                    rectangleClassName="instance-node"
                  />
                  <Component
                    // className="component-2"
                    overlapClassName="component-instance"
                    overlapGroupClassName="component-2-instance"
                    property1="frame-14696"
                    rectangle="/homepage/rectangle-190.webp"
                    rectangleClassName="instance-node"
                  />
                  <Component
                    // className="component-2"
                    overlapClassName="component-instance"
                    overlapGroupClassName="component-2-instance"
                    property1="frame-14697"
                    rectangle="/homepage/rectangle-190.webp"
                    rectangleClassName="instance-node"
                  />
                </Carousel>
              </div>

              <div className="rectangle-7" />
              <img
                className="rectangle-8"
                alt="Rectangle"
                src="/homepage/rectangle-218.webp"
              />
              <img
                className="rectangle-9"
                alt="Rectangle"
                src="/homepage/rectangle-219.webp"
              />
              <div className="frame-24">
                <img
                  className="your-future"
                  alt="Your future"
                  src="/homepage/your-future-partner-for-a-digitally-evolving-world.svg"
                />
                <p className="text-wrapper-16">It’s a VUCA world out there, with digital disrupting way of life and placing unprecedented demand on digital customer experience and digital operational excellence. JoulesToWatts simplifies this transformation through Time, Talent and Ideas and gives Power To You.</p>
              </div>
              <div className="rectangle-10" />
              <div className="rectangle-11" />
              <div className="frame-25">
                <div className="text-wrapper-17">250k+</div>
                <div className="text-wrapper-18">Active Students</div>
              </div>
              <div className="frame-26">
                <div className="text-wrapper-17">85+</div>
                <div className="text-wrapper-19">Global Education Partners</div>
              </div>
              <div className="frame-27">
                <div className="frame-28">
                  <div className="text-wrapper-20">06</div>
                  <div className="text-wrapper-21">Global Campuses</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-only">
            <div className="frame-29">
              <img
                className="your-future-2"
                alt="Your future"
                src="/homepage/your-future-partner-for-a-digitally-evolving-world-1.svg"
              />
              <p className="text-wrapper-22">It’s a VUCA world out there, with digital disrupting way of life and placing unprecedented demand on digital customer experience and digital operational excellence. JoulesToWatts simplifies this transformation through Time, Talent and Ideas and gives Power To You.</p>
            </div>
            <div className="frame-30">
              <div className="rectangle-wrapper">
                <div className="rectangle-12" />
              </div>
              <div className="frame-31">
                <div className="text-wrapper-17">250k+</div>
                <div className="text-wrapper-23">Active Students</div>
              </div>
            </div>
            <div className="frame-32">
              <div className="rectangle-13" />
              <div className="frame-33">
                <div className="text-wrapper-17">85+</div>
                <div className="text-wrapper-19">Global Education Partners</div>
              </div>
            </div>
            <div className="frame-34">
              <img
                className="rectangle-14"
                alt="Rectangle"
                src="/homepage/rectangle-218-1.webp"
              />
              <div className="frame-35">
                <div className="frame-28">
                  <div className="text-wrapper-20">06</div>
                  <div className="text-wrapper-21">Global Campuses</div>
                </div>
              </div>
            </div>
            <div className="frame-36">
              <div className="card">
                <img
                  className="deepmind"
                  alt="Deepmind"
                  src="/homepage/deepmind-8hereyc6zt0-unsplash-1.webp"
                />
                <div className="frame-37">
                  <div className="frame-38">
                    <div className="text-wrapper-24">Hire Smarter Talent Seamlessly.</div>
                    <p className="text-wrapper-25">JoulestoWatts has a perfect combination of expertise, technology, and thought leaders to manage your operations in various verticals.</p>
                  </div>
                </div>
              </div>
              <div className="card-2">
                <img
                  className="deepmind-hereyczt"
                  alt="Deepmind"
                  src="/homepage/deepmind-8hereyc6zt0-unsplash-1-3.webp"
                />
                <div className="frame-37">
                  <div className="frame-38">
                    <div className="text-wrapper-24">Transforming Through Technology</div>
                    <p className="searching-for-an">Scale faster with innovative talent search, build technology teams and recruitment models with proven strategies and commendable success rates.</p>
                  </div>
                </div>
              </div>
              <div className="card-2">
                <div className="frame-39" />
                <img
                  className="deepmind"
                  alt="Deepmind"
                  src="/homepage/deepmind-8hereyc6zt0-unsplash-1-1.png"
                />

                <div className="frame-40">
                  <div className="frame-38">
                    <p className="text-wrapper-24">Recruit, Retain &amp; Manage Talent</p>
                    <p className="text-wrapper-25">
                      A technology-driven approach from <br />
                      hiring to deployment with complete assistance &amp; tested strategies to recruit, retain, and manage talent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-41">
              <div className="frame-42">
                <div className="text-wrapper-26">Business Solutions</div>
                <p className="text-wrapper-27">Innovative talent solutions for businesses ranging from start-ups to Fortune 500 clients; we’ve got you covered.</p>
              </div>
              <Cta
                arrowForward="/homepage/arrow-forward-16.svg"
                arrowForwardClassName="CTA-5"
                className="CTA-instance"
                divClassName="CTA-4"
                property1="default"
                text="Connect with us"
                link="/contact-us"
              />
            </div>
            <div className="text-wrapper-28">Al-powered Talent Intelligence Platforms</div>
            <p className="we-help-you-recruit">We help you recruit, retain &amp; manage diverse talent through technology.</p>
            <div className="frame-43">
              <div className="frame-44">
                <div className="text-wrapper-29">Premiere Lounge -</div>
                <p className="india-s-first-of-its">India’s first of its kind ecosystem for premium talent</p>
                <div className="frame-45">
                  <p className="text-wrapper-30">Premier Lounge is JoulesToWatts’ Human Cloud of premium experts in niche areas available for short and long term assignments. Our intelligent matching engine finds the best fit talent for your needs swiftly and cost efficiently</p>
                </div>
                <Cta
                  arrowForward="/homepage/arrow-forward-17.svg"
                  className="CTA-6"
                  divClassName="CTA-7"
                  property1="default"
                  text="Explore"
                  link="/j2w-premiere-lounge"
                />
              </div>
              <div className="overlap-group-wrapper">
                <div className="smiley-businesswoman-wrapper">
                  <img
                    className="smiley-businesswoman"
                    alt="Smiley businesswoman"
                    src="/homepage/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-spac-1.webp"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-46 desktop-only">
            <div className="video">
              <video
                src="/video/-8c11-427a-a8ab-8a822a28e590.mp4"
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="frame-49">
              <div className="frame-50">
                <div className="frame-51">
                  <p className="accelerating-your-2">
                    <span className="span">Accelerating</span>
                    <span className="text-wrapper-15"> your digital evolution</span>
                  </p>
                  <div className="frame-52">
                    <p className="scale-faster-with-2">
                      Scale faster with innovative business solutions that leverage cutting-edge technology&nbsp;&nbsp;to&nbsp;&nbsp;drive strategic growth &amp; deliver exceptional results <br />
                      for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="frame-53"
            style={{
              height: screenWidth >= 450 ? "604px" : screenWidth < 450 ? "712px" : undefined,
              left: screenWidth >= 450 ? "0" : screenWidth < 450 ? "13px" : undefined,
              top: screenWidth >= 450 ? "1744px" : screenWidth < 450 ? "6809px" : undefined,
              width: screenWidth >= 450 ? "1440px" : screenWidth < 450 ? "365px" : undefined,
            }}
          >
            <div className="desktop-only">
              <div className="card-3">
                <img
                  className="deepmind-2"
                  alt="Deepmind"
                  src="/homepage/deepmind-8hereyc6zt0-unsplash-1.webp"
                />
                <div className="frame-54">
                  <div className="frame-42">
                    <div className="text-wrapper-33">Hire Smarter Talent Seamlessly.</div>
                    <p className="text-wrapper-34">JoulestoWatts has a perfect combination of expertise, technology, and thought leaders to manage your operations in various verticals.</p>
                  </div>
                </div>
              </div>
              <div className="card-4">
                <div className="frame-55" />
                <div className="frame-56">
                  <div className="frame-42">
                    <p className="text-wrapper-33">Recruit, Retain &amp; Manage Talent</p>
                    <p className="text-wrapper-34">
                      A technology-driven approach from <br />
                      hiring to deployment with complete assistance &amp; tested strategies to recruit, retain, and manage talent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-5">
                <img
                  className="deepmind-3"
                  alt="Deepmind"
                  src="/homepage/deepmind-8hereyc6zt0-unsplash-1-2.webp"
                />
                <div className="frame-54">
                  <div className="frame-42">
                    <div className="text-wrapper-33">Transforming Through Technology</div>
                    <p className="searching-for-an-2">Scale faster with innovative talent search, build technology teams and recruitment models with proven strategies and commendable success rates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-only">
              <div className="group-wrapper">
                <div className="group-3">
                  <div className="overlap-group-4">
                    <img
                      className="vector"
                      alt="Vector"
                      src="/homepage/vector-5-1.svg"
                    />
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="/homepage/vector-2-1.svg"
                    />
                    <img
                      className="vector-3"
                      alt="Vector"
                      src="/homepage/vector-4-1.svg"
                    />
                    <img
                      className="mask-group"
                      alt="Mask group"
                      src="/homepage/mask-group-3.webp"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-57">
                <div className="text-wrapper-29">Offer Letter -</div>
                <p className="one-stop-solution">One-stop solution for qualified &amp; regular skill fulfillment</p>
                <div className="frame-58">
                  <p className="the-offerletter">The OfferLetter platform provides unified talent solutions with an end-to-end requisition and an efficient match engine to navigate hiring processes better &amp; faster.</p>
                </div>
                <Cta
                  arrowForward="/homepage/arrow-forward-19.svg"
                  className="CTA-6"
                  divClassName="CTA-7"
                  property1="default"
                  text="Explore"
                  link="/offer-letter-platform"
                />
              </div>
            </div>
          </div>
          <div className="desktop-only">
            <div className="overlap-wrapper-home">
              <div className="overlap-4">
                <div className="section-industries">
                  <div className="frame-59">
                    <div className="frame-60">
                      <div className="text-wrapper-35">Our Industries</div>
                      <p className="are-we-a-good-fit">Are we a good fit for your company&#39;s challenges? See our specializations and which industries use JoulestoWatts products.</p>
                    </div>
                    <Link to="/industries">
                      <button className="CTA-wrapper">
                        <button className="this-is-who-we-are-wrapper">
                          <div className="this-is-who-we-are-2">Learn more</div>
                        </button>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="container">
                  <Carousel
                    arrows={false}
                    swipeable
                    draggable
                    showDots={false}
                    responsive={{
                      desktop: {
                        breakpoint: { max: 3000, min: 450 },
                        items: 3,
                        slidesToSlide: 1,
                      },
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
                      <div className="text-wrapper-36">GICs &amp; GCCs</div>
                    </div>
                    <div className="IT-services">
                      <div className="text-wrapper-36">BFSI</div>
                    </div>
                    <div className="telecom">
                      <div className="text-wrapper-36">Telecom</div>
                    </div>
                    <div className="telecom-2">
                      <div className="overlap-group-5">
                        <div className="text-wrapper-37">Product</div>
                        <div className="text-wrapper-37">Product</div>
                      </div>
                    </div>
                    <div className="IT-services-2">
                      <div className="text-wrapper-36">IT Services</div>
                    </div>
                    <div className="telecom-3">
                      <div className="text-wrapper-36">ITES</div>
                    </div>
                    <div className="telecom-4">
                      <div className="text-wrapper-36">Large Enterprises</div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="frame-62">
              <div className="frame-63">
                <div className="frame-64">
                  <div className="frame-58">
                    <p className="text-wrapper-38">Get ready to level up</p>
                    <p className="you-are-just-one">You are just one step away from creating the industry&#39;s best talent pool for your enterprise. Call us right away to hire promising skills for your organization.</p>
                  </div>
                </div>
                <button
                  className="CTA-10"
                  onClick={() => setOpenModal(true)}
                >
                  <div className="text-wrapper-39">Connect with our experts</div>
                </button>
              </div>
            </div>
            <div className="carousel-11">
              <Carousel
                arrows={false}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={{
                  desktop: {
                    breakpoint: { max: 3000, min: 450 },
                    items: 1,
                    slidesToSlide: 1,
                  },
                }}
                autoPlay={true}
                infinite
                autoPlaySpeed={2000}
                containerClass="carousel"
                itemClass="carousel-item"
                pauseOnHover={false}
                customTransition="all ease-in .8"
                transitionDuration={500}
                customDot={<CustomDot />}
              >
                <PropertyDefault
                  arrowForward="/homepage/arrow-forward.png"
                  arrowForwardClassName="carousel-2"
                  carouselArrowForward="/homepage/arrow-forward.png"
                  carouselArrowForwardClassName="carousel-3"
                  // className="property-default-instance"
                  rectangleClassName="property-1-default-instance"
                  slide={1}
                />
                <PropertyDefault
                  arrowForward="/homepage/arrow-forward.png"
                  arrowForwardClassName="carousel-2"
                  carouselArrowForward="/homepage/arrow-forward.png"
                  carouselArrowForwardClassName="carousel-3"
                  // className="property-default-instance"
                  rectangleClassName="property-1-default-instance"
                  slide={2}
                />
              </Carousel>
            </div>

            <div className="group-4">
              <div className="frame-65">
                <div className="frame-66">
                  <div className="text-wrapper-40">Al-powered Talent Intelligence Platforms</div>
                  <p className="we-help-you-recruit-2">We help you recruit, retain &amp; manage diverse talent through technology.</p>
                </div>
              </div>
              <div className="group-5">
                <div className="overlap-5">
                  <div className="frame-67">
                    <div className="overlap-group-6">
                      <img
                        className="mask-group-2"
                        alt="Mask group"
                        src="/homepage/mask-group.png"
                      />
                      <img
                        className="smiley-businesswoman-2"
                        alt="Smiley businesswoman"
                        src="/homepage/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-spac.webp"
                      />
                    </div>
                  </div>
                  <div className="frame-68">
                    <div className="text-wrapper-29">Premiere Lounge -</div>
                    <p className="text-wrapper-41">India’s first of its kind ecosystem for premium talent</p>
                    <div className="frame-45">
                      <p className="text-wrapper-42">Premier Lounge is JoulesToWatts’ Human Cloud of premium experts in niche areas available for short and long term assignments. Our intelligent matching engine finds the best fit talent for your needs swiftly and cost efficiently</p>
                    </div>
                    <Cta
                      arrowForward="/homepage/arrow-forward-2.svg"
                      className="CTA-6"
                      divClassName="CTA-7"
                      property1="default"
                      text="Explore"
                      link="/j2w-premiere-lounge"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-69">
                <div className="frame-70">
                  <div className="group-6">
                    <div className="overlap-group-7">
                      <img
                        className="vector-4"
                        alt="Vector"
                        src="/homepage/vector-5.svg"
                      />
                      <img
                        className="vector-5"
                        alt="Vector"
                        src="/homepage/vector-2.svg"
                      />
                      <img
                        className="vector-6"
                        alt="Vector"
                        src="/homepage/vector-4.svg"
                      />
                      <img
                        className="mask-group-3"
                        alt="Mask group"
                        src="/homepage/mask-group-1.webp"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-71">
                  <div className="text-wrapper-29">Offer Letter -</div>
                  <p className="text-wrapper-41">One-stop solution for qualified &amp; regular skill fulfillment</p>
                  <div className="frame-58">
                    <p className="the-offerletter-2">The OfferLetter platform provides unified talent solutions with an end-to-end requisition and an efficient match engine to navigate hiring processes better &amp; faster.</p>
                  </div>
                  <Cta
                    arrowForward="/homepage/arrow-forward-3.svg"
                    className="CTA-6"
                    divClassName="CTA-7"
                    property1="default"
                    text="Explore"
                    link="/offer-letter-platform"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-only">
            <div className="frame-72">
              <div className="text-wrapper-29">Offer Letter -</div>
              <p className="text-wrapper-41">One-stop solution for qualified &amp; regular skill fulfillment</p>
              <div className="frame-58">
                <p className="the-offerletter-2">The OfferLetter platform provides unified talent solutions with an end-to-end requisition and an efficient match engine to navigate hiring processes better &amp; faster.</p>
              </div>
              <Cta
                arrowForward="/homepage/arrow-forward-18.png"
                arrowForwardClassName="CTA-11"
                className="CTA-6"
                divClassName="CTA-7"
                property1="default"
                text="Explore"
                link="/offer-letter-platform"
              />
            </div>
            <div className="carousel-4">
              <Carousel
                arrows={false}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={{
                  desktop: {
                    breakpoint: { max: 450, min: 0 },
                    items: 1,
                    slidesToSlide: 1,
                  },
                }}
                autoPlay={true}
                infinite
                autoPlaySpeed={2000}
                containerClass="carousel"
                itemClass="carousel-item"
                pauseOnHover={false}
                customTransition="all ease-in .8"
                transitionDuration={500}
                customDot={<CustomDot />}
              >
                <PropertyDefaultWrapper
                  arrowForward="/homepage/arrow-forward-20.png"
                  arrowForwardClassName="carousel-6"
                  carouselArrowForward="/homepage/arrow-forward-20.png"
                  carouselArrowForwardClassName="carousel-7"
                  property1="default"
                  rectangleClassName="carousel-5"
                />
                <PropertyDefaultWrapper
                  arrowForward="/homepage/arrow-forward-20.png"
                  arrowForwardClassName="carousel-6"
                  carouselArrowForward="/homepage/arrow-forward-20.png"
                  carouselArrowForwardClassName="carousel-7"
                  property1="variant-3"
                  rectangleClassName="carousel-5"
                />
              </Carousel>
            </div>

            <div className="frame-73">
              <div className="frame-74">
                <div className="text-wrapper-43">Our Industries</div>
                <p className="are-we-a-good-fit-2">Are we a good fit for your company&#39;s challenges? See our specializations and which industries use JoulestoWatts products.</p>
              </div>
              <Link to="/industries">
                <button className="CTA-wrapper">
                  <button className="this-is-who-we-are-wrapper">
                    <div className="this-is-who-we-are-2">Learn more</div>
                  </button>
                </button>
              </Link>
            </div>
            <div className="container-2">
              <Carousel
                arrows={false}
                swipeable
                draggable
                showDots={false}
                responsive={{
                  desktop: {
                    breakpoint: { max: 450, min: 0 },
                    items: 2,
                    slidesToSlide: 1,
                  },
                }}
                autoPlay={true}
                infinite
                autoPlaySpeed={3200}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel"
                itemClass="carousel-item"
                pauseOnHover={false}
                customButtonGroup={<ButtonGroup2 />}
              >
                <div className="gics-gccs-wrapper">
                  <div className="text-wrapper-36">GICs &amp; GCCs</div>
                </div>
                <div className="IT-services">
                  <div className="text-wrapper-36">BFSI</div>
                </div>
                <div className="telecom">
                  <div className="text-wrapper-36">Telecom</div>
                </div>
                <div className="telecom-2">
                  <div className="overlap-group-5">
                    <div className="text-wrapper-37">Product</div>
                    <div className="text-wrapper-37">Product</div>
                  </div>
                </div>
                <div className="IT-services-2">
                  <div className="text-wrapper-36">IT Services</div>
                </div>
                <div className="telecom-3">
                  <div className="text-wrapper-36">ITES</div>
                </div>
                <div className="telecom-4">
                  <div className="text-wrapper-36">Large Enterprises</div>
                </div>
              </Carousel>
            </div>
            <div className="frame-75">
              <div className="frame-76">
                <div className="frame-45">
                  <p className="text-wrapper-44">Get ready to level up</p>
                  <p className="you-are-just-one-2">You are just one step away from creating the industry&#39;s best talent pool for your enterprise. Call us right away to hire promising skills for your organization.</p>
                </div>
                <button
                  className="CTA-10"
                  onClick={() => setOpenModal(true)}
                >
                  <div className="text-wrapper-39">Connect with our experts</div>
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
