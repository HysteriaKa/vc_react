import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/id-Ka.jpg" alt="profil-pic" />
          <h3>Karine Nerhot</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/knowledges"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portefolio"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
		  <li>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
	  <div className="socialNetwork">
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/karine-nerhot-632a58110/" target="blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
			</li>
			<li>
				<a href="https://github.com/HysteriaKa" target="blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
			</li>
		</ul>
		<div className="signature">
			<p>Karine - 2023</p>
		</div>
	  </div>
    </div>
  );
};

export default Navigation;
