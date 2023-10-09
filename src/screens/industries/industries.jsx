import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";
export const Industries = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="industries">
      <div
        className="iphone"
        style={{
          height: screenWidth < 450 ? "4240px" : screenWidth >= 450 ? "4312px" : undefined,
          width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
        }}
      >
        <Header />
        <div
          className="overlap"
          style={{
            height: screenWidth >= 450 ? "631px" : screenWidth < 450 ? "876px" : undefined,
            left: screenWidth >= 450 ? "-5px" : screenWidth < 450 ? "-10px" : undefined,
            top: screenWidth >= 450 ? "0" : screenWidth < 450 ? "60px" : undefined,
            width: screenWidth >= 450 ? "1447px" : screenWidth < 450 ? "574px" : undefined,
          }}
        >
          <div className="frame desktop-only">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="hud-ball" alt="Hud ball" src="/industries/hud-ball-1.gif" />
              <img className="img" alt="Rectangle" src="/industries/rectangle-137-1.svg" />
            </div>
          </div>

          <div className="overlap-group-wrapper mobile-only">
            <div className="div">
              <img className="rectangle-2" alt="Rectangle" src="/industries/rectangle-139.svg" />
              <div className="overlap-2">
                <img className="rectangle-3" alt="Rectangle" src="/industries/rectangle-137-2.svg" />
                <p className="p">Trusted by Fortune 500 Clients for</p>
                <div className="text-wrapper-2">Talent Transformation</div>
              </div>
            </div>
          </div>

          <img
            className="image"
            style={{
              height: screenWidth >= 450 ? "162px" : screenWidth < 450 ? "457px" : undefined,
              left: screenWidth >= 450 ? "5px" : screenWidth < 450 ? "10px" : undefined,
              top: screenWidth >= 450 ? "89px" : screenWidth < 450 ? "186px" : undefined,
              width: screenWidth >= 450 ? "1440px" : screenWidth < 450 ? "390px" : undefined,
            }}
            alt="Image"
            src={screenWidth >= 450 ? "/industries/image-1-1.svg" : screenWidth < 450 ? "/industries/hud-ball-1.gif" : undefined}
          />
          <div className="frame-2 mobile-only">
            <p className="text-wrapper-3">
              Pioneers in technology-driven recruitment solutions with a wide array of holistic talent solutions
            </p>
            <div className="text-wrapper-4">WE ARE</div>
          </div>

          <div className="desktop-only">
            <div className="text-wrapper-5">Industries</div>
            <div className="frame-wrapper">
              <div className="frame-3">
                <p className="text-wrapper-6">Trusted by Fortune 500 Clients for</p>
                <div className="text-wrapper-7">Talent Transformation</div>
              </div>
            </div>
            <img className="rectangle-4" alt="Rectangle" src="/industries/rectangle-138-2.svg" />
            <div className="heading">
              <div className="frame-4">
                <div className="text-wrapper-8">WE ARE</div>
                <p className="text-wrapper-9">
                  Pioneers in technology-driven recruitment solutions with a wide array of holistic talent solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="overlap-3"
          style={{
            height: screenWidth < 450 ? "1404px" : screenWidth >= 450 ? "2216px" : undefined,
            left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "-4px" : undefined,
            top: screenWidth < 450 ? "2736px" : screenWidth >= 450 ? "1804px" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1578px" : undefined,
          }}
        >

          <div
            className="rectangle-5"
            style={{
              height: screenWidth < 450 ? "587px" : screenWidth >= 450 ? "552px" : undefined,
              left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "6px" : undefined,
              top: screenWidth < 450 ? "0" : screenWidth >= 450 ? "1305px" : undefined,
              width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1443px" : undefined,
            }}
          />
          <div className="mobile-only">
            <div className="frame-11">
              <img className="unknown" alt="Unknown" src="/industries/unknown-2.png" />
              <img className="flipkart-logo" alt="Flipkart logo" src="/industries/flipkart-logo-1.png" />
              <img className="edutech-social-share" alt="Edutech social share" src="/industries/edutech-social-share-1.png" />
              <img className="OLX-logo" alt="Olx logo" src="/industries/olx-logo-1.png" />
              <img className="element-lam" alt="Element lam" src="/industries/14-lam-1.png" />
              <div className="text-wrapper-20">OSBI</div>
              <div className="group-3">
                <div className="overlap-group-2">
                  <div className="text-wrapper-21">OSBI</div>
                  <div className="text-wrapper-22">Payroll</div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-23">SME</div>
          </div>

          <div className="desktop-only">
            <div className="rectangle-6" />
            <div className="IT-services"> IT Services</div>
            <div className="group-4">
              <div className="overlap-5">
                <img
                  className="utypaslbyxwfuwhfdzxd"
                  alt="Utypaslbyxwfuwhfdzxd"
                  src="/industries/utypaslbyxwfuwhfdzxd-1.png"
                />
                <img className="wipro-logo-new-og" alt="Wipro logo new og" src="/logos/wipro-logo-new-og-502x263-1.png" />
              </div>
              <img className="deloitte-logo" alt="Deloitte logo" src="/industries/deloitte-logo-1.png" />
              <div className="group-5">
                <div className="overlap-group-3">
                  <img className="ey-squarelogo" alt="Ey squarelogo" src="/industries/ey-squarelogo-1661856887616-1.png" />
                  <img className="ey-squarelogo-2" alt="Ey squarelogo" src="/industries/ey-squarelogo-1661856887616-2.png" />
                </div>
              </div>
              <img className="ae-dbe-f" alt="Ae dbe f" src="/industries/a1488e15-5dbe-47f7-b28d-0a991d7a8a0a-1.png" />
              <img className="capgemini-logo" alt="Capgemini logo" src="/industries/capgemini-201x-logo-1.png" />
              <img className="element-accenture" alt="Element accenture" src="/industries/20220201-accenture-logo-1.png" />
            </div>
            <div className="group-6">
              <img className="unknown-2" alt="Unknown" src="/industries/unknown-2.png" />
              <img className="flipkart-logo-2" alt="Flipkart logo" src="/industries/flipkart-logo-1.png" />
              <img
                className="edutech-social-share-2"
                alt="Edutech social share"
                src="/industries/edutech-social-share-1.png"
              />
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-6">
                <div className="frame-12">
                  <div className="frame-13">
                    <div className="frame-14">
                      <div className="text-wrapper-24">Ready to get started?</div>
                      <p className="are-we-a-good-fit">
                        Are we a good fit for your company&#39;s challenges? Let’s talk it out today
                      </p>
                    </div>
                    <button className="button">
                      <div className="text-wrapper-25">Learn More</div>
                      <img className="arrow-forward" alt="Arrow forward" src="/industries/arrow-forward-154.svg" />
                    </button>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="overlap-group-4">
                    <div className="frame-16">
                      <div className="frame-14">
                        <div className="text-wrapper-26">Ready to get started?</div>
                        <p className="text-wrapper-27">
                          Whether you still have some questions or you’re ready to sign up for a specific services
                          right now, Our specialists are only a message away.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <p className="text-wrapper-28">Set up a virtual briefing</p>
                      <p className="text-wrapper-29">
                        Spend time with our executives and experts virtually and discuss current and future business
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-30">SME</div>
            <div className="group-7">
              <div className="overlap-7">
                <div className="text-wrapper-31">Products</div>
                <div className="amazon-wrapper">
                  <img className="amazon" alt="Amazon" src="/logos/amazon-1-1.png" />
                </div>
                <div className="sony-logo-wrapper">
                  <img className="sony-logo" alt="Sony logo" src="/industries/sony-logo-1-1.png" />
                </div>
                <div className="env-yodlee-color-wrapper">
                  <img
                    className="env-yodlee-color"
                    alt="Env yodlee color"
                    src="/industries/env-yodlee-color-logo-cmyk-1-1.png"
                  />
                </div>
                <div className="vmware-wrapper">
                  <img className="vmware" alt="Vmware" src="/industries/vmware-1.png" />
                </div>
                <div className="na-logo-black-rgb-wrapper">
                  <img
                    className="na-logo-black-rgb"
                    alt="Na logo black rgb"
                    src="/industries/na-logo-black-rgb-reg-mark-tcm19-21014-1.png"
                  />
                </div>
                <div className="smarten-spaces-logo-wrapper">
                  <img
                    className="smarten-spaces-logo"
                    alt="Smarten spaces logo"
                    src="/industries/smarten-spaces-logo-1.png"
                  />
                </div>
                <div className="overlap-8">
                  <div className="rectangle-7" />
                  <img className="inmobi-logo" alt="Inmobi logo" src="/industries/inmobi-logo-1.png" />
                </div>
                <div className="xylem-logo-wrapper">
                  <img className="xylem-logo" alt="Xylem logo" src="/industries/xylem-logo-1.png" />
                </div>
              </div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-32">OSBI</div>
              <div className="group-9">
                <div className="overlap-group-5">
                  <div className="text-wrapper-33">OSBI</div>
                  <div className="text-wrapper-34">Payroll</div>
                </div>
              </div>
            </div>
            <img className="OLX-logo-2" alt="Olx logo" src="/industries/olx-logo-1.png" />
            <img className="element-lam-2" alt="Element lam" src="/industries/14-lam-1.png" />
            <button className="CTA-2">
              <div className="text-wrapper-35">Schedule a call now</div>
              <img className="arrow-forward" alt="Arrow forward" src="/industries/arrow-forward-155.svg" />
            </button>
          </div>
        </div>
        <div className="frame-19 desktop-only">
          <div className="frame-20">
            <div className="frame-21">
              <div className="text-wrapper-36">ITES</div>
            </div>
          </div>
          <div className="group-10">
            <div className="overlap-group-6">
              <div className="text-wrapper-37">Accenture BPO</div>
            </div>
          </div>
          <div className="group-11">
            <div className="real-page-wrapper">
              <div className="real-page">Real Page</div>
            </div>
          </div>
          <div className="group-12">
            <div className="overlap-9">
              <div className="text-wrapper-38">United Health Group</div>
            </div>
          </div>
          <div className="group-13">
            <div className="overlap-10">
              <div className="text-wrapper-39">Accenture-voice</div>
            </div>
          </div>
          <div className="group-14">
            <div className="overlap-11">
              <div className="text-wrapper-40">HP</div>
            </div>
          </div>
          <div className="group-15">
            <div className="overlap-12">
              <div className="text-wrapper-41">DXC</div>
            </div>
          </div>
          <div className="group-16">
            <div className="overlap-13">
              <div className="text-wrapper-42">Soc gen Ops</div>
            </div>
          </div>
          <div className="group-17">
            <div className="overlap-14">
              <div className="text-wrapper-43">Kennametal services</div>
            </div>
          </div>
        </div>

        <div
          className="overlap-15"
          style={{
            height: screenWidth < 450 ? "810px" : screenWidth >= 450 ? "453px" : undefined,
            left: screenWidth < 450 ? "0" : screenWidth >= 450 ? "79px" : undefined,
            top: screenWidth < 450 ? "1483px" : screenWidth >= 450 ? "662px" : undefined,
            width: screenWidth < 450 ? "394px" : screenWidth >= 450 ? "1237px" : undefined,
          }}
        >
          <div className="mobile-only">
            <div className="frame-22">
              <div className="frame-23" />
            </div>
            <div className="rectangle-8" />
            <div className="frame-24">
              <div className="group-18">
                <div className="overlap-group-7">
                  <div className="text-wrapper-44">Accenture BPO</div>
                </div>
              </div>
              <div className="group-19">
                <div className="overlap-16">
                  <div className="text-wrapper-45">HP</div>
                </div>
              </div>
              <div className="group-18">
                <div className="overlap-17">
                  <div className="text-wrapper-46">United Health Group</div>
                </div>
              </div>
              <div className="group-19">
                <div className="overlap-18">
                  <div className="text-wrapper-47">Soc gen Ops</div>
                </div>
              </div>
              <div className="group-18">
                <div className="overlap-19">
                  <div className="real-page-2">Real Page</div>
                </div>
              </div>
              <div className="group-19">
                <div className="overlap-20">
                  <div className="text-wrapper-48">DXC</div>
                </div>
              </div>
              <div className="group-18">
                <div className="overlap-21">
                  <div className="text-wrapper-49">Accenture-voice</div>
                </div>
              </div>
              <div className="group-19">
                <div className="overlap-22">
                  <div className="text-wrapper-50">Kennametal services</div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-51">ITES</div>
          </div>

          <div className="desktop-only">
            <div className="text-wrapper-52">Captive Industries</div>
            <div className="group-20">
              <img className="unknown-3" alt="Unknown" src="/industries/unknown-1.png" />
              <img className="mercedes-benz-logo" alt="Mercedes benz logo" src="/logos/mercedes-benz-logo-2010-1.png" />
              <img
                className="centurylink-internet"
                alt="Centurylink internet"
                src="/industries/centurylink-internet-down-not-working-outage-1.png"
              />
              <img className="img-2" alt="Img" src="/industries/y47ggy7grvg5fmz7czpy7dczc4-1.png" />
              <img className="northern-trust-logo" alt="Northern trust logo" src="/industries/northern-trust-logo-1.png" />
              <img
                className="ge-healthcare-logo"
                alt="Ge healthcare logo"
                src="/industries/ge-healthcare-logo-vector-1.png"
              />
              <img className="shell-logo-icon" alt="Shell logo icon" src="/industries/shell-logo-icon-169759-1.png" />
              <img className="element-pearson-logo" alt="Element pearson logo" src="/industries/1200px-pearson-logo-1.png" />
            </div>
          </div>
        </div>

        <div className="mobile-only">
          <div className="group-23">
            <div className="frame-28">
              <div className="frame-29">
                <img className="direction" alt="Direction" src="/industries/arrow-forward-ios-1.png" />
                <p className="text-wrapper-60">
                  Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind MGA Hospital, Subbaiah Reddy
                  Colony, Marathahalli, Bengaluru, Karnataka 560037
                </p>
                <div className="text-wrapper-61">View Larger Map</div>
                <div className="frame-30">
                  <div className="text-wrapper-62">JoulestoWatts Business Solution</div>
                </div>
              </div>
            </div>
          </div>
          <Header1 className="header-7" />
          <div className="frame-31">
            <div className="frame-32">
              <img className="unknown-4" alt="Unknown" src="/industries/unknown-1.png" />
              <img className="mercedes-benz-logo-2" alt="Mercedes benz logo" src="/logos/mercedes-benz-logo-2010-1.png" />
            </div>
            <div className="frame-33">
              <img className="centurylink-internet-2" alt="Centurylink internet" src="/industries/centurylink-internet-down-not-working-outage-1.png" />
              <img className="img-3" alt="Img" src="/industries/y47ggy7grvg5fmz7czpy7dczc4-1.png" />
            </div>
            <div className="frame-34">
              <img className="northern-trust-logo-2" alt="Northern trust logo" src="/industries/northern-trust-logo-1.png" />
              <img className="ge-healthcare-logo-2" alt="Ge healthcare logo" src="/industries/ge-healthcare-logo-vector-1.png" />
            </div>
            <div className="frame-35">
              <img className="shell-logo-icon-2" alt="Shell logo icon" src="/industries/shell-logo-icon-169759-1.png" />
              <img className="element-px-pearson-logo" alt="Element pearson logo" src="/industries/1200px-pearson-logo-1.png" />
            </div>
          </div>
          <div className="text-wrapper-63">Captive Industries</div>
          <div className="group-24">
            <div className="overlap-24">
              <div className="text-wrapper-64">Products</div>
              <div className="img-wrapper">
                <img className="amazon-2" alt="Amazon" src="/logos/amazon-1-1.png" />
              </div>
              <div className="overlap-25">
                <img className="sony-logo-2" alt="Sony logo" src="/industries/sony-logo-1-1.png" />
              </div>
              <div className="overlap-26">
                <img className="env-yodlee-color-2" alt="Env yodlee color" src="/industries/env-yodlee-color-logo-cmyk-1-1.png" />
              </div>
              <div className="overlap-27">
                <img className="na-logo-black-rgb-2" alt="Na logo black rgb" src="/industries/na-logo-black-rgb-reg-mark-tcm19-21014-1.png" />
              </div>
              <div className="overlap-group-8">
                <img className="smarten-spaces-logo-2" alt="Smarten spaces logo" src="/industries/smarten-spaces-logo-1.png" />
              </div>
              <div className="overlap-28">
                <div className="rectangle-9" />
                <img className="inmobi-logo-2" alt="Inmobi logo" src="/industries/inmobi-logo-1.png" />
              </div>
              <div className="overlap-29">
                <img className="xylem-logo-2" alt="Xylem logo" src="/industries/xylem-logo-1.png" />
              </div>
              <div className="frame-36">
                <div className="rectangle-10" />
                <img className="vmware-2" alt="Vmware" src="/industries/vmware-1.png" />
              </div>
            </div>
          </div>
          <div className="overlap-30">
            <div className="IT-services-2"> IT Services</div>
            <div className="group-25">
              <div className="overlap-31">
                <img
                  className="utypaslbyxwfuwhfdzxd-2"
                  alt="Utypaslbyxwfuwhfdzxd"
                  src="/industries/utypaslbyxwfuwhfdzxd-1-1.png"
                />
                <img className="wipro-logo-new-og-2" alt="Wipro logo new og" src="/logos/wipro-logo-new-og-502x263-1.png" />
              </div>
              <img className="deloitte-logo-2" alt="Deloitte logo" src="/industries/deloitte-logo-1-1.png" />
              <div className="group-26">
                <div className="overlap-group-9">
                  <img
                    className="ey-squarelogo-3"
                    alt="Ey squarelogo"
                    src="/industries/ey-squarelogo-1661856887616-1-1.png"
                  />
                  <img
                    className="ey-squarelogo-4"
                    alt="Ey squarelogo"
                    src="/industries/ey-squarelogo-1661856887616-2-1.png"
                  />
                </div>
              </div>
              <img className="ae-dbe-f-2" alt="Ae dbe f" />
              <img className="capgemini-x-logo" alt="Capgemini logo" />
              <img className="element-accenture-2" alt="Element accenture" src="/industries/arrow-forward-ios-1.png" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
