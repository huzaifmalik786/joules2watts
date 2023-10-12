import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Carousel } from "../../components/offerletter/Carousel";
import { CarouselWrapper } from "../../components/offerletter/CarouselWrapper";
import { Cta } from "../../components/offerletter/Cta";
import { StateDefaultWrapper } from "../../components/offerletter/StateDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { LeadForm } from "../../components/shared/LeadForm";

export const OfferLetter = () => {
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
      <div className="offerletter" >
        <div
          className="div-2"
          style={{
            backgroundColor: screenWidth < 450 ? "#ffffff" : screenWidth >= 450 ? "var(--neutral-0)" : undefined,
            height: screenWidth < 450 ? "6171px" : screenWidth >= 450 ? "5228px" : undefined,
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
          <div className="mobile-only">
            <Header1 className="header" />
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="frame-7">
                  <p className="one-stop-solution">
                    <span className="span">One-stop solution for qualifies &amp; regular </span>
                    <span className="text-wrapper-7">skill fulfillment</span>
                  </p>
                  <p className="text-wrapper-8">
                    We are committed to delivering world-class payroll management and the most dependable HR solutions.
                  </p>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-3">
                      <div className="ellipse-5" />
                      <img
                        className="smiling-confident"
                        alt="Smiling confident"
                        src="/offerletter/smiling-confident-businesswoman-posing-with-arms-folded-1.webp"
                      />
                    </div>
                  </div>
                </div>
                <img className="rectangle-4" alt="Rectangle" src="/offerletter/rectangle-78-1.svg" />
                <img className="rectangle-5" alt="Rectangle" src="/offerletter/rectangle-174.svg" />
              </div>
            </div>
          </div>

          <div
            className="overlap-3"
            style={{
              height: screenWidth >= 450 ? "2411px" : screenWidth < 450 ? "1050px" : undefined,
              left: screenWidth >= 450 ? "-2px" : screenWidth < 450 ? "-185px" : undefined,
              top: screenWidth >= 450 ? "1014px" : screenWidth < 450 ? "4261px" : undefined,
              width: screenWidth >= 450 ? "1445px" : screenWidth < 450 ? "742px" : undefined,
            }}
          >
            <div
              className="div-wrapper"
              style={{
                height: screenWidth < 450 ? "307px" : screenWidth >= 450 ? "444px" : undefined,
                left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "2px" : undefined,
                width: screenWidth < 450 ? "742px" : screenWidth >= 450 ? "807px" : undefined,
              }}
            >
              <div
                className="overlap-group-4"
                style={{
                  height: screenWidth < 450 ? "307px" : screenWidth >= 450 ? "398px" : undefined,
                  left: screenWidth >= 450 ? "132px" : undefined,
                  top: screenWidth >= 450 ? "23px" : undefined,
                  width: screenWidth >= 450 ? "675px" : undefined,
                }}
              >
                <div className="mobile-only">
                  <div className="rectangle-6" />
                  <div className="frame-14">
                    <div className="frame-15">
                      <div className="frame-16">
                        <div className="frame-17">
                          <div className="frame-18">
                            <p className="text-wrapper-17">Trusted by Fortune 500 Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-19">
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

                <div className="desktop-only">
                  <div className="ellipse-7" />
                  <img className="partner" alt="Partner" src="/offerletter/partner-3x-1.webp" />
                </div>
              </div>
            </div>
            <div className="desktop-only">
              <div className="group-2">
                <Cta
                  arrowForward="/offerletter/arrow-forward-50.svg"
                  arrowForwardClassName="CTA-3"
                  className="CTA-instance"
                  divClassName="instance-node"
                  property1="default"
                  text="Connect with us"
                  link="/contact-us"
                />
                <div className="one-stop-centralized-wrapper">
                  <p className="one-stop-centralized">
                    One-stop centralized platform for new-age candidates &amp; recruiters. Offers a highly flexible
                    workflow model, AI &amp; ML based resume parsing for faster processing.
                  </p>
                </div>
              </div>
              <div className="text">
                <div className="text-wrapper-18">In built features</div>
              </div>
              <div className="rectangle-7" />
              <p className="text-wrapper-19">
                The first-of-its-kind crowd-sourcing platform is now easily accessible on mobile.
              </p>
              <div className="ellipse-8" />
              <div className="ellipse-9" />
              <div className="ellipse-10" />
              <div className="group-3">
                <div className="frame-20">
                  <div className="image-wrapper">
                    <img className="image" alt="Image" src="/offerletter/image-3.png" />
                  </div>
                  <div className="encrypted-document">
                    Encrypted document
                    <br />
                    upload facility
                  </div>
                </div>
              </div>
              <div className="group-4">
                <div className="frame-21">
                  <div className="img-wrapper">
                    <img className="image-2" alt="Image" src="/offerletter/image-3-1.png" />
                  </div>
                  <div className="text-wrapper-20">
                    E-call &amp; E-offer
                    <br />
                    letters
                  </div>
                </div>
              </div>
              <div className="group-5">
                <div className="frame-21">
                  <div className="image-wrapper">
                    <img className="image-3" alt="Image" src="/offerletter/image-3-2.png" />
                  </div>
                  <div className="text-wrapper-20">
                    Live <br />
                    notifications
                  </div>
                </div>
              </div>
              <div className="group-6">
                <div className="frame-22">
                  <div className="image-wrapper">
                    <img className="image-4" alt="Image" src="/offerletter/image-3-3.png" />
                  </div>
                  <div className="flagship-referral">
                    Flagship referral <br />
                    programs
                  </div>
                </div>
              </div>
              <div className="group-7">
                <div className="frame-23">
                  <div className="frame-24">
                    <img className="image-5" alt="Image" src="/offerletter/image-3-4.webp" />
                  </div>
                  <div className="text-wrapper-20">Category-wise job search</div>
                </div>
              </div>
              <div className="mask-group" />
              <img
                className="kisspng-macbook-air"
                alt="Kisspng macbook air"
                src="/offerletter/kisspng-macbook-air-laptop-mac-book-pro-property-navigators-5b28.png"
              />
              <img className="image-6" alt="Image" src="/offerletter/image-4.png" />
              <div className="carousel-2">
                <div className="frame-25">
                  <div className="overlap-group-5">
                    <img className="rectangle-8" alt="Rectangle" src="/offerletter/Rectangle26.webp" />
                    <div className="rectangle-9" />
                    <p className="text-wrapper-21">
                      With access to over 1.5 million profiles, a dedicated screening team at JoulestoWatts uses
                      AI-based resume parsing and machine learning algorithms to scale resumes at the source.
                    </p>
                  </div>
                </div>
                <Carousel
                  arrowForward="/offerletter/arrow-forward-51.png"
                  arrowForwardClassName="frame-28"
                  className="carousel-02"
                  divClassName="frame-29"
                  frameClassName="frame-27"
                  frameClassNameOverride="frame-30"
                  overlapGroupClassName="carousel-instance"
                  rectangleClassName="carousel-02-instance"
                  rectangleClassNameOverride="frame-26"
                />
                <CarouselWrapper
                  arrowForward="/offerletter/arrow-forward-51.png"
                  arrowForwardClassName="carousel-03-instance"
                  className="carousel-03"
                />
              </div>
            </div>
            <div className="mobile-only">
              <div className="frame-31">
                <div className="frame-32">
                  <div className="frame-33">
                    <div className="text-wrapper-22">Ready to get started?</div>
                    <p className="text-wrapper-23">
                      Whether you still have some questions or you’re ready to sign up for a specific services right now,
                      Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-8">
                  <div className="frame-34">
                    <div className="overlap-group-6">
                      <div className="frame-35">
                        <div className="text-wrapper-24">Ready to get started?</div>
                        <p className="are-we-a-good-fit">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="CTA-4" onClick={() => setOpenModal(true)}>
                          <div className="text-wrapper-25">Schedule a call now</div>
                          <img className="arrow-forward-3" alt="Arrow forward" src="/offerletter/arrow-forward-112.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="frame-36 mobile-only">
            <div className="frame-37">
              <div className="frame-38">
                <p className="one-stop-centralized-2">
                  One-stop centralized platform for new-age candidates &amp; recruiters. Offers a highly flexible
                  workflow model, AI &amp; ML based resume parsing for faster processing.
                </p>
              </div>
              <div className="frame-39">
                <div className="partner-wrapper">
                  <img className="partner-x" alt="Partner" src="/offerletter/partner-3x-1.webp" />
                </div>
                <div className="ellipse-11" />
              </div>
            </div>
          </div>

          <div className="desktop-only">
            <div className="overlap-4">
              <div className="frame-40">
                <div className="overlap-5">
                  <img className="rectangle-10" alt="Rectangle" src="/offerletter/rectangle-76.svg" />
                  <p className="one-stop-solution-2">
                    <span className="text-wrapper-26">
                      One-stop solution for qualified <br />
                      &amp; regular
                    </span>
                    <span className="text-wrapper-7"> skill fulfillment</span>
                  </p>
                  <p className="the-offerletter">
                    <span className="span">The OfferLetter platform provides</span>
                    <span className="text-wrapper-7"> unified talent solutions</span>
                    <span className="span"> with an end-to-end requisition and an </span>
                    <span className="text-wrapper-26">efficient match engine</span>
                    <span className="span">
                      {" "}
                      to navigate hiring <br />
                      processes better &amp; faster.
                    </span>
                  </p>
                  <div className="group-9">
                    <div className="overlap-group-7">
                      <img className="mask-group-2" alt="Mask group" src="/offerletter/mask-group.png" />
                      <img
                        className="smiling-confident-2"
                        alt="Smiling confident"
                        src="/offerletter/smiling-confident-businesswoman-posing-with-arms-folded-1.webp"
                      />
                    </div>
                  </div>
                </div>
                <img className="rectangle-11" alt="Rectangle" src="/offerletter/group-1.png" />
              </div>
              <img className="rectangle-12" alt="Rectangle" src="/offerletter/rectangle-78.svg" />
            </div>
            <img className="vector" alt="Vector" src="/offerletter/vector.png" />
            <div className="solutions">
              <div className="frame-43">
                <div className="overlap-group-8">
                  <div className="rectangle-13" />
                  <img className="rectangle-14" alt="Rectangle" src="/offerletter/rectangle-110.svg" />
                  <div className="frame-44">
                    <div className="text-wrapper-29">Efficiency</div>
                    <div className="text-wrapper-30">Regular Skill Fulfillment</div>
                  </div>
                  <div className="joulestowatts-offer">
                    JoulestoWatts Offer
                    <br />
                    Letter
                  </div>
                  <div className="ellipse-12" />
                  <img className="arrow-right" alt="Arrow right" src="/offerletter/arrow-right-1.svg" />
                </div>
              </div>
              <div className="frame-45">
                <div className="overlap-group-8">
                  <div className="rectangle-13" />
                  <div className="rectangle-15" />
                  <div className="frame-46">
                    <div className="text-wrapper-29">Innovation</div>
                    <div className="text-wrapper-30">Niche Skill Fulfillment</div>
                  </div>
                  <div className="joulestowatts">
                    JoulestoWatts Premier
                    <br />
                    Lounge
                  </div>
                  <div className="ellipse-12" />
                  <img className="arrow-right" alt="Arrow right" src="/offerletter/arrow-right-3.svg" />
                </div>
              </div>
              <div className="frame-47">
                <div className="overlap-group-8">
                  <div className="rectangle-13" />
                  <div className="rectangle-15" />
                  <div className="frame-48">
                    <div className="text-wrapper-29">Disruptive</div>
                    <p className="crowd-sourcing">
                      Crowdsourcing platform
                      <br />
                      for maximum exposure of <br />
                      requirement
                    </p>
                  </div>
                  <div className="joulestowatts-offer-2">
                    JoulestoWatts Offer Letter
                    <br />
                    Mobile application
                  </div>
                  <div className="ellipse-12" />
                  <img className="arrow-right" alt="Arrow right" src="/offerletter/arrow-right-1.svg" />
                </div>
              </div>
              <div className="frame-49">
                <div className="overlap-group-8">
                  <div className="rectangle-13" />
                  <div className="rectangle-15" />
                  <div className="frame-50">
                    <div className="talent-gap">
                      Talent Gap
                      <br />
                      Consulting
                    </div>
                    <div className="text-wrapper-30">Upskiling and Reskilling</div>
                  </div>
                  <div className="text-wrapper-31">JoulestoWatts Envolve</div>
                  <div className="ellipse-12" />
                  <img className="arrow-right" alt="Arrow right" src="/offerletter/arrow-right-3.svg" />
                </div>
              </div>
            </div>
            <div className="frame-51">
              <p className="text-wrapper-32">Your Challenges - Our Solutions</p>
              <p className="text-wrapper-33">
                As the fastest growing talent acquisition company, JoulestoWatts formulates and executes strategic and
                efficient solutions to navigate tedious hiring processes and simplify them for applicants and companies
                with extensive recruitment requirements.
              </p>
            </div>
            <div className="overlap-6">
              <div className="group-10">
                <div className="overlap-7">
                  <div className="frame-52">
                    <div className="frame-53">
                      <div className="frame-54">
                        <div className="text-wrapper-34">Ready to get started?</div>
                        <p className="are-we-a-good-fit-2">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today.
                        </p>
                      </div>
                      <button className="CTA-7">
                        <div className="text-wrapper-35">Learn More</div>
                        <img className="arrow-forward-3" alt="Arrow forward" src="/offerletter/arrow-forward-53.svg" />
                      </button>
                    </div>
                  </div>
                  <div className="frame-55">
                    <div className="overlap-group-9">
                      <div className="frame-56">
                        <div className="frame-54">
                          <div className="text-wrapper-36">Ready to get started?</div>
                          <p className="text-wrapper-37">
                            Whether you still have some questions or you’re ready to sign up for a specific services
                            right now, Our specialists are only a message away.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="frame-57">
                      <div className="frame-58">
                        <p className="text-wrapper-38">Set up a virtual briefing</p>
                        <p className="text-wrapper-39">
                          Spend time with our executives and experts virtually and discuss current and future business
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="CTA-8" onClick={() => setOpenModal(true)}>
                <div className="text-wrapper-25">Schedule a call now</div>
                <img className="arrow-forward-3" alt="Arrow forward" src="/offerletter/arrow-forward-54.svg" />
              </button>
            </div>
          </div>

          <div
            className="overlap-8"
            style={{
              height: screenWidth >= 450 ? "350px" : screenWidth < 450 ? "1144px" : undefined,
              left: screenWidth >= 450 ? "-6px" : screenWidth < 450 ? "-2px" : undefined,
              top: screenWidth >= 450 ? "4206px" : screenWidth < 450 ? "1145px" : undefined,
              width: screenWidth >= 450 ? "1446px" : screenWidth < 450 ? "392px" : undefined,
            }}
          >
            <div className="frame-59 desktop-only">
              <div className="frame-15">
                <div className="frame-16">
                  <div className="frame-17">
                    <div className="frame-18">
                      <p className="text-wrapper-17">Trusted by Fortune 500 Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-19">
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

            <div className="mobile-only">
              <p className="text-wrapper-40">
                The first-of-its-kind crowd-sourcing platform is now easily accessible on mobile.
              </p>
              <div className="frame-60">
                <div className="overlap-9">
                  <div className="ellipse-13" />
                  <div className="ellipse-14" />
                  <div className="ellipse-15" />
                  <div className="group-11">
                    <div className="overlap-group-10">
                      <div className="mask-group-3" />
                      <img
                        className="kisspng-macbook-air-2"
                        alt="Kisspng macbook air"
                        src="/offerletter/kisspng-macbook-air-laptop-mac-book-pro-property-navigators-5b28.png"
                      />
                      <img className="image-7" alt="Image" src="/offerletter/image-4-3.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-12">
                <div className="frame-61">
                  <div className="frame-62">
                    <img className="image-8" alt="Image" src="/offerletter/image-3.png" />
                  </div>
                  <div className="encrypted-document-2">
                    Encrypted document
                    <br />
                    upload facility
                  </div>
                </div>
              </div>
              <div className="group-13">
                <div className="frame-63">
                  <div className="frame-64">
                    <img className="image-9" alt="Image" src="/offerletter/image-3-5.png" />
                  </div>
                  <div className="text-wrapper-41">
                    E-call &amp; E-offer
                    <br />
                    letters
                  </div>
                </div>
              </div>
              <div className="group-14">
                <div className="frame-65">
                  <div className="frame-62">
                    <img className="image-10" alt="Image" src="/offerletter/image-3-2.png" />
                  </div>
                  <div className="text-wrapper-41">
                    Live <br />
                    notifications
                  </div>
                </div>
              </div>
              <div className="group-15">
                <div className="frame-66">
                  <div className="frame-62">
                    <img className="image-11" alt="Image" src="/offerletter/image-3-3.png" />
                  </div>
                  <div className="flagship-referral-2">
                    Flagship referral <br />
                    programs
                  </div>
                </div>
              </div>
              <div className="group-16">
                <div className="frame-67">
                  <div className="frame-68">
                    <img className="image-12" alt="Image" src="/offerletter/image-3-4.webp" />
                  </div>
                  <div className="text-wrapper-41">Category-wise job search</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-only">
            <div className="group-19">
              <p className="text-wrapper-49">Your Challenges - Our Solutions</p>
              <p className="text-wrapper-50">
                As the fastest growing talent acquisition company, JoulestoWatts formulates and executes strategic and
                efficient solutions to navigate tedious hiring processes and simplify them for applicants and companies
                with extensive recruitment requirements.
              </p>
              <div className="solutions-2">
                <div className="frame-72">
                  <div className="overlap-group-8">
                    <div className="rectangle-16" />
                    <img className="rectangle-17" alt="Rectangle" src="/offerletter/rectangle-110-9.svg" />
                    <div className="frame-73">
                      <div className="text-wrapper-51">Efficiency</div>
                      <div className="regular-skill">Regular Skill Fulfillment</div>
                    </div>
                    <div className="text-wrapper-52">JoulestoWatts Offer Letter</div>
                    <div className="arrow-right-wrapper">
                      <img className="arrow-right-2" alt="Arrow right" src="/offerletter/arrow-right-3.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-72">
                  <div className="overlap-group-8">
                    <div className="rectangle-16" />
                    <div className="rectangle-18" />
                    <div className="frame-74">
                      <div className="text-wrapper-53">Innovation</div>
                      <div className="niche-skill">Niche Skill Fulfillment</div>
                    </div>
                    <div className="text-wrapper-54">JoulestoWatts Premier Lounge</div>
                    <div className="frame-75">
                      <img className="arrow-right-2" alt="Arrow right" src="/offerletter/arrow-right-3.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-72">
                  <div className="overlap-group-8">
                    <div className="rectangle-16" />
                    <div className="rectangle-18" />
                    <div className="frame-76">
                      <div className="text-wrapper-53">Disruptive</div>
                      <p className="crowd-sourcing-2">
                        Crowdsourcing platform
                        <br />
                        for maximum exposure of&nbsp;&nbsp;requirement
                      </p>
                    </div>
                    <div className="joulestowatts-offer-3">
                      JoulestoWatts Offer Letter
                      <br />
                      Mobile application
                    </div>
                    <div className="arrow-right-wrapper">
                      <img className="arrow-right-2" alt="Arrow right" src="/offerletter/arrow-right-3.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-72">
                  <div className="overlap-group-8">
                    <div className="rectangle-16" />
                    <div className="rectangle-18" />
                    <div className="frame-77">
                      <div className="talent-gap-2">
                        Talent Gap
                        <br />
                        Consulting
                      </div>
                      <div className="text-wrapper-55">Upskiling and Reskilling</div>
                    </div>
                    <div className="text-wrapper-56">JoulestoWatts Envolve</div>
                    <div className="frame-78">
                      <img className="arrow-right-2" alt="Arrow right" src="/offerletter/arrow-right-4-1.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-3">
              <div className="frame-79">
                <div className="overlap-group-11">
                  <div className="frame-80">
                    <div className="linkedin" />
                  </div>
                  <img className="rectangle-20" alt="Rectangle" src="/offerletter/Rectangle26.webp" />
                  <div className="rectangle-21" />
                  <div className="frame-81">
                    <p className="we-are-your-growth">
                      We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                      team of industry experts, management practitioners, and training partners catered to your growth.
                    </p>
                    <Cta
                      arrowForward="/offerletter/arrow-forward-113.svg"
                      arrowForwardClassName="CTA-11"
                      className="CTA-9"
                      divClassName="CTA-10"
                      property1="default"
                      text="About us"
                      link="/about-us"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-82">
                <img className="rectangle-22" alt="Rectangle" />
                <div className="overlap-11">
                  <div className="frame-83">
                    <div className="text-wrapper-57">300+ Internal Staff</div>
                    <div className="frame-58">
                      <p className="our-client-and-2">
                        {" "}
                        Our client and solution-driven team structure assure maximum leverage of resources for your
                        business. We are your industry-leading growth partners and are trusted by high-end companies for
                        our commitment and timely delivery with efficient and commendable talent fits.
                      </p>
                      <button className="CTA-12">
                        <div className="text-wrapper-58">Learn More</div>
                        <img className="arrow-forward-4" alt="Arrow forward" src="/offerletter/arrow-forward-114.png" />
                      </button>
                    </div>
                  </div>
                  <div className="text-wrapper-59">Why work with us?</div>
                  <div className="frame-84">
                    <div className="ellipse-17" />
                    <div className="ellipse-18" />
                    <div className="ellipse-17" />
                  </div>
                </div>
              </div>
              <CarouselWrapper
                arrowForward="/offerletter/arrow-forward-114.png"
                arrowForwardClassName="carousel-4"
                className="carousel-03"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>

  );
};
