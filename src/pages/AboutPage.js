import React from 'react'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} width={'80%'} />
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
            </div>

            {/* <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection  title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                
            </div> */}

        </div>
    )
}

export default AboutPage;
