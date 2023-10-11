import React,{useEffect, useState} from "react";
import { useWindowWidth } from "../../breakpoints";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { Header } from "../../components/shared/header";
import { Footer } from "../../components/shared/footer";

export const Privacy = () => {
  const screenWidth = useWindowWidth();
  const [height, setHeight] = useState(0)

  useEffect(() => {
    // console.log(window.innerWidth);
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
    <div
      className="privacy"
      style={{
        height: height,
        backgroundColor: screenWidth < 450 ? "#ffffff" : screenWidth >= 450 ? "#f6f7f8" : undefined,
      }}
    >
      <div
        className="iphone"
        style={{
          backgroundColor: screenWidth < 450 ? "#ffffff" : screenWidth >= 450 ? "#f6f7f8" : undefined,
          height: screenWidth < 450 ? "4818px" : screenWidth >= 450 ? "3711px" : undefined,
          width: screenWidth < 450 ? "390px" : screenWidth >= 450 ? "1440px" : undefined,
        }}
      >
        <Header />
        <div className="mobile-only">
          <Header1 className="header" />
          <div className="frame">
            <div className="overlap">
              <div className="div">
                <div className="overlap-group">
                  <div className="overlap-2">
                    <div className="ellipse" />
                    <div className="ellipse-2" />
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                  <div className="overlap-group-2">
                    <img
                      className="businessman-logging"
                      alt="Businessman logging"
                      src="/privacy/businessman-logging-his-tablet-1.webp"
                    />
                    <div className="rectangle-3" />
                  </div>
                </div>
                <img className="img" alt="Ellipse" src="/privacy/arrow-forward-43.png" />
              </div>
              <div className="frame-2">
                <div className="text-wrapper-2">Privacy Policy</div>
                <p className="p">
                  This page informs you of JoulestoWatts policies regarding the collection, use, and disclosure of
                  personal data when you use our Service and the choices you have associated with that data. Our
                  Privacy Policy for JoulestoWatts is managed through Free Privacy Policy.
                </p>
              </div>
            </div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-3">Information Collection And Use</div>
            <p className="text-wrapper-4">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection
              and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy,
              terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from
              Joulestowatts.
            </p>
          </div>
        </div>

        <div
          className="overlap-3"
          style={{
            height: screenWidth >= 450 ? "950px" : screenWidth < 450 ? "284px" : undefined,
            left: screenWidth >= 450 ? "0" : screenWidth < 450 ? "81px" : undefined,
            top: screenWidth >= 450 ? "89px" : screenWidth < 450 ? "1035px" : undefined,
            width: screenWidth >= 450 ? "1465px" : screenWidth < 450 ? "228px" : undefined,
          }}
        >
          <div className="desktop-only">
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <p className="text-wrapper-5">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection
              and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy,
              terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from
              Joulestowatts.
            </p>
            <div className="text-wrapper-6">Information Collection And Use</div>
          </div>

          <div className="ellipse-3 mobile-only" />

          <img
            className="hand-holding-cloud"
            style={{
              height: screenWidth < 450 ? "253px" : screenWidth >= 450 ? "473px" : undefined,
              left: screenWidth < 450 ? "32px" : screenWidth >= 450 ? "729px" : undefined,
              top: screenWidth < 450 ? "31px" : screenWidth >= 450 ? "0" : undefined,
              width: screenWidth < 450 ? "196px" : screenWidth >= 450 ? "736px" : undefined,
            }}
            alt="Hand holding cloud"
            src={
              screenWidth < 450
                ? "/privacy/hand-holding-cloud-system-with-data-protection-1.webp"
                : screenWidth >= 450
                  ? "/privacy/businessman-logging-his-tablet-1.webp"
                  : undefined
            }
          />
          <div className="desktop-only">
            <img className="rectangle-6" alt="Rectangle" src="/privacy/rectangle-117.svg" />
            <p className="text-wrapper-7">
              This page informs you of JoulestoWatts policies regarding the collection, use, and disclosure of
              personal data when you use our Service and the choices you have associated with that data. Our Privacy
              Policy for JoulestoWatts is managed through Free Privacy Policy.
            </p>
            <div className="text-wrapper-8">Privacy Policy</div>
          </div>
        </div>
        <div className="mobile-only">
          <div className="frame-4">
            <div className="frame-5">
              <div className="text-wrapper-9">Types of Data Collected</div>
              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-10">Personal Data</div>
                  <p className="div-2">
                    We may ask you to supply us with personally identifying information that may be used to contact or
                    identify you while using our Service (&#34;Personal Data&#34;). Personal identifiable information
                    may include, but is not limited to, the following:
                  </p>
                </div>
                <p className="div-2">
                  Email address
                  <br />
                  First name and last name
                  <br />
                  Phone number
                  <br />
                  Cookies and Usage Data
                </p>
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-10">Usage Data</div>
              <p className="div-2">
                We may also collect information about how you access and use the Service (&#34;Usage Data&#34;). Usage
                Data may include your computer&#39;s Internet Protocol address (e.g., IP address), browser type,
                browser version, the pages of our Service that you view, the time and date of your visit, the time
                spent on those pages, unique device identifiers, and other diagnostic data.
              </p>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-10">Tracking &amp; Cookies Data</div>
              <p className="div-2">
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain
                information.
                <br />
                <br />
                Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies
                are sent to your browser from a website and stored on your device. Tracking technologies also used are
                beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                <br />
                <br />
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </div>
            <p className="div-2">
              <span className="span">
                Examples of Cookies we use:
                <br />
              </span>
              <span className="text-wrapper-11">
                <br />
                Session Cookies. We use Session Cookies to operate our Service.
                <br />
                Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
                <br />
                Security Cookies. We use Security Cookies for security purposes.
              </span>
            </p>
            <div className="frame-9">
              <div className="text-wrapper-10">Use of Data</div>
              <p className="div-2">
                <br />
                To provide and maintain the Service
                <br />
                To notify you about changes to our Service
                <br />
                To allow you to participate in interactive features of our Service when you choose to do so
                <br />
                To provide customer care and support
                <br />
                To provide analysis or valuable information so that we can improve the Service
                <br />
                To monitor the usage of the Service
                <br />
                To detect, prevent and address technical issues
              </p>
            </div>
          </div>
        </div>

        <div className="desktop-only">
          <p className="examples-of-cookies">
            <span className="span">
              Examples of Cookies we use:
              <br />
            </span>
            <span className="text-wrapper-20">
              <br />
            </span>
            <span className="text-wrapper-21">
              Session Cookies. We use Session Cookies to operate our Service.
              <br />
              Preference Cookies. We use Preference Cookies to remember your preferences and various settings.
              <br />
              Security Cookies. We use Security Cookies for security purposes.
            </span>
          </p>
          <div className="frame-16">
            <div className="text-wrapper-22">Types of Data Collected</div>
            <div className="frame-17">
              <div className="frame-18">
                <div className="text-wrapper-23">Personal Data</div>
                <p className="we-may-ask-you-to">
                  We may ask you to supply us with personally identifying information that may be used to contact or
                  identify you while using our Service (&#34;Personal Data&#34;). Personal identifiable information
                  may include, but is not limited to, the following:
                </p>
              </div>
              <p className="email-address-first">
                Email address
                <br />
                First name and last name
                <br />
                Phone number
                <br />
                Cookies and Usage Data
              </p>
            </div>
          </div>
          <div className="frame-19">
            <div className="text-wrapper-23">Usage Data</div>
            <p className="we-may-also-collect">
              We may also collect information about how you access and use the Service (&#34;Usage Data&#34;). Usage
              Data may include your computer&#39;s Internet Protocol address (e.g., IP address), browser type, browser
              version, the pages of our Service that you view, the time and date of your visit, the time spent on
              those pages, unique device identifiers, and other diagnostic data.
            </p>
          </div>
          <div className="frame-20">
            <div className="text-wrapper-23">Tracking &amp; Cookies Data</div>
            <p className="we-use-cookies-and">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain
              information.
              <br />
              <br />
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies
              are sent to your browser from a website and stored on your device. Tracking technologies also used are
              beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
              <br />
              <br />
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </div>
          <div className="frame-21">
            <div className="text-wrapper-23">Use of Data</div>
            <p className="to-provide-and">
              <br />
              To provide and maintain the Service
              <br />
              To notify you about changes to our Service
              <br />
              To allow you to participate in interactive features of our Service when you choose to do so
              <br />
              To provide customer care and support
              <br />
              To provide analysis or valuable information so that we can improve the Service
              <br />
              To monitor the usage of the Service
              <br />
              To detect, prevent and address technical issues
            </p>
          </div>
          <div className="overlap-5">
            <div className="ellipse-5" />
            <img
              className="hand-holding-cloud-2"
              alt="Hand holding cloud"
              src="/privacy/hand-holding-cloud-system-with-data-protection-1.webp"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
