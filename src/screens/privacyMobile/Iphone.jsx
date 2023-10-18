import React, { useState, useEffect } from "react";
import { Header1 } from "../../icons/Header1";
import "./style.css";
import { PrivacyPolicy } from "../PrivacyPolicy/PrivacyPolicy";
import { Footer } from "../../components/shared/footer";

export const Privacy = () => {
  const [factor, setFactor] = useState();

  useEffect(() => {
    if (window.innerWidth > 450) {
      setFactor(window.innerWidth / 1440);
    } else {
      setFactor(window.innerWidth / 390);
    }
    document.querySelector(".div-mobile").style.transform = `scaleX(${factor})`;
    document.querySelector("#app").style.transform = `scaleY(${factor})`;
    document.querySelector(".div-mobile").style.transformOrigin = `top left`;
    document.querySelector("#app").style.transformOrigin = `top left`;
  });

  return (
    <>
      <div className="desktop-only">
        <PrivacyPolicy />
      </div>
      <div className="mobile-only">
        <div className="privacy-mobile">
          <div className="div-mobile">
            <Header1 className="header-instance" />
            <div className="overlap">
              <div className="frame">
                <div className="frame-2">
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
                  <img
                    className="img"
                    alt="Ellipse"
                    src="/img/ellipse-36.png"
                  />
                </div>
              </div>
              <div className="frame-3">
                <p className="text-wrapper">
                  Joulestowatts takes your privacy very seriously.
                </p>
                <p className="p">
                  In general, you can visit Joulestowatts’s websites without
                  telling us who you are and without revealing any information
                  about yourself. There are times, however, when we may need
                  information from you.
                </p>
              </div>
            </div>
            <p className="text-wrapper-2">
              Joulestowatts does not share personal information about you with
              non-affiliated companies except: (a) to provide products or
              services you’ve requested; (b) when we have your permission: or
              (c) under the following circumstances:
            </p>
            <div className="frame-4">
              <p className="text-wrapper-3">
                We provide the information to trusted entities who work on
                behalf of or with Joulestowatts under strict confidentiality
                agreements. These entities may use your personal information to
                help Joulestowatts communicate with you about offers from
                Joulestowatts and our marketing partners. However, these
                companies do not have any independent right to further share or
                disseminate this information;
              </p>
              <p className="text-wrapper-4">
                We respond to subpoenas, court orders, or legal process, or to
                establish or exercise our legal rights or defend against legal
                claims;
              </p>
              <p className="text-wrapper-4">
                We believe it is necessary to share the information in order to
                investigate, prevent, or take action against any illegal
                activities, suspected fraud, situations involving potential
                threats to the physical safety of any person, or as otherwise
                required by law.
              </p>
              <p className="text-wrapper-4">
                We believe it is necessary to share the information in order to
                protect or enforce Joulestowatts’s rights, usage terms,
                intellectual or physical property or for safety of Joulestowatts
                or associated parties.
              </p>
              <p className="text-wrapper-4">
                We may share information about you if Joulestowatts is acquired
                by or merged with another company.
              </p>
            </div>
            <p className="text-wrapper-5">
              You may choose to give us personal information such as your name
              and address or e-mail identification address (‘ID’) that may be
              needed, for example, to correspond with you, for you to download
              our white papers, to provide you with subscription information
              etc. We intend to protect the quality and integrity of your
              personally identifiable information.
            </p>
            <p className="text-wrapper-6">
              Joulestowatts will not be liable to any unsolicited information
              provided by you. You consent to Joulestowatts using such
              information as per Joulestowatts’s privacy policy.
            </p>
            <p className="text-wrapper-7">
              We will make a sincere effort to respond in a timely manner to
              your requests to correct inaccuracies in your personal
              information. To correct inaccuracies in your personal information,
              please return the message containing the inaccuracies to the
              sender.
            </p>
            <p className="text-wrapper-8">
              Joulestowatts’s websites are not directed at nor targeted at
              children. No one who has not reached the age of thirteen may use
              the websites unless supervised by an adult.
            </p>
            <p className="COOKIES-AND-OTHER">
              <span className="span">
                COOKIES AND OTHER TECHNOLOGIES
                <br />
              </span>
              <span className="text-wrapper-9">
                <br />
              </span>
              <span className="text-wrapper-10">
                We sometimes collect anonymous information from visits to our
                sites to help us provide better customer service. For example,
                we keep track of the domains from which people visit and we also
                measure visitor activity on Joulestowatts web sites, but we do
                so in ways that keep the information of the visitor anonymous.
                Joulestowatts or its affiliates or vendors may use this data to
                analyze trends and statistics and to help us provide better
                customer service. We maintain the highest levels of
                confidentiality for this information. Our affiliates and vendors
                follow the same high levels of confidentiality. This anonymous
                information is used and analyzed only at an aggregate level to
                help us understand trends and patterns. None of this information
                is reviewed at an individual level. If you do not want your
                transaction details used in this manner, you can either disable
                your cookies or opt-out at the download or request page.
                Alternatively, you can set your browser to intimate upon
                receiving a cookie. You may accordingly decide to opt out.
              </span>
            </p>
            <p className="ANTI-SPAM-POLICY">
              <span className="span">
                ANTI-SPAM POLICY
                <br />
              </span>
              <span className="text-wrapper-9">
                <br />
              </span>
              <span className="text-wrapper-10">
                Joulestowatts recognizes the receipt, transmission or
                distribution of spam emails (i.e. unsolicited bulk emails) as a
                major concern and has taken reasonable measures to minimize the
                transmission and effect of spam emails in our computing
                environment. All emails received by Joulestowatts are subject to
                spam check. Any email identified as spam will be rejected with
                sufficient information to the sender for taking necessary
                action. With this measure, along with other technical spam
                reduction measures, Joulestowatts hopes to minimize the effect
                of spam emails. Joulestowatts reserves the right to reject
                and/or report any suspicious spam emails, to the authorities
                concerned, for necessary action.
                <br />
              </span>
            </p>
            <p className="ANTI-SPAM-POLICY-2">
              <span className="span">
                ANTI-SPAM POLICY
                <br />
              </span>
              <span className="text-wrapper-9">
                <br />
              </span>
              <span className="text-wrapper-10">
                Joulestowatts recognizes the receipt, transmission or
                distribution of spam emails (i.e. unsolicited bulk emails) as a
                major concern and has taken reasonable measures to minimize the
                transmission and effect of spam emails in our computing
                environment. All emails received by Joulestowatts are subject to
                spam check. Any email identified as spam will be rejected with
                sufficient information to the sender for taking necessary
                action. With this measure, along with other technical spam
                reduction measures, Joulestowatts hopes to minimize the effect
                of spam emails. Joulestowatts reserves the right to reject
                and/or report any suspicious spam emails, to the authorities
                concerned, for necessary action.
                <br />
              </span>
            </p>
            <p className="LINKS-TO-NON">
              <span className="span">
                LINKS TO NON-JOULESTOWATTS WEBSITES
                <br />
              </span>
              <span className="text-wrapper-9">
                <br />
              </span>
              <span className="text-wrapper-10">
                Joulestowatts may provide links to third-party websites for your
                convenience and information. If you access those links through
                the Joulestowatts website, you will leave the Joulestowatts
                website. Joulestowatts does not control those sites or their
                privacy practices, which may differ from Joulestowatts’s
                practices. We do not endorse or make any representations about
                third-party websites. The personal data you choose to provide to
                or that is collected by these third parties, including any
                social media websites featured on our website, is not covered by
                the Joulestowatts Privacy Policy. We encourage you to review the
                privacy policy of any website before submitting your personal
                information.
                <br />
                <br />
                We may also provide social media features on our website that
                enable you to share Joulestowatts information with your social
                networks and to interact with Joulestowatts on various social
                media sites. Your use of these features may result in the
                collection or sharing of information about you, depending on the
                feature. We encourage you to review the privacy policies and
                settings on the social media sites with which you interact to
                make sure you understand the information that could be shared by
                those sites.
                <br />
              </span>
            </p>
            <p className="MAILERS">
              <span className="span">
                MAILERS
                <br />
              </span>
              <span className="text-wrapper-9">
                <br />
              </span>
              <span className="text-wrapper-10">
                Joulestowatts may, if you so choose, send direct mailers to you
                at the address given by you.
                <br />
              </span>
            </p>
            <p className="text-wrapper-11">
              PRIVACY POLICY ON PERSONAL INFORMATION
            </p>
            <p className="element-EFFECTIVE-DATE">
              <span className="span">
                1. EFFECTIVE DATE:
                <br />
              </span>
              <span className="text-wrapper-12">
                This Privacy Policy on Personal Information (‘Policy’) is
                effective from June 2015 and it supersedes all existing polices
                on the subject matter.
              </span>
            </p>
            <p className="element-APPLICABILITY-this">
              <span className="span">
                2. APPLICABILITY:
                <br />
              </span>
              <span className="text-wrapper-12">
                This Policy applies to all Personal Data collected
                electronically by Joulestowatts Limited or its subsidiaries or
                affiliated companies
              </span>
            </p>
            <p className="element-DEFINITIONS">
              <span className="span">
                3. DEFINITIONS:
                <br />
              </span>
              <span className="text-wrapper-12">
                ‘Personal Data’ for the purposes of this Policy means any
                information that relates to a natural person and is capable of
                identifying such person available or likely to be available with
                Joulestowatts.
              </span>
            </p>
            <p className="element-OBJECTIVE-OF">
              <span className="span">
                4. OBJECTIVE OF POLICY:
                <br />
              </span>
              <span className="text-wrapper-12">
                Joulestowatts takes seriously the trust you place in us. To
                prevent unauthorized access or disclosure, to maintain data
                accuracy and to ensure the appropriate use of the information,
                Joulestowatts utilizes appropriate physical, technical and
                administrative procedures to safeguard the information we
                collect.
              </span>
            </p>
            <p className="element-REASONABLE">
              <span className="span">
                5. REASONABLE SECURITY PRACTICES &amp; PROCEDURES:
                <br />
              </span>
              <div className="ul_pad_left">
                <span className="text-wrapper-12">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      paddingLeft: "10px",
                    }}
                  >
                    <div>•</div>
                    <div>
                      Joulestowatts will take reasonable steps to ensure that
                      all dealings in Personal Data, shall:be processed fairly
                      &amp; lawfully;
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      paddingLeft: "10px",
                    }}
                  >
                    <div>•</div>
                    <div>
                      be obtained only with the consent of the information
                      provider;
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      paddingLeft: "10px",
                    }}
                  >
                    <div>•</div>
                    <div>be collected, only when:</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      paddingLeft: "10px",
                    }}
                  >
                    <div>•</div>
                    <div>
                      the information is collected for a lawful purpose
                      connected with a function or activity of Joulestowatts;
                      and
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      paddingLeft: "10px",
                    }}
                  >
                    <div>•</div>
                    <div>
                      the collection of the sensitive personal data or
                      information is considered necessary for that purpose.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      paddingLeft: "10px",
                    }}
                  >
                    <div>•</div>
                    <div>
                      be available for review by the information provider, as
                      and when requested.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      paddingLeft: "10px",
                    }}
                  >
                    <div>•</div>
                    <div>
                      be kept secure against unauthorized or unlawful processing
                      and against accidental loss, destruction or damage, as per
                      the prescribed standards.
                    </div>
                  </div>
                </span>
              </div>
            </p>
            <p className="disclosure-of">
              <span className="span">Disclosure of information: </span>
              <span className="text-wrapper-13">
                joulestowatts shall share your personal information with your
                consent, where the disclosure is necessary for compliance of a
                legal obligation or where required by government agencies
                mandated under law to procure such disclosure.
              </span>
            </p>
            <p className="transfer-of">
              <span className="span">Transfer of Information: </span>
              <span className="text-wrapper-13">
                joulestowatts may transfer your personal information to any
                other body corporate or a person in any country, that ensures
                the “same level of data protection” that is adhered to by it.
              </span>
            </p>
            <p className="publication">
              <span className="span">Publication: </span>
              <span className="text-wrapper-13">
                joulestowatts shall also not publish your personal information
                and shall ensure that the information transferred to a third
                party is not further disclosed by it.
              </span>
            </p>
            <p className="right-to-opt-out">
              <span className="span">Right to opt out: </span>
              <span className="text-wrapper-13">
                joulestowatts respects your privacy considerations and hence
                provides an option to you, to not provide the data or
                information sought to be collected.
                <br />
                Further, you can also withdraw your consent which was earlier
                given to joulestowatts, and the same must be communicated to
                joulestowatts in writing.
              </span>
            </p>
            <p className="authenticity">
              <span className="span">Authenticity: j</span>
              <span className="text-wrapper-13">
                oulestowatts shall not be responsible for the authenticity of
                the Personal Data supplied to it by the provider, whose duty it
                is to ensure that the information provided by it or its
                employees is authentic.
              </span>
            </p>
            <p className="grievance-redressal">
              <span className="span">Grievance Redressal: </span>
              <span className="text-wrapper-13">
                Any grievance or complaint, in relation to processing of
                information, should be sent to joulestowatts in writing to
                following contact email ID. Grievance shall be redressed as
                expeditiously as possible.
              </span>
            </p>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
