import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Php", xp: 4 },
      { id: 2, value: "Javascript", xp: 2 },
      { id: 3, value: "Css", xp: 4 },
      { id: 4, value: "Html 5", xp: 5 },
      { id: 5, value: "Java", xp: 1 },
    ],
    frameworks: [
      { id: 1, value: "Symfony 5 +", xp: 4 },
      { id: 2, value: "Angular", xp: 1 },
      { id: 3, value: "Css", xp: 4 },
      { id: 4, value: "React", xp: 1 },
      { id: 5, value: "Boostrap", xp: 4 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
		languages = {languages}
		className="languagesDisplay"
		title ="Languages"
		/>
        <ProgressBar
			languages = {frameworks}
			className="frameworksDisplay"
			title ="Frameworks & bibliothèques" />
      </div>
    );
  }
}
