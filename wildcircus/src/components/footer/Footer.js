import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footerAccueil">
        <div className="column1Footer">
          <h1 style={{ color: 'pink' }}>Cirque du Monstrus</h1>
          <Link to="/signin" className="urlFooter">
            Inscription
          </Link>
          <Link to="/signup" className="urlFooter">
            Connexion
          </Link>
        </div>
        <div className="column2Footer">
          <h1 style={{ color: 'pink' }}>About</h1>
          <Link to="/" className="urlFooter">
            Politique de confidentialité
          </Link>
          <Link to="/contact" className="urlFooter">
            Nous contacter
          </Link>
          <Link to="/" className="urlFooter">
            Mentions légales
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
