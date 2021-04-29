import React from "react";
import "./Projects.css"
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

const Projects = () => {
    const softwares = {
        "Project One": {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
            TechKnown: "Python, Java, Javascript, Node.js",
            link: "https://google.com/",
            open: ""
        },
        "Project Two": {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
            TechKnown: "Python, Javascript, Node.js",
            link: "https://google.com/",
            open: ""
        },
        "Project Three": {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
            TechKnown: "Python, Java, Javascript, Node.js, SQL",
            link: "https://google.com/",
            open: ""
        },
        "Project Four": {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
            TechKnown: "Python, Java, Javascript, Node.js, SQL",
            link: "https://google.com/",
            open: ""
        },
        "Project Five": {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
            TechKnown: "Python, Java, Javascript, Node.js, SQL",
            link: "https://google.com/",
            open: ""
        },
        "Project Six": {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
            TechKnown: "Python, Java, Javascript, Node.js, SQL",
            link: "https://google.com/",
            open: ""
        }
    }

    return ( 
        <div id="projects">
            <div className="sectionHeader">
                <span className="sectiontitle">/ projects<div className="divideLine"></div></span>
            </div>
            
            <div className="projectList">
                <ul className="projGrid">
                    {Object.keys(softwares).map((key, i) => (
                       <li className="projCard">
                           <div className="projHead">
                                <div className="folderIcon"><FolderOpenRoundedIcon style={{fontSize:35, color: "#64ffda"}}></FolderOpenRoundedIcon></div>
                                <span className="external-links">
                                    <a href="/" className="github-icon">
                                        <GitHubIcon style={{fontSize:20, color:"#ccd6f6"}}></GitHubIcon>
                                    </a>
                                    {softwares[key]["open"] && (
                                        <a href="/" className="open-icon">
                                            <OpenInBrowserIcon style={{fontSize:25,color:"#ccd6f6"}}></OpenInBrowserIcon>
                                        </a>
                                    )}
                                </span>
                           </div>
                           <div className="cardTitle">{key}</div>
                           <div className="cardDesc">{softwares[key]["desc"]}</div>
                           <div className="cardTech">{softwares[key]["TechKnown"]}</div>
                       </li> 
                    ))}
                </ul>
            </div>
        </div>
     );
}


// class Projects extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             expanded: true,
//             activeKey: '1'
//         };
//         this.handleSelect = this.handleSelect.bind(this);
//     }
//     handleSelect(eventKey) {
//         this.setState({
//             activeKey:eventKey
//         });
//     }
//     render() {
//         const softwares = {
//             "Project One": {
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
//                 TechKnown: "Python, Java, Javascript, Node.js",
//                 link: "https://google.com/",
//                 open: ""
//             },
//             "Project Two": {
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
//                 TechKnown: "Python, Javascript, Node.js",
//                 link: "https://google.com/",
//                 open: ""
//             },
//             "Project Three": {
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
//                 TechKnown: "Python, Java, Javascript, Node.js, SQL",
//                 link: "https://google.com/",
//                 open: ""
//             },
//             "Project Four": {
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
//                 TechKnown: "Python, Java, Javascript, Node.js, SQL",
//                 link: "https://google.com/",
//                 open: ""
//             },
//             "Project Five": {
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
//                 TechKnown: "Python, Java, Javascript, Node.js, SQL",
//                 link: "https://google.com/",
//                 open: ""
//             },
//             "Project Six": {
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat leo quis ex posuere, id.",
//                 TechKnown: "Python, Java, Javascript, Node.js, SQL",
//                 link: "https://google.com/",
//                 open: "l"
//             }
//         };

//         return (
//             <div id="projects">
//             <div className="sectionHeader">
//                 <span className="sectiontitle">/ projects<div className="divideLine"></div></span>
//             </div>
            
//             <div className="projectList">
//                 <ul className="projGrid">
//                     {Object.keys(softwares).map((key, i) => (
//                        <li className="projCard">
//                            <div className="projHead">
//                                 <div className="folderIcon"><FolderOpenRoundedIcon style={{fontSize:35, color: "#64ffda"}}></FolderOpenRoundedIcon></div>
//                                 <span className="external-links">
//                                     <a href="/" className="github-icon">
//                                         <GitHubIcon style={{fontSize:20, color:"#ccd6f6"}}></GitHubIcon>
//                                     </a>
//                                     {softwares[key]["open"] && (
//                                         <a href="/" className="open-icon">
//                                             <OpenInBrowserIcon style={{fontSize:25,color:"#ccd6f6"}}></OpenInBrowserIcon>
//                                         </a>
//                                     )}
//                                 </span>
//                            </div>
//                            <div className="cardTitle">{key}</div>
//                            <div className="cardDesc">{softwares[key]["desc"]}</div>
//                            <div className="cardTech">{softwares[key]["TechKnown"]}</div>
//                        </li> 
//                     ))}
//                 </ul>
//             </div>
//         </div>
//         );
//     }
// }


  

 
export default Projects;