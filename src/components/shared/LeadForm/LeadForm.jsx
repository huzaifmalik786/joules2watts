import React, { useRef, useEffect } from "react";
import "./style.css";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import axios from "axios";

export const LeadForm = ({ setOpenModal, openModal }) => {
  const ref = useRef(null);

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
  return (
    <div className="popup" id="modal">
      <div className="lead-form">
        <div className="div">
          <div className="frame">
            <img className="everything-you-need" alt="Everything you need" src="/services/everything-you-need.png" />
            <div className="frame-2">
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
                  <Form>
                    <div className="frame-3">
                      <div className="frame-4">
                        <div className="frame-4">
                          <div className="frame-5">
                            <div>
                              <input className="component-form" placeholder="Name*" type="text" name="name" onChange={handleChange} value={values.name} />
                              {errors.name && touched.name &&
                                <div className="error-2">{errors.name}</div>
                              }
                            </div>
                            <div>
                              <input className="frame-wrapper" placeholder="Mobile Number*" type="text" name="phone" onChange={handleChange} value={values.phone} />
                              {errors.phone && touched.phone &&
                                <div className="error-2">{errors.phone}</div>
                              }
                            </div>
                          </div>
                          <input className="div-wrapper-lead" placeholder="Official Email Address" type="email" name="email" onChange={handleChange} value={values.email} />
                          {errors.email && touched.email &&
                            <div className="error-1">{errors.email}</div>
                          }
                        </div>
                        <textarea className="component-2" placeholder="Give us a short brief on your requirement" type="text" name="requirement" onChange={handleChange} value={values.requirement} />
                      </div>
                      <button className="CTA">
                        <button className="btn">
                          <button className="text-wrapper" onClick={handleSubmit}>Submit</button>
                        </button>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

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
