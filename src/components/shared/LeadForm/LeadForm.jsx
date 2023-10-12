import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import axios from "axios";

export const LeadForm = ({ setOpenModal, openModal, factor }) => {
  const ref = useRef(null);
  const [top, settop] = useState(0);
  const [height, setHeight] = useState(0);

  const handleClickOutside = (event) => {

    if ((event?.target)?.id === 'modal') {
      setOpenModal(!openModal)
    }
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required."),
    email: Yup.string().email("Enter a valid email").required("Email is Required."),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone Number is required.")
  })

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(()=>{
    settop(window.scrollY / factor);
    setHeight(window.innerHeight / factor)
  },[])
  return (
    <div className="popup" id="modal" style={{top: top, height: height}}>
      <div className="lead-form">
        <div className="lead-div">
          <div className="lead-frame">
            <img className="lead-everything-you-need" alt="Everything you need" src="/services/everything-you-need.png" />
            <div className="lead-frame-2">
              <Formik
                validationSchema={validationSchema}
                initialValues={{ name: "", email: "", phone: "", requirement: "" }}
                onSubmit={async (values) => {
                  await axios.post("https://sheetdb.io/api/v1/j26dctl2r0gsg", {
                    // headers: { 'Authorization': 'Bearer m3xzr16pka0v7fbaj92bmdyo2sowgsrlitar7tdu' },
                    body: {
                      Type: "Get in Touch",
                      Name: values.name,
                      Email: values.email,
                      Phone: values.phone,
                      Requirement: values.requirement,
                    }
                  }
                  )
                  alert("Response send Successfully")

                }}
              >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                  <Form style={{width: "100%"}}>
                    <div className="lead-frame-3">
                      <div className="lead-frame-4">
                        <div className="lead-frame-4">
                          <div className="lead-frame-5">
                            <div style={{width:"100%"}}>
                              <input className="lead-component-form" placeholder="Name*" type="text" name="name" onChange={handleChange} value={values.name} />
                              {errors.name && touched.name &&
                                <div className="error-2">{errors.name}</div>
                              }
                            </div>
                            <div style={{width: "100%"}}>
                              <input className="lead-frame-wrapper" placeholder="Mobile Number*" type="text" name="phone" onChange={handleChange} value={values.phone} />
                              {errors.phone && touched.phone &&
                                <div className="error-2">{errors.phone}</div>
                              }
                            </div>
                          </div>
                          <input className="lead-div-wrapper-lead" placeholder="Official Email Address" type="email" name="email" onChange={handleChange} value={values.email} />
                          {errors.email && touched.email &&
                            <div className="error-1">{errors.email}</div>
                          }
                        </div>
                        <textarea className="lead-component-2" placeholder="Give us a short brief on your requirement" type="text" name="requirement" onChange={handleChange} value={values.requirement} />
                      </div>
                      <button className="lead-CTA">
                        <button className="lead-btn">
                          <button className="lead-text-wrapper" onClick={handleSubmit}>Submit</button>
                        </button>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className="lead-frame-7">
                <div className="lead-frame-8">
                  <div className="lead-frame-9">
                    <div className="lead-missed-video-call">
                      <img className="lead-calendar-today" alt="Calendar today" src="/services/calendar-today.png" />
                    </div>
                    <div className="lead-group-2">
                      <p className="lead-p">
                        Can’t Wait? We can’t either. You can schedule a quick video call or simply drop us an email
                      </p>
                    </div>
                  </div>
                  <div className="lead-frame-10">
                    <button className="lead-btn-wrapper">
                      <button className="lead-CTA-wrapper">
                        <button className="lead-button">Schedule a Call</button>
                      </button>
                    </button>
                    <button className="lead-CTA-2">
                      <button className="lead-btn-2">
                        <button className="lead-button">Whatsapp us</button>
                      </button>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="lead-close-button" onClick={() => setOpenModal(false)}>
            <img className="lead-close" alt="Close" src="/services/close-1.png" />
          </button>
        </div>
      </div>
    </div >
  );
};
