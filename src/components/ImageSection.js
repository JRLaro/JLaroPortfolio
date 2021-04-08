import React from "react";
// import about from '../img/about.jpg';
import resume from "../images/j.LaroResume.pdf";

function ImageSection() {
  return (
    <div className="ImageSection">
      {/* <div className="img"> <img src={about} alt=""/> </div>  */}
      <div className="about-info">
        <h4>
          I am <span className="jlaro"> Jose Laro</span>
        </h4>
        <p className="about-text">
          Jr Full Stack Web Developer leveraging a background in graphic design
          to provide creative solutions to complex issues. Earned a certificate
          in Full Stack Web Development from the University of Central Florida
          Coding Boot Camp. Effective at combining creativity and problem
          solving to develop user-friendly applications. Looking to
          implement and utilize my skills for a company that is wanting
          a creative perspective. As a freelance graphic designer I have always
          had a passion for creating, constructing and collaborating. There is
          nothing more satisfying than taking a conceptual idea drawn on a
          napkin and turning it into reality, whether that be a fully functional
          Web application or graphic design. - "Although the destination is
          important, the journey needs to be an unforgettable experience."
        </p>
        {/* <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Jose Rafael Laro Jr</p>
            <p>: Hispanic</p>
            <p>: Spanish, English</p>
            <p>: 1351 R...</p>
            <p>: United States</p>
          </div>
        </div> */}
        <a href={resume} rel="noreferrer" target="_blank">
          <button className="btn">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
