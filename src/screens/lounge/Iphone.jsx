import React, { useEffect, useState } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Carousel } from "../../components/lounge/Carousel";
import { Cta } from "../../components/lounge/Cta";
import { StateDefaultWrapper } from "../../components/lounge/StateDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import { LeadForm } from "../../components/shared/LeadForm";

export const Lounge = () => {
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
      <div className="lounge" >
        <div
          className="div-2"
          style={{
            height: screenWidth < 450 ? "7796px" : screenWidth >= 450 ? "5388px" : undefined,
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
                <div className="frame-4">
                  <p className="india-s-first-of-its">
                    <span className="span">India’s first-of-its kind solution for your </span>
                    <span className="text-wrapper-5">niche skill fulfillment</span>
                  </p>
                  <p className="premiere-lounge">
                    Premiere Lounge platform assesses and shortlists accurate profiles using a systematic strategy to
                    find the best match &amp; engage on different working models among the best in the industry.
                  </p>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img className="mask-group" alt="Mask group" src="/lounge/mask-group-9.webp" />
                      <img
                        className="smiley-businesswoman"
                        alt="Smiley businesswoman"
                        src="/lounge/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-spac.webp"
                      />
                    </div>
                  </div>
                </div>
                <img className="rectangle-2" alt="Rectangle" src="/lounge/rectangle-78-2.svg" />
              </div>
            </div>
          </div>

          <div
            className="overlap-3"
            style={{
              height: screenWidth >= 450 ? "1291px" : screenWidth < 450 ? "1050px" : undefined,
              left: screenWidth >= 450 ? "0" : screenWidth < 450 ? "-185px" : undefined,
              top: screenWidth >= 450 ? "0" : screenWidth < 450 ? "5886px" : undefined,
              width: screenWidth >= 450 ? "1440px" : screenWidth < 450 ? "742px" : undefined,
            }}
          >
            <div className="desktop-only">
              <div className="rectangle-3" />
              <img className="rectangle-4" alt="Rectangle" src="/lounge/rectangle-78-3.svg" />
              <img className="mike-u" alt="Mike u" src="/lounge/mike-u-jujypgv4rag-unsplash-1-1.webp" />
              <p className="india-s-first-of-its-2">
                <span className="span">India’s first-of-its kind solution for your </span>
                <span className="text-wrapper-5">niche skill fulfillment</span>
              </p>
              <p className="premiere-lounge-2">
                Premiere Lounge platform assesses and shortlists accurate profiles using a systematic strategy to find
                the best match &amp; engage on different working models among the best in the industry.
              </p>
              <div className="context">
                <p className="with-a-dedicated">
                  With a dedicated team specializing in extensive volume hiring and evaluation process, the candidate
                  selection process is completed with ease. <br />
                  <br />
                  JoulestoWatt&#39;s AI and predictive analytics tool automatically grades and predicts how well
                  candidates will perform their job, eliminating the need for elaborate interventions during the hiring
                  process.
                </p>
              </div>
              <Cta
                arrowForward="/lounge/arrow-forward-132.svg"
                arrowForwardClassName="CTA-2"
                className="CTA-instance"
                divClassName="instance-node"
                property1="default"
                text="Connect with us"
                link="/contact-us"
              />
              <img className="mask-group-2" alt="Mask group" src="/lounge/mask-group-10.webp" />
              <img
                className="smiley-businesswoman-2"
                alt="Smiley businesswoman"
                src="/lounge/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-spac-1.webp"
              />
            </div>

            <div className="mobile-only">
              <div className="frame-12">
                <div className="overlap-group-3">
                  <div className="rectangle-5" />
                  <div className="frame-13">
                    <div className="frame-14">
                      <div className="frame-15">
                        <div className="frame-16">
                          <div className="frame-17">
                            <p className="text-wrapper-15">Trusted by Fortune 500 Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-18">
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
              <div className="frame-19">
                <div className="frame-20">
                  <div className="frame-21">
                    <div className="text-wrapper-16">Ready to get started?</div>
                    <p className="text-wrapper-17">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-2">
                  <div className="frame-22">
                    <div className="overlap-group-4">
                      <div className="frame-23">
                        <div className="text-wrapper-18">Ready to get started?</div>
                        <p className="are-we-a-good-fit">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="CTA-5" onClick={() => setOpenModal(true)}>
                          <div className="text-wrapper-19">Schedule a call now</div>
                          <img className="arrow-forward-2" alt="Arrow forward" src="/lounge/arrow-forward-116.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="overlap-4"
            style={{
              height: screenWidth >= 450 ? "1317px" : screenWidth < 450 ? "1846px" : undefined,
              left: screenWidth >= 450 ? "-5px" : screenWidth < 450 ? "-2px" : undefined,
              top: screenWidth >= 450 ? "2265px" : screenWidth < 450 ? "1178px" : undefined,
              width: screenWidth >= 450 ? "1444px" : screenWidth < 450 ? "392px" : undefined,
            }}
          >
            {screenWidth >= 450 && (
              <div className="carousel-2">
                <div className="frame-24">
                  <div className="overlap-group-5">
                    <img className="pexels-pavel" alt="Pexels pavel" src="/lounge/pexels-pavel-danilyuk-5520297-1.webp" />
                    <div className="rectangle-6" />
                    <p className="joulestowatt-s">
                      JoulestoWatt&#39;s premiere lounge is the next step to assessing and shortlisting accurate profiles
                      using a systematic strategy to find the best match.
                    </p>
                  </div>
                </div>
                <Carousel
                  arrowForward="/lounge/arrow-forward-9.png"
                  arrowForwardClassName="carousel-instance"
                  className="carousel-03"
                />
              </div>
            )}

            <div
              className="rectangle-7"
              style={{
                backgroundColor: screenWidth >= 450 ? "#e6e9e9" : screenWidth < 450 ? "#f6f7f8" : undefined,
                height: screenWidth >= 450 ? "830px" : screenWidth < 450 ? "1144px" : undefined,
                left: screenWidth >= 450 ? "2px" : screenWidth < 450 ? "0" : undefined,
                width: screenWidth >= 450 ? "1440px" : screenWidth < 450 ? "392px" : undefined,
              }}
            />
            {screenWidth >= 450 && (
              <>
                <div className="ellipse-4" />
                <div className="frame-25">
                  <p className="text-wrapper-20">JoulestoWatts Premier Lounge - Approach</p>
                </div>
                <div className="logo-wrapper">
                  <img className="logo-3" alt="Logo" src="/lounge/logo-18.png" />
                </div>
                <div className="frame-26">
                  <div className="frame-27">
                    <div className="text-wrapper-21">On Demand Need</div>
                    <p className="text-wrapper-22">
                      Easily find quality matches &amp; hire the best based on your engagement model.
                    </p>
                    <div className="text-wrapper-23">01</div>
                  </div>
                  <div className="frame-28">
                    <div className="rectangle-8" />
                    <img className="suitcase" alt="Suitcase" src="/lounge/suitcase-1-1-1.svg" />
                  </div>
                </div>
                <div className="frame-29">
                  <div className="frame-30">
                    <div className="post-your-project">
                      Post your project
                      <br />
                      Requirements
                    </div>
                    <p className="text-wrapper-24">
                      BI and Analytics based technology platform for engagement. Start by posting a job, and Premier
                      Lounge will analyze your needs.
                    </p>
                    <div className="text-wrapper-25">02</div>
                  </div>
                  <div className="frame-31">
                    <div className="rectangle-8" />
                    <img className="blueprint" alt="Blueprint" src="/lounge/blueprint-1-1.svg" />
                  </div>
                </div>
                <div className="frame-32">
                  <div className="frame-33">
                    <div className="text-wrapper-21">Find Top notch consultants</div>
                    <p className="text-wrapper-22">
                      Range of top consultants from BFSI, Telecom, Retail, Creative, L&amp;D, Manufacturing, Automation,
                      Big Data, Machine Learning, and many more domain experts.
                    </p>
                    <div className="text-wrapper-26">03</div>
                  </div>
                  <div className="frame-34">
                    <div className="consultant-wrapper">
                      <img className="consultant" alt="Consultant" src="/lounge/consultant-1-1.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-35">
                  <div className="frame-36">
                    <div className="frame-37">
                      <div className="rectangle-8" />
                      <img className="candidate" alt="Candidate" src="/lounge/candidate-1-1.svg" />
                    </div>
                    <div className="frame-38">
                      <p className="text-wrapper-27">
                        Engage as per your
                        <br />
                        choice of working model
                      </p>
                      <p className="text-wrapper-28">
                        Engage in different working models: Consulting, Contracting, Full time, Part-time, and Assignment
                        based.
                      </p>
                      <div className="text-wrapper-29">04</div>
                    </div>
                  </div>
                </div>
                <div className="frame-39">
                  <div className="frame-40">
                    <div className="clipboard-wrapper">
                      <img className="clipboard" alt="Clipboard" src="/lounge/clipboard-1-1.svg" />
                    </div>
                  </div>
                  <div className="frame-41">
                    <div className="text-wrapper-30">Result driven task completion</div>
                    <p className="text-wrapper-31">
                      Work efficiently and effectively using the Premier Lounge mobile app, and deliver digital assets in
                      a secure environment.
                    </p>
                    <div className="text-wrapper-32">05</div>
                  </div>
                </div>
                <div className="frame-42">
                  <div className="frame-43">
                    <div className="rectangle-8" />
                    <img className="dollar" alt="Dollar" src="/lounge/dollar-1-1.svg" />
                  </div>
                  <div className="frame-44">
                    <div className="text-wrapper-27">
                      Pay&nbsp;&nbsp;for work
                      <br />
                      authorized by you
                    </div>
                    <p className="simplified-global">
                      Simplified global payments, including JPL payment protection, invoicing &amp; reporting.
                    </p>
                    <div className="text-wrapper-33">06</div>
                  </div>
                </div>
              </>
            )}

            {screenWidth < 450 && (
              <>
                <p className="an-AI-driven">
                  An AI-driven approach ensures you get the best talent by assuring scalability, reliability &amp;
                  sustainability even in time-sensitive hiring.
                </p>
                <div className="frame-45">
                  <div className="text-wrapper-34">JoulestoWatts Premier Lounge</div>
                  <div className="frame-46">
                    <div className="frame-47">
                      <div className="text-wrapper-35">7800+</div>
                      <div className="text-wrapper-36">Trusted Consultants</div>
                    </div>
                    <div className="frame-47">
                      <div className="text-wrapper-37">200+</div>
                      <div className="text-wrapper-38">Skillset listed</div>
                    </div>
                    <div className="frame-48">
                      <div className="text-wrapper-35">200+</div>
                      <div className="text-wrapper-39">Affiliation Boutique Firm</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-40">JoulestoWatts Premier Lounge</div>
                <div className="frame-49">
                  <div className="frame-50">
                    <div className="frame-51">
                      <p className="div-3">
                        <span className="text-wrapper-41">
                          7800+
                          <br />
                        </span>
                        <span className="text-wrapper-42">Trusted consultants</span>
                      </p>
                      <p className="text-wrapper-43">Engage on-demand from the validated talent</p>
                    </div>
                  </div>
                  <div className="frame-52">
                    <div className="frame-53">
                      <p className="div-3">
                        <span className="text-wrapper-41">
                          200+
                          <br />
                        </span>
                        <span className="text-wrapper-42">Skill Sets</span>
                      </p>
                      <p className="text-wrapper-43">
                        Engage the best in the Industry across
                        <br />
                        varied skills and domain
                      </p>
                    </div>
                  </div>
                  <div className="frame-54">
                    <div className="frame-53">
                      <p className="div-3">
                        <span className="text-wrapper-41">
                          200+
                          <br />
                        </span>
                        <span className="text-wrapper-42">Affiliation boutique firms</span>
                      </p>
                      <p className="text-wrapper-43">
                        Engage from the large boutique
                        <br />
                        firm network
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="context-wrapper mobile-only">
            <div className="with-a-dedicated-wrapper">
              <p className="with-a-dedicated-2">
                With a dedicated team specializing in extensive volume hiring and evaluation process, the candidate
                selection process is completed with ease. <br />
                <br />
                JoulestoWatt&#39;s AI and predictive analytics tool automatically grades and predicts how well
                candidates will perform their job, eliminating the need for elaborate interventions during the hiring
                process.
              </p>
            </div>
          </div>

          <div className="desktop-only">
            <div className="frame-55">
              <div className="frame-56">
                <p className="div-4">
                  <span className="text-wrapper-41">
                    7800+
                    <br />
                  </span>
                  <span className="text-wrapper-44">Trusted consultants</span>
                </p>
                <p className="text-wrapper-45">Engage on-demand from the validated talent</p>
              </div>
            </div>
            <div className="frame-57">
              <div className="frame-58">
                <p className="div-4">
                  <span className="text-wrapper-41">
                    200+
                    <br />
                  </span>
                  <span className="text-wrapper-44">Skill Sets</span>
                </p>
                <p className="text-wrapper-45">
                  Engage the best in the Industry across
                  <br />
                  varied skills and domain
                </p>
              </div>
            </div>
            <div className="frame-59">
              <div className="frame-58">
                <p className="div-4">
                  <span className="text-wrapper-41">
                    200+
                    <br />
                  </span>
                  <span className="text-wrapper-44">Affiliation boutique firms</span>
                </p>
                <p className="text-wrapper-45">
                  Engage from the large boutique
                  <br />
                  firm network
                </p>
              </div>
            </div>
            <div className="frame-60">
              <div className="text-wrapper-46">Why JoulestoWatts Premier Lounge?</div>
              <p className="an-AI-driven-2">
                An AI-driven approach ensures you get the best talent by assuring scalability, reliability &amp;
                sustainability <br />
                even in time-sensitive hiring.
              </p>
            </div>
          </div>

          <div
            className="frame-61"
            style={{
              gap: screenWidth >= 450 ? "16px" : screenWidth < 450 ? "24px" : undefined,
              left: screenWidth >= 450 ? "303px" : screenWidth < 450 ? "19px" : undefined,
              top: screenWidth >= 450 ? "3664px" : screenWidth < 450 ? "3185px" : undefined,
            }}
          >
            <div className="desktop-only">
              <p className="text-wrapper-47">Your Challenges - Our Solutions</p>
              <p className="text-wrapper-48">
                As the fastest growing talent acquisition company, JoulestoWatts formulates and executes strategic and
                efficient solutions to navigate tedious hiring processes and simplify the process.
              </p>
            </div>

            <div className="mobile-only">
              <div style={{display:"flex", flexDirection:"column",gap:"30px"}}>
                <div className="frame-62">
                  <div className="frame-63">
                    <div className="text-wrapper-49">On Demand Need</div>
                    <p className="easily-find-quality">
                      Easily find quality matches &amp; hire the best based on your engagement model.
                    </p>
                  </div>
                  <div className="frame-64">
                    <div className="rectangle-9" />
                    <img className="suitcase-2" alt="Suitcase" src="/lounge/suitcase-1-1.svg" />
                  </div>
                </div>
                <div className="frame-65">
                  <div className="frame-66">
                    <div className="post-your-project-2">
                      Post your project
                      <br />
                      Requirements
                    </div>
                    <p className="text-wrapper-50">
                      BI and Analytics based technology platform for engagement. Start by posting a job, and Premier
                      Lounge will analyze your needs.
                    </p>
                  </div>
                  <div className="frame-67">
                    <div className="rectangle-9" />
                    <img className="blueprint-2" alt="Blueprint" src="/lounge/blueprint-1.svg" />
                  </div>
                </div>
                <div className="frame-68">
                  <div className="frame-69">
                    <div className="text-wrapper-51">Find Top notch consultants</div>
                    <p className="text-wrapper-50">
                      Range of top consultants from BFSI, Telecom, Retail, Creative, L&amp;D, Manufacturing, Automation,
                      Big Data, Machine Learning, and many more domain experts.
                    </p>
                  </div>
                  <div className="frame-70">
                    <div className="img-wrapper">
                      <img className="consultant-2" alt="Consultant" src="/lounge/consultant-1.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-71">
                  <div className="frame-72">
                    <div className="frame-64">
                      <div className="rectangle-9" />
                      <img className="candidate-2" alt="Candidate" src="/lounge/candidate-1.svg" />
                    </div>
                    <div className="frame-73">
                      <p className="text-wrapper-52">
                        Engage as per your
                        <br />
                        choice of working model
                      </p>
                      <p className="text-wrapper-53">
                        Engage in different working models: Consulting, Contracting, Full time, Part-time, and Assignment
                        based.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="frame-74">
                  <div className="frame-70">
                    <div className="img-wrapper">
                      <img className="clipboard-2" alt="Clipboard" src="/lounge/clipboard-1.svg" />
                    </div>
                  </div>
                  <div className="frame-75">
                    <div className="text-wrapper-52">Result driven task completion</div>
                    <p className="text-wrapper-53">
                      Work efficiently and effectively using the Premier Lounge mobile app, and deliver digital assets in
                      a secure environment.
                    </p>
                  </div>
                </div>
                <div className="frame-76">
                  <div className="frame-77">
                    <div className="rectangle-9" />
                    <img className="dollar-2" alt="Dollar" src="/lounge/dollar-1.svg" />
                  </div>
                  <div className="frame-78">
                    <div className="text-wrapper-52">
                      Pay&nbsp;&nbsp;for work
                      <br />
                      authorized by you
                    </div>
                    <p className="text-wrapper-53">
                      Simplified global payments, including JPL payment protection, invoicing &amp; reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="desktop-only">
            <div className="solutions">
              <div className="frame-79">
                <div className="overlap-group-6">
                  <div className="rectangle-10" />
                  <div className="rectangle-11" />
                  <div className="frame-80">
                    <div className="text-wrapper-54">Efficiency</div>
                    <div className="text-wrapper-55">Regular Skill Fulfillment</div>
                  </div>
                  <div className="joulestowatts-offer">
                    JoulestoWatts Offer
                    <br />
                    Letter
                  </div>
                  <div className="div-5">
                    <img className="arrow-right" alt="Arrow right" src="/lounge/arrow-right-1-2.svg" />
                  </div>
                </div>
              </div>
              <div className="frame-81">
                <div className="overlap-group-6">
                  <div className="rectangle-10" />
                  <div className="rectangle-11" />
                  <div className="frame-82">
                    <div className="text-wrapper-54">Innovation</div>
                    <div className="text-wrapper-55">Niche Skill Fulfillment</div>
                  </div>
                  <div className="joulestowatts">
                    JoulestoWatts Premier
                    <br />
                    Lounge
                  </div>
                  <div className="div-5" />
                  <img className="arrow-right-2" alt="Arrow right" src="/lounge/arrow-right-1-2.svg" />
                </div>
              </div>
              <div className="frame-83">
                <div className="overlap-group-6">
                  <div className="rectangle-10" />
                  <div className="rectangle-11" />
                  <div className="frame-84">
                    <div className="text-wrapper-54">Disruptive</div>
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
                  <div className="div-5" />
                  <img className="arrow-right-2" alt="Arrow right" src="/lounge/arrow-right-1-2.svg" />
                </div>
              </div>
              <div className="frame-85">
                <div className="overlap-group-6">
                  <div className="rectangle-10" />
                  <div className="rectangle-11" />
                  <div className="frame-86">
                    <div className="talent-gap">
                      Talent Gap
                      <br />
                      Consulting
                    </div>
                    <div className="text-wrapper-55">Upskiling and Reskilling</div>
                  </div>
                  <div className="text-wrapper-56">JoulestoWatts Envolve</div>
                  <div className="div-5" />
                  <img className="arrow-right-2" alt="Arrow right" src="/lounge/arrow-right-1-2.svg" />
                </div>
              </div>
            </div>
            <div className="overlap-5">
              <div className="group-3">
                <div className="overlap-6">
                  <div className="frame-87">
                    <div className="frame-88">
                      <div className="frame-89">
                        <div className="text-wrapper-57">Ready to get started?</div>
                        <p className="are-we-a-good-fit-2">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                      </div>
                      <button className="CTA-6">
                        <div className="text-wrapper-58">Learn More</div>
                        <img className="arrow-forward-2" alt="Arrow forward" src="/lounge/arrow-forward-130.svg" />
                      </button>
                    </div>
                    <button className="CTA-7" onClick={() => setOpenModal(true)}>
                      <div className="text-wrapper-19">Schedule a call now</div>
                      <img className="arrow-forward-2" alt="Arrow forward" src="/lounge/arrow-forward-131.svg" />
                    </button>
                  </div>
                  <div className="frame-90">
                    <div className="overlap-group-7">
                      <div className="frame-91">
                        <div className="frame-89">
                          <div className="text-wrapper-59">Ready to get started?</div>
                          <p className="text-wrapper-60">
                            Whether you still have some questions or you’re ready to sign up for a specific services
                            right now, Our specialists are only a message away.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="frame-92">
                      <div className="frame-93">
                        <p className="text-wrapper-61">Set up a virtual briefing</p>
                        <p className="text-wrapper-62">
                          Spend time with our executives and experts virtually and discuss current and future business
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-8">
              <div className="frame-97">
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="frame-17">
                        <p className="text-wrapper-15">Trusted by Fortune 500 Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-18">
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
            <div className="frame-98">
              <div className="frame-9">
                <div className="text-wrapper-70">7800+</div>
                <div className="text-wrapper-36">Trusted Consultants</div>
              </div>
              <div className="frame-9">
                <div className="text-wrapper-71">200+</div>
                <div className="text-wrapper-38">Skillset listed</div>
              </div>
              <div className="frame-99">
                <div className="text-wrapper-70">200+</div>
                <div className="text-wrapper-39">Affiliation Boutique Firm</div>
              </div>
            </div>
            <div className="text-wrapper-72">JoulestoWatts Premier Lounge</div>
          </div>

          <div className="mobile-only">
            <div className="carousel-3">
              <div className="frame-100">
                <div className="overlap-group-8">
                  <div className="frame-101">
                    <div className="linkedin" />
                  </div>
                  <img className="pexels-pavel-2" alt="Pexels pavel" src="/lounge/pexels-pavel-danilyuk-5520297-1.webp" />
                  <div className="rectangle-13" />
                  <div className="frame-102">
                    <p className="joulestowatt-s-2">
                      JoulestoWatt&#39;s premiere lounge is the next step to assessing and shortlisting accurate
                      profiles using a systematic strategy to find the best match.
                    </p>
                    <Cta
                      arrowForward="/lounge/arrow-forward-117.svg"
                      arrowForwardClassName="CTA-10"
                      className="CTA-8"
                      divClassName="CTA-9"
                      property1="default"
                      text="About us"
                      link="/about-us"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-103">
                <img className="rectangle-14" alt="Rectangle" />
                <div className="overlap-9">
                  <div className="frame-104">
                    <div className="text-wrapper-73">300+ Internal Staff</div>
                    <div className="frame-93">
                      <p className="our-client-and">
                        {" "}
                        Our client and solution-driven team structure assure maximum leverage of resources for your
                        business. We are your industry-leading growth partners and are trusted by high-end companies for
                        our commitment and timely delivery with efficient and commendable talent fits.
                      </p>
                      <button className="CTA-11">
                        <div className="text-wrapper-74">Learn More</div>
                        <img className="arrow-forward-3" alt="Arrow forward" src="/lounge/arrow-forward-9.png" />
                      </button>
                    </div>
                  </div>
                  <div className="text-wrapper-75">Why work with us?</div>
                  <div className="frame-105">
                    <div className="ellipse-6" />
                    <div className="ellipse-7" />
                    <div className="ellipse-6" />
                  </div>
                </div>
              </div>
              <Carousel
                arrowForward="/lounge/arrow-forward-9.png"
                arrowForwardClassName="carousel-03-instance"
                className="carousel-03"
              />
            </div>
            <div className="group-6">
              <p className="text-wrapper-76">Your Challenges - Our Solutions</p>
              <p className="text-wrapper-77">
                As the fastest growing talent acquisition company, JoulestoWatts formulates and executes strategic and
                efficient solutions to navigate tedious hiring processes and simplify them for applicants and companies
                with extensive recruitment requirements.
              </p>
              <div className="solutions-2">
                <div className="frame-106">
                  <div className="overlap-group-6">
                    <div className="rectangle-15" />
                    <img className="rectangle-16" alt="Rectangle" src="/lounge/rectangle-110-9.svg" />
                    <div className="frame-107">
                      <div className="text-wrapper-78">Efficiency</div>
                      <div className="regular-skill">Regular Skill Fulfillment</div>
                    </div>
                    <div className="text-wrapper-79">JoulestoWatts Offer Letter</div>
                    <div className="arrow-right-wrapper">
                      <img className="arrow-right" alt="Arrow right" src="/lounge/arrow-right-1-2.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-106">
                  <div className="overlap-group-6">
                    <div className="rectangle-15" />
                    <div className="rectangle-17" />
                    <div className="frame-108">
                      <div className="text-wrapper-80">Innovation</div>
                      <div className="niche-skill">Niche Skill Fulfillment</div>
                    </div>
                    <div className="text-wrapper-81">JoulestoWatts Premier Lounge</div>
                    <div className="frame-109">
                      <img className="arrow-right" alt="Arrow right" src="/lounge/arrow-right-1-2.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-106">
                  <div className="overlap-group-6">
                    <div className="rectangle-15" />
                    <div className="rectangle-17" />
                    <div className="frame-110">
                      <div className="text-wrapper-80">Disruptive</div>
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
                      <img className="arrow-right" alt="Arrow right" src="/lounge/arrow-right-1-2.svg" />
                    </div>
                  </div>
                </div>
                <div className="frame-106">
                  <div className="overlap-group-6">
                    <div className="rectangle-15" />
                    <div className="rectangle-17" />
                    <div className="frame-111">
                      <div className="talent-gap-2">
                        Talent Gap
                        <br />
                        Consulting
                      </div>
                      <div className="text-wrapper-82">Upskiling and Reskilling</div>
                    </div>
                    <div className="text-wrapper-83">JoulestoWatts Envolve</div>
                    <div className="frame-112">
                      <img className="arrow-right" alt="Arrow right" src="/lounge/arrow-right-4-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-wrapper-84">JoulestoWatts Premier Lounge - Approach</p>
          </div>
          <Footer />
        </div>
      </div>
    </>

  );
};
