import './About.css'
import aboutme from "./aboutme.jpg";
import FadeInSection from "./FadeInSection";

const About = () => {

    return ( 
        <div id="about">
            <FadeInSection>
            <div className="sectionHeader">
                <span className="sectiontitle">/ about me<div className="divideLine"></div></span>
            </div>
            <div className="abtContent">
                <div className="abtdsc">
                    <p>I am currently studying Computer Science at Wilfrid Laurier University. lipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.doloribus cupiditate cumque dolore inventore.</p>
                    <p>I'm into machine learning, human-computer interactions and frontend development. I also like my fair share of visual arts and creativity. In my free time, I listen to music and play video games.</p>
                    <p>Here are some technologies I have been working with:</p>
                    <ul className="known-tech">
                        <li>Javascript ES6+</li>
                        <li>Python</li>
                        <li>React.js</li>
                        <li>Java</li>
                        <li>Node.js</li>
                        <li>HTML & CSS</li>
                    </ul>
                </div>
                <div className="abtimg">
                    <img src={aboutme} className="me" alt="clothes on chair"></img>
                </div>
            </div>
            </FadeInSection>
        </div>
     );
}
 
export default About;