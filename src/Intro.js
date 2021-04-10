import './Intro.css';
const Intro = () => {
    return ( 
        <div id="intro">
            <h2 className="nameLine">Hi, <span className="name">Nihal Patel</span> here.</h2>
            <h4 className="stuff">I create stuff sometimes.</h4>
            <p className="intropar">I am a first year student at Wilfrid Laurier University. 
            I have profound interest in Computer Science with music on the side. 
            Over the period of time I have developed niche skills of using google and stack-overflow which helped me <span className="strikedout">survive</span> grow.
            </p>
            <a href="/" className="emailink">Say hello</a>
        </div>
     );
}
 
export default Intro;