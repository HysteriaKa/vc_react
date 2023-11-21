import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"> </div>
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li className="fas fa-map-marker-alt">
                <span>Sanary-sur-mer</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0689918454">
                  <span className="clickInput"
				   onClick={()=>{ alert('téléphone copié !'); }}>
					06.89.91.84.54</span>
                </CopyToClipboard>
              </li>
			  <li>
                <i className="fa-regular fa-envelope"></i>
                <CopyToClipboard text="mail@email.fr">
                  <span className="clickInput"
				   onClick={()=>{ alert('Email copié !'); }}>
					mail@email.fr</span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
		  <div className="socialNetwork">
			<ul>
			<a href="https://www.linkedin.com/in/karine-nerhot-632a58110/" target="blank" rel="noopener noreferrer">
			<h4>LinkedIn</h4>
			<i className="fa-brands fa-linkedin"></i></a>
			<a href="https://github.com/HysteriaKa" target="blank" rel="noopener noreferrer">
				<h4>Github</h4>
				<i className="fa-brands fa-github"></i></a>
			</ul>
		  </div>
      </div>
    </div>
  );
};

export default Contact;
