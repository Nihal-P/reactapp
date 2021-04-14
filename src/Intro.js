import './Intro.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import Typist from 'react-typist';

const Intro = () => {
    return ( 
        <div id="intro">
            <Typist avgTypingDelay={120} cursor={{ show: false,hideWhenDone: true }}>
            <h2 className="nameLine">Hi, <span className="name">Nihal Patel</span> here.</h2>
            </Typist>
           
            <h4 className="stuff">I create stuff sometimes.</h4>
            <p className="intropar">I am a first year student at Wilfrid Laurier University. 
            I have profound interest in Computer Science with music on the side. 
            Over the period of time I have developed niche skills of using google and stack-overflow which helped me <span className="strikedout">survive</span> grow.
            </p>
            <a href="/" className="emailink"><EmailRoundedIcon style={{fontSize:25}}></EmailRoundedIcon><span className="contact-text">&#8205; Say hello</span></a>
        </div>
     );
}

export default Intro;