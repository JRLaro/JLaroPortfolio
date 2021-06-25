/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ContactItem from "../components/ContactItem";
import Title from "../components/Title";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://maps.google.com/maps?q=apopka%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem text1={"407-952-8310"} title={"Phone"} />
          <ContactItem text1={"jlaro.webdev@gmail.com"} title={"Email"} />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
