import React, { Component } from "react";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Php", xp: 3 },
      { id: 2, value: "Javascript", xp: 1 },
      { id: 3, value: "Css", xp: 4 },
      { id: 4, value: "Html 5", xp: 4 },
      { id: 5, value: "Java", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "Symfony 5 +", xp: 3.5 },
      { id: 2, value: "Angular", xp: 0.6 },
      { id: 3, value: "Css", xp: 4 },
      { id: 4, value: "React", xp: 0.4 },
      { id: 5, value: "Boostrap", xp: 4 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return <div className="languagesFrameworks">

	</div>;
  }
}
