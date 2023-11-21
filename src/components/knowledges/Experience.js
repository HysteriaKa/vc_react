import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Développeur Web</h4>
        <h5>Chetaud & Cie</h5>
        <p className="bold">2020 à aujourd'hui</p>
        <p>Développement d'applications métier et sites web sous Symfony</p>
      </div>
      <div className="exp-2">
        <h4>Stage</h4>
        <h5>Onet Marseille</h5>
        <p className="bold">2020 (3 mois)</p>
        <p>Développement d'une application métier sous Angular</p>
      </div>
      <div className="exp-3">
        <h4>Formation PHP Symfony</h4>
        <h5>Openclassrooms</h5>
        <p className="bold">2020-2022</p>
        <p>Diplôme de titre 6 obtenu</p>
      </div>
	  <br />
      <div className="exp-4">
        <h4>Formation développeur Web</h4>
        <h5>AFPA</h5>
        <p className="bold">2019-2020</p>
        <p>Diplôme de titre 5 obtenu</p>
      </div>

    </div>
  );
};

export default Experience;
