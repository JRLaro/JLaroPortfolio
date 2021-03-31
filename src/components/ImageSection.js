import React from "react";
// import about from '../img/about.jpg';
import resume from "../images/j.LaroResume.pdf";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">{/* <img src={about} alt=""/> */}</div>
      <div className="about-info">
        <h4 >
          I am <span className="jlaro"> Jose Laro</span>
        </h4>
        <p className="about-text">
          I am an aspiring Junior Full-Stack Developer. I have just completed the
          University of Central Florida's FullStack Development BootCamp and I
          am now looking to implement and utilize my newfound skills for a
          company that is wanting a creative perspective. As a freelance graphic
          designer I have always had a passion for creating, constructing and
          collaborating. There is nothing more satisfying than taking a
          conceptual idea drawn on a napkin and turning it into reality, whether
          that be a fully functional Web application or graphic design. This is
          the reason I chose to explore and take on this adventure. With the
          incorporation of my knowledge in Adobe Illustrator, PhotoShop,
          AfterEffect as well as Lightroom I am an asset. My approach to life is
          - "Although the destination is important, the journey needs to be an
          unforgettable experience."
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
        <a href={resume} rel="noreferrer" target="_blank" >
                  <button className="btn" >Resume</button>
                  </a>
      </div>
    </div>
  );
}

export default ImageSection;
