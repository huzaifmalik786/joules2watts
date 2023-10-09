import React, { useRef, useEffect } from "react";
import "./style.css";

export const LeadForm = ({ setOpenModal, openModal }) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {

    if ((event?.target)?.id === 'modal') {
      setOpenModal(!openModal)
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="popup" id="modal">
      <div className="lead-form">
        <div className="div">
          <div className="frame">
            <img className="everything-you-need" alt="Everything you need" src="/services/everything-you-need.png" />
            <div className="frame-2">
              <div className="frame-3">
                <div className="frame-4">
                  <div className="frame-4">
                    <div className="frame-5">
                      <input className="component-form" placeholder="Name*" />
                      <input className="frame-wrapper" placeholder="Mobile Number*" />
                    </div>
                    <input className="div-wrapper" placeholder="Official Email Address" />
                  </div>
                  <textarea className="component-2" placeholder="Give us a short brief on your requirement" />
                </div>
                <button className="CTA">
                  <button className="btn">
                    <button className="text-wrapper">Submit</button>
                  </button>
                </button>
              </div>
              <div className="frame-7">
                <div className="frame-8">
                  <div className="frame-9">
                    <div className="missed-video-call">
                      <img className="calendar-today" alt="Calendar today" src="/services/calendar-today.png" />
                    </div>
                    <div className="group-2">
                      <p className="p">
                        Can’t Wait? We can’t either. You can schedule a quick video call or simply drop us an email
                      </p>
                    </div>
                  </div>
                  <div className="frame-10">
                    <button className="btn-wrapper">
                      <button className="CTA-wrapper">
                        <button className="button">Schedule a Call</button>
                      </button>
                    </button>
                    <button className="CTA-2">
                      <button className="btn-2">
                        <button className="button">Whatsapp us</button>
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="close-button" onClick={() => setOpenModal(false)}>
            <img className="close" alt="Close" src="/services/close-1.png" />
          </button>
        </div>
      </div>
    </div >
  );
};
