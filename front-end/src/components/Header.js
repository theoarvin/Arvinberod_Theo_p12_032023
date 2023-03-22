import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="logo" className="img--logo" />
        <ul>
          <li>
            <Link className="link" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Profil
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Réglages
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
