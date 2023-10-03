import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Carousel } from "../../components/msp/Carousel";
import { Cta } from "../../components/msp/Cta";
import { StateDefaultWrapper } from "../../components/msp/StateDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import "./style.css"
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";

export const Iphone = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="msp">
      <div
        className="div-2"
        style={{
          height: screenWidth < 1440 ? "5455px" : screenWidth >= 1440 ? "3648px" : undefined,
          width: screenWidth < 1440 ? "390px" : screenWidth >= 1440 ? "1440px" : undefined,
        }}
      >
        <Header/>
        {screenWidth < 1440 && (
          <>
            <Header1 className="header" />
          </>
        )}

        <div
          className="overlap"
          style={{
            height: screenWidth >= 1440 ? "1455px" : screenWidth < 1440 ? "2177px" : undefined,
            top: screenWidth >= 1440 ? "1px" : screenWidth < 1440 ? "60px" : undefined,
            width: screenWidth >= 1440 ? "1441px" : screenWidth < 1440 ? "390px" : undefined,
          }}
        >
          {screenWidth >= 1440 && (
            <>
              <div className="rectangle-2" />
              <img className="element" alt="Element" src="/msp/37-1.png" />
              <div className="frame-11">
                <div className="component">
                  <p className="rely-on">
                    <span className="span">Rely on JoulestoWatts </span>
                    <span className="text-wrapper-12">Master Service Provider</span>
                    <span className="span"> for smooth operations.</span>
                  </p>
                </div>
                <div className="frame-12">
                  <p className="text-wrapper-13">
                    JoulestoWatts has a perfect combination of expertise, technology, and thought leaders to manage your
                    operations in various verticals.
                  </p>
                  <Cta
                    arrowForward="/msp/arrow-forward-96.svg"
                    arrowForwardClassName="CTA-2"
                    className="CTA-instance"
                    divClassName="instance-node"
                    property1="default"
                    text="Connect with us"
                  />
                </div>
              </div>
              <div className="rectangle-3" />
              <img className="rectangle-4" alt="Rectangle" src="/msp/rectangle-137-1.svg" />
              <img className="rectangle-5" alt="Rectangle" src="/msp/rectangle-138-1.svg" />
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-14">Solutions</div>
                  <p className="managing-a-company-s">
                    Managing a company&#39;s contingent labor procurement process is one of the tedious operational
                    tasks, and our services can assist you in managing operations effortlessly.
                  </p>
                </div>
                <div className="div-wrapper">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="frame-17">
                        <div className="frame-18">
                          <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                          <div className="frame-19">
                            <div className="text-wrapper-15">Payroll Management</div>
                          </div>
                        </div>
                        <div className="frame-18">
                          <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                          <div className="text-wrapper-16">Workforce Management</div>
                        </div>
                        <div className="frame-18">
                          <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                          <div className="text-wrapper-16">Human Resources</div>
                        </div>
                      </div>
                      <div className="frame-17">
                        <div className="div-3">
                          <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                          <div className="text-wrapper-17">Compliance &amp; Contract Management</div>
                        </div>
                        <div className="div-3">
                          <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                          <div className="text-wrapper-17">Vendor Management</div>
                        </div>
                        <div className="div-3">
                          <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                          <div className="procurement-and">Procurement And Sourcing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-2">
                <div className="frame-20">
                  <div className="text-wrapper-18">Project Team</div>
                </div>
                <div className="frame-21">
                  <div className="frame-22">
                    <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                    <div className="frame-19">
                      <div className="text-wrapper-19">Demand management</div>
                    </div>
                  </div>
                  <div className="frame-18">
                    <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                    <div className="text-wrapper-20">Stakeholder management</div>
                  </div>
                  <div className="frame-23">
                    <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                    <div className="text-wrapper-21">Systems management</div>
                  </div>
                  <div className="frame-23">
                    <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                    <div className="text-wrapper-21">Profiles sanity &amp; checks</div>
                  </div>
                  <div className="frame-23">
                    <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                    <div className="text-wrapper-21">Interview coordination</div>
                  </div>
                  <div className="frame-23">
                    <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                    <div className="text-wrapper-21">Continuous Curation of Database</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-22">Our Structure</div>
              <div className="group-3">
                <div className="overlap-2">
                  <img className="group-4" alt="Group" src="/msp/group-34-1.png" />
                  <div className="rectangle-6" />
                  <div className="rectangle-7" />
                  <div className="rectangle-8" />
                  <div className="text-wrapper-23">Requisition PMO</div>
                  <div className="text-wrapper-24">Operation PMO</div>
                  <div className="text-wrapper-25">Vender Management</div>
                </div>
                <div className="group-wrapper">
                  <div className="group-5">
                    <div className="overlap-3">
                      <div className="text-wrapper-26">Management</div>
                    </div>
                    <div className="overlap-4">
                      <div className="overlap-5">
                        <div className="rectangle-9" />
                        <img className="line" alt="Line" src="/msp/line-1-1.svg" />
                        <img className="ellipse-4" alt="Ellipse" src="/msp/ellipse-10-1.png" />
                        <div className="text-wrapper-27">Transition manager</div>
                        <img className="ellipse-5" alt="Ellipse" src="/msp/ellipse-8-1.png" />
                        <img className="group-6" alt="Group" src="/msp/group-31-1.png" />
                      </div>
                      <img className="group-7" alt="Group" src="/msp/group-32-1.png" />
                    </div>
                    <div className="overlap-6">
                      <div className="text-wrapper-28">Transition team</div>
                    </div>
                    <div className="overlap-group-3">
                      <div className="text-wrapper-29">PMO</div>
                    </div>
                    <div className="overlap-7">
                      <div className="rectangle-10" />
                      <div className="text-wrapper-30">Program Manager</div>
                    </div>
                    <img className="group-8" alt="Group" src="/msp/group-33-1.png" />
                  </div>
                </div>
              </div>
              <div className="frame-24">
                <div className="text-wrapper-31">Transition Team</div>
                <div className="frame-25">
                  <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                  <div className="frame-19">
                    <div className="text-wrapper-19">Know Your Client</div>
                  </div>
                </div>
                <div className="frame-26">
                  <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                  <div className="text-wrapper-20">Tools &amp; Techniques</div>
                </div>
                <div className="frame-27">
                  <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                  <div className="text-wrapper-21">Processes &amp; Methodologies</div>
                </div>
                <div className="frame-28">
                  <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                  <div className="text-wrapper-21">Reports &amp; Dashboards</div>
                </div>
                <div className="frame-29">
                  <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                  <div className="text-wrapper-21">Stabilization measures</div>
                </div>
                <div className="frame-30">
                  <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                  <div className="text-wrapper-21">Tech Integrations (if applicable)</div>
                </div>
              </div>
            </>
          )}

          {screenWidth < 1440 && (
            <>
              <div className="frame-33">
                <div className="frame-34" />
              </div>
              <div className="frame-35">
                <p className="rely-on-2">
                  <span className="span">Rely on JoulestoWatts </span>
                  <span className="text-wrapper-12">Master Service Provider</span>
                  <span className="span"> for smooth operations.</span>
                </p>
                <div className="frame-36">
                  <p className="text-wrapper-34">
                    JoulestoWatts has a perfect combination of expertise, technology, and thought leaders to manage your
                    operations in various verticals.
                  </p>
                  <Cta
                    arrowForward="/msp/arrow-forward-95.svg"
                    arrowForwardClassName="CTA-2"
                    className="CTA-instance"
                    divClassName="instance-node"
                    property1="default"
                    text="Connect with us"
                  />
                </div>
                <div className="frame-37" />
                <img className="element-2" alt="Element" src="/msp/37.png" />
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-8">
                  <div className="overlap-9">
                    <img className="rectangle-11" alt="Rectangle" src="/msp/rectangle-137.svg" />
                    <div className="frame-38">
                      <div className="frame-39">
                        <div className="text-wrapper-35">Solutions</div>
                        <p className="managing-a-company-s-2">
                          Managing a company&#39;s contingent labor procurement process is one of the tedious
                          operational tasks, and our services can assist you in managing operations effortlessly.
                        </p>
                      </div>
                      <div className="frame-40">
                        <div className="frame-41">
                          <div className="frame-42">
                            <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                            <div className="frame-43">
                              <div className="text-wrapper-36">Payroll Management</div>
                            </div>
                          </div>
                          <div className="frame-42">
                            <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                            <div className="text-wrapper-37">Workforce Management</div>
                          </div>
                          <div className="frame-42">
                            <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                            <div className="text-wrapper-37">Human Resources</div>
                          </div>
                        </div>
                        <div className="frame-44">
                          <div className="frame-45">
                            <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                            <div className="text-wrapper-37">Compliance &amp; Contract Management</div>
                          </div>
                          <div className="frame-45">
                            <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                            <div className="text-wrapper-37">Vendor Management</div>
                          </div>
                          <div className="frame-45">
                            <img className="vector" alt="Vector" src="/msp/vector-10.svg" />
                            <div className="text-wrapper-37">Procurement And Sourcing</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-10">
                    <img className="rectangle-12" alt="Rectangle" src="/msp/rectangle-138.svg" />
                    <div className="group-9">
                      <div className="frame-46">
                        <div className="text-wrapper-18">Project Team</div>
                      </div>
                      <div className="frame-47">
                        <div className="frame-48">
                          <img className="vector" alt="Vector" src="/msp/vector-1.svg" />
                          <div className="frame-19">
                            <div className="text-wrapper-19">Demand management</div>
                          </div>
                        </div>
                        <div className="frame-18">
                          <img className="vector" alt="Vector" src="/msp/vector-1.svg" />
                          <div className="text-wrapper-20">Stakeholder management</div>
                        </div>
                        <div className="frame-49">
                          <img className="vector" alt="Vector" src="/msp/vector-1.svg" />
                          <div className="text-wrapper-21">Systems management</div>
                        </div>
                        <div className="frame-49">
                          <img className="vector" alt="Vector" src="/msp/vector-1.svg" />
                          <div className="text-wrapper-21">Profiles sanity &amp; checks</div>
                        </div>
                        <div className="frame-49">
                          <img className="vector" alt="Vector" src="/msp/vector-1.svg" />
                          <div className="text-wrapper-21">Interview coordination</div>
                        </div>
                        <div className="frame-49">
                          <img className="vector" alt="Vector" src="/msp/vector-1.svg" />
                          <div className="text-wrapper-21">Continuous Curation of Database</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-38">Our Structure</div>
                  <div className="group-10">
                    <div className="overlap-11">
                      <img className="group-11" alt="Group" src="/msp/group-34.png" />
                      <div className="rectangle-13" />
                      <div className="rectangle-14" />
                      <div className="rectangle-15" />
                      <div className="text-wrapper-39">Requisition PMO</div>
                      <div className="text-wrapper-40">Operation PMO</div>
                      <div className="text-wrapper-41">Vender Management</div>
                    </div>
                    <div className="group-12">
                      <div className="group-13">
                        <div className="overlap-12">
                          <div className="text-wrapper-42">Management</div>
                        </div>
                        <div className="overlap-13">
                          <div className="overlap-group-4">
                            <div className="rectangle-16" />
                            <img className="line-2" alt="Line" src="/msp/line-1.svg" />
                            <img className="ellipse-6" alt="Ellipse" src="/msp/ellipse-10.png" />
                            <div className="text-wrapper-43">Transition manager</div>
                            <img className="ellipse-7" alt="Ellipse" src="/msp/ellipse-8.png" />
                            <img className="group-14" alt="Group" src="/msp/group-31.png" />
                          </div>
                          <img className="group-15" alt="Group" src="/msp/group-32.png" />
                        </div>
                        <div className="overlap-14">
                          <div className="text-wrapper-44">Transition team</div>
                        </div>
                        <div className="overlap-15">
                          <div className="text-wrapper-45">PMO</div>
                        </div>
                        <div className="overlap-16">
                          <div className="rectangle-17" />
                          <div className="text-wrapper-46">Program Manager</div>
                        </div>
                        <img className="group-16" alt="Group" src="/msp/group-33.png" />
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-17">
                      <div className="rectangle-18" />
                      <div className="text-wrapper-31">Transition Team</div>
                      <div className="frame-25">
                        <img className="vector" alt="Vector" src="/msp/vector-16.svg" />
                        <div className="frame-19">
                          <div className="text-wrapper-19">Know Your Client</div>
                        </div>
                      </div>
                      <div className="frame-26">
                        <img className="vector" alt="Vector" src="/msp/vector-16.svg" />
                        <div className="text-wrapper-20">Tools &amp; Techniques</div>
                      </div>
                      <div className="frame-27">
                        <img className="vector" alt="Vector" src="/msp/vector-16.svg" />
                        <div className="text-wrapper-21">Processes &amp; Methodologies</div>
                      </div>
                      <div className="frame-28">
                        <img className="vector" alt="Vector" src="/msp/vector-16.svg" />
                        <div className="text-wrapper-21">Reports &amp; Dashboards</div>
                      </div>
                      <div className="frame-29">
                        <img className="vector" alt="Vector" src="/msp/vector-16.svg" />
                        <div className="text-wrapper-21">Stabilization measures</div>
                      </div>
                      <div className="frame-30">
                        <img className="vector" alt="Vector" src="/msp/vector-16.svg" />
                        <div className="text-wrapper-21">Tech Integrations (if applicable)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {screenWidth < 1440 && (
          <div className="carousel-2">
            <div className="frame-50">
              <div className="overlap-group-5">
                <img className="rectangle-19" alt="Rectangle" src="/msp/rectangle-26-3.png" />
                <div className="frame-51">
                  <div className="frame-8" />
                </div>
                <img className="shutterstock" alt="Shutterstock" src="/msp/shutterstock-1704596071-1.png" />
                <div className="rectangle-20" />
                <div className="frame-52">
                  <p className="we-are-your-growth">
                    We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                    team of industry experts, management practitioners, and training partners catered to your growth.
                  </p>
                  <Cta
                    arrowForward="/msp/arrow-forward-91.svg"
                    arrowForwardClassName="CTA-7"
                    className="CTA-5"
                    divClassName="CTA-6"
                    property1="default"
                    text="About us"
                  />
                </div>
              </div>
            </div>
            <div className="frame-53">
              <img className="rectangle-21" alt="Rectangle" />
              <div className="overlap-18">
                <div className="frame-54">
                  <div className="text-wrapper-47">300+ Internal Staff</div>
                  <div className="frame-55">
                    <p className="our-client-and">
                      {" "}
                      Our client and solution-driven team structure assure maximum leverage of resources for your
                      business. We are your industry-leading growth partners and are trusted by high-end companies for
                      our commitment and timely delivery with efficient and commendable talent fits.
                    </p>
                    <button className="CTA-8">
                      <div className="text-wrapper-48">Learn More</div>
                      <img className="arrow-forward-2" alt="Arrow forward" src="/msp/arrow-forward-92.png" />
                    </button>
                  </div>
                </div>
                <div className="text-wrapper-49">Why work with us?</div>
                <div className="frame-56">
                  <div className="ellipse-8" />
                  <div className="ellipse-9" />
                  <div className="ellipse-8" />
                </div>
              </div>
            </div>
            <Carousel
              arrowForward="/msp/arrow-forward-92.png"
              arrowForwardClassName="carousel-instance"
              className="carousel-03"
            />
          </div>
        )}

        <div
          className="overlap-19"
          style={{
            height: screenWidth >= 1440 ? "669px" : screenWidth < 1440 ? "1050px" : undefined,
            left: screenWidth >= 1440 ? "-12px" : screenWidth < 1440 ? "-185px" : undefined,
            top: screenWidth >= 1440 ? "2979px" : screenWidth < 1440 ? "3545px" : undefined,
            width: screenWidth >= 1440 ? "1452px" : screenWidth < 1440 ? "742px" : undefined,
          }}
        >
          <div
            className="frame-57"
            style={{
              height: screenWidth < 1440 ? "307px" : screenWidth >= 1440 ? "380px" : undefined,
              left: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "3px" : undefined,
              width: screenWidth < 1440 ? "742px" : screenWidth >= 1440 ? "1449px" : undefined,
            }}
          >
            <div
              className="overlap-group-6"
              style={{
                height: screenWidth < 1440 ? "307px" : screenWidth >= 1440 ? "380px" : undefined,
              }}
            >
              {screenWidth >= 1440 && (
                <div className="frame-58">
                  <div className="overlap-group-7">
                    <div className="frame-59">
                      <div className="frame-60">
                        <div className="text-wrapper-50">Ready to get started?</div>
                        <p className="are-we-a-good-fit">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                      </div>
                      <button className="CTA-9">
                        <div className="text-wrapper-51">Learn More</div>
                        <img className="arrow-forward-3" alt="Arrow forward" src="/msp/arrow-forward-97.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="frame-61"
                style={{
                  backgroundColor:
                    screenWidth >= 1440 ? "var(--secondary-03)" : screenWidth < 1440 ? "#f6f7f8" : undefined,
                  height: screenWidth >= 1440 ? "380px" : screenWidth < 1440 ? "307px" : undefined,
                  left: screenWidth >= 1440 ? "0" : screenWidth < 1440 ? "185px" : undefined,
                  width: screenWidth >= 1440 ? "724px" : screenWidth < 1440 ? "390px" : undefined,
                }}
              >
                {screenWidth >= 1440 && (
                  <>
                    <div className="overlap-20">
                      <div className="frame-62">
                        <div className="frame-60">
                          <div className="text-wrapper-52">Ready to get started?</div>
                          <p className="text-wrapper-53">
                            Whether you still have some questions or you’re ready to sign up for a specific services
                            right now, Our specialists are only a message away.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="frame-63">
                      <div className="frame-55">
                        <p className="text-wrapper-54">Set up a virtual briefing</p>
                        <p className="text-wrapper-55">
                          Spend time with our executives and experts virtually and discuss current and future business
                          requirements.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {screenWidth >= 1440 && (
                <button className="CTA-10">
                  <div className="text-wrapper-56">Schedule a call now</div>
                  <img className="arrow-forward-3" alt="Arrow forward" src="/msp/arrow-forward-98.svg" />
                </button>
              )}

              {screenWidth < 1440 && (
                <div className="frame-64">
                  <div className="frame-65">
                    <div className="frame-66">
                      <div className="frame-67">
                        <div className="frame-68">
                          <p className="text-wrapper-57">Trusted by Fortune 500 Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-69">
                  <img
                    className="mercedes-benz-logo"
                    alt="Mercedes benz logo"
                    src="/services/mercedes-benz-logo-2010-1.png"
                  />
                  <img className="GE-healthcare-logo" alt="Ge healthcare logo" src="/services/ge-healthcare-logo-1.png" />
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
              )}
            </div>
          </div>
          {screenWidth < 1440 && (
            <div className="frame-73">
              <div className="frame-74">
                <div className="frame-75">
                  <div className="text-wrapper-65">Ready to get started?</div>
                  <p className="text-wrapper-66">
                    Whether you still have some questions or you’re ready to sign up for a specific services right now,
                    Our specialists are only a message away.
                  </p>
                </div>
              </div>
              <div className="group-19">
                <div className="frame-76">
                  <div className="overlap-group-8">
                    <div className="frame-77">
                      <div className="text-wrapper-67">Ready to get started?</div>
                      <p className="are-we-a-good-fit-2">
                        Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                      </p>
                      <button className="CTA-11">
                        <div className="text-wrapper-56">Schedule a call now</div>
                        <img className="arrow-forward-3" alt="Arrow forward" src="/msp/arrow-forward-94.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {screenWidth < 1440 && (
          <div className="frame-78">
            <div className="frame-79">
              <img className="deepmind" alt="Deepmind" src="/msp/deepmind-8hereyc6zt0-unsplash-1-3.png" />
              <div className="frame-80">
                <div className="frame-81">
                  <div className="text-wrapper-68">Recruitment Process</div>
                  <p className="automate-the-entire">
                    Automate the entire recruitment lifecycle &amp; enhances the process of sourcing, screening &amp;
                    recruitment.
                  </p>
                </div>
                <div className="frame-82">
                  <div className="text-wrapper-69">Applicant Friendly</div>
                </div>
                <div className="frame-83">
                  <div className="text-wrapper-69">Unprecedented automation</div>
                </div>
                <div className="frame-82">
                  <div className="text-wrapper-69">Data Integration</div>
                </div>
                <div className="frame-8" />
              </div>
            </div>
            <div className="frame-84">
              <img className="deepmind" alt="Deepmind" src="/msp/deepmind-8hereyc6zt0-unsplash-1-3.png" />
              <div className="frame-80">
                <div className="frame-81">
                  <div className="text-wrapper-68">Recruitment Process</div>
                  <p className="automate-the-entire">
                    Automate the entire recruitment lifecycle &amp; enhances the process of sourcing, screening &amp;
                    recruitment.
                  </p>
                </div>
                <div className="frame-82">
                  <div className="text-wrapper-69">Applicant Friendly</div>
                </div>
                <div className="frame-83">
                  <div className="text-wrapper-69">Unprecedented automation</div>
                </div>
                <div className="frame-82">
                  <div className="text-wrapper-69">Data Integration</div>
                </div>
                <div className="frame-8" />
              </div>
            </div>
            <div className="frame-85">
              <img className="deepmind" alt="Deepmind" src="/msp/deepmind-8hereyc6zt0-unsplash-1-3.png" />
              <div className="frame-80">
                <div className="frame-81">
                  <div className="text-wrapper-68">Recruitment Process</div>
                  <p className="automate-the-entire">
                    Automate the entire recruitment lifecycle &amp; enhances the process of sourcing, screening &amp;
                    recruitment.
                  </p>
                </div>
                <div className="frame-82">
                  <div className="text-wrapper-69">Applicant Friendly</div>
                </div>
                <div className="frame-83">
                  <div className="text-wrapper-69">Unprecedented automation</div>
                </div>
                <div className="frame-82">
                  <div className="text-wrapper-69">Data Integration</div>
                </div>
                <div className="frame-8" />
              </div>
            </div>
          </div>
        )}

        {screenWidth >= 1440 && (
          <>
            <div className="overlap-22">
              <div className="overlap-23">
                <div className="group-20">
                  <div className="overlap-24">
                    <div className="carousel-3">
                      <div className="frame-86">
                        <div className="overlap-group-9">
                          <img className="rectangle-22" alt="Rectangle" src="/msp/rectangle-26-3.png" />
                          <img
                            className="shutterstock-2"
                            alt="Shutterstock"
                            src="/msp/shutterstock-1704596071-1-1.png"
                          />
                          <div className="rectangle-23" />
                          <Cta
                            arrowForward="/msp/arrow-forward-99.svg"
                            className="CTA-12"
                            divClassName="CTA-13"
                            property1="default"
                            text="About us"
                          />
                        </div>
                      </div>
                      <div className="frame-53">
                        <img className="rectangle-24" alt="Rectangle" />
                        <div className="overlap-18">
                          <div className="frame-54">
                            <div className="text-wrapper-47">300+ Internal Staff</div>
                            <div className="frame-55">
                              <p className="our-client-and">
                                {" "}
                                Our client and solution-driven team structure assure maximum leverage of resources for
                                your business. We are your industry-leading growth partners and are trusted by high-end
                                companies for our commitment and timely delivery with efficient and commendable talent
                                fits.
                              </p>
                              <button className="CTA-8">
                                <div className="text-wrapper-48">Learn More</div>
                                <img className="arrow-forward-4" alt="Arrow forward" src="/msp/arrow-forward-100.png" />
                              </button>
                            </div>
                          </div>
                          <div className="text-wrapper-49">Why work with us?</div>
                          <div className="frame-56">
                            <div className="ellipse-8" />
                            <div className="ellipse-9" />
                            <div className="ellipse-8" />
                          </div>
                        </div>
                      </div>
                      <Carousel
                        arrowForward="/msp/arrow-forward-100.png"
                        arrowForwardClassName="carousel-03-instance"
                        className="carousel-03"
                      />
                    </div>
                    <p className="we-are-your-growth-2">
                      We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                      team of industry experts, management practitioners, and training partners catered to your growth.
                    </p>
                  </div>
                </div>
                <div className="frame-87">
                  <img className="deepmind-hereyczt" alt="Deepmind" src="/msp/deepmind-8hereyc6zt0-unsplash-1-4.png" />
                  <div className="frame-88">
                    <div className="frame-81">
                      <div className="text-wrapper-70">Supplier Management</div>
                      <p className="text-wrapper-71">
                        A robust tool that helps businesses maintain staffing effectiveness and compliance while
                        utilizing an extended third-party network.
                      </p>
                    </div>
                    <div className="frame-82">
                      <p className="text-wrapper-72">A Comprehensive and effective Database</p>
                    </div>
                    <div className="frame-82">
                      <div className="text-wrapper-72">Business Intelligence</div>
                    </div>
                    <div className="frame-82">
                      <div className="text-wrapper-72">Evaluation</div>
                    </div>
                    <div className="frame-8" />
                  </div>
                </div>
              </div>
              <div className="frame-89">
                <img className="deepmind-hereyczt" alt="Deepmind" src="/msp/deepmind-8hereyc6zt0-unsplash-1-4.png" />
                <div className="frame-88">
                  <div className="frame-81">
                    <div className="text-wrapper-70">Recruitment Process</div>
                    <p className="text-wrapper-71">
                      Automate the entire recruitment lifecycle &amp; enhances the process of sourcing, screening &amp;
                      recruitment.
                    </p>
                  </div>
                  <div className="frame-82">
                    <div className="text-wrapper-72">Applicant Friendly</div>
                  </div>
                  <div className="frame-82">
                    <div className="text-wrapper-72">Unprecedented automation</div>
                  </div>
                  <div className="frame-82">
                    <div className="text-wrapper-72">Data Integration</div>
                  </div>
                  <div className="frame-8" />
                </div>
              </div>
              <div className="frame-90">
                <img className="deepmind-hereyczt" alt="Deepmind" src="/msp/deepmind-8hereyc6zt0-unsplash-1-4.png" />
                <div className="frame-91">
                  <div className="frame-92">
                    <div className="text-wrapper-73">Compliance Management</div>
                    <p className="text-wrapper-74">
                      The principal employer is responsible for managing the labour compliances of the contingent staff.
                      Our tools aid in tracking compliance status of every supplier.
                    </p>
                  </div>
                  <div className="frame-82">
                    <div className="text-wrapper-72">Immediate Email triggers</div>
                  </div>
                  <div className="frame-82">
                    <div className="text-wrapper-72">Real-time reports on compliance</div>
                  </div>
                  <div className="frame-82">
                    <div className="text-wrapper-72">Automated communication</div>
                  </div>
                  <div className="frame-8" />
                </div>
              </div>
            </div>
            <div className="overlap-25">
              <div className="frame-93">
                <div className="frame-65">
                  <div className="frame-66">
                    <div className="frame-67">
                      <div className="frame-68">
                        <p className="text-wrapper-57">Trusted by Fortune 500 Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-69">
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
          </>
        )}
        <Footer/>
      </div>
    </div>
  );
};
