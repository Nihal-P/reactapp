import './Sidebar.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Sidebar = () => {
    return ( 
        <div id="sidenav">
            <a href="/" className="sidelinks">/home</a>
            <a href="/" className="sidelinks">/about</a>
            <a href="/" className="sidelinks">/experience</a>
            <a href="/" className="sidelinks">/software-creations</a>

            <div className="sidebarlogos">
                <a href="/"><EmailRoundedIcon style={{fontSize:22}} className="sidelogo"></EmailRoundedIcon></a>
                <a href="/"><GitHubIcon style={{fontSize:20}} className="sidelogo"></GitHubIcon></a>
                <a href="/"><LinkedInIcon style={{fontSize:22}} className="sidelogo"></LinkedInIcon></a>
            </div>    
        </div>
     );
}
 
export default Sidebar;
