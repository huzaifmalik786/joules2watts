import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Carousel } from "../../components/staffing/Carousel";
import { Cta } from "../../components/staffing/Cta";
import { PropertyDefaultWrapper } from "../../components/staffing/PropertyDefaultWrapper";
import { StateDefaultWrapper } from "../../components/staffing/StateDefaultWrapper";
import { Header1 } from "../../icons/Header1";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
import "./style.css";

export const Staffing = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="staffing">
      <div
        className="iphone"
        style={{
          height: screenWidth < 450 ? "9833px" : screenWidth >= 450 ? "5542px" : undefined,
          width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
        }}
      >
        <Header />
        <Header1 className="header mobile-only" />

        <div
          className="frame-4"
          style={{
            height: screenWidth < 450 ? "562px" : screenWidth >= 450 ? "1243px" : undefined,
            left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "-1px" : undefined,
            top: screenWidth < 450 ? "60px" : screenWidth >= 450 ? "0" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1442px" : undefined,
          }}
        >
          <div className="overlap mobile-only">
            <div className="frame-5">
              <div className="overlap-2">
                <div className="overlap-3">
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                  <div className="rectangle-2" />
                  <div className="rectangle-3" />
                </div>
                <div className="overlap-group-2">
                  <img
                    className="business-people"
                    alt="Business people"
                    src="/staffing/business-people-walking-modern-glass-600w-670152970-1-1.png"
                  />
                  <div className="rectangle-4" />
                </div>
              </div>
              <img className="ellipse-5" alt="Ellipse" src="/staffing/arrow-forward-ios-1.png" />
            </div>
            <div className="frame-6">
              <p className="text-wrapper-5">
                Acquire top talent when you need it with our flexible staffing solutions.
              </p>
              <p className="text-wrapper-6">
                JoulestoWatts Flexible staffing services helps employers find temporary and direct hires through a
                streamlined hiring process optimized for quick and cost-effective recruitment.
              </p>
              <Cta arrowForward="/staffing/arrow-forward-80.svg" className="CTA-instance" />
            </div>
          </div>

          <div className="desktop-only">
            <img className="rectangle-5" alt="Rectangle" src="/staffing/rectangle-77.svg" />
            <img
              className="business-people-2"
              alt="Business people"
              src="/staffing/business-people-walking-modern-glass-600w-670152970-1-1.png"
            />
            <div className="rectangle-6" />
            <div className="frame-7">
              <div className="div-wrapper">
                <p className="text-wrapper-7">
                  Acquire top talent when you need it with our flexible staffing solutions.
                </p>
              </div>
              <p className="joulestowatts">
                <span className="span">
                  JoulestoWatts Flexible staffing services helps employers find temporary and direct hires through a
                  streamlined hiring process optimized for{" "}
                </span>
                <span className="text-wrapper-8">quick and cost-effective recruitment</span>
                <span className="span">.</span>
              </p>
              <PropertyDefaultWrapper
                arrowForward="/staffing/arrow-forward-79.svg"
                arrowForwardClassName="CTA-3"
                className="instance-node"
                divClassName="CTA-2"
                property1="default"
                text="Connect with us"
              />
            </div>
            <img className="rectangle-7" alt="Rectangle" src="/staffing/rectangle-76-2.svg" />
            <div className="group">
              <div className="group-2">
                <div className="overlap-4">
                  <div className="overlap-wrapper">
                    <div className="overlap-5">
                      <div className="frame-8">
                        <div className="overlap-group-3">
                          <img className="group-3" alt="Group" src="/staffing/group-7.png" />
                          <img className="vector" alt="Vector" src="/staffing/vector-6-1.svg" />
                          <img className="vector-2" alt="Vector" src="/staffing/vector-8-1.svg" />
                          <img className="vector-3" alt="Vector" src="/staffing/vector-10-2.svg" />
                          <img className="vector-4" alt="Vector" src="/staffing/vector-7-1.svg" />
                          <img className="vector-5" alt="Vector" src="/staffing/vector-9-2.svg" />
                          <div className="gamification-based">
                            Gamification
                            <br />
                            based hiring
                          </div>
                          <div className="text-wrapper-9">Crowd Sourcing</div>
                          <div className="acceleration-through">
                            Acceleration
                            <br />
                            through
                            <br />
                            Automation
                          </div>
                          <div className="real-time-dashboards">
                            Real time
                            <br />
                            Dashboards
                          </div>
                          <div className="text-wrapper-10">Machine learning</div>
                          <div className="text-wrapper-11">Social media integration</div>
                          <div className="employee-experience">
                            Employee <br />
                            experience
                          </div>
                        </div>
                        <div className="text-wrapper-12">Integrated platforms</div>
                      </div>
                      <img className="group-4" alt="Group" src="/staffing/group-5.png" />
                      <img className="group-5" alt="Group" src="/staffing/group-6.png" />
                      <img className="vector-6" alt="Vector" src="/staffing/vector-10-1.svg" />
                      <img className="vector-7" alt="Vector" src="/staffing/vector-9-1.svg" />
                    </div>
                  </div>
                  <img className="apple-arcade" alt="Apple arcade" src="/staffing/apple-arcade.png" />
                  <img className="crowd" alt="Crowd" src="/staffing/crowd.png" />
                  <img
                    className="automatic-brightness"
                    alt="Automatic brightness"
                    src="/staffing/automatic-brightness.png"
                  />
                  <img className="dashboard-layout" alt="Dashboard layout" src="/staffing/dashboard-layout.png" />
                  <img className="payroll" alt="Payroll" src="/staffing/payroll.png" />
                  <img className="checked-laptop" alt="Checked laptop" src="/staffing/checked-laptop.png" />
                  <img className="group-task" alt="Group task" src="/staffing/group-task.png" />
                  <img className="microsoft-mixer" alt="Microsoft mixer" src="/staffing/microsoft-mixer.png" />
                </div>
                <p className="text-wrapper-13">
                  JoulestoWatts uses an outsourcing strategy to recruit individuals from a sizable database of 1.5
                  million potential candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="overlap-7"
          style={{
            backgroundColor: screenWidth >= 450 ? "#f6f7f8" : screenWidth < 450 ? "#022c27" : undefined,
            height: screenWidth >= 450 ? "1562px" : screenWidth < 450 ? "1581px" : undefined,
            top: screenWidth >= 450 ? "1244px" : screenWidth < 450 ? "622px" : undefined,
            width: screenWidth >= 450 ? "1449px" : screenWidth < 450 ? "390px" : undefined,
          }}
        >
          <div
            className="frame-17"
            style={{
              height: screenWidth < 450 ? "1242px" : screenWidth >= 450 ? "731px" : undefined,
              left: screenWidth < 450 ? "20px" : screenWidth >= 450 ? "59px" : undefined,
              top: screenWidth < 450 ? "294px" : screenWidth >= 450 ? "73px" : undefined,
              width: screenWidth < 450 ? "349px" : screenWidth >= 450 ? "961px" : undefined,
            }}
          >
            <div
              className="frame-18"
              style={{
                alignItems: screenWidth < 450 ? "center" : undefined,
                display: screenWidth < 450 ? "inline-flex" : undefined,
                flexDirection: screenWidth < 450 ? "column" : undefined,
                gap: screenWidth < 450 ? "12px" : undefined,
                height: screenWidth >= 450 ? "731px" : undefined,
                left: screenWidth < 450 ? "175px" : screenWidth >= 450 ? "0" : undefined,
                top: screenWidth < 450 ? "134px" : screenWidth >= 450 ? "0" : undefined,
                width: screenWidth >= 450 ? "829px" : undefined,
              }}
            >
              <div className="mobile-only">
                <img className="group-7" alt="Group" src="/staffing/group-8.png" />
                <div className="text-wrapper-24">Crowd Sourcing</div>
                <img className="crowd-2" alt="Crowd" src="/staffing/crowd.png" />
              </div>

              <div className="desktop-only">
                <div className="text-wrapper-25">JoulestoWatts Bulk delivery capability</div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-8">
                    <div className="rectangle-8" />
                    <p className="text-wrapper-26">Leadership with great delivery and operations setup expertise</p>
                    <div className="img-wrapper">
                      <img className="connect" alt="Connect" src="/staffing/connect.png" />
                    </div>
                  </div>
                </div>
                <div className="group-8">
                  <div className="overlap-9">
                    <div className="rectangle-9" />
                    <p className="text-wrapper-27">Tailored processes and methodologies for bulk hiring</p>
                    <div className="img-wrapper">
                      <img className="process" alt="Process" src="/staffing/process.png" />
                    </div>
                  </div>
                </div>
                <div className="group-9">
                  <div className="overlap-8">
                    <div className="rectangle-10" />
                    <div className="text-wrapper-28">Time Bound fulfillment commitment</div>
                    <div className="img-wrapper">
                      <img className="time" alt="Time" src="/staffing/time.png" />
                    </div>
                  </div>
                </div>
                <div className="group-10">
                  <div className="overlap-8">
                    <div className="rectangle-10" />
                    <p className="text-wrapper-28">Customized assessment solutions through proven platforms</p>
                    <div className="img-wrapper">
                      <img className="workflow" alt="Workflow" src="/staffing/workflow.png" />
                    </div>
                  </div>
                </div>
                <div className="group-11">
                  <div className="overlap-10">
                    <div className="group-12">
                      <div className="overlap-group-4">
                        <p className="text-wrapper-29">
                          Curated talent pool on platforms designed as per expertise needed
                        </p>
                      </div>
                    </div>
                    <div className="img-wrapper">
                      <img
                        className="add-user-group-man"
                        alt="Add user group man"
                        src="/staffing/add-user-group-man-man.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overlap-11"
              style={{
                alignItems: screenWidth >= 450 ? "flex-start" : undefined,
                display: screenWidth >= 450 ? "inline-flex" : undefined,
                flexDirection: screenWidth >= 450 ? "column" : undefined,
                gap: screenWidth >= 450 ? "16px" : undefined,
                height: screenWidth < 450 ? "978px" : undefined,
                justifyContent: screenWidth >= 450 ? "center" : undefined,
                left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "749px" : undefined,
                top: screenWidth < 450 ? "264px" : screenWidth >= 450 ? "158px" : undefined,
                width: screenWidth < 450 ? "349px" : undefined,
              }}
            >
              <div
                className="overlap-22"
                style={{
                  color: screenWidth >= 450 ? "#2e5053" : undefined,
                  fontFamily: screenWidth >= 450 ? "var(--title-mega-font-family)" : undefined,
                  fontSize: screenWidth >= 450 ? "var(--title-mega-font-size)" : undefined,
                  fontStyle: screenWidth >= 450 ? "var(--title-mega-font-style)" : undefined,
                  fontWeight: screenWidth >= 450 ? "var(--title-mega-font-weight)" : undefined,
                  height: screenWidth < 450 ? "838px" : screenWidth >= 450 ? "48px" : undefined,
                  left: screenWidth < 450 ? "0" : undefined,
                  letterSpacing: screenWidth >= 450 ? "var(--title-mega-letter-spacing)" : undefined,
                  lineHeight: screenWidth >= 450 ? "var(--title-mega-line-height)" : undefined,
                  marginTop: screenWidth >= 450 ? "-1.00px" : undefined,
                  position: screenWidth < 450 ? "absolute" : screenWidth >= 450 ? "relative" : undefined,
                  textAlign: screenWidth >= 450 ? "center" : undefined,
                  top: screenWidth < 450 ? "140px" : undefined,
                  whiteSpace: screenWidth >= 450 ? "nowrap" : undefined,
                  width: screenWidth < 450 ? "349px" : screenWidth >= 450 ? "114px" : undefined,
                }}
              >
                <div className="mobile-only">
                  <div className="frame-19">
                    <img className="group-13" alt="Group" src="/staffing/group-9.png" />
                    <div className="text-wrapper-30">
                      Real time
                      <br />
                      Dashboards
                    </div>
                    <img className="dashboard-layout-2" alt="Dashboard layout" src="/staffing/dashboard-layout.png" />
                  </div>
                  <div className="overlap-group-5">
                    <div className="frame-20">
                      <div className="checked-laptop-wrapper">
                        <img className="checked-laptop-2" alt="Checked laptop" src="/staffing/checked-laptop.png" />
                      </div>
                      <div className="text-wrapper-30">Machine learning</div>
                    </div>
                    <div className="frame-21">
                      <div className="microsoft-mixer-wrapper">
                        <img className="microsoft-mixer-2" alt="Microsoft mixer" src="/staffing/microsoft-mixer.png" />
                      </div>
                      <div className="text-wrapper-30">Integrated platforms</div>
                    </div>
                    <div className="frame-22">
                      <div className="payroll-wrapper">
                        <img className="payroll-2" alt="Payroll" src="/staffing/payroll.png" />
                      </div>
                      <div className="text-wrapper-30">
                        Employee <br />
                        experience
                      </div>
                    </div>
                    <div className="frame-23">
                      <div className="group-task-wrapper">
                        <img className="group-task-2" alt="Group task" src="/staffing/group-task.png" />
                      </div>
                      <div className="text-wrapper-30">Social media integration</div>
                    </div>
                  </div>
                </div>

                <div className="desktop-only">40+</div>
              </div>
              <div
                className="frame-77"
                style={{
                  alignItems: screenWidth < 450 ? "center" : undefined,
                  color: screenWidth >= 450 ? "#2c3e47" : undefined,
                  display: screenWidth < 450 ? "inline-flex" : undefined,
                  flexDirection: screenWidth < 450 ? "column" : undefined,
                  fontFamily: screenWidth >= 450 ? "'Source Sans Pro', Helvetica" : undefined,
                  fontSize: screenWidth >= 450 ? "17px" : undefined,
                  fontWeight: screenWidth >= 450 ? "600" : undefined,
                  gap: screenWidth < 450 ? "12px" : undefined,
                  height: screenWidth >= 450 ? "43px" : undefined,
                  left: screenWidth < 450 ? "0" : undefined,
                  letterSpacing: screenWidth >= 450 ? "-0.17px" : undefined,
                  lineHeight: screenWidth >= 450 ? "23.8px" : undefined,
                  position: screenWidth < 450 ? "absolute" : screenWidth >= 450 ? "relative" : undefined,
                  top: screenWidth < 450 ? "0" : undefined,
                  width: screenWidth >= 450 ? "197px" : undefined,
                }}
              >
                <div className="mobile-only">
                  <div className="automatic-brightness-wrapper">
                    <img
                      className="automatic-brightness-2"
                      alt="Automatic brightness"
                      src="/staffing/automatic-brightness.png"
                    />
                  </div>
                  <div className="text-wrapper-30">
                    Acceleration
                    <br />
                    through
                    <br />
                    Automation
                  </div>
                </div>

                <p className="text-wrapper-90 desktop-only">Clients with who we have delivered bulk deals</p>
              </div>
            </div>
            <div
              className="frame-24"
              style={{
                alignItems: screenWidth < 450 ? "center" : screenWidth >= 450 ? "flex-start" : undefined,
                gap: screenWidth < 450 ? "12px" : screenWidth >= 450 ? "16px" : undefined,
                left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "754px" : undefined,
                top: screenWidth < 450 ? "0" : screenWidth >= 450 ? "354px" : undefined,
              }}
            >
              <div className="mobile-only">
                <img className="group-7" alt="Group" src="/staffing/group-12.png" />
                <div className="text-wrapper-24">
                  Gamification
                  <br />
                  based hiring
                </div>
                <img className="apple-arcade-2" alt="Apple arcade" src="/staffing/apple-arcade.png" />
              </div>

              <div className="desktop-only">
                <div className="text-wrapper-31">50+</div>
                <p className="text-wrapper-32">Various Skills covered when working on bulk deals</p>
              </div>
            </div>
          </div>
          <div className="desktop-only">
            <div className="frame-25">
              <div className="frame-26">
                <div className="text-wrapper-33">Industry experts</div>
                <p className="text-wrapper-34">Well versed with industry standards &amp; are highly experienced.</p>
              </div>
            </div>
            <div className="frame-27">
              <div className="frame-28">
                <div className="text-wrapper-33">Payroll experts</div>
                <p className="text-wrapper-34">Experienced with a huge clientele in payroll management.</p>
              </div>
            </div>
            <div className="frame-29">
              <div className="overlap-group-6">
                <div className="frame-30">
                  <div className="text-wrapper-33">Compliance experts</div>
                  <p className="text-wrapper-34">Ensures 100% compliance checks to all processes</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="joulestowatts-uses"
            style={{
              color: screenWidth < 450 ? "#f6f7f8" : screenWidth >= 450 ? "#1f1f1f" : undefined,
              fontSize: screenWidth < 450 ? "24px" : screenWidth >= 450 ? "42px" : undefined,
              height: screenWidth < 450 ? "170px" : screenWidth >= 450 ? "50px" : undefined,
              left: screenWidth < 450 ? "41px" : screenWidth >= 450 ? "325px" : undefined,
              letterSpacing: screenWidth < 450 ? "-0.24px" : screenWidth >= 450 ? "-1.05px" : undefined,
              lineHeight: screenWidth < 450 ? "33.6px" : screenWidth >= 450 ? "50.4px" : undefined,
              top: screenWidth < 450 ? "67px" : screenWidth >= 450 ? "865px" : undefined,
              width: screenWidth < 450 ? "307px" : screenWidth >= 450 ? "827px" : undefined,
            }}
          >
            <p className="text-wrapper-90 mobile-only">
              JoulestoWatts uses an outsourcing strategy to recruit individuals from a sizable database of 1.5 million
              potential candidates.
            </p>

            <p className="text-wrapper-90 desktop-only">Who is on our team?</p>
          </div>
          <div className="desktop-only">
            <div className="frame-31">
              <div className="text-wrapper-35">60+</div>
              <p className="text-wrapper-36">Specialized recruiters only tailor to bulk</p>
            </div>
            <div className="frame-32">
              <div className="text-wrapper-37">2000+</div>
              <p className="text-wrapper-38">J2W Consultants Delivered though various bulk deals</p>
            </div>
          </div>
        </div>
        <div className="overlap-12 desktop-only">
          <div className="frame-33">
            <div className="frame-34">
              <div className="frame-35">
                <div className="frame-36">
                  <div className="frame-37">
                    <p className="text-wrapper-39">Trusted by Fortune 500 Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-38">
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

        <div
          className="overlap-13"
          style={{
            height: screenWidth >= 450 ? "669px" : screenWidth < 450 ? "1727px" : undefined,
            left: screenWidth >= 450 ? "0" : screenWidth < 450 ? "-185px" : undefined,
            top: screenWidth >= 450 ? "4875px" : screenWidth < 450 ? "7246px" : undefined,
            width: screenWidth >= 450 ? "1441px" : screenWidth < 450 ? "742px" : undefined,
          }}
        >
          <div className="carousel-2 mobile-only">
            <div className="frame-39">
              <div className="overlap-group-7">
                <img className="rectangle-11" alt="Rectangle" />
                <div className="frame-40">
                  <div className="linkedin" />
                </div>
                <img className="shutterstock" alt="Shutterstock" src="/staffing/shutterstock-1704596071-1.png" />
                <div className="rectangle-12" />
                <div className="frame-41">
                  <p className="we-are-your-growth">
                    We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                    team of industry experts, management practitioners, and training partners catered to your growth.
                  </p>
                  <PropertyDefaultWrapper
                    arrowForward="/staffing/arrow-forward-81.svg"
                    arrowForwardClassName="CTA-8"
                    className="CTA-6"
                    divClassName="CTA-7"
                    property1="default"
                    text="About us"
                  />
                </div>
              </div>
            </div>
            <div className="frame-42">
              <img className="rectangle-13" alt="Rectangle" />
              <div className="overlap-14">
                <div className="frame-43">
                  <div className="text-wrapper-40">300+ Internal Staff</div>
                  <div className="frame-44">
                    <p className="our-client-and">
                      {" "}
                      Our client and solution-driven team structure assure maximum leverage of resources for your
                      business. We are your industry-leading growth partners and are trusted by high-end companies for
                      our commitment and timely delivery with efficient and commendable talent fits.
                    </p>
                    <button className="CTA-9">
                      <div className="text-wrapper-41">Learn More</div>
                      <img className="arrow-forward-3" alt="Arrow forward" src="/staffing/arrow-forward-ios-1.png" />
                    </button>
                  </div>
                </div>
                <div className="text-wrapper-42">Why work with us?</div>
                <div className="frame-45">
                  <div className="ellipse-7" />
                  <div className="ellipse-8" />
                  <div className="ellipse-7" />
                </div>
              </div>
            </div>
            <Carousel
              arrowForward="/staffing/arrow-forward-ios-1.png"
              arrowForwardClassName="carousel-instance"
              className="carousel-03"
            />
          </div>

          <div
            className="frame-46"
            style={{
              height: screenWidth < 450 ? "1050px" : screenWidth >= 450 ? "380px" : undefined,
              top: screenWidth < 450 ? "677px" : screenWidth >= 450 ? "0" : undefined,
              width: screenWidth < 450 ? "742px" : screenWidth >= 450 ? "1440px" : undefined,
            }}
          >
            <div className="mobile-only">
              <div className="frame-47">
                <div className="overlap-group-8">
                  <div className="rectangle-14" />
                  <div className="frame-48">
                    <div className="frame-34">
                      <div className="frame-35">
                        <div className="frame-36">
                          <div className="frame-37">
                            <p className="text-wrapper-39">Trusted by Fortune 500 Clients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-38">
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
              <div className="frame-49">
                <div className="frame-50">
                  <div className="frame-51">
                    <div className="text-wrapper-43">Ready to get started?</div>
                    <p className="text-wrapper-44">
                      Whether you still have some questions or you’re ready to sign up for a specific services right
                      now, Our specialists are only a message away.
                    </p>
                  </div>
                </div>
                <div className="group-14">
                  <div className="frame-52">
                    <div className="overlap-group-9">
                      <div className="frame-53">
                        <div className="text-wrapper-45">Ready to get started?</div>
                        <p className="are-we-a-good-fit">
                          Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                        </p>
                        <button className="CTA-10">
                          <div className="text-wrapper-46">Schedule a call now</div>
                          <img className="arrow-forward-4" alt="Arrow forward" src="/staffing/arrow-forward-84.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overlap-15 desktop-only">
              <div className="frame-54">
                <div className="frame-55">
                  <div className="frame-56">
                    <div className="text-wrapper-47">Ready to get started?</div>
                    <p className="are-we-a-good-fit-2">
                      Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                    </p>
                  </div>
                  <button className="CTA-11">
                    <div className="text-wrapper-48">Learn More</div>
                    <img className="arrow-forward-4" alt="Arrow forward" src="/staffing/arrow-forward-74.svg" />
                  </button>
                </div>
                <button className="CTA-12">
                  <div className="text-wrapper-46">Schedule a call now</div>
                  <img className="arrow-forward-4" alt="Arrow forward" src="/staffing/arrow-forward-75.svg" />
                </button>
              </div>
              <div className="frame-57">
                <div className="overlap-group-10">
                  <div className="frame-58">
                    <div className="frame-56">
                      <div className="text-wrapper-49">Ready to get started?</div>
                      <p className="text-wrapper-50">
                        Whether you still have some questions or you’re ready to sign up for a specific services right
                        now, Our specialists are only a message away.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="frame-59">
                  <div className="frame-44">
                    <p className="text-wrapper-51">Set up a virtual briefing</p>
                    <p className="text-wrapper-52">
                      Spend time with our executives and experts virtually and discuss current and future business
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-only">
          <div className="overlap-17">
            <div className="rectangle-15" />
            <div className="carousel-3">
              <div className="frame-63">
                <div className="overlap-group-11">
                  <img className="rectangle-16" alt="Rectangle" />
                  <img className="shutterstock-2" alt="Shutterstock" src="/staffing/shutterstock-1704596071-1.png" />
                  <div className="rectangle-17" />
                  <p className="we-are-your-growth-2">
                    We are your growth partners for a wide array of holistic talent solutions.&nbsp;&nbsp;Leverage our
                    team of industry experts, management practitioners, and training partners catered to your growth.
                  </p>
                  <PropertyDefaultWrapper
                    arrowForward="/staffing/arrow-forward-76.svg"
                    arrowForwardClassName="CTA-3"
                    className="CTA-13"
                    divClassName="CTA-2"
                    property1="default"
                    text="Connect with us"
                  />
                </div>
              </div>
              <div className="frame-42">
                <img className="rectangle-18" alt="Rectangle" />
                <div className="overlap-14">
                  <div className="frame-43">
                    <div className="text-wrapper-40">300+ Internal Staff</div>
                    <div className="frame-44">
                      <p className="our-client-and">
                        {" "}
                        Our client and solution-driven team structure assure maximum leverage of resources for your
                        business. We are your industry-leading growth partners and are trusted by high-end companies
                        for our commitment and timely delivery with efficient and commendable talent fits.
                      </p>
                      <button className="CTA-9">
                        <div className="text-wrapper-41">Learn More</div>
                        <img className="arrow-forward-5" alt="Arrow forward" src="/staffing/arrow-forward-ios-1.png" />
                      </button>
                    </div>
                  </div>
                  <div className="text-wrapper-42">Why work with us?</div>
                  <div className="frame-45">
                    <div className="ellipse-7" />
                    <div className="ellipse-8" />
                    <div className="ellipse-7" />
                  </div>
                </div>
              </div>
              <Carousel
                arrowForward="/staffing/arrow-forward-ios-1.png"
                arrowForwardClassName="carousel-03-instance"
                className="carousel-03"
              />
            </div>
          </div>
          <div className="group-17">
            <div className="text-wrapper-60">Our features</div>
            <div className="row">
              <div className="box">
                <img className="opened-folder" alt="Opened folder" src="/staffing/opened-folder.png" />
                <div className="header-3">
                  <div className="text-wrapper-61">Employee Experience Zone:</div>
                  <p className="text-wrapper-62">
                    Our team entertains all kinds of enquiries regarding services ranging from finance to HR.
                  </p>
                </div>
              </div>
              <div className="box-2">
                <img className="info" alt="Info" src="/staffing/info.png" />
                <div className="header-4">
                  <div className="text-wrapper-63">Detailed Induction Program:</div>
                  <p className="text-wrapper-64">
                    We conduct thorough induction programmes that familiarise newly hired candidates with details such
                    as work hours, organisational culture, and so on, and prepare them to join the company.
                  </p>
                </div>
              </div>
              <div className="box-3">
                <img className="my-space" alt="My space" src="/staffing/myspace.png" />
                <div className="header-5">
                  <div className="text-wrapper-65">Monthly Connect:</div>
                  <p className="we-hold-open-house">
                    We hold open house discussions for employees&nbsp;&nbsp;on a monthly basis to invite discussions
                    or to share experiences, concerns, and updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-2">
              <div className="box-4">
                <img className="resume-website" alt="Resume website" src="/staffing/resume-website.png" />
                <div className="header-5">
                  <div className="text-wrapper-66">Dedicated HR Support</div>
                  <p className="text-wrapper-67">
                    Employees are open to reach out to the HR for any kind of support that they may need.
                  </p>
                </div>
              </div>
              <div className="box-5">
                <img className="prescrptsion" alt="Prescrptsion" src="/staffing/prescrptsion.svg" />
                <div className="header-5">
                  <div className="text-wrapper-68">Performance Review</div>
                  <p className="text-wrapper-69">
                    An insightful review is prepared on the performance in order to provide guidance.
                  </p>
                </div>
              </div>
              <div className="box-6">
                <img className="prize" alt="Prize" src="/staffing/prize.png" />
                <div className="header-6">
                  <div className="quarterly-r-r">Quarterly R &amp; R</div>
                  <p className="text-wrapper-70">
                    We conduct a quarterly rewards and recognition ceremony to appreciate all the hard work.
                  </p>
                </div>
              </div>
            </div>
            <div className="row-3">
              <div className="box-4">
                <img className="birth-date" alt="Birth date" src="/staffing/birth-date.png" />
                <div className="header-5">
                  <div className="text-wrapper-71">You connect</div>
                  <p className="text-wrapper-67">
                    An initiative to connect with all the employees on their birthdays, festivals or important
                    occasions.
                  </p>
                </div>
              </div>
              <div className="box-5">
                <img className="computer-chat" alt="Computer chat" src="/staffing/computer-chat.png" />
                <div className="header-5">
                  <div className="text-wrapper-72">Two Portals</div>
                  <p className="text-wrapper-69">
                    We have two portals for employee engagement online for information access and support.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-wrapper-73">
              JoulestoWatts is distinguished by its unique combination of expertise, experience, technology, and
              thought leadership. The team operates on a completely cloud based infrastructure with highly scalable
              processes.
            </p>
          </div>
        </div>

        <div className="mobile-only">
          <div className="text-wrapper-74">JoulestoWatts Bulk delivery capability</div>
          <div className="frame-64">
            <div className="overlap-18">
              <div className="group-18">
                <div className="overlap-group-12">
                  <div className="rectangle-19" />
                  <p className="text-wrapper-75">Leadership with great delivery and operations setup expertise</p>
                  <div className="group-19">
                    <img className="connect" alt="Connect" src="/staffing/connect.png" />
                  </div>
                </div>
              </div>
              <div className="group-20">
                <div className="overlap-19">
                  <div className="rectangle-20" />
                  <p className="text-wrapper-76">Tailored processes and methodologies for bulk hiring</p>
                  <div className="group-19">
                    <img className="process" alt="Process" src="/staffing/process.png" />
                  </div>
                </div>
              </div>
              <div className="group-21">
                <div className="overlap-group-12">
                  <div className="rectangle-21" />
                  <div className="text-wrapper-77">Time Bound fulfillment commitment</div>
                  <div className="group-19">
                    <img className="time" alt="Time" src="/staffing/time.png" />
                  </div>
                </div>
              </div>
              <div className="group-22">
                <div className="overlap-group-12">
                  <div className="rectangle-21" />
                  <p className="text-wrapper-78">Customized assessment solutions through proven platforms</p>
                  <div className="group-19">
                    <img className="workflow" alt="Workflow" src="/staffing/workflow.png" />
                  </div>
                </div>
              </div>
              <div className="group-23">
                <div className="overlap-20">
                  <div className="group-24">
                    <div className="overlap-group-13">
                      <p className="text-wrapper-79">
                        Curated talent pool on platforms designed as per expertise needed
                      </p>
                    </div>
                  </div>
                  <div className="group-19">
                    <img
                      className="add-user-group-man"
                      alt="Add user group man"
                      src="/staffing/add-user-group-man-man.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-65">
            <div className="text-wrapper-80">40+</div>
            <p className="text-wrapper-81">Clients with who we have delivered bulk deals</p>
          </div>
          <div className="frame-66">
            <div className="text-wrapper-80">50+</div>
            <p className="text-wrapper-82">Various Skills covered when working on bulk deals</p>
          </div>
          <div className="frame-67">
            <div className="text-wrapper-80">60+</div>
            <p className="text-wrapper-83">Specialized recruiters only tailor to bulk</p>
          </div>
          <div className="frame-68">
            <div className="text-wrapper-80">2000+</div>
            <p className="text-wrapper-84">J2W Consultants Delivered though various bulk deals</p>
          </div>
          <p className="text-wrapper-85">Who is on our team?</p>
          <div className="frame-69">
            <div className="frame-70">
              <div className="frame-71">
                <div className="text-wrapper-86">Industry experts</div>
                <p className="text-wrapper-87">Well versed with industry standards &amp; are highly experienced.</p>
              </div>
            </div>
            <div className="frame-72">
              <div className="frame-73">
                <div className="text-wrapper-86">Payroll experts</div>
                <p className="text-wrapper-87">Experienced with a huge clientele in payroll management.</p>
              </div>
            </div>
            <div className="frame-74">
              <div className="overlap-group-14">
                <div className="frame-75">
                  <div className="text-wrapper-86">Compliance experts</div>
                  <p className="text-wrapper-87">Ensures 100% compliance checks to all processes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-21">
            <div className="frame-76">
              <div className="row-4">
                <div className="box">
                  <img className="opened-folder" alt="Opened folder" src="/staffing/opened-folder.png" />
                  <div className="header-3">
                    <div className="text-wrapper-61">Employee Experience Zone:</div>
                    <p className="text-wrapper-62">
                      Our team entertains all kinds of enquiries regarding services ranging from finance to HR.
                    </p>
                  </div>
                </div>
                <div className="box-2">
                  <img className="info" alt="Info" src="/staffing/info.png" />
                  <div className="header-4">
                    <div className="text-wrapper-63">Detailed Induction Program:</div>
                    <p className="text-wrapper-64">
                      We conduct thorough induction programmes that familiarise newly hired candidates with details
                      such as work hours, organisational culture, and so on, and prepare them to join the company.
                    </p>
                  </div>
                </div>
                <div className="box-3">
                  <img className="my-space" alt="My space" src="/staffing/myspace.png" />
                  <div className="header-5">
                    <div className="text-wrapper-65">Monthly Connect:</div>
                    <p className="we-hold-open-house">
                      We hold open house discussions for employees&nbsp;&nbsp;on a monthly basis to invite discussions
                      or to share experiences, concerns, and updates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row-4">
                <div className="box-4">
                  <img className="resume-website" alt="Resume website" src="/staffing/resume-website.png" />
                  <div className="header-5">
                    <div className="text-wrapper-66">Dedicated HR Support</div>
                    <p className="text-wrapper-67">
                      Employees are open to reach out to the HR for any kind of support that they may need.
                    </p>
                  </div>
                </div>
                <div className="box-5">
                  <img className="prescrptsion" alt="Prescrptsion" src="/staffing/prescrptsion-1.svg" />
                  <div className="header-5">
                    <div className="text-wrapper-68">Performance Review</div>
                    <p className="text-wrapper-69">
                      An insightful review is prepared on the performance in order to provide guidance.
                    </p>
                  </div>
                </div>
                <div className="box-6">
                  <img className="prize" alt="Prize" src="/staffing/prize.png" />
                  <div className="header-6">
                    <div className="quarterly-r-r">Quarterly R &amp; R</div>
                    <p className="text-wrapper-70">
                      We conduct a quarterly rewards and recognition ceremony to appreciate all the hard work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row-5">
                <div className="box-4">
                  <img className="birth-date" alt="Birth date" src="/staffing/birth-date.png" />
                  <div className="header-5">
                    <div className="text-wrapper-71">You connect</div>
                    <p className="text-wrapper-67">
                      An initiative to connect with all the employees on their birthdays, festivals or important
                      occasions.
                    </p>
                  </div>
                </div>
                <div className="box-5">
                  <img className="computer-chat" alt="Computer chat" src="/staffing/computer-chat.png" />
                  <div className="header-5">
                    <div className="text-wrapper-72">Two Portals</div>
                    <p className="text-wrapper-69">
                      We have two portals for employee engagement online for information access and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-wrapper-88">
              JoulestoWatts is distinguished by its unique combination of expertise, experience, technology, and
              thought leadership. The team operates on a completely cloud based infrastructure with highly scalable
              processes.
            </p>
          </div>
          <div className="text-wrapper-89">Our features</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
