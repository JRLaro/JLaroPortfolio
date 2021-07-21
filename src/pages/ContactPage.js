/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ContactItem from "../components/ContactItem";
import Title from "../components/Title";
import {GrLocation} from 'react-icons/gr'
import emailjs from "emailjs-com";

function ContactPage() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_q5viakl",
      "template_gg537ia",
      e.target,
      "user_2AVmz6lS6A8RcTwAXsVBK"
    );
    e.target.reset();
  };

  return (
    <div>
      <div className="title">
        <Title title={"Contact"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <section className="mb-4">
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Contact Me
            </h2>
            <div className="row ">
              <div className="col-md-12 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                  onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          required
                        />
                        <label for="name" className="">
                          Your name
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          required
                        />
                        <label for="email" className="">
                          Your email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          required
                        />
                        <label for="subject" className="">
                          Subject
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="6"
                          className="form-control md-textarea"
                          required
                        ></textarea>
                        <label for="message">Your message</label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-md-left">
                    <input
                      className="btn btn-light"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>

        <div className="contact-sect">
          <ContactItem icon={<GrLocation />} text1={"Apopka, FL"} title={"Location"} />
          <ContactItem text1={"407-952-8310"} title={"Phone"} />
          <ContactItem text1={"jlaro.webdev@gmail.com"} title={"Email"} />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
