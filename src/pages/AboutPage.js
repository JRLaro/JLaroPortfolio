import React from "react";
import Title from "../components/Title";
import AboutSection from "../components/AboutSection";
import * as siIcons from "react-icons/si";

function AboutPage() {
  const iconStyle = {
    margin: "5px",
  };

  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <AboutSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <br />
        <div className="icons">
          <div className="row">
            <div className="col-sm-12">
              <span className="icon-holder">
                <siIcons.SiHtml5 className="icon html" />
              </span>
              <span className="icon-holder">
                <siIcons.SiCss3 className="icon css" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiSass className="icon scss" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiBootstrap className="icon boot" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiJavascript className="icon js" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiTypescript className="icon ts" style={iconStyle} />
              </span>

              <span className="icon-holder">
                <siIcons.SiReact className="icon react" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiMongodb className="icon mdb" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiMysql className="icon sql" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiNodeDotJs className="icon node" style={iconStyle} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
