import React from "react";
import Title from "../components/Title";
import AboutSection from "../components/AboutSection";
import * as siIcons from "react-icons/si";

function AboutPage() {
  const iconStyle = {
    margin: "5px",
    fontSize: "55px",
  };
  const devStyle = {
    margin: "5px",
    top: "200px",
    fontSize: "60px",
  };

  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <AboutSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        {/* <br /> */}
        <div className="icons">
          <div className="row">
            <div className="col-sm-12">
              <span className="icon-holder">
                <siIcons.SiHtml5 className="icon html" style={iconStyle} />
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
                <span className="icon-holder">
                  <siIcons.SiMaterialUi
                    className="icon mui"
                    style={iconStyle}
                  />
                </span>
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
                <i className="devicon-express-original ex" style={devStyle}></i>
              </span>
              <span className="icon-holder">
                <siIcons.SiMysql className="icon sql" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiNodeDotJs className="icon node" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiJquery className="icon jquery" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiGithub className="icon gh" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiVisualstudio
                  className="icon vs"
                  style={iconStyle}
                />
              </span>
              <span className="icon-holder">
                <siIcons.SiAdobecreativecloud
                  className="icon ac"
                  style={iconStyle}
                />
              </span>
              <span className="icon-holder">
                <siIcons.SiAdobeillustrator
                  className="icon ai"
                  style={iconStyle}
                />
              </span>
              <span className="icon-holder">
                <siIcons.SiAdobeaftereffects
                  className="icon ae"
                  style={iconStyle}
                />
              </span>
              <span className="icon-holder">
                <siIcons.SiAdobexd className="icon xd" style={iconStyle} />
              </span>
              <span className="icon-holder">
                <siIcons.SiAdobephotoshop
                  className="icon ps"
                  style={iconStyle}
                />
              </span>
              <span className="icon-holder">
                <siIcons.SiAdobelightroomclassic
                  className="icon lr"
                  style={iconStyle}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
