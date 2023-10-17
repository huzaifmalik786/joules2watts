import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Carousel } from "../../components/consulting/Carousel";
import { Cta } from "../../components/consulting/Cta";
import { PropertyDefaultWrapper } from "../../components/consulting/PropertyDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { LeadForm } from "../../components/shared/LeadForm";

export const Consulting = () => {
  const screenWidth = useWindowWidth();
  const [openModal, setOpenModal] = useState(false)
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
      <div className="consulting" >
        <div
          className="div-2"
          style={{
            height: screenWidth < 450 ? "7840px" : screenWidth >= 450 ? "4878px" : undefined,
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
          <Header />
          <Header1 className="header mobile-only" />

          <div className="frame-4 desktop-only">
            <p className="let-s-connect-you-ve">
              <span className="span">Let’s connect!</span>
              <span className="text-wrapper-5">
                {" "}
                <br />
                You’ve come to the right space!
              </span>
            </p>
            <p className="text-wrapper-6">
              Scale more quickly with innovative talent search and recruitment models that use proven strategies. To
              overcome the competition with the ideal combination of expertise, experience, thought leaders, and
              technology, we bring to you the best talent.
            </p>
          </div>

          <div
            className="overlap"
            style={{
              height: screenWidth < 450 ? "442px" : screenWidth >= 450 ? "2667px" : undefined,
              left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "-27px" : undefined,
              top: screenWidth < 450 ? "60px" : screenWidth >= 450 ? "-5px" : undefined,
              width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1479px" : undefined,
            }}
          >
            <div className="desktop-only">
              <div className="rectangle-2" />
              <img
                className="businessman-showing"
                alt="Businessman showing"
                src="/consulting/businessman-showing-changes-report-1.webp"
              />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                  <img className="ellipse-5" alt="Ellipse" src="/consulting/ellipse-36.png" />
                  <img className="rectangle-3" alt="Rectangle" src="/consulting/rectangle-42.webp" />
                  <img className="image" alt="Image" src="/consulting/image-4-2.webp" />
                  <div className="rectangle-4" />
                  <div className="rectangle-5" />
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="frame-5">
                  <div className="group">
                    <p className="text-wrapper-7">Consulting for Global In-house Centers (GICs)</p>
                  </div>
                  <div className="frame-6">
                    <p className="we-at-joulestowatts">
                      We at JoulestoWatts have tailored our services&nbsp;&nbsp;to address the critical challenges that
                      GICs face in India.
                    </p>
                    <PropertyDefaultWrapper
                      arrowForward="/consulting/arrow-forward-86.svg"
                      arrowForwardClassName="CTA-2"
                      className="CTA-instance"
                      divClassName="instance-node"
                      property1="default"
                      text="Connect with us"
                      link="/contact-us"
                    />
                  </div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="frame-7">
                  <div className="frame-8">
                    <div className="text-wrapper-8">Industry specific solutions</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="overlap-wrapper"
              style={{
                height: screenWidth < 450 ? "442px" : screenWidth >= 450 ? "671px" : undefined,
                left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "47px" : undefined,
                top: screenWidth < 450 ? "0" : screenWidth >= 450 ? "1971px" : undefined,
                width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1379px" : undefined,
              }}
            >
              <div
                className="overlap-2"
                style={{
                  height: screenWidth < 450 ? "674px" : screenWidth >= 450 ? "590px" : undefined,
                  left: screenWidth >= 450 ? "-66px" : undefined,
                  top: screenWidth >= 450 ? "99px" : undefined,
                  width: screenWidth < 450 ? "1456px" : screenWidth >= 450 ? "1432px" : undefined,
                }}
              >
                <div className="mobile-only">
                  <div className="frame-9">
                    <div className="overlap-group-3">
                      <div className="ellipse-6" />
                      <div className="ellipse-7" />
                      <div className="rectangle-6" />
                      <div className="rectangle-7" />
                    </div>
                    <img className="ellipse-8" alt="Ellipse" />
                  </div>
                  <img className="image-2" alt="Image" src="/consulting/image-4-2.webp" />
                  <div className="frame-10">
                    <p className="text-wrapper-9">Consulting for Global In-house Centers (GICs)</p>
                    <p className="we-at-joulestowatts-2">
                      We at JoulestoWatts have tailored our services&nbsp;&nbsp;to address the critical challenges that
                      GICs face in India.
                    </p>
                    <Cta arrowForward="/consulting/arrow-forward-81.svg" className="CTA-3" />
                  </div>
                </div>

                <div className="desktop-only">
                  <img className="group-2" alt="Group" src="/consulting/group-24.svg" />
                  <div className="text-wrapper-10">GIC</div>
                  <div className="text-wrapper-11">Capital Markets</div>
                  <div className="text-wrapper-12">Banking</div>
                  <div className="text-wrapper-13">Core Process /ITES</div>
                  <div className="text-wrapper-14">Non-Core BFSI Applications</div>
                  <div className="frame-11">
                    <div className="frame-12">
                      <div className="frame-6">
                        <p className="text-wrapper-15">
                          With expertise in Mobile Streaming of business data, we make the decision making process
                          easier. We provide web/Mobile centric application development on Java/J2EE, .NET, QA, Rest API
                          and so on.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-13">
                    <div className="frame-14">
                      <p className="text-wrapper-15">
                        We provide you with a team of process analysts whose expertise is in the core ITES functions
                      </p>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-5">
                      <div className="frame-16">
                        <p className="text-wrapper-16">
                          We specialise and possess highly referenceable experience in Internet based application
                          development. This includes staffing, implementation, testing and integration of core banking
                          product suites like Finacle, Flexcube and Temenos T24.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-5">
                      <div className="frame-16">
                        <p className="text-wrapper-16">
                          Our expertise is not constrained to BFSI but it also spans to the non-core banking
                          applications involving customer data management, CRM, HR and support functions in BFSI.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img className="group-3" alt="Group" src="/consulting/group-38.png" />
                  <img className="vector" alt="Vector" src="/consulting/vector-43.svg" />
                  <img className="vector-2" alt="Vector" src="/consulting/vector-44.svg" />
                  <img className="vector-3" alt="Vector" src="/consulting/vector-45.svg" />
                  <img className="group-4" alt="Group" src="/consulting/group-39.png" />
                </div>
              </div>
            </div>
            <div className="desktop-only">
              <div className="group-5">
                <div className="overlap-3">
                  <div className="group-6">
                    <div className="frame-18" />
                  </div>
                  <div className="frame-19">
                    <div className="deepmind-wrapper">
                      <img className="deepmind" alt="Deepmind" src="/consulting/deepmind-8hereyc6zt0-unsplash-1-2.webp" />
                    </div>
                    <div className="frame-20">
                      <div className="frame-21">
                        <div className="text-wrapper-17">Methodical Approach</div>
                      </div>
                      <div className="frame-22">
                        <div className="text-wrapper-18">Structured &amp; streamlined Process</div>
                      </div>
                      <div className="frame-22">
                        <div className="text-wrapper-18">Technology assessment</div>
                      </div>
                      <div className="frame-22">
                        <div className="text-wrapper-18">Experts with strong profiles</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-23">
                    <img
                      className="deepmind-hereyczt"
                      alt="Deepmind"
                      src="/consulting/deepmind-8hereyc6zt0-unsplash-2-1.webp"
                    />
                    <div className="frame-24">
                      <div className="frame-25">
                        <div className="support">Support</div>
                      </div>
                      <div className="frame-22">
                        <div className="text-wrapper-18">Global Engagement Support</div>
                      </div>
                      <div className="frame-22">
                        <div className="text-wrapper-18">Knowledge management support</div>
                      </div>
                      <div className="frame-22">
                        <div className="text-wrapper-18">Implementation Support</div>
                      </div>
                      <div className="frame-26" />
                    </div>
                  </div>
                  <div className="frame-27">
                    <div className="frame-28">
                      <div className="frame-25">
                        <div className="text-wrapper-17">Our Tools</div>
                      </div>
                      <div className="frame-22">
                        <div className="text-wrapper-18">Optimized staffing calculator</div>
                      </div>
                      <div className="frame-22">
                        <p className="technology-driven">Technology Driven talent &amp; client enagement platform</p>
                      </div>
                    </div>
                    <div className="deepmind-hereyczt-wrapper">
                      <img className="deepmind-2" alt="Deepmind" src="/consulting/deepmind-8hereyc6zt0-unsplash-2.webp" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rectangle-8" />
              <p className="our-processes-enable">
                Our processes enable us to deliver on a turnkey basis with a combination of Full-time equivalent,
                On-demand &amp; Contract to hire models. Execution is carried out using a tailored plan with an
                optimized staffing calculator.
              </p>
              <img className="rectangle-9" alt="Rectangle" src="/consulting/rectangle-138-3.svg" />
              <img
                className="sebastian-svenson"
                alt="Sebastian svenson"
                src="/consulting/sebastian-svenson-lpbydenbqqg-unsplash-1-1.webp"
              />
            </div>

            <div className="rectangle-10 mobile-only" />
          </div>
          <div className="desktop-only">
            <div className="group-7">
              <div className="overlap-4">
                <div className="frame-31">
                  <div className="frame-32">
                    <div className="frame-33">
                      <div className="text-wrapper-21">Ready to get started?</div>
                      <p className="are-we-a-good-fit">
                        Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                      </p>
                    </div>
                    <button className="CTA-6">
                      <div className="text-wrapper-22">Learn More</div>
                      <img className="arrow-forward-3" alt="Arrow forward" src="/consulting/arrow-forward-87.svg" />
                    </button>
                  </div>
                  <button className="CTA-7" onClick={() => setOpenModal(true)}>
                    <div className="text-wrapper-23">Schedule a call now</div>
                    <img className="arrow-forward-3" alt="Arrow forward" src="/consulting/arrow-forward-88.svg" />
                  </button>
                </div>
                <div className="frame-34">
                  <div className="overlap-group-4">
                    <div className="frame-35">
                      <div className="frame-33">
                        <div className="text-wrapper-24">Ready to get started?</div>
                        <p className="text-wrapper-25">
                          Whether you still have some questions or you’re ready to sign up for a specific services right
                          now, Our specialists are only a message away.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-36">
                    <div className="frame-6">
                      <p className="text-wrapper-26">Set up a virtual briefing</p>
                      <p className="text-wrapper-27">
                        Spend time with our executives and experts virtually and discuss current and future business
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-8">
              <div className="delivery-model-wrapper">
                <div className="delivery-model">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delivery model</div>
              </div>
              <div className="overlap-5">
                <div className="group-9">
                  <div className="overlap-6">
                    <div className="overlap-group-5">
                      <img className="group-10" alt="Group" src="/consulting/group-31-2.png" />
                      <img className="group-11" alt="Group" src="/consulting/group-31-2.png" />
                      <img className="group-12" alt="Group" src="/consulting/group-33-2.png" />
                      <img className="group-13" alt="Group" src="/consulting/group-34-2.png" />
                      <img className="group-14" alt="Group" src="/consulting/group-35.png" />
                      <img className="group-15" alt="Group" src="/consulting/group-36.png" />
                      <img className="group-16" alt="Group" src="/consulting/group-37.png" />
                      <img className="group-17" alt="Group" src="/consulting/group-38-1.png" />
                      <div className="rectangle-11" />
                      <div className="rectangle-12" />
                      <div className="text-wrapper-28">Dedicated J2W Account manager</div>
                      <p className="premier-lounge-offer">Premier Lounge &amp; Offer letter match engine</p>
                      <div className="requirements">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Requirements</div>
                      <div className="evaluation">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Evaluation
                      </div>
                      <div className="evaluation-2"> Evaluation</div>
                      <div className="text-wrapper-29">Recruiters source profiles</div>
                      <p className="candidate-selection">
                        Candidate selection <br />
                        &amp; hiring process
                      </p>
                      <div className="ellipse-9" />
                      <div className="ellipse-10" />
                      <div className="ellipse-11" />
                      <div className="ellipse-12" />
                      <div className="ellipse-13" />
                      <div className="ellipse-14" />
                      <div className="ellipse-15" />
                    </div>
                    <div className="overlap-7">
                      <div className="overlap-8">
                        <div className="text-wrapper-30">KPI Review</div>
                        <p className="turn-around-time-hit">
                          • &nbsp; Turn around time
                          <br />
                          • &nbsp; Hit ratio
                          <br />
                          • &nbsp;Client specific
                        </p>
                      </div>
                      <div className="text-wrapper-31">CSAT : Feedback</div>
                    </div>
                    <p className="text-wrapper-32">Account Manager follows through the closure</p>
                    <p className="delivery-team">Delivery Team asseses &amp; shortlist accurate Profiles</p>
                  </div>
                </div>
                <img className="group-18" alt="Group" src="/consulting/group-41-1.png" />
                <img className="graph" alt="Graph" src="/consulting/graph-1.png" />
                <img className="people" alt="People" src="/consulting/people-2.png" />
                <img className="search-client" alt="Search client" src="/consulting/search-client-1.png" />
                <img className="verified-account" alt="Verified account" src="/consulting/verified-account-1.png" />
                <img className="connect" alt="Connect" src="/consulting/connect-1.png" />
                <img className="people-2" alt="People" src="/consulting/people-3.png" />
              </div>
            </div>
            <div className="overlap-9">
              <div className="rectangle-13" />
              <div className="carousel-2">
                <div className="frame-37">
                  <div className="overlap-group-6">
                    <img className="rectangle-14" alt="Rectangle" src="/consulting/rectangle-26-3.png" />
                    <img className="shutterstock" alt="Shutterstock" src="/consulting/shutterstock-1704596071-1-3.webp" />
                    <div className="rectangle-15" />
                    <PropertyDefaultWrapper
                      arrowForward="/consulting/arrow-forward-89.svg"
                      className="CTA-8"
                      divClassName="CTA-9"
                      property1="default"
                      text="About us"
                      link="/about-us"
                    />
                    <p className="we-are-your-growth">
                      We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                      team of industry experts, management practitioners, and training partners catered to your growth.
                    </p>
                    <div className="rectangle-16" />
                  </div>
                </div>
                <div className="frame-38">
                  <img className="rectangle-17" alt="Rectangle" />
                  <div className="overlap-10">
                    <div className="frame-39">
                      <div className="text-wrapper-33">300+ Internal Staff</div>
                      <div className="frame-6">
                        <p className="our-client-and">
                          {" "}
                          Our client and solution-driven team structure assure maximum leverage of resources for your
                          business. We are your industry-leading growth partners and are trusted by high-end companies
                          for our commitment and timely delivery with efficient and commendable talent fits.
                        </p>
                        <button className="CTA-10">
                          <div className="text-wrapper-34">Learn More</div>
                          <img className="arrow-forward-4" alt="Arrow forward" src="/consulting/arrow-forward-90.png" />
                        </button>
                      </div>
                    </div>
                    <div className="text-wrapper-35">Why work with us?</div>
                    <div className="frame-40">
                      <div className="ellipse-16" />
                      <div className="ellipse-17" />
                      <div className="ellipse-16" />
                    </div>
                  </div>
                </div>
                <Carousel
                  arrowForward="/consulting/arrow-forward-90.png"
                  arrowForwardClassName="carousel-instance"
                  className="carousel-03"
                />
              </div>
              <div className="frame-41">
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="frame-44">
                      <div className="frame-45">
                        <div className="text-wrapper-36">Trusted by 500+ Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-46">
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

          <div className="mobile-only">
            <div className="frame-56">
              <div className="frame-57">
                <div className="our-processes-enable-wrapper">
                  <p className="our-processes-enable-2">
                    Our processes enable us to deliver on a turnkey basis with a combination of Full-time equivalent,
                    On-demand &amp; Contract to hire models. Execution is carried out using a tailored plan with an
                    optimized staffing calculator.
                  </p>
                </div>
                <div className="frame-58">
                  <div className="sebastian-svenson-wrapper">
                    <img
                      className="sebastian-svenson-2"
                      alt="Sebastian svenson"
                      src="/consulting/sebastian-svenson-lpbydenbqqg-unsplash-1-1.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-59">
              <div className="overlap-13">
                <div className="overlap-14">
                  <div className="frame-60">
                    <div className="overlap-group-7">
                      <img className="vector-4" alt="Vector" src="/consulting/vector-40.svg" />
                      <img className="vector-5" alt="Vector" src="/consulting/vector-41.svg" />
                      <img className="vector-6" alt="Vector" src="/consulting/vector-42.svg" />
                      <div className="text-wrapper-52">GIC</div>
                    </div>
                  </div>
                  <div className="overlap-15">
                    <img className="frame-61" alt="Frame" src="/consulting/frame-14695.svg" />
                    <img className="frame-62" alt="Frame" src="/consulting/frame-14694.svg" />
                  </div>
                  <div className="overlap-16">
                    <img className="frame-63" alt="Frame" src="/consulting/frame-14697.svg" />
                    <img className="vector-7" alt="Vector" src="/consulting/vector-39.svg" />
                    <div className="frame-64">
                      <div className="text-wrapper-53">Core Process /ITES</div>
                      <p className="text-wrapper-54">
                        We provide you with a team of process analysts whose expertise is in the core ITES functions
                      </p>
                    </div>
                  </div>
                </div>
                <img className="group-23" alt="Group" src="/consulting/group-8863.png" />
              </div>
              <img className="frame-65" alt="Frame" src="/consulting/frame-14700.svg" />
              <img className="frame-66" alt="Frame" src="/consulting/frame-14702.svg" />
              <img className="frame-67" alt="Frame" src="/consulting/frame-14696.svg" />
              <img className="group-24" alt="Group" src="/consulting/group-8864.png" />
              <div className="frame-68">
                <div className="text-wrapper-53">Banking</div>
                <p className="text-wrapper-54">
                  We specialise and possess highly referenceable experience in Internet based application development.
                  This includes staffing, implementation, testing and integration of core banking product suites like
                  Finacle, Flexcube and Temenos T24.
                </p>
              </div>
              <div className="frame-69">
                <div className="text-wrapper-55">Capital Markets</div>
                <p className="text-wrapper-56">
                  With expertise in Mobile Streaming of business data, we make the decision making process easier. We
                  provide web/Mobile centric application development on Java/J2EE, .NET, QA, Rest API and so on.
                </p>
              </div>
              <div className="frame-70">
                <div className="text-wrapper-55">Non-Core BFSI Applications</div>
                <p className="text-wrapper-56">
                  Our expertise is not constrained to BFSI but it also spans to the non-core banking applications
                  involving customer data management, CRM, HR and support functions in BFSI.
                </p>
              </div>
            </div>
            <div className="carousel-3">
              <div className="frame-71">
                <div className="overlap-group-8">
                  <img className="rectangle-18" alt="Rectangle" src="/consulting/rectangle-26-3.png" />
                  <div className="frame-72">
                    <div className="frame-26" />
                  </div>
                  <img className="shutterstock-2" alt="Shutterstock" src="/consulting/shutterstock-1704596071-1-1.webp" />
                  <div className="rectangle-19" />
                  <div className="frame-73">
                    <p className="we-are-your-growth-2">
                      We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                      team of industry experts, management practitioners, and training partners catered to your growth.
                    </p>
                    <PropertyDefaultWrapper
                      arrowForward="/consulting/arrow-forward-82.svg"
                      arrowForwardClassName="CTA-13"
                      className="CTA-11"
                      divClassName="CTA-12"
                      property1="default"
                      text="About us"
                      link="/about-us"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-38">
                <img className="rectangle-20" alt="Rectangle" />
                <div className="overlap-10">
                  <div className="frame-39">
                    <div className="text-wrapper-33">300+ Internal Staff</div>
                    <div className="frame-6">
                      <p className="our-client-and">
                        {" "}
                        Our client and solution-driven team structure assure maximum leverage of resources for your
                        business. We are your industry-leading growth partners and are trusted by high-end companies for
                        our commitment and timely delivery with efficient and commendable talent fits.
                      </p>
                      <button className="CTA-10">
                        <div className="text-wrapper-34">Learn More</div>
                        <img className="arrow-forward-5" alt="Arrow forward" src="/consulting/arrow-forward-9.png" />
                      </button>
                    </div>
                  </div>
                  <div className="text-wrapper-35">Why work with us?</div>
                  <div className="frame-40">
                    <div className="ellipse-16" />
                    <div className="ellipse-17" />
                    <div className="ellipse-16" />
                  </div>
                </div>
              </div>
              <Carousel
                arrowForward="/consulting/arrow-forward-9.png"
                arrowForwardClassName="carousel-03-instance"
                className="carousel-03"
              />
            </div>
            <div className="frame-74">
              <div className="frame-75">
                <div className="overlap-group-9">
                  <div className="rectangle-21" />
                  <div className="frame-76">
                    <div className="frame-42">
                      <div className="frame-43">
                        <div className="frame-44">
                          <div className="frame-45">
                            <p className="text-wrapper-57">Trusted by Fortune 500 Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-46">
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
              <div className="frame-77">
                <div className="frame-78">
                  <div className="frame-79">
                    <div className="text-wrapper-58">Ready to get started?</div>
                    <p className="text-wrapper-59">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-25">
                  <div className="frame-80">
                    <div className="overlap-group-10">
                      <div className="frame-81">
                        <div className="text-wrapper-60">Ready to get started?</div>
                        <p className="are-we-a-good-fit-2">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="CTA-14" onClick={() => setOpenModal(true)}>
                          <div className="text-wrapper-23">Schedule a call now</div>
                          <img className="arrow-forward-3" alt="Arrow forward" src="/consulting/arrow-forward-85.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-82">
              <img className="deepmind-3" alt="Deepmind" src="/consulting/deepmind-8hereyc6zt0-unsplash-1-2.webp" />
              <div className="frame-83">
                <div className="frame-21">
                  <div className="text-wrapper-61">Methodical Approach</div>
                </div>
                <div className="frame-22">
                  <div className="text-wrapper-18">Structured &amp; streamlined Process</div>
                </div>
                <div className="frame-22">
                  <div className="text-wrapper-18">Technology assessment</div>
                </div>
                <div className="frame-22">
                  <div className="text-wrapper-18">Experts with strong profiles</div>
                </div>
              </div>
            </div>
            <div className="frame-84">
              <img className="deepmind-4" alt="Deepmind" src="/consulting/deepmind-8hereyc6zt0-unsplash-2.webp" />
              <div className="frame-83">
                <div className="frame-21">
                  <div className="text-wrapper-61">Our Tools</div>
                </div>
                <div className="frame-85">
                  <div className="frame-86">
                    <div className="text-wrapper-62">Optimized staffing calculator</div>
                  </div>
                  <div className="technology-driven-wrapper">
                    <p className="technology-driven-2">Technology Driven talent &amp; client enagement platform</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-87">
              <img className="deepmind-5" alt="Deepmind" src="/consulting/deepmind-8hereyc6zt0-unsplash-2-1.webp" />
              <div className="frame-83">
                <div className="frame-21">
                  <div className="text-wrapper-61">Support</div>
                </div>
                <div className="text-wrapper-63">Global Engagement Support</div>
                <div className="text-wrapper-63">Knowledge management support</div>
                <div className="text-wrapper-63">Implementation Support</div>
              </div>
            </div>
            <div className="text-wrapper-64">Delivery model</div>
            <div className="overlap-17">
              <div className="frame-88">
                <div className="text-wrapper-65">Dedicated J2W Account manager</div>
              </div>
              <img className="frame-89" alt="Frame" src="/consulting/frame-14706.svg" />
              <img className="line" alt="Line" src="/consulting/line-7.svg" />
              <img className="line-2" alt="Line" src="/consulting/line-8.svg" />
              <img className="line-3" alt="Line" src="/consulting/line-8.svg" />
              <img className="line-4" alt="Line" src="/consulting/line-9.svg" />
              <img className="frame-90" alt="Frame" src="/consulting/frame-14715.svg" />
              <img className="line-5" alt="Line" src="/consulting/line-4.svg" />
              <img className="line-6" alt="Line" src="/consulting/line-5.svg" />
              <div className="frame-91">
                <div className="text-wrapper-66">Requirement</div>
                <div className="img-wrapper">
                  <img className="group-26" alt="Group" src="/consulting/group-41.png" />
                </div>
              </div>
              <div className="frame-92">
                <p className="delivery-team-2">Delivery Team asseses &amp; shortlist accurate Profiles</p>
                <div className="img-wrapper">
                  <img className="img-2" alt="People" src="/consulting/people-2.png" />
                </div>
              </div>
              <div className="frame-93">
                <p className="text-wrapper-67">Account Manager follows through the closure</p>
                <div className="img-wrapper">
                  <img className="img-2" alt="Connect" src="/consulting/connect-1.png" />
                </div>
              </div>
              <div className="frame-94">
                <div className="text-wrapper-68">Evaluation</div>
                <div className="img-wrapper">
                  <img className="img-2" alt="Graph" src="/consulting/graph-1.png" />
                </div>
              </div>
              <img className="frame-95" alt="Frame" src="/consulting/frame-14715.svg" />
              <div className="frame-96">
                <div className="evaluation-3"> Evaluation</div>
                <div className="img-wrapper">
                  <img className="img-2" alt="Search client" src="/consulting/search-client-1.png" />
                </div>
              </div>
              <div className="frame-97">
                <div className="overlap-18">
                  <p className="candidate-selection-2">
                    Candidate selection <br />
                    &amp; hiring process
                  </p>
                  <div className="ellipse-20" />
                  <img className="verified-account-2" alt="Verified account" src="/consulting/verified-account-1.png" />
                </div>
              </div>
              <div className="frame-98">
                <div className="text-wrapper-69">Recruiters source profiles</div>
                <div className="img-wrapper">
                  <img className="img-2" alt="People" src="/consulting/people-3.png" />
                </div>
              </div>
              <div className="premier-lounge-offer-wrapper">
                <p className="premier-lounge-offer-2">Premier Lounge &amp; Offer letter match engine</p>
              </div>
            </div>
            <div className="frame-99">
              <div className="overlap-19">
                <div className="text-wrapper-30">KPI Review</div>
                <p className="turn-around-time-hit">
                  • &nbsp;Turn around time
                  <br />
                  • &nbsp;Hit ratio
                  <br />
                  • &nbsp;Client specific
                </p>
              </div>
              <div className="text-wrapper-70">CSAT : Feedback</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>

  );
};
