import React from "react";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import * as siIcons from "react-icons/si";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        {/* <div>
                <siIcons.SiHtml5 className="icon ln" style={{ fontSize: "100px", color:"#e34c25" }}/>
                <SkillsSection skill={'HTML'}/>
            </div> */}
        {/* <div>
                <SkillsSection skill={'CSS'}  width={'80%'} />
                <SkillsSection skill={'Javascript'} width={'60%'} />
                <SkillsSection skill={'React Js'} width={'70%'} />
                <SkillsSection skill={'Node Js'} width={'60%'} />
                <SkillsSection skill={'Adobe Illustrator'} width={'80%'} />
                <SkillsSection skill={'Adobe After Effects'} width={'80%'} />
                <SkillsSection skill={'Adobe Photoshop'} width={'80%'} />
                <SkillsSection skill={'Adobe Lightroom'} width={'80%'} />
                <SkillsSection skill={'Adobe Premier'} width={'80%'} />
                <SkillsSection skill={'MongoDb'} width={'80%'} />
                <SkillsSection skill={'Express'} width={'80%'} />
                <SkillsSection skill={'Web Design'} width={'85%'} />
                <SkillsSection skill={'UI/Ux Design'}  width={'85%'} />  
         <div className="icons"> 

                <a href="#" className="icons-holder">
                <span className="icons-holder">    
                        <siIcons.SiHtml5 className="icon ln" style={{ fontSize: "100px", color:"#e34c25" }}/>
                    <siIcons.SiCss3 className="icon ln" style={{ fontSize: "100px", color:"1572b6" }}/>
                    <siIcons.SiJavascript className="icon ln" style={{ fontSize: "100px" }}/>
                    <siIcons.SiReact className="icon ln" style={{ fontSize: "100px" }}/>
                    <siIcons.SiMongodb className="icon ln" style={{ fontSize: "100px" }}/>
                    <siIcons.SiMysql className="icon ln" style={{ fontSize: "100px" }} />
                    <siIcons.SiNodeDotJs className="icon ln" style={{ fontSize: "100px" }}/>
                    <siIcons.SiAdobeillustrator className="icon ln" style={{ fontSize: "100px", color:"purple" }}/>
                    <siIcons.SiAdobelightroomclassic className="icon ln" style={{ fontSize: "100px" }}/>
                    <siIcons.SiAdobephotoshop className="icon ln" style={{ fontSize: "100px" }}/>
                    <siIcons.SiAdobeaftereffects className="icon ln" style={{ fontSize: "100px" }}/>
                    <siIcons.SiAdobepremiere className="icon ln" style={{ fontSize: "100px" }}/>
                    <siIcons.SiMysql className="icon ln" style={{ fontSize: "100px" }}/>
                    </span>
                    </a>
                    </div>
            </div> */}

              <div className="icons">
                
            <a href="#" target="_blank" className="icon-holder">
              <siIcons.SiHtml5 className="icon html" />
            </a>
            <Link to="#" target="_blank" className="icon-holder">
              <siIcons.SiCss3 className="icon css" />
            </Link>
            <Link to="#" target="_blank" className="icon-holder">
              <siIcons.SiSass className="icon scss" />
            </Link>
            <Link to="#" target="_blank" className="icon-holder">
              <siIcons.SiBootstrap className="icon boot" />
            </Link>
            <Link to="#" target="_blank" className="icon-holder">
              <siIcons.SiJavascript className="icon js" />
            </Link>
            <Link to="#" target="_blank" className="icon-holder">
              <siIcons.SiTypescript className="icon ts" />
            </Link>
                      
          <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiReact className="icon react" />
          </Link>
          <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiMongodb className="icon mdb" />
          </Link>
          <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiMysql className="icon sql" />
          </Link>
          <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiNodeDotJs className="icon node" />
          </Link>
          {/* <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiAdobeillustrator className="icon ap" />
          </Link>
          <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiAdobelightroomclassic className="icon gh" />
          </Link>
          <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiAdobephotoshop className="icon gh" />
          </Link>
          <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiAdobeaftereffects className="icon gh" />
          </Link>
          <Link to="#" target="_blank" className="icon-holder">
            <siIcons.SiAdobepremiere className="icon gh" />
          </Link> */}
        </div>
      </div>

      {/* <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection  title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                
            </div>  */}
    </div>
  );
}

export default AboutPage;
