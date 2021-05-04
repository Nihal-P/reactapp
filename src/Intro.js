import './Intro.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import Typist from 'react-typist';
import FadeInSection from "./FadeInSection"

const Intro = () => {
    return ( 
        <div id="intro">
            <div className="canvas"></div>
            <Typist avgTypingDelay={120} >
            <h2 className="nameLine">Hi, <span className="name">Nihal</span> here.</h2>
            </Typist>
            
            <h4 className="stuff">I create stuff sometimes.</h4>
            <div className="intropar">I am a first year student at Wilfrid Laurier University. 
            I have profound interest in Computer Science with music on the side. 
            Over the period of time I have developed niche skills of using google and stack-overflow which helped me <span className="strikedout">survive</span> grow.
            </div>
            <FadeInSection>
                <a href="/" className="emailink"><EmailRoundedIcon style={{fontSize:25, color:"#64ffda"}}></EmailRoundedIcon><span className="contact-text">&#8205; Say hello</span></a>
            </FadeInSection>
        </div>
     );
}

export default Intro;