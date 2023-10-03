import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Carousel } from "../../components/it/Carousel";
import { Component } from "../../components/it/Component";
import { Cta } from "../../components/it/Cta";
import { PropertyServiceWrapper } from "../../components/it/PropertyServiceWrapper";
import { Header1 } from "../../icons/Header1";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import "./style.css";

export const ItServices = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="itservices">
      <div
        className="iphone"
        style={{
          height: screenWidth < 450 ? "4446px" : screenWidth >= 450 ? "3701px" : undefined,
          width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
        }}
      >
        <Header />
        <div className="mobile-only">
          <Header1 className="header" />
          <div className="div-wrapper">
            <div className="frame-18">
              <div className="frame-19">
                <p className="p">Promote Corporate development with our IT Services</p>
                <div className="scale-faster-with-wrapper">
                  <p className="scale-faster-with">
                    Scale faster with innovative business solutions that leverage cutting-edge
                    technology&nbsp;&nbsp;to&nbsp;&nbsp;drive strategic growth &amp; deliver exceptional results{" "}
                    <br />
                    for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="overlap"
          style={{
            height: screenWidth >= 450 ? "2554px" : screenWidth < 450 ? "3114px" : undefined,
            left: screenWidth >= 450 ? "-54px" : screenWidth < 450 ? "-185px" : undefined,
            top: screenWidth >= 450 ? "-5px" : screenWidth < 450 ? "472px" : undefined,
            width: screenWidth >= 450 ? "1498px" : screenWidth < 450 ? "742px" : undefined,
          }}
        >
          <div className="desktop-only">
            <div className="blurry-video-of" />
            <div className="video">
              <video src="/video/-a36c-4959-a7c5-e1ffdcb3073a.mp4" autoPlay loop muted style={{width: "100%", height:"100%", objectFit:"cover"}}/>
            </div>
          </div>

          <div className="mobile-only">
            <img className="hero" alt="Hero" src="/it/hero-1-1.png" />
            <img className="image" alt="Image" src="/it/image-8.png" />
          </div>

          <div
            className="frame-26"
            style={{
              gap: screenWidth >= 450 ? "48px" : screenWidth < 450 ? "16px" : undefined,
              left: screenWidth >= 450 ? "138px" : screenWidth < 450 ? "202px" : undefined,
              top: screenWidth >= 450 ? "214px" : screenWidth < 450 ? "49px" : undefined,
            }}
          >
            <div className="frame-27 desktop-only">
              <div className="group-3">
                <p className="text-wrapper-15">Promote Corporate development with our IT Services</p>
              </div>
              <div className="frame-28">
                <p className="text-wrapper-16">
                  We offer scalable and secure solutions that promote corporate development and resilience by using
                  our in-depth knowledge of IT frameworks and sector best practices.
                </p>
                <Cta
                  arrowForward="/it/arrow-forward-60.svg"
                  arrowForwardClassName="CTA-7"
                  className="CTA-5"
                  divClassName="CTA-6"
                  property1="default"
                  text="Connect with us"
                />
              </div>
            </div>

            <div className="mobile-only">
              <div className="frame-29">
                <p className="text-wrapper-17">
                  Empower your business with our scalable and secure solutions that drive corporate growth and
                  resilience. Harnessing our expertise in IT frameworks and industry-leading practices, we pave the
                  way for your success.
                </p>
              </div>
              <Cta
                arrowForward="/it/arrow-forward-69.svg"
                className="CTA-8"
                divClassName="CTA-9"
                property1="default"
                text="Connect with us"
              />
            </div>
          </div>
          <div className="mobile-only">
            <div className="carousel-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <img className="rectangle-3" alt="Rectangle" src="/it/rectangle-26-2.png" />
                  <div className="frame-30">
                    <div className="linkedin" />
                  </div>
                  <img className="shutterstock" alt="Shutterstock" src="/it/shutterstock-1704596071-1.png" />
                  <div className="rectangle-4" />
                  <div className="frame-31">
                    <p className="we-are-your-growth">
                      We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage
                      our team of industry experts, management practitioners, and training partners catered to your
                      growth.
                    </p>
                    <Cta
                      arrowForward="/it/arrow-forward-70.svg"
                      arrowForwardClassName="CTA-10"
                      className="CTA-11"
                      divClassName="CTA-12"
                      property1="default"
                      text="About us"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-32">
                <img className="rectangle-5" alt="Rectangle" />
                <div className="overlap-2">
                  <div className="frame-33">
                    <div className="text-wrapper-18">300+ Internal Staff</div>
                    <div className="frame-28">
                      <p className="our-client-and">
                        {" "}
                        Our client and solution-driven team structure assure maximum leverage of resources for your
                        business. We are your industry-leading growth partners and are trusted by high-end companies
                        for our commitment and timely delivery with efficient and commendable talent fits.
                      </p>
                      <button className="CTA-13">
                        <div className="text-wrapper-19">Learn More</div>
                        <img className="arrow-forward-2" alt="Arrow forward" src="/it/arrow-forward-ios-1.png" />
                      </button>
                    </div>
                  </div>
                  <div className="text-wrapper-20">Why work with us?</div>
                  <div className="frame-34">
                    <div className="ellipse-4" />
                    <div className="ellipse-5" />
                    <div className="ellipse-4" />
                  </div>
                </div>
              </div>
              <Carousel
                arrowForward="/it/arrow-forward-ios-1.png"
                arrowForwardClassName="carousel-instance"
                className="carousel-03"
              />
            </div>
            <div className="frame-35">
              <div className="frame-36">
                <div className="overlap-group-4">
                  <div className="rectangle-6" />
                  <div className="frame-37">
                    <div className="frame-38">
                      <div className="frame-39">
                        <div className="frame-40">
                          <div className="frame-41">
                            <p className="text-wrapper-21">Trusted by Fortune 500 Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-42">
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
              <div className="frame-43">
                <div className="frame-44">
                  <div className="frame-45">
                    <div className="text-wrapper-22">Ready to get started?</div>
                    <p className="text-wrapper-23">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-4">
                  <div className="frame-46">
                    <div className="overlap-group-5">
                      <div className="frame-47">
                        <div className="text-wrapper-24">Ready to get started?</div>
                        <p className="are-we-a-good-fit">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="CTA-14">
                          <div className="text-wrapper-25">Schedule a call now</div>
                          <img className="arrow-forward-3" alt="Arrow forward" src="/it/arrow-forward-73.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Component
              className="component-26"
              frameClassName="component-instance"
              img="/it/vector.svg"
              property1="service-digital"
              vector="/it/vector.svg"
              vector1="/it/vector.svg"
              vector2="/it/vector.svg"
              vector3="/it/vector.svg"
            />
          </div>

          <div className="desktop-only">
            <div className="rectangle-7" />
            <div className="frame-48">
              <div className="frame-38">
                <div className="frame-39">
                  <div className="frame-40">
                    <div className="frame-41">
                      <div className="text-wrapper-26">Trusted by 500+ Clients</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-42">
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
            <img className="image-2" alt="Image" src="/it/image-6.png" />
            <img className="hero-2" alt="Hero" src="/it/hero-1.png" />
            <div className="group-5">
              <Cta
                arrowForward="/it/arrow-forward-66.svg"
                arrowForwardClassName="CTA-7"
                className="CTA-17"
                divClassName="CTA-18"
                property1="default"
                text="Connect with us"
              />
              <div className="frame-51">
                <p className="text-wrapper-29">
                  Empower your business with our scalable and secure solutions that drive corporate growth and
                  resilience. Harnessing our expertise in IT frameworks and industry-leading practices, we pave the
                  way for your success.
                </p>
              </div>
            </div>
            <PropertyServiceWrapper
              className="component-25"
              img="/it/vector.svg"
              property1="service-digital"
              rectangle="/it/rectangle-228.svg"
              vector="/it/vector.svg"
              vector1="/it/vector.svg"
              vector2="/it/vector.svg"
              vector3="/it/vector.svg"
            />
            <img className="image-3" alt="Image" src="/it/image-8.png" />
          </div>
        </div>
        <div className="desktop-only">
          <div className="frame-52">
            <p className="let-s-connect-you-ve">
              <span className="span">Let’s connect!</span>
              <span className="text-wrapper-30">
                {" "}
                <br />
                You’ve come to the right space!
              </span>
            </p>
            <p className="text-wrapper-31">
              Scale more quickly with innovative talent search and recruitment models that use proven strategies. To
              overcome the competition with the ideal combination of expertise, experience, thought leaders, and
              technology, we bring to you the best talent.
            </p>
          </div>
          <div className="overlap-3">
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <div className="frame-53">
                  <div className="frame-54">
                    <div className="frame-55">
                      <div className="text-wrapper-32">Ready to get started?</div>
                      <p className="are-we-a-good-fit-2">
                        Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                      </p>
                    </div>
                    <button className="CTA-19">
                      <div className="text-wrapper-33">Learn More</div>
                      <img className="arrow-forward-3" alt="Arrow forward" src="/it/arrow-forward-61.svg" />
                    </button>
                  </div>
                  <button className="CTA-20">
                    <div className="text-wrapper-25">Schedule a call now</div>
                    <img className="arrow-forward-3" alt="Arrow forward" src="/it/arrow-forward-62.svg" />
                  </button>
                </div>
                <div className="frame-56">
                  <div className="overlap-group-6">
                    <div className="frame-57">
                      <div className="frame-55">
                        <div className="text-wrapper-34">Ready to get started?</div>
                        <p className="text-wrapper-35">
                          Whether you still have some questions or you’re ready to sign up for a specific services
                          right now, Our specialists are only a message away.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-58">
                    <div className="frame-28">
                      <p className="text-wrapper-36">Set up a virtual briefing</p>
                      <p className="text-wrapper-37">
                        Spend time with our executives and experts virtually and discuss current and future business
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-3">
            <div className="frame-62">
              <div className="overlap-group-7">
                <img className="rectangle-8" alt="Rectangle" src="/it/rectangle-26-2.png" />
                <img className="shutterstock-2" alt="Shutterstock" src="/it/shutterstock-1704596071-1-1.png" />
                <div className="rectangle-9" />
                <p className="text-wrapper-45">
                  With JoulestoWatts be prepared to set off on a path of development and change together. Join forces
                  with us right now to see how our all-inclusive solutions can help you realise the full potential of
                  your company.
                </p>
                <Cta
                  arrowForward="/it/arrow-forward-63.svg"
                  arrowForwardClassName="CTA-7"
                  className="CTA-21"
                  divClassName="CTA-6"
                  property1="default"
                  text="Connect with us"
                />
              </div>
            </div>
            <div className="frame-32">
              <img className="rectangle-10" alt="Rectangle" />
              <div className="overlap-2">
                <div className="frame-33">
                  <div className="text-wrapper-18">300+ Internal Staff</div>
                  <div className="frame-28">
                    <p className="our-client-and">
                      {" "}
                      Our client and solution-driven team structure assure maximum leverage of resources for your
                      business. We are your industry-leading growth partners and are trusted by high-end companies for
                      our commitment and timely delivery with efficient and commendable talent fits.
                    </p>
                    <button className="CTA-13">
                      <div className="text-wrapper-19">Learn More</div>
                      <img className="arrow-forward-4" alt="Arrow forward" src="/it/arrow-forward-64.png" />
                    </button>
                  </div>
                </div>
                <div className="text-wrapper-20">Why work with us?</div>
                <div className="frame-34">
                  <div className="ellipse-4" />
                  <div className="ellipse-5" />
                  <div className="ellipse-4" />
                </div>
              </div>
            </div>
            <Carousel
              arrowForward="/it/arrow-forward-64.png"
              arrowForwardClassName="carousel-03-instance"
              className="carousel-03"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
