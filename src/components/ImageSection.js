import React from "react";
import resume from "../myResume/JLARO.dev.resumé.pdf";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="about-info">
        <h4>
        DREAM <span className="jlaro"> | </span> DESIGN <span className="jlaro"> | </span> DEVELOP
        </h4>
        <p className="about-text">
          
          Full Stack Web Developer leveraging a background in graphic design
          to provide creative solutions to complex issues. Earned a certificate
          in Full Stack Web Development from the University of Central Florida.
          Effective at combining creativity and technical problem
          solving to develop user-friendly applications.  I have always had a
          passion for creating, constructing and collaborating. There is nothing
          more satisfying than taking a conceptual idea and
          turning it into reality, whether that be a fully functional Web
          application or graphical design.
        </p>

        <a href={resume} download={resume} rel="noreferrer" target='_blank' >
          <button className="btn">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
