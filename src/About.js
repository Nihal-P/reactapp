import './About.css'
import aboutme from "./aboutme.jpg";

const About = () => {

    return ( 
        <div id="about">
            <div className="sectionHeader">
                <span className="sectiontitle">/ about me<div className="divideLine"></div></span>
            </div>
            <div className="abtContent">
                <div className="abtdsc">
                    <p>I am currently studying Computer Science at Wilfrid Laurier University. I am also currently on a one year internship at Wattpad as an Associate Web Engineer.</p>
                    <p>I'm into machine learning, human-computer interactions and frontend development. I also like my fair share of visual arts and creativity. In my free time, I eat guava fruit and play video games.</p>
                    <p>Here are some technologies I have been working with:</p>
                </div>
                <div className="abtimg">
                    <img src={aboutme} className="me"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;