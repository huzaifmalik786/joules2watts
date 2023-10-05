import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";

export const Leadership = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="leadership">
      <div
        className="iphone"
        style={{
          height: screenWidth < 1440 ? "4162px" : screenWidth >= 1440 ? "3023px" : undefined,
          width: screenWidth < 1440 ? "390px" : screenWidth >= 1440 ? "1440px" : undefined,
        }}
      >
        <Header />
        {screenWidth < 1440 && (
          <>
            <div className="div-wrapper">
              <div className="frame-6">
                <div className="frame-7">
                  <img className="direction" alt="Direction" src="/leadership/arrow-forward-ios-1.png" />
                  <p className="text-wrapper-9">
                    Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind MGA Hospital, Subbaiah Reddy
                    Colony, Marathahalli, Bengaluru, Karnataka 560037
                  </p>
                  <div className="text-wrapper-10">View Larger Map</div>
                  <div className="frame-8">
                    <div className="text-wrapper-11">JoulestoWatts Business Solution</div>
                  </div>
                </div>
              </div>
            </div>
            <Header1 className="header" />
          </>
        )}

        <div
          className="overlap"
          style={{
            height: screenWidth >= 1440 ? "718px" : screenWidth < 1440 ? "980px" : undefined,
            width: screenWidth >= 1440 ? "1448px" : screenWidth < 1440 ? "394px" : undefined,
          }}
        >
          <img
            className="modern-geometrical"
            style={{
              height: screenWidth >= 1440 ? "486px" : screenWidth < 1440 ? "328px" : undefined,
              width: screenWidth >= 1440 ? "1448px" : screenWidth < 1440 ? "394px" : undefined,
            }}
            alt="Modern geometrical"
            src="/leadership/modern-geometrical-wallpaper-with-round-lines-1.png"
          />
          <img
            className="rectangle"
            style={{
              height: screenWidth >= 1440 ? "621px" : screenWidth < 1440 ? "708px" : undefined,
              left: screenWidth >= 1440 ? "268px" : screenWidth < 1440 ? "4px" : undefined,
              top: screenWidth >= 1440 ? "97px" : screenWidth < 1440 ? "10px" : undefined,
              width: screenWidth >= 1440 ? "917px" : screenWidth < 1440 ? "390px" : undefined,
            }}
            alt="Rectangle"
            src={
              screenWidth >= 1440
                ? "/leadership/rectangle-151-1.svg"
                : screenWidth < 1440
                  ? "/leadership/rectangle-151-2.svg"
                  : undefined
            }
          />
          <img
            className="leadership"
            style={{
              height: screenWidth >= 1440 ? "54px" : screenWidth < 1440 ? "36px" : undefined,
              left: screenWidth >= 1440 ? "592px" : screenWidth < 1440 ? "117px" : undefined,
              top: screenWidth >= 1440 ? "82px" : screenWidth < 1440 ? "89px" : undefined,
              width: screenWidth >= 1440 ? "270px" : screenWidth < 1440 ? "180px" : undefined,
            }}
            alt="Leadership"
            src={screenWidth >= 1440 ? "/leadership/leadership.png" : screenWidth < 1440 ? "/leadership/leadership-6.png" : undefined}
          />
          <div
            className="frame-9"
            style={{
              borderRadius: screenWidth >= 1440 ? "26px" : screenWidth < 1440 ? "19.49px" : undefined,
              display: screenWidth >= 1440 ? "inline-flex" : screenWidth < 1440 ? "flex" : undefined,
              gap: screenWidth >= 1440 ? "10px" : screenWidth < 1440 ? "7.5px" : undefined,
              left: screenWidth >= 1440 ? "128px" : screenWidth < 1440 ? "26px" : undefined,
              padding: screenWidth >= 1440 ? "41px 66px" : screenWidth < 1440 ? "30.74px 20.24px" : undefined,
              top: screenWidth >= 1440 ? "298px" : screenWidth < 1440 ? "237px" : undefined,
              width: screenWidth < 1440 ? "351px" : undefined,
            }}
          >
            {screenWidth >= 1440 && (
              <>
                <div className="frame-10">
                  <img className="element" alt="Element" src="/about/lady.png"/>
                  <div className="frame-11">
                    <div className="frame-12">
                      <div className="text-wrapper-12">Priti Sawant</div>
                    </div>
                    <div className="text-wrapper-13">Founder &amp; CEO, JoulestoWatts</div>
                    <p className="text-wrapper-14">
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
                <img className="linkedin-circled" alt="Linkedin circled" src="/about/linkedin-circled-1.png"/>
              </>
            )}

            {screenWidth < 1440 && (
              <div className="frame-13">
                <img className="img" alt="Element" src="/about/lady.png"/>
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="text-wrapper-15">Priti Sawant</div>
                    <img className="linkedin-circled-2" alt="Linkedin circled" src="/about/linkedin-circled-1.png"/>
                  </div>
                  <div className="text-wrapper-16">Founder &amp; CEO, JoulestoWatts</div>
                  <p className="text-wrapper-17">
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
            )}
          </div>
        </div>
        {screenWidth < 1440 && (
          <>
            <div className="frame-16">
              <div className="frame-13">
                <img className="element-2" alt="Element" src="/about/man.png"/>
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="text-wrapper-15">BM Gupta</div>
                    <img className="linkedin-circled-3" alt="Linkedin circled" src="/about/linkedin-circled-1.png"/>
                  </div>
                  <div className="text-wrapper-16">Chief Operating Officer, JoulestoWatts</div>
                  <p className="text-wrapper-17">
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
            <div className="frame-17">
              <img className="group-2" alt="Group" src="/leadership/group-8851.png" />
              <img className="group-3" alt="Group" src="/leadership/group-8850.png" />
            </div>
            <div className="frame-18">
              <div className="rectangle-2" />
              <div className="frame-19">
                <div className="frame-20">
                  <div className="text-wrapper-18">200+</div>
                  <div className="text-wrapper-19">Clients</div>
                </div>
                <div className="frame-20">
                  <div className="text-wrapper-18">3500+</div>
                  <div className="text-wrapper-19">IT Consultants</div>
                </div>
                <div className="frame-21">
                  <div className="text-wrapper-18">20+</div>
                  <div className="text-wrapper-20">Business Models</div>
                </div>
                <div className="frame-21">
                  <div className="text-wrapper-18">05</div>
                  <div className="text-wrapper-19">Offices</div>
                </div>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1440 && (
          <>
            <div className="frame-22">
              <div className="frame-10">
                <img className="element" alt="Element" src="/about/man.png"/>
                <div className="frame-11">
                  <div className="frame-12">
                    <div className="text-wrapper-21">BM Gupta</div>
                  </div>
                  <div className="text-wrapper-13">Chief Operating Officer, JoulestoWatts</div>
                  <p className="text-wrapper-14">
                    Business Strategist &amp; Leader having more than 30+ years of experience in diversified industry
                    domains including recruitment and staffing, dairy, FMCG, consumer durable, pharmaceuticals,
                    automobile, manufacturing, e-commerce and services sector in India and overseas markets. Over the
                    years, associated with globally reputed and select Fortune 500 companies such as ABC Consultants,
                    Manpower Group, Mother Dairy India, ConAgra, Apollo International, Thakral Corp, Tata Steel and
                    Nestle India.
                    <br />
                    <br />
                    Recognized for decisive leadership and proven ability to face challenges head-on and execute sound
                    decisions while driving different business agendas.
                  </p>
                </div>
              </div>
              <img className="linkedin-circled-4" alt="Linkedin circled" src="/about/linkedin-circled-1.png"/>
            </div>
            <div className="overlap-2">
              <div className="frame-23">
                <div className="frame-24">
                  <div className="frame-25">
                    <div className="frame-26">
                      <div className="frame-27">
                        <div className="text-wrapper-22">Trusted by 500+ Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-28">
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
            <div className="overlap-3">
              <img className="group-4" alt="Group" src="/leadership/group-33.png" />
              <img className="group-5" alt="Group" src="/leadership/group-34.png" />
              <img className="linkedin-circled-5" alt="Linkedin circled" src="/leadership/linkedin-circled-2.png" />
              <img className="linkedin-circled-6" alt="Linkedin circled" src="/leadership/linkedin-circled-2.png"/>
            </div>
            <div className="overlap-4">
              <div className="group-6">
                <div className="frame-29">
                  <div className="frame-20">
                    <div className="text-wrapper-18">200+</div>
                    <div className="text-wrapper-19">Clients</div>
                  </div>
                  <div className="frame-20">
                    <div className="text-wrapper-18">3500+</div>
                    <div className="text-wrapper-19">IT Consultants</div>
                  </div>
                  <div className="frame-20">
                    <div className="text-wrapper-18">20+</div>
                    <div className="text-wrapper-19">Business Models</div>
                  </div>
                  <div className="frame-20">
                    <div className="text-wrapper-18">05</div>
                    <div className="text-wrapper-19">Offices</div>
                  </div>
                </div>
              </div>
              <div className="frame-30">
                <div className="frame-27">
                  <div className="text-wrapper-23">Talent Transformation</div>
                </div>
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </div>
  );
};
