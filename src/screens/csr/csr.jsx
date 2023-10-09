import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";

export const CSR = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="csr">
      <div
        className="iphone"
        style={{
          height: screenWidth < 450 ? "4972px" : screenWidth >= 450 ? "3837px" : undefined,
          width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
        }}
      >
        <Header />
        <Header1 className="header mobile-only" />

        <div
          className="overlap"
          style={{
            height: screenWidth < 450 ? "611px" : screenWidth >= 450 ? "1024px" : undefined,
            top: screenWidth < 450 ? "60px" : screenWidth >= 450 ? "0" : undefined,
            width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1446px" : undefined,
          }}
        >
          <div className="mobile-only">
            <div className="rectangle" />
            <p className="div">We are a team of passionate individuals who are driven to make a difference.</p>
            <div className="text-wrapper-2">Corporate Social Responsibility Policy</div>
          </div>

          <div className="desktop-only">
            <div className="frame">
              <div className="overlap-group">
                <div className="rectangle-2" />
                <img className="img" alt="Rectangle" src="/csr/rectangle-141-1.svg" />
              </div>
            </div>
            <img
              className="square-illusion"
              alt="Square illusion"
              src="/csr/square-illusion-3579763-2992371-0-1.png"
            />
            <div className="frame-3">
              <div className="text-wrapper-5">Corporate Social Responsibility Policy</div>
              <p className="p">We are a team of passionate individuals who are driven to make a difference.</p>
            </div>
            <div className="text-wrapper-6">Focus Areas Include</div>
          </div>

          <img
            className="rectangle-3"
            style={{
              top: screenWidth < 450 ? "121px" : screenWidth >= 450 ? "70px" : undefined,
              width: screenWidth < 450 ? "315px" : screenWidth >= 450 ? "437px" : undefined,
            }}
            alt="Rectangle"
            src={
              screenWidth < 450 ? "/csr/rectangle-143.svg" : screenWidth >= 450 ? "/csr/rectangle-141.svg" : undefined
            }
          />
          <div className="desktop-only">
            <div className="frame-4">
              <div className="text-wrapper-7">Education</div>
            </div>
            <div className="frame-wrapper">
              <div className="rural-development-wrapper">
                <div className="text-wrapper-8">Rural Development</div>
              </div>
            </div>
            <div className="frame-5">
              <div className="gender-equality-wrapper">
                <p className="gender-equality">Gender equality &amp; Women Empowerment</p>
              </div>
            </div>
          </div>

          <div className="mobile-only">
            <img
              className="square-illusion-2"
              alt="Square illusion"
              src="/csr/square-illusion-3579763-2992371-0-1.png"
            />
            <div className="text-wrapper-9">Focus Areas Include</div>
          </div>
        </div>
        <div
          className="overlap-2"
          style={{
            height: screenWidth >= 450 ? "1369px" : screenWidth < 450 ? "573px" : undefined,
            left: screenWidth >= 450 ? "-1px" : screenWidth < 450 ? "0" : undefined,
            top: screenWidth >= 450 ? "2526px" : screenWidth < 450 ? "1147px" : undefined,
            width: screenWidth >= 450 ? "1441px" : screenWidth < 450 ? "490px" : undefined,
          }}
        >
          <div className="rectangle-4 desktop-only" />

          <div className="frame-6 mobile-only">
            <div className="frame-7">
              <div className="frame-8" />
            </div>
          </div>

          <div
            className="group"
            style={{
              height: screenWidth >= 450 ? "907px" : screenWidth < 450 ? "430px" : undefined,
              left: screenWidth >= 450 ? "184px" : screenWidth < 450 ? "16px" : undefined,
              top: screenWidth >= 450 ? "37px" : screenWidth < 450 ? "0" : undefined,
              width: screenWidth >= 450 ? "1086px" : screenWidth < 450 ? "474px" : undefined,
            }}
          >
            <div className="desktop-only">
              <div className="frame-9">
                <div className="text-wrapper-10">Joy of giving</div>
                <p className="text-wrapper-11">
                  Joy of Giving was an awareness campaign that encouraged individuals to donate their used things to
                  the less fortunate. People are given donation bags to encourage them to participate in the giving
                  movement.
                </p>
              </div>
              <img className="joy-of-giving" alt="Joy of giving" src="/csr/joy-of-giving-1.png" />
            </div>

            <div className="overlap-3 mobile-only">
              <div className="frame-10">
                <div className="rural-development">Rural Development</div>
              </div>
            </div>
          </div>
          <div className="frame-11 mobile-only">
            <div className="frame-12">
              <p className="gender-equality-2">Gender equality &amp; Women Empowerment</p>
            </div>
          </div>
        </div>
        <div className="frame-16 desktop-only">
          <div className="text-wrapper-10">Gift of Knowledge</div>
        </div>

        <img
          className="gift-of-knowledge"
          style={{
            height: screenWidth < 450 ? "210px" : screenWidth >= 450 ? "627px" : undefined,
            left: screenWidth < 450 ? "50px" : screenWidth >= 450 ? "278px" : undefined,
            top: screenWidth < 450 ? "2794px" : screenWidth >= 450 ? "1808px" : undefined,
            width: screenWidth < 450 ? "310px" : screenWidth >= 450 ? "927px" : undefined,
          }}
          alt="Gift of knowledge"
          src="/csr/gift-of-knowledge-1.png"
        />
        <div className="desktop-only">
          <p className="we-at-joulestowatts">
            <span className="span">We&nbsp;&nbsp;at JoulestoWatts stepped up with an Initiative - </span>
            <span className="text-wrapper-23">&#34;Gift of Knowledge&#34;</span>
            <span className="span">
              {" "}
              to commemorate “Diwali”; by coming together to not only arrange the required books to these students for
              completing their stalled education but also to groom them professionally. We are pleased to know that
              this initiative is believed to positively impact 1000’s of Students.
            </span>
          </p>
          <div className="hunger-poverty-wrapper">
            <div className="hunger-poverty">Hunger &amp; Poverty</div>
          </div>
          <div className="frame-17">
            <div className="frame-18">
              <div className="text-wrapper-8">Environmental Sustainability</div>
            </div>
          </div>
        </div>

        <div className="mobile-only">
          <div className="overlap-wrapper">
            <div className="overlap-5">
              <div className="text-wrapper-28">Education</div>
            </div>
          </div>
          <div className="text-wrapper-29">Gift of Knowledge</div>
          <p className="we-at-joulestowatts-2">
            <span className="text-wrapper-30">We&nbsp;&nbsp;at JoulestoWatts stepped up with an Initiative - </span>
            <span className="text-wrapper-31">&#34;Gift of Knowledge&#34;</span>
            <span className="text-wrapper-30">
              {" "}
              to commemorate “Diwali”; by coming together to not only arrange the required books to these students for
              completing their stalled education but also to groom them professionally. We are pleased to know that
              this initiative is believed to positively impact 1000’s of Students.
            </span>
          </p>
          <div className="overlap-6">
            <div className="text-wrapper-32">Joy of giving</div>
            <p className="text-wrapper-33">
              Joy of Giving was an awareness campaign that encouraged individuals to donate their used things to the
              less fortunate. People are given donation bags to encourage them to participate in the giving movement.
            </p>
          </div>
          <img className="joy-of-giving-2" alt="Joy of giving" src="/csr/joy-of-giving-1.png" />
          <div className="frame-25">
            <div className="frame-26">
              <div className="frame-27">
                <div className="text-wrapper-34">Environmental Sustainability</div>
              </div>
            </div>
            <div className="frame-26">
              <div className="hunger-poverty-2">Hunger &amp; Poverty</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
