import React from "react";
import Jobs from "./Jobs";
import "./Experience.css"
import FadeInSection from "./FadeInSection"

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="experience">
        <FadeInSection>
        <div className="sectionHeader">
            <span className="sectiontitle">/ experience<div className="divideLine"></div></span>
        </div>
        <Jobs></Jobs>
        <div className="spacemaker"></div>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
