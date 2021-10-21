import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";

/* 
  Componente del header
*/
const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <p>Poner aquí el logo</p>
      </Link>

    </header>
  );
};

export default Header;
